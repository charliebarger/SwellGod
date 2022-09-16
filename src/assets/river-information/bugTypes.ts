import { River } from "./riverTypes"
type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

interface Pattern {
  name: string
  purchaseLink: string
  imageLink: string
  favorite: boolean
}

interface Fly {
  name: string
  family?: string
  seasonStart: Month
  seasonEnd: Month
  patterns: Pattern[]
}

export { Fly }
