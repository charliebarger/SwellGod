import React from "react"
import Logo from "../../src/assets/images/logo-sm-1.png"
import { NavItem } from "../components/nativagation/NavItem"
const Header = () => {
  return (
    <header className="flex  items-center just px-10 shadow-md z-50 sticky top-0 bg-white">
      <a href="#" className=" m-auto w-28 md:m-0">
        <img className="py-5" src={Logo} alt="logos "></img>
      </a>
      <nav className="relative container py-6 ml-auto basis-0 hidden font-medium md:block">
        <ul className="flex items-center justify-between space-x-20">
          <li>
            <NavItem>About</NavItem>
          </li>
          <li>
            <NavItem>Fishing Report</NavItem>
          </li>
          <li>
            <NavItem>Contact</NavItem>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
