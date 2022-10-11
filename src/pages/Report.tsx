import React from "react"
import FishingReport from "../compositions/FishingReport"
import RiverReport from "../compositions/RiverReport"
import PageHeader from "../components/PageHeader"
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
