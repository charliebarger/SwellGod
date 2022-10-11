import React from "react"
import Headshot from "../../src/assets/images/headshot.jpg"
const GuideReport = () => {
  return (
    <>
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
    </>
  )
}

export default GuideReport
