import { Fly } from "./bugTypes"

interface River {
  riverName: string
  location: string
  weather: string
}

interface RiverInfo {
  river: River
  flies: Fly[]
}

export { River, RiverInfo }
