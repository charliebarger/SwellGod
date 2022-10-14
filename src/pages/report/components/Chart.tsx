import React, { useState, useEffect } from "react"
import format from "date-fns/format"
import parseISO from "date-fns/esm/fp/parseISO/index.js"
import { riverAPIcall } from "api/riverData"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
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
)

export function Chart() {
  const [chartData, setChartData] = useState<{
    options: ChartOptions<"line">
    data: ChartData<"line">
  } | null>(null)

  useEffect(() => {
    const fetchRiverData = async () => {
      const riverData = await riverAPIcall("09085000")
      // setting the options and data for the line chart
      setChartData({
        options: {
          responsive: true,
          aspectRatio: 16 / 9,
          interaction: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: "Historic River Flow",
              font: {
                size: 16,
              },
              padding: {
                top: 10,
                bottom: 20,
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
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
                font: {
                  size: 14,
                  weight: "500",
                },
              },
              ticks: {
                maxRotation: 0,
                major: {
                  enabled: true,
                },
                color: (c) => {
                  if (c.tick.major) {
                    return "hsl(196deg 46% 48%)"
                  }
                },
                font: (c) => {
                  if (c.tick.major) {
                    return { size: 12, weight: "bold" }
                  } else {
                    return { size: 12 }
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
              ticks: {
                font: {
                  size: 12,
                },
                color: "black",
              },
              title: {
                display: true,
                text: "Discharge Rate (CFS)",
                font: {
                  size: 14,
                  weight: "500",
                },
              },
            },
          },
        },
        data: {
          labels: riverData.map((item) => item.dateTime),
          datasets: [
            {
              label: "Discharge Rate",
              data: riverData.map((item) => item.value),
              borderColor: "hsl(196deg 46% 48%)",
              fill: true,
              backgroundColor: "hsl(196deg 46% 48% / 30%)",
              pointRadius: 0,
            },
          ],
        },
      })
    }
    fetchRiverData()
  }, [])

  // need to add loader for loading state
  return chartData ? (
    <div className=" max-w-5xl m-auto py-10">
      <Line options={chartData.options} data={chartData.data} />
    </div>
  ) : (
    <></>
  )
}

export default Chart
