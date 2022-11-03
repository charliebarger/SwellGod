import tailwindConfig from "../../../tailwind.config"
import { Config } from "tailwindcss"
import React, { PropsWithChildren, createContext, useContext } from "react"

interface colorInterface {
  primaryColor: string
  secondaryColor: string
  fontColor: string
  chartBad: string
  chartBadBorder: string
  chartFair: string
  chartFairBorder: string
  chartGood: string
  chartGoodBorder: string
}

const colors = {
  primaryColor: "hsl(196deg 46% 48%)",
  secondaryColor: "hsl(194deg 65% 75%)",
  fontColor: "black",
  chartBad: "hsl(358deg 48% 44% / 60%)",
  chartBadBorder: "hsl(358deg 48% 44% / 100%)",
  chartFair: "hsl(202deg 60% 46% / 60%)",
  chartFairBorder: "hsl(202deg 60% 46% / 100%)",
  chartGood: "hsl(90deg 55% 44% / 40%)",
  chartGoodBorder: "hsl(90deg 55% 44% / 100%)",
}

const ThemeContext = createContext<undefined | colorInterface>(undefined)

const ThemeProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  console.log(context)
  if (context === undefined) {
    console.log("no")
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

export { ThemeProvider, useTheme }
