import React, { ReactNode } from "react"

const List = <T,>({
  wrapperClasses,
  list,
  render,
}: {
  wrapperClasses?: string
  list: T[]
  render: (item: T) => ReactNode
}) => {
  return (
    <ul className={wrapperClasses ? wrapperClasses : ""}>
      {list.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}

export default List
