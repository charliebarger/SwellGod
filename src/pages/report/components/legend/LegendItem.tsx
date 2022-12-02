import { Backgrounds, Borders } from "../../report.types"

interface LegendProps {
  boxColor: { border: Borders; background: Backgrounds }
  caption: string
  description?: string
}

const LegendItem = ({ boxColor, caption, description }: LegendProps) => {
  console.log(boxColor)

  return (
    <figure className="flex items-center gap-2 ">
      <div
        className={` ${
          (boxColor.border === "chartBadBorder" && " bg-chartBad border-chartBadBorder") ||
          (boxColor.border === "chartGoodBorder" && " bg-chartGood border-chartGoodBorder") ||
          (boxColor.border === "chartFairBorder" && " bg-chartFair border-chartFairBorder")
        } bg-cha h-4 w-8 border-2 border-${boxColor.border} bg-chartBad`}
      />
      <figcaption className=" font-medium text-xs md:text-sm">
        {caption} {description && <span className="md:hidden">: {description}</span>}
      </figcaption>
    </figure>
  )
}

export default LegendItem
