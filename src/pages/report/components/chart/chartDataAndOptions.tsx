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

// specifies scales for object
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
  fairConditions: number,
  goodConditions: number,
) => {
  options: ChartOptions<"line">
  data: ChartData<"line">
} = (riverData, fairConditions, goodConditions) => {
  const highestValue: number = riverData.reduce((acc, cur) => Math.max(acc, cur.value), 0)
  return {
    options: {
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
              yMin: goodConditions,
              yMax: goodConditions,
              borderColor: colors.chartGoodBorder,
              borderWidth: 2,
              label: {
                borderWidth: 2,
                borderColor: colors.chartGoodBorder,
                content: `Good: ${goodConditions}`,
                display: window.innerWidth > 768,
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
      scales: scales(window.innerWidth > 768 ? false : true, highestValue, goodConditions),
      onResize(chart, size) {
        const showLabel = size.width > 768 ? false : true
        chart.options.scales = scales(showLabel, highestValue, goodConditions)
        chart.options.plugins = {
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
                  display: !showLabel,
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
                borderColor: colors.chartFairBorder,
                borderWidth: 2,
                label: {
                  borderWidth: 2,
                  borderColor: colors.chartFairBorder,
                  content: `Fair: ${fairConditions}`,
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
              up(ctx, goodConditions, colors.chartGood) ||
              med(ctx, fairConditions, goodConditions, colors.chartFair) ||
              down(ctx, fairConditions, colors.chartBad),
            borderColor: (ctx) =>
              up(ctx, goodConditions, colors.chartGoodBorder) ||
              med(ctx, fairConditions, goodConditions, colors.chartFairBorder) ||
              down(ctx, fairConditions, colors.chartBadBorder),
          },
        },
      ],
    },
  }
}
