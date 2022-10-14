import React from "react"
import FishingReport from "pages/report/components/FishingReport"
import RiverReport from "pages/report/components/RiverReport"
import PageHeader from "components/headers/PageHeader"
const Report = () => {
  return (
    <>
      <PageHeader>River Information</PageHeader>
      <RiverReport />
      <FishingReport />
    </>
  )
}

export default Report
