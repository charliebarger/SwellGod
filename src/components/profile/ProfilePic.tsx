import React from "react"

const ProfilePic = ({ headshot }: { headshot: string }) => {
  return (
    <img
      className=" w-16 h-16 object-cover rounded-full border-secondaryColor border-2"
      src={headshot}
      alt="headshot"
    />
  )
}

export default ProfilePic
