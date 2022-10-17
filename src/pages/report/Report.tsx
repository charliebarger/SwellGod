import React from "react"
import FishingReport from "pages/report/components/FishingReport"
import RiverReport from "pages/report/components/RiverReport"
import PageSubHeader from "components/headers/PageSubHeader"
import PageHeader from "components/headers/PageHeader"
const Report = () => {
  return (
    <>
      <PageHeader>River Information</PageHeader>
      <RiverReport />
      <section className=" bg-slate-200 text-left p-10  border-y-2 border-primaryColor py-6 flex-1">
        <div className="container m-auto">
          <h3 className="mb-4 font-semibold text-xl lg:mt-0">The Roaring Fork</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam quam accusantium
            numquam debitis odio in fugit ut ab, quidem quod magni est obcaecati sit id blanditiis
            tempora quisquam, ratione voluptatibus consequatur excepturi? Impedit quos explicabo
            atque nulla temporibus nihil vitae eos pariatur amet voluptatibus voluptates magnam
            odio, quasi deserunt?
          </p>
        </div>
      </section>
      <FishingReport />
      <section className="px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
        <PageSubHeader>Visit Us!</PageSubHeader>
        <div className=" lg:grid lg:grid-cols-2 gap-3 lg:container lg:max-w-screen-lg lg:m-auto">
          <div className=" text-left pb-3">
            <h4 className=" font-bold text-md">Iron Bridge Golf Club</h4>
            <address>430 Iron Bridge Rd, Glenwood Springs, CO 81601</address>
            <a href="tel:+3215065492" className=" text-primaryColor">
              321-506-5492
            </a>
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
      </section>
      <footer className=" bg-primaryColor p-4 mt-8">
        <p className=" text-white">©2021 Colorado Tailwaters</p>
      </footer>
    </>
  )
}

export default Report
