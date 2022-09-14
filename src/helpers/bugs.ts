type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

interface Pattern {
  name: string
  purchaseLink: string
  favorite: boolean
}

interface River {
  riverName: string
  location: string
}

interface Fly {
  name: string
  family?: string
  seasonStart: Month
  seasonEnd: Month
  patterns: Pattern[]
}

interface RiverInfo {
  river: River
  flies: Fly[]
}


const hi = {
  one: 'yo',
  two: 'hi',
}

const deckersFlies: Fly[] = [
  {
    name: "Midge",
    seasonStart: 0,
    seasonEnd: 11,
    patterns: [
      {
        name: "Rojo Midge",
        purchaseLink: "https://www.umpqua.com/rojo-midge/",
        favorite: true
      },
      {
        name: "Mercury Black Beauty",
        purchaseLink: "https://www.umpqua.com/mercury-black-beauty/",
        favorite: false
      },
      {
        name: "Jujubee midge",
        purchaseLink: "https://www.umpqua.com/jujubee-midge-cravens/",
        favorite: false
      },
      {
        name: "Top Secret Midge",
        purchaseLink: "https://www.umpqua.com/top-secret-midge/",
        favorite: false
      },
      {
        name: "Griffiths Gnat",
        purchaseLink: "https://www.umpqua.com/griffiths-gnat/",
        favorite: false
      },
    ]
  }
]

const allBugs: RiverInfo[] = [
  {
    river: {
      riverName: "South Platte River",
      location: "Deckers, CO"
    },
    flies: [
      {
        family : 
      }
    ]
  }
]
allBugs

export default allBugs
