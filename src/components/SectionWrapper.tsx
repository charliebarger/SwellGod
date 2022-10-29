import React, { PropsWithChildren } from "react"

export const SectionWrapper: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <section className=" my-10 md:my-14">{children}</section>
}
