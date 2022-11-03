import React, { useRef, useEffect, useState } from "react"
import "./App.css"
import { riverAPIcall } from "api/riverData"
import Report from "./pages/report/Report"
import format from "date-fns/format"
import Header from "./components/nav-bar/Header"
import parseISO from "date-fns/esm/fp/parseISO/index.js"
import Footer from "components/Footer"
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
      <main>
        <Report />
      </main>
      <Footer />
    </div>
  )
}

export default App
