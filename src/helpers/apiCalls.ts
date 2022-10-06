import { Coordinates } from "../assets/river-information/riverTypes"

const getWeatherURL = ({ latitude, longitude }: Coordinates) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=51f808ad6044666815ba2f99bc610f0b&units=imperial`
}

const getAllFlowsURL = (site: string): string => {
  const date = new Date()
  const dateNow = date.toISOString()
  const dateWeekAgo = new Date(date.setDate(date.getDate() - 7)).toISOString()
  return `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${site}&startDT=${dateWeekAgo}&endDT=${dateNow}&parameterCd=00060,00065&siteStatus=all`
}

interface RiverAxis {
  dateTime: string
  value: number
}

// this will be changed to useFetch of some sort | Needs to be DELETED
const riverAPIcall = async (site: string): Promise<RiverAxis[]> => {
  const info = await fetch(getAllFlowsURL(site))
  const infoson = await info.json()
  console.log("hi")
  const dataPoints = infoson.value.timeSeries[0].values[0].value
  const filteredData = dataPoints.map((item: any) => {
    return { dateTime: item.dateTime, value: Number(item.value) }
  })
  console.log(filteredData)
  return filteredData
}

export { getWeatherURL, getAllFlowsURL, riverAPIcall }
