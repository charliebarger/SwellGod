import List from "components/ListGenerator"
import { SectionWrapper } from "components/SectionWrapper"

interface boxData {
  title: string
  data: string
}

interface riverReportProps {
  imgUrl: string
  surfSpotName: string
  riverName: string
  squareData: {
    instantFlow: number
    wind: number
    temperature: number
    lowTemp: number
    highTemp: number
  }
}

const RiverReport = ({ imgUrl, surfSpotName, riverName, squareData }: riverReportProps) => {
  const { instantFlow, wind, temperature, highTemp, lowTemp } = squareData
  const liveRiverData: boxData[] = [
    { title: "Flow", data: `${instantFlow} cfs` },
    { title: "Wind", data: `${wind} mph` },
    { title: "Temperature", data: `${temperature} °F` },
    { title: "Low/High", data: `${lowTemp}/${highTemp}` },
  ]

  return (
    <SectionWrapper>
      <div className="px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
        <div className="   lg:grid lg:grid-cols-2 lg:gap-7">
          <div>
            <img src={imgUrl} className="m-auto"></img>
          </div>
          <div>
            <h3 className=" mt-8 mb-6 text-left font-semibold text-xl lg:mt-0">
              {`${surfSpotName} - ${riverName}`}
            </h3>
            <List
              wrapperClasses="m-auto grid gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-2"
              list={liveRiverData}
              render={(item) => (
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className=" text-xl font-bold whitespace-nowrap ">{item.data}</span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RiverReport
