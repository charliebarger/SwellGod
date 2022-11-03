import RiverReport from "./components/river-report/RiverReport"
import PageSubHeader from "components/headers/PageSubHeader"
import Chart from "./components/chart/Chart"
import PageHeader from "components/headers/PageHeader"
import Banner from "components/Banner"
import SurfReport from "./components/SurfReport"
import LocationInfo from "./components/river-report/location-info/LocationInfo"
const Report = () => {
  return (
    <>
      <PageHeader>Surf Report</PageHeader>
      <RiverReport />
      <SurfReport />
      <Chart />
      <Banner
        title="The Roaring Form"
        body="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam quam accusantium
            numquam debitis odio in fugit ut ab, quidem quod magni est obcaecati sit id blanditiis
            tempora quisquam, ratione voluptatibus consequatur excepturi? Impedit quos explicabo
            atque nulla temporibus nihil vitae eos pariatur amet voluptatibus voluptates magnam
            odio, quasi deserunt?"
      />
      <LocationInfo />
    </>
  )
}

export default Report
