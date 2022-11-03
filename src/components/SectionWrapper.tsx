import React, { PropsWithChildren } from "react"

export const SectionWrapper: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <section className=" my-10 md:my-14 px-5 max-w-screen-md m-auto lg:max-w-none xl:max-w-7xl">
      {children}
    </section>
  )
}
