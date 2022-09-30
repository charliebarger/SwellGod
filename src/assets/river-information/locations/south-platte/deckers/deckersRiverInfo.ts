import { RiverInfo } from "../../../riverTypes"
import deckersFlies from "./deckersFlies"

const deckers: RiverInfo = {
  river: {
    riverName: "Roaring Fork River",
    cityName: "Glenwood Springs, CO",
    riverSiteCode: "09085000",
    coordinates: {
      latitude: 39.470867,
      longitude: -107.280881,
    },
  },
  flies: deckersFlies,
}

export default deckers
