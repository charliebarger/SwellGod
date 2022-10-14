import React, { PropsWithChildren } from "react"
const PageSubHeader: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className=" my-10 relative font-semibold text-2xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-11 after:left-1/2 after:translate-x-[-50%]">
      {children}
    </h2>
  )
}

export default PageSubHeader
