import { useEffect, useState } from "react"
import { riverAPIcall, RiverAxis } from "api/riverData"
import { chartDataAndOptions } from "./chartDataAndOptions"
import { ChartOptions, ChartData } from "chart.js"

interface fetchInterface {
  res:
    | {
        options: ChartOptions<"line">
        data: ChartData<"line">
      }
    | false
  error: boolean | string
  loading: boolean
}

const useChart = (locationID: string) => {
  const [chartData, setChartData] = useState<fetchInterface>({
    res: false,
    error: false,
    loading: false,
  })
  useEffect(() => {
    const fetchRiverData = async () => {
      setChartData((prev) => ({ ...prev, loading: true }))
      const riverData = await riverAPIcall(locationID)
      if (riverData.error) {
        setChartData((prev) => ({ ...prev, loading: false, error: riverData.error }))
      } else {
        const { data } = riverData
        if (typeof data === "object") {
          setChartData((prev) => ({
            ...prev,
            loading: false,
            res: chartDataAndOptions(data, 170, 250),
          }))
        }
      }
    }
    fetchRiverData()
  }, [])

  return chartData
}

export default useChart
