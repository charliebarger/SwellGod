import React, { PropsWithChildren } from "react"

export const NavItem: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <li>
      <a
        href="#"
        className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
      >
        {children}
      </a>
    </li>
  )
}

const hi = (num: number): number => {
  return num
}
hi(2)
