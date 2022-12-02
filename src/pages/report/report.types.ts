import { type } from "os"

export interface riverDataInterface {
  riverName: string
  surfSpot: string
  riverDescription: string
  imgUrl: string
  environmentInfo: {
    usgsID: string
    flowRatings: FlowRatings
    weatherValues: {
      instantFlow: number
      wind: number
      temperature: number
      lowTemp: number
      highTemp: number
    }
  }
  locationInfo: {
    googleMapsID: string
    parkingSpotName: string
    address: string
  }
  surfReport: {
    reporter: Reporter
    reportInfo: Report
  }
}

interface Reporter {
  img: string
  name: string
  description: string
}

interface Report {
  report: string
  date: string
}

export interface ConditionNames {
  name: SurfConditionStatus
  color: BackgroundBad | BackgroundFair | BackgroundGood
}

export interface ReportWithConditions extends Report {
  surfConditions: ConditionNames
}

export interface SurfReport {
  reporter: Reporter
  report: Report
}

export interface FlowRatings {
  fairConditions: number
  goodConditions: number
  badConditions: number
}

export interface SurfConditions<T, K> {
  min: number
  caption: SurfConditionStatus
  color: {
    background: T
    border: K
  }
}

export interface SurfConditionInfo {
  fairConditions: SurfConditions<BackgroundFair, BorderFair>
  goodConditions: SurfConditions<BackgroundGood, BorderGood>
  badConditions: SurfConditions<BackgroundBad, BorderBad>
}

type BorderBad = "chartBadBorder"
type BackgroundBad = "chartBad"

type BorderGood = "chartGoodBorder"
type BackgroundGood = "chartGood"

type BorderFair = "chartFairBorder"
type BackgroundFair = "chartFair"

export type Backgrounds = BackgroundBad | BackgroundGood | BackgroundFair
export type Borders = BorderBad | BorderFair | BorderGood

type SurfConditionStatus = "Good" | "Fair" | "Not Surfable"
