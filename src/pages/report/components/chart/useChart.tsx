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

const useChart = () => {
  const [chartData, setChartData] = useState<fetchInterface>({
    res: false,
    error: false,
    loading: false,
  })
  useEffect(() => {
    const fetchRiverData = async () => {
      setChartData((prev) => ({ ...prev, loading: true }))
      const riverData = await riverAPIcall("06711565")
      if (riverData.error) {
        setChartData((prev) => ({ ...prev, loading: false, error: riverData.error }))
      } else {
        if (riverData.data !== false) {
          setChartData((prev) => ({
            ...prev,
            loading: false,
            res: chartDataAndOptions(riverData.data as RiverAxis[]),
          }))
        }
      }
    }
    fetchRiverData()
  }, [])

  return chartData
}

export default useChart
