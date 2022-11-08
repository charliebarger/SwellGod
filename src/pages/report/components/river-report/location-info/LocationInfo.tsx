import React from "react"
import { SectionWrapper } from "components/SectionWrapper"
import PageSubHeader from "components/headers/PageSubHeader"

interface locationInfoParams {
  locationData: {
    parkingSpotName: string
    address: string
    googleMapsID: string
  }
}

const LocationInfo = ({ locationData }: locationInfoParams) => {
  const { parkingSpotName, address, googleMapsID } = locationData
  return (
    <SectionWrapper>
      <div className="px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
        <PageSubHeader>Location</PageSubHeader>
        <div className=" lg:grid lg:grid-cols-2 gap-3 lg:container lg:max-w-screen-lg lg:m-auto">
          <div className=" text-left pb-3">
            <h4 className=" font-bold text-md">{parkingSpotName}</h4>
            <address>{address}</address>
          </div>
          <div className=" w-full aspect-video lg:aspect-square m-auto ">
            <iframe
              className=" w-full h-full"
              src={`https://www.google.com/maps/embed?${googleMapsID}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default LocationInfo
