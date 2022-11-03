import React from "react"

const Banner = ({ title, body }: { title: string; body: string }) => {
  return (
    <section className=" bg-slate-200 text-left p-10  border-y-2 border-primaryColor py-6 flex-1">
      <div className="container m-auto">
        <h3 className="mb-4 font-semibold text-xl lg:mt-0">{title}</h3>
        <p>{body}</p>
      </div>
    </section>
  )
}

export default Banner
