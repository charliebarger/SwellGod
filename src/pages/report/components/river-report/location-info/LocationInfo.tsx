import React from "react"
import { SectionWrapper } from "components/SectionWrapper"
import PageSubHeader from "components/headers/PageSubHeader"
const LocationInfo = () => {
  return (
    <SectionWrapper>
      <div className="px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
        <PageSubHeader>Location</PageSubHeader>
        <div className=" lg:grid lg:grid-cols-2 gap-3 lg:container lg:max-w-screen-lg lg:m-auto">
          <div className=" text-left pb-3">
            <h4 className=" font-bold text-md">Iron Bridge Golf Club</h4>
            <address>430 Iron Bridge Rd, Glenwood Springs, CO 81601</address>
          </div>
          <div className=" w-full aspect-video lg:aspect-square m-auto ">
            <iframe
              className=" w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.92145454444!2d-107.28256498497333!3d39.4711031205279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741099745b07015%3A0xf2c70178068ba0c8!2sIronbridge%20Golf%20Club!5e0!3m2!1sen!2sus!4v1665785713099!5m2!1sen!2sus"
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
