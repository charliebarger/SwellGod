import React from "react"

interface ProfileInfoParams {
  name: string
  title: string
}

const ProfileInfo = ({ name, title }: ProfileInfoParams) => {
  return (
    <div className="flex flex-col">
      <span className=" text-left font-bold">{name}</span>
      <span className=" text-left font-medium text-sm text-gray-600">{title}</span>
    </div>
  )
}

export default ProfileInfo
