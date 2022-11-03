import React from "react"
import List from "components/ListGenerator"
import Logo from "assets/images/logo-sm-1.png"

const headerItems = ["Home", "Surf Reports", "Contact"]

const Header = () => {
  return (
    <header className="flex  items-center just px-10 shadow-md z-50 sticky top-0 bg-white">
      <a href="#" className=" m-auto w-28 md:m-0">
        <img className="py-5" src={Logo} alt="logos "></img>
      </a>
      <nav className="relative container py-6 ml-auto basis-0 hidden font-medium md:block">
        <List
          wrapperClasses="flex items-center justify-between space-x-20"
          list={headerItems}
          render={(item) => (
            <a
              href="#"
              className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
            >
              {item}
            </a>
          )}
        />
      </nav>
    </header>
  )
}

export default Header
