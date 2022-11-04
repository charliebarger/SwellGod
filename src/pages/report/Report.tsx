import RiverReport from "./components/river-report/RiverReport"
import PageSubHeader from "components/headers/PageSubHeader"
import Chart from "./components/chart/Chart"
import PageHeader from "components/headers/PageHeader"
import Banner from "components/Banner"
import SurfReport from "./components/SurfReport"
import LocationInfo from "./components/river-report/location-info/LocationInfo"
const Report = () => {
  const riverData = {
    riverName: "River Run Park",
    riverDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam quam accusantium numquam debitis odio in fugit ut ab, quidem quod magni est obcaecati sit id blanditiis tempora quisquam, ratione voluptatibus consequatur excepturi? Impedit quos explicabo atque nulla temporibus nihil vitae eos pariatur amet voluptatibus voluptates magnam odio, quasi deserunt?",
    imgUrl: "assets/images/Hole17.jpg",
    environmentInfo: {
      usgsID: "06711565",
      flowRatings: {
        goodConditions: 250,
        fairConditions: 170,
      },
      instantFlow: "271 cfs",
      wind: "7 mph",
      temperature: "72 °F",
      lowHigh: "52/74",
    },
    locationInfo: {
      googleMapsID:
        "pb=!1m18!1m12!1m3!1d3079.92145454444!2d-107.28256498497333!3d39.4711031205279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741099745b07015%3A0xf2c70178068ba0c8!2sIronbridge%20Golf%20Club!5e0!3m2!1sen!2sus!4v1665785713099!5m2!1sen!2sus",
      parkingSpotName: "River Run Park",
      address: "2101 W Oxford Ave, Sheridan, CO 80110",
    },
    surfReport: {
      reporter: {
        img: "imgURL",
        name: "Capt. Caleb McDaniel",
        description: "River Surfing God | Passionate Lover",
      },
      reportInfo: {
        report:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta. Officia, hic eius ducimus facilis, illum consequuntur exercitationem voluptates ipsa, accusantium nemo accusamus similique alias dolores possimus dolorum. Libero totam magnam praesentium similique rem repellat unde amet illo. Aliquam, quidem!",
        date: "01/24/1996",
      },
    },
  }

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
