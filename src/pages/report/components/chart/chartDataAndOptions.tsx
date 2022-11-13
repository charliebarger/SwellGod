import format from "date-fns/format"
import parseISO from "date-fns/esm/fp/parseISO/index.js"
import { RiverAxis } from "api/riverData"
import Annotation from "chartjs-plugin-annotation"
import { colors } from "assets/helpers/colors"
import { _DeepPartialObject } from "chart.js/types/utils"
import { FlowRatings, Conditions } from "./Chart"
import {
  CartesianScaleTypeRegistry,
  ScaleOptionsByType,
  ChartOptions,
  ChartData,
  ScriptableLineSegmentContext,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PluginOptionsByType,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Annotation,
)
// specifies colors (in this case of the fill) based on height of y axis
const up = (ctx: ScriptableLineSegmentContext, goodConditions: number, value: string) =>
  ctx.p0.parsed.y > goodConditions ? value : undefined

const med = (
  ctx: ScriptableLineSegmentContext,
  fairConditions: number,
  goodConditions: number,
  value: string,
) => (ctx.p0.parsed.y > fairConditions && ctx.p0.parsed.y < goodConditions ? value : undefined)

const down = (ctx: ScriptableLineSegmentContext, fairConditions: number, value: string) =>
  ctx.p0.parsed.y < fairConditions ? value : undefined

const plugins = (
  goodConditions: number,
  fairConditions: number,
  displayStatus: boolean,
): _DeepPartialObject<PluginOptionsByType<"line">> => ({
  annotation: {
    annotations: {
      line1: {
        type: "line",
        borderDash: [10],
        yMin: goodConditions,
        yMax: goodConditions,
        borderColor: colors.chartGoodBorder,
        borderWidth: 2,
        label: {
          borderWidth: 2,
          borderColor: colors.chartGoodBorder,
          content: `Good: ${goodConditions}`,
          display: displayStatus,
          position: "start",
          backgroundColor: "hsl(100deg 100% 100% / 100%)",
          color: "black ",
        },
      },
      line2: {
        type: "line",
        borderDash: [10],
        yMin: fairConditions,
        yMax: fairConditions,
        borderColor: colors.chartFair,
        borderWidth: 2,
        label: {
          borderWidth: 2,
          borderColor: colors.chartFair,
          content: `Fair: ${fairConditions}`,
          display: displayStatus,
          position: "start",
          backgroundColor: "hsl(100deg 100% 100% / 100%)",
          color: "black ",
        },
      },
    },
  },
  title: {
    display: true,
    text: "Historic River Flow",
    color: "black",
    font: {
      size: 12,
      weight: "bolder",
    },
    padding: {
      bottom: 10,
    },
  },
  legend: { display: false },
  tooltip: {
    callbacks: {
      label: function (context) {
        let label = context.dataset.label || ""
        if (label) {
          label += ": "
        }
        if (context.parsed.y !== null) {
          label += context.parsed.y + " " + "cfs"
        }
        return label
      },
      title: function (context) {
        return format(parseISO(context[0].label), "LLL d, yyyy, h:m a")
      },
    },
  },
})

const scales = (
  smallScreen: boolean,
  highestValue: number,
  goodConditions: number,
): _DeepPartialObject<{
  [key: string]: ScaleOptionsByType<keyof CartesianScaleTypeRegistry>
}> => {
  const scaleValue = {
    majorTickColor: smallScreen ? "black" : colors.primaryColor,
    majorTickFontSize: smallScreen ? 10 : 12,
    majorTickFontWeight: smallScreen ? "medium" : "bold",
  }
  return {
    x: {
      title: {
        display: true,
        text: "Date",
        font: {
          size: 12,
          weight: "500",
        },
      },
      ticks: {
        stepSize: 0,
        maxRotation: 0,
        major: {
          enabled: true,
        },
        color: (c) => {
          if (c.tick.major) {
            return smallScreen ? "black" : colors.primaryColor
          }
        },
        font: (c) => {
          if (c.tick.major) {
            return { size: scaleValue.majorTickFontSize, weight: scaleValue.majorTickFontWeight }
          } else {
            return { size: scaleValue.majorTickFontSize }
          }
        },
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (value, index, values) {
          const tick = this.getLabelForValue(Number(value))
          const time = format(parseISO(tick), "HH.mm")
          if (time === "08.00" || time === "16.00" || time === "00.00") {
            if (time === "00.00") {
              values[index].major = true

              return format(parseISO(tick), "LLL d")
            } else {
              return format(parseISO(tick), "ha")
            }
          }
        },
      },
    },
    y: {
      max:
        Math.floor(
          ((goodConditions + 50 > highestValue ? goodConditions : highestValue) * 1.2) / 10,
        ) * 10,
      min: 0,
      ticks: {
        font: {
          size: 12,
        },
        color: "black",
      },
      title: {
        display: true,
        text: "Discharge Rate (cfs)",
        font: {
          size: 12,
          weight: "500",
        },
      },
    },
  }
}

// all of the data / options that chart JS needs
export const chartDataAndOptions: (
  riverData: RiverAxis[],
  conditions: FlowRatings,
) => {
  options: ChartOptions<"line">
  data: ChartData<"line">
} = (riverData, conditions) => {
  const highestValue: number = riverData.reduce((acc, cur) => Math.max(acc, cur.value), 0)
  const lessThanMedScreen = window.innerWidth > 768
  return {
    options: {
      responsive: true,
      aspectRatio: 16 / 9,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: plugins(
        conditions.goodConditions.min,
        conditions.fairConditions.min,
        lessThanMedScreen,
      ),
      scales: scales(!lessThanMedScreen, highestValue, conditions.goodConditions.min),
      onResize(chart) {
        const showLabel = window.innerWidth < 768
        chart.options.scales = scales(showLabel, highestValue, conditions.goodConditions.min)
        chart.options.plugins = plugins(
          conditions.goodConditions.min,
          conditions.fairConditions.min,
          !showLabel,
        )
      },
    },
    data: {
      labels: riverData.map((item) => item.dateTime),
      datasets: [
        {
          label: "Discharge Rate",
          data: riverData.map((item) => item.value),
          borderWidth: 2,
          fill: true,
          tension: 0,
          pointRadius: 0,
          segment: {
            backgroundColor: (ctx) =>
              up(ctx, conditions.goodConditions.min, colors.chartGood) ||
              med(
                ctx,
                conditions.fairConditions.min,
                conditions.goodConditions.min,
                colors.chartFair,
              ) ||
              down(ctx, conditions.fairConditions.min, colors.chartBad),
            borderColor: (ctx) =>
              up(ctx, conditions.goodConditions.min, colors.chartGoodBorder) ||
              med(
                ctx,
                conditions.fairConditions.min,
                conditions.goodConditions.min,
                colors.chartFairBorder,
              ) ||
              down(ctx, conditions.fairConditions.min, colors.chartBadBorder),
          },
        },
      ],
    },
  }
}
