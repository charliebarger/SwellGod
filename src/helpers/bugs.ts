type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

interface Pattern {
  name: string
  purchaseLink: string
  imageLink: string
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

const deckersFlies: Fly[] = [
  {
    name: 'Midge',
    seasonStart: 0,
    seasonEnd: 11,
    patterns: [
      {
        name: 'Rojo Midge',
        purchaseLink: 'https://www.umpqua.com/rojo-midge/',
        imageLink:
          'https://cdn11.bigcommerce.com/s-yjvvzszzfj/images/stencil/1280x1280/products/16139/16264/Rojo-Midge_Garcia_Olv__65686.1574278900.jpg?c=2',
        favorite: true,
      },
      {
        name: 'Mercury Black Beauty',
        purchaseLink: 'https://www.umpqua.com/mercury-black-beauty/',
        imageLink:
          'https://cdn11.bigcommerce.com/s-yjvvzszzfj/images/stencil/1280x1280/products/16986/16741/Mercury_Black_Beauty_Dorsey_Blk__27475.1574360142.jpg?c=2',
        favorite: false,
      },
      {
        name: 'Jujubee midge',
        purchaseLink: 'https://www.umpqua.com/jujubee-midge-cravens/',
        imageLink:
          'https://cdn11.bigcommerce.com/s-yjvvzszzfj/images/stencil/640w/products/16033/16087/JujuBee_Midge_Craven_Blu__63104.1574277445.jpg?c=2',
        favorite: false,
      },
      {
        name: 'Top Secret Midge',
        purchaseLink: 'https://www.umpqua.com/top-secret-midge/',
        imageLink:
          'https://cdn11.bigcommerce.com/s-yjvvzszzfj/images/stencil/640w/products/16104/16148/Top_Secret_Midge_Dorsey__84657.1574278026.jpg?c=2',
        favorite: false,
      },
      {
        name: 'Griffiths Gnat',
        purchaseLink: 'https://www.umpqua.com/griffiths-gnat/',
        imageLink:
          'https://cdn11.bigcommerce.com/s-yjvvzszzfj/images/stencil/640w/products/11595/17227/Griffiths_Gnat__70202.1576618836.jpg?c=2',
        favorite: false,
      },
    ],
  },
  {
    name: 'Blue-Winged Olive',
    family: 'Mayfly',
    seasonStart: 2,
    seasonEnd: 9,
    patterns: [
      {
        name: '',
        purchaseLink: 'https://www.umpqua.com/flashback-pheasant-tail/',
        imageLink:
          'https://cdn11.bigcommerce.com/s-yjvvzszzfj/images/stencil/1280x1280/products/11462/10700/Flashback_Pheasant_Tail_Nat__07584.1574077632.jpg?c=2',
        favorite: false,
      },
    ],
  },
]

const allBugs: RiverInfo[] = [
  {
    river: {
      riverName: 'South Platte River',
      location: 'Deckers, CO',
    },
    flies: deckersFlies,
  },
]

export default allBugs
