import format from "date-fns/format"
import parseISO from "date-fns/esm/fp/parseISO/index.js"
import { RiverAxis } from "api/riverData"
import Annotation from "chartjs-plugin-annotation"
import { colors } from "assets/helpers/colors"
import { _DeepPartialObject } from "chart.js/types/utils"
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
const up = (ctx: ScriptableLineSegmentContext, value: string) =>
  ctx.p0.parsed.y > 250 ? value : undefined

const med = (ctx: ScriptableLineSegmentContext, value: string) =>
  ctx.p0.parsed.y > 170 && ctx.p0.parsed.y < 250 ? value : undefined

const down = (ctx: ScriptableLineSegmentContext, value: string) =>
  ctx.p0.parsed.y < 170 ? value : undefined

// specifies scales for object
const scales = (
  smallScreen: boolean,
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
      max: 300,
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
export const chartDataAndOptions: (riverData: RiverAxis[]) => {
  options: ChartOptions<"line">
  data: ChartData<"line">
} = (riverData) => ({
  options: options,
  data: {
    labels: riverData.map((item) => item.dateTime),
    datasets: [
      {
        label: "Discharge Rate",
        data: riverData.map((item, i) => (i < 200 ? item.value + 225 : item.value + 125)),
        borderWidth: 2,
        fill: true,
        tension: 0,
        pointRadius: 0,
        segment: {
          backgroundColor: (ctx) =>
            up(ctx, colors.chartGood) || med(ctx, colors.chartFair) || down(ctx, colors.chartBad),
          borderColor: (ctx) =>
            up(ctx, colors.chartGoodBorder) ||
            med(ctx, colors.chartFairBorder) ||
            down(ctx, colors.chartBadBorder),
        },
      },
    ],
  },
})

const options: ChartOptions<"line"> = {
  responsive: true,
  aspectRatio: 16 / 9,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    annotation: {
      annotations: {
        line1: {
          type: "line",
          borderDash: [10],
          yMin: 250,
          yMax: 250,
          borderColor: colors.chartGoodBorder,
          borderWidth: 2,
          label: {
            borderWidth: 2,
            borderColor: colors.chartGoodBorder,
            content: "Good: 250",
            display: window.innerWidth > 768,
            position: "start",
            backgroundColor: "hsl(100deg 100% 100% / 100%)",
            color: "black ",
          },
        },
        line2: {
          type: "line",
          borderDash: [10],
          yMin: 170,
          yMax: 170,
          borderColor: colors.chartFair,
          borderWidth: 2,
          label: {
            borderWidth: 2,
            borderColor: colors.chartFair,
            content: "Fair: 170",
            display: window.innerWidth > 768,
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
          console.log(context.label)
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
  },
  scales: scales(window.innerWidth > 768 ? false : true),
  onResize(chart, size) {
    const showLabel = size.width > 768 ? false : true
    chart.options.scales = scales(showLabel)
    chart.options.plugins = {
      annotation: {
        annotations: {
          line1: {
            type: "line",
            borderDash: [10],
            yMin: 250,
            yMax: 250,
            borderColor: colors.chartGoodBorder,
            borderWidth: 2,
            label: {
              borderWidth: 2,
              borderColor: colors.chartGoodBorder,
              content: "Good: 250",
              display: !showLabel,
              position: "start",
              backgroundColor: "hsl(100deg 100% 100% / 100%)",
              color: "black ",
            },
          },
          line2: {
            type: "line",
            borderDash: [10],
            yMin: 170,
            yMax: 170,
            borderColor: colors.chartFairBorder,
            borderWidth: 2,
            label: {
              borderWidth: 2,
              borderColor: colors.chartFairBorder,
              content: "Fair: 170",
              display: !showLabel,
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
            console.log(context.label)
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
    }
  },
}
