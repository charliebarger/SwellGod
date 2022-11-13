interface LegendProps {
  boxColor: { border: string; background: string }
  caption: string
  description?: string
}

const LegendItem = ({ boxColor, caption, description }: LegendProps) => {
  console.log(boxColor)
  return (
    <figure className="flex items-center gap-2 ">
      <div className={` bg-${boxColor.background} h-4 w-8 border-2 border-${boxColor.border} `} />
      <figcaption className=" font-medium text-xs md:text-sm">
        {caption} {description && <span className="md:hidden">: {description}</span>}
      </figcaption>
    </figure>
  )
}

export default LegendItem
