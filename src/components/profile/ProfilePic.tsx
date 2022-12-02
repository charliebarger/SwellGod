import React from "react"

interface ProfilePicParams {
  headshot: string
}

const ProfilePic = ({ headshot }: ProfilePicParams) => {
  return (
    <img
      className=" w-16 h-16 object-cover rounded-full border-secondaryColor border-2"
      src={headshot}
      alt="headshot"
    />
  )
}

export default ProfilePic
