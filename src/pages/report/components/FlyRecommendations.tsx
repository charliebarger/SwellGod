import React from "react"
import List from "components/ListGenerator"

interface FlyInfo {
  fly: string
  size: [number, number] | [number]
}

const listOfFlies: FlyInfo[] = [
  { fly: "Male trico spinner", size: [24] },
  { fly: "Male trico spinner", size: [24, 26] },
  { fly: "Male trico spinner", size: [24, 26] },
  { fly: "Male trico spinner", size: [24, 26] },
  { fly: "Male trico spinner", size: [24, 26] },
]

const FlyRecommendations = () => {
  return (
    <div className="flex flex-col text-start">
      <b className="text-left">Fly Recommendations</b>
      <div className="ml-5 my-2">
        <List
          list={listOfFlies}
          render={(item) => (
            <div className="list-disc my-1 text-md font-normal">
              <span>{item.fly}</span>{" "}
              <span className=" text-sm font-bold ">
                #{`${item.size[0]} ${item.size.length === 2 ? `-${item.size[1]}` : ""}`}
              </span>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default FlyRecommendations
