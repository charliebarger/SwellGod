import React, { useRef, useEffect, useState } from "react"
import "./App.css"
import { riverAPIcall } from "api/riverData"
import Report from "./pages/report/Report"
import format from "date-fns/format"
import Header from "./components/nav-bar/Header"
import parseISO from "date-fns/esm/fp/parseISO/index.js"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

function App() {
  return (
    <div className="App">
      <Header />
      <main className="max-w-screen-md m-auto px-5 lg:max-w-none xl:max-w-7xl">
        <Report />
      </main>
    </div>
  )
}

export default App
