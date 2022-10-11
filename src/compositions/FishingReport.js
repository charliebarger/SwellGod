import React from "react"
import Chart from "./Chart"
import GuideReport from "./GuideReport"
const FishingReport = () => {
  return (
    <section>
      <h2 className=" my-10 relative font-semibold text-2xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-9 after:left-1/2 after:translate-x-[-50%]">
        Fishing Report
      </h2>
      <GuideReport />
      <Chart />
    </section>
  )
}

export default FishingReport
