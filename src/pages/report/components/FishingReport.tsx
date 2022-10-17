import React from "react"
import PageSubHeader from "components/headers/PageSubHeader"
import FlyRecommendations from "./FlyRecommendations"
import ProfileInfo from "components/profile/ProfileInfo"
import ProfilePic from "components/profile/ProfilePic"
import Headshot from "assets/images/headshot.jpg"

const FishingReport = () => {
  return (
    <section className="px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
      <PageSubHeader>Fishing Report</PageSubHeader>
      <div className="flex gap-5">
        <ProfilePic headshot={Headshot} />
        <ProfileInfo name="Capt. Caleb McDaniel" title="Iron Bridge Fishing Manager" />
      </div>
      <p className="text-left my-4 py-2 border-y-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta. Officia, hic eius
        ducimus facilis, illum consequuntur exercitationem voluptates ipsa, accusantium nemo
        accusamus similique alias dolores possimus dolorum. Libero totam magnam praesentium
        similique rem repellat unde amet illo. Aliquam, quidem!
      </p>
      <FlyRecommendations />
    </section>
  )
}

export default FishingReport
