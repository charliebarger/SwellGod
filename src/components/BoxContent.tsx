import React from "react"

const BoxContent = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
      <span className=" text-primaryColor text-md font-bold whitespace-nowrap">{title}</span>
      <span className=" text-xl font-bold whitespace-nowrap ">{data}</span>
    </div>
  )
}

export default BoxContent
