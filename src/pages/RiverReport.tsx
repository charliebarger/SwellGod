import React from "react"
import ForkPhoto from "../../src/assets/images/Hole17.jpg"
import Headshot from "../../src/assets/images/headshot.jpg"
import Chart from "../compositions/Chart"
const RiverReport = () => {
  return (
    <>
      <h1 className=" my-10 relative font-semibold text-3xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-11 after:left-1/2 after:translate-x-[-50%]">
        River Information
      </h1>
      <section className="   lg:grid lg:grid-cols-2 lg:gap-7">
        <div>
          <img src={ForkPhoto} className="m-auto"></img>
        </div>
        <div>
          <h3 className=" mt-8 mb-6 text-left font-semibold text-xl lg:mt-0">
            Roaring Fork River - Glenwood Springs, CO
          </h3>
          <div>
            <div className="m-auto grid gap-4 grid-cols-2 lg:grid-cols-4 lg:gap-2">
              <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                <span className=" text-primaryColor text-md font-bold whitespace-nowrap">Flow</span>
                <span className=" text-xl font-bold whitespace-nowrap ">271 cfs</span>
              </div>
              <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                <span className=" text-primaryColor text-md font-bold whitespace-nowrap">Wind</span>
                <span className=" text-xl font-bold whitespace-nowrap">7 mph</span>
              </div>
              <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                  Temperature
                </span>
                <span className=" text-xl font-bold whitespace-nowrap">72 °F</span>
              </div>
              <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                  Low/High
                </span>
                <span className=" text-xl font-bold whitespace-nowrap">52/74</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className=" my-10 relative font-semibold text-2xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-9 after:left-1/2 after:translate-x-[-50%]">
          Fishing Report
        </h2>
        <div>
          <div className="flex gap-5">
            <img
              className=" w-16 h-16 object-cover rounded-full border-secondaryColor border-2"
              src={Headshot}
              alt="headshot"
            />
            <div className="flex flex-col">
              <span className=" text-left font-bold">Capt. Caleb McDaniel</span>
              <span className=" text-left font-medium text-sm text-gray-600">
                Iron Bridge Fishing Manager
              </span>
            </div>
          </div>
          <p className="text-left my-4 py-2 border-y-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta. Officia, hic eius
            ducimus facilis, illum consequuntur exercitationem voluptates ipsa, accusantium nemo
            accusamus similique alias dolores possimus dolorum. Libero totam magnam praesentium
            similique rem repellat unde amet illo. Aliquam, quidem!
          </p>
          <div className="flex flex-col text-start">
            <b className="text-left">Fly Recommendations</b>
            <ul className="ml-5 my-2">
              <li className="list-disc my-1 text-md font-normal">
                Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
              </li>
              <li className="list-disc my-1 text-md font-normal">
                Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
              </li>
              <li className="list-disc my-1 text-md font-normal">
                Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
              </li>
              <li className="list-disc my-1 text-md font-normal">
                Male trico spinner <span className=" text-sm font-bold "> #24-26</span>
              </li>
            </ul>
          </div>
          <Chart />
        </div>
      </section>
    </>
  )
}

export default RiverReport
