import React, { useRef, useEffect, useState } from "react"
import "./App.css"
import deckers from "./assets/river-information/locations/south-platte/deckers/deckersRiverInfo"
import { riverAPIcall } from "./helpers/apiCalls"
import Logo from "../src/assets/images/logo-sm-1.png"
import ForkPhoto from "../src/assets/images/Hole17.jpg"
import Headshot from "../src/assets/images/headshot.jpg"
import * as d3 from "d3"
import dummyData from "./assets/aapl.json"
import format from "date-fns/format"
import parseISO from "date-fns/esm/fp/parseISO/index.js"
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
import { Line } from "react-chartjs-2"
import { index, lab } from "d3"

function App() {
  return (
    <div className="App">
      <header className="flex  items-center just px-10 shadow-md z-50 sticky top-0 bg-white">
        <a href="#" className=" m-auto w-28 md:m-0">
          <img className="py-5" src={Logo} alt="logos "></img>
        </a>
        <nav className="relative container py-6 ml-auto basis-0 hidden font-medium md:block">
          <ul className="flex items-center justify-between space-x-20">
            <li>
              <a
                href="#"
                className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
              >
                Fishing Report
              </a>
            </li>
            <li>
              <a
                href="#"
                className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-screen-md m-auto px-5 lg:max-w-none xl:max-w-7xl">
        <h1 className=" my-10 relative font-semibold text-3xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-11 after:left-1/2 after:translate-x-[-50%]">
          River Information
        </h1>
        <section className="   lg:grid lg:grid-cols-2 lg:gap-7">
          <div>
            <img src={ForkPhoto} className="m-auto"></img>
          </div>
          <div>
            <h3 className=" mt-8 mb-6 text-left font-semibold text-xl lg:mt-0">
              Roaring Fork River - Glenwood Springs, CO
            </h3>
            <div>
              <div className="m-auto grid gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-2">
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Flow
                  </span>
                  <span className=" text-xl font-bold whitespace-nowrap ">271 cfs</span>
                </div>
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Wind
                  </span>
                  <span className=" text-xl font-bold whitespace-nowrap">7 mph</span>
                </div>
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Temperature
                  </span>
                  <span className=" text-xl font-bold whitespace-nowrap">72 °F</span>
                </div>
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Low/High
                  </span>
                  <span className=" text-xl font-bold whitespace-nowrap">52/74</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className=" my-10 relative font-semibold text-2xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-9 after:left-1/2 after:translate-x-[-50%]">
            Fishing Report
          </h2>
          <div>
            <div className="flex gap-5">
              <img
                className=" w-16 h-16 object-cover rounded-full border-secondaryColor border-2"
                src={Headshot}
                alt="headshot"
              />
              <div className="flex flex-col">
                <span className=" text-left font-bold">Capt. Caleb McDaniel</span>
                <span className=" text-left font-medium text-sm text-gray-600">
                  Iron Bridge Fishing Manager
                </span>
              </div>
            </div>
            <p className="text-left my-4 py-2 border-y-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta. Officia, hic
              eius ducimus facilis, illum consequuntur exercitationem voluptates ipsa, accusantium
              nemo accusamus similique alias dolores possimus dolorum. Libero totam magnam
              praesentium similique rem repellat unde amet illo. Aliquam, quidem!
            </p>
            <div className="flex flex-col text-start">
              <b className="text-left">Fly Recommendations</b>
              <ul className="ml-5 my-2">
                <li className="list-disc my-1 text-md font-normal">
                  Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
                </li>
                <li className="list-disc my-1 text-md font-normal">
                  Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
                </li>
                <li className="list-disc my-1 text-md font-normal">
                  Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
                </li>
                <li className="list-disc my-1 text-md font-normal">
                  Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
                </li>
              </ul>
            </div>
            <Chart />
          </div>
        </section>
      </main>
    </div>
  )
}

interface RiverAxis {
  dateTime: string
  value: number
}

export function Chart() {
  const [chartData, setChartData] = useState<{
    options: ChartOptions<"line">
    data: ChartData<"line">
  } | null>()
  console.log(format(parseISO("2022-09-29T15:45:00.000-06:00"), "HH.mm a"))

  useEffect(() => {
    const colors = ["red", "blue", "yellow", "green"]
    const fetchRiverData = async () => {
      const riverData = await riverAPIcall("09085000")
      console.log(riverData)
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
                color: (c): any => {
                  if (c.tick.major) {
                    return "hsl(196deg 46% 48%)"
                  }
                },
                font: (c): any => {
                  if (c.tick.major) {
                    return { size: 12, weight: "bold" }
                  } else {
                    return { size: 12 }
                  }
                },
                // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                callback: function (value: any, index, values): any {
                  const tick = this.getLabelForValue(value)
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

  return chartData ? (
    <div>
      <Line options={chartData.options} data={chartData.data} />
    </div>
  ) : (
    <></>
  )
}

export default App
