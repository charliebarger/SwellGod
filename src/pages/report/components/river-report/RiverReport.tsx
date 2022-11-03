import List from "components/ListGenerator"
import SurfReport from "../SurfReport"
import { SectionWrapper } from "components/SectionWrapper"
import InfoSquares from "./InfoSquares"
import ForkPhoto from "assets/images/Hole17.jpg"

interface boxData {
  title: string
  data: string
}

const liveRiverData: boxData[] = [
  { title: "Flow", data: "271 cfs" },
  { title: "Wind", data: "7 mph" },
  { title: "Temperature", data: "72 °F" },
  { title: "Low/High", data: "52/74" },
]

const RiverReport = () => {
  return (
    <SectionWrapper>
      <div className="px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
        <div className="   lg:grid lg:grid-cols-2 lg:gap-7">
          <div>
            <img src={ForkPhoto} className="m-auto"></img>
          </div>
          <div>
            <h3 className=" mt-8 mb-6 text-left font-semibold text-xl lg:mt-0">
              Roaring Fork River - Glenwood Springs, CO
            </h3>
            <List
              wrapperClasses="m-auto grid gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-2"
              list={liveRiverData}
              render={(item) => <InfoSquares title={item.title} data={item.data} />}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default RiverReport
