import { Fly } from "./bugTypes"

interface Coordinates {
  latitude: number
  longitude: number
}

interface River {
  riverName: string
  cityName: string
  riverSiteCode: string
  coordinates: Coordinates
}

interface RiverInfo {
  river: River
  flies: Fly[]
}

export { River, RiverInfo, Coordinates }
