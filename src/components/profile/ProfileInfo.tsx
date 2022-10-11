import React from "react"

const ProfileInfo = ({ name, title }: { name: string; title: string }) => {
  return (
    <div className="flex flex-col">
      <span className=" text-left font-bold">{name}</span>
      <span className=" text-left font-medium text-sm text-gray-600">{title}</span>
    </div>
  )
}

export default ProfileInfo
