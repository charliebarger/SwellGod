import React from "react"
import "./App.css"
import deckers from "./assets/river-information/locations/south-platte/deckers/deckersRiverInfo"
import { riverAPIcall } from "./helpers/apiCalls"
import Logo from "../src/assets/images/logo-sm-1.png"
import ForkPhoto from "../src/assets/images/Hole17.jpg"
function App() {
  return (
    <div className="App">
      <header className="flex  items-center just px-10 shadow-md z-50 sticky top-0 bg-white">
        <a href="#" className=" m-auto w-28 md:m-0">
          <img className="py-5" src={Logo} alt="logos "></img>
        </a>
        <nav className="relative container py-6 ml-auto basis-0 hidden font-medium md:block">
          <div className="flex items-center justify-between space-x-20">
            <a
              href="#"
              className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
            >
              Fishing Report
            </a>
            <a
              href="#"
              className="m-0 whitespace-nowrap px-5 py-2 rounded-full hover:bg-primaryColor hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main>
        <h1 className=" my-10 relative font-semibold text-3xl after:content-[''] after:w-12 after:h-1.5 after:bg-primaryColor after:absolute after:top-11 after:left-1/2 after:translate-x-[-50%]">
          Fishing Report
        </h1>
        <section className="container max-w-screen-md m-auto px-5">
          <div>
            <img src={ForkPhoto}></img>
          </div>
          <section>
            <h2 className=" mt-8 mb-6 text-left font-semibold text-xl">
              Roaring Fork River - Glenwood Springs, CO
            </h2>
            <section>
              <div className="m-auto grid gap-4 grid-cols-2">
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Flow
                  </span>
                  <span className=" text-2xl font-bold whitespace-nowrap">271 cfs</span>
                </div>
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Wind
                  </span>
                  <span className=" text-2xl font-bold whitespace-nowrap">7 mph</span>
                </div>
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Temperature
                  </span>
                  <span className=" text-2xl font-bold whitespace-nowrap">72 °F</span>
                </div>
                <div className="flex flex-col space-y-4 border-2 border-primaryColor py-6 flex-1 bg-slate-200 ">
                  <span className=" text-primaryColor text-md font-bold whitespace-nowrap">
                    Low/High
                  </span>
                  <span className=" text-2xl font-bold whitespace-nowrap">52/74</span>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
