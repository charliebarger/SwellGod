import { Line } from "react-chartjs-2"
import { SectionWrapper } from "components/SectionWrapper"
import Annotation from "chartjs-plugin-annotation"
import { ColorRing } from "react-loader-spinner"
import useChart from "./useChart"
import { colors } from "assets/helpers/colors"

import {
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
import { color } from "d3"

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

const LineChart = () => {
  const chartData = useChart()
  if (chartData.res !== false) {
    return (
      <>
        <Line options={chartData.res.options} data={chartData.res.data} />
        <div className="flex flex-wrap gap-4 md:ml-14">
          <figure className="flex items-center gap-2 ">
            <div className=" bg-chartGood h-4 w-8 border-2 border-chartGoodBorder " />
            <figcaption className=" font-medium text- text-sm">Good</figcaption>
          </figure>
          <figure className="flex items-center gap-2">
            <div className=" bg-chartFair h-4 w-8 border-2 border-chartFairBorder " />
            <figcaption className=" font-medium text-sm">Fair</figcaption>
          </figure>
          <figure className="flex items-center gap-2">
            <div className=" bg-chartBad h-4 w-8 border-2 border-chartBadBorder " />
            <figcaption className=" font-medium text-sm">Not Surfable</figcaption>
          </figure>
        </div>
      </>
    )
  } else if (chartData.error) {
    return (
      <div>
        <p className=" m-auto">Chart Data Not Available at This Time</p>
      </div>
    )
  } else {
    return (
      <div className="flex justify-center">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={[
            colors.chartBad,
            colors.chartBad,
            colors.chartFair,
            colors.chartGood,
            colors.chartGood,
          ]}
        />
      </div>
    )
  }
}

export function Chart() {
  // need to add loader for loading state
  return (
    <SectionWrapper>
      <div className=" max-w-5xl m-auto px-5">
        <LineChart />
      </div>
    </SectionWrapper>
  )
}

export default Chart
