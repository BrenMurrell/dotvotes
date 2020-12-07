import React from 'react'

const Avatar = (props) => {
  const { user } = props

  return (
    <div className="avatar">
      <img
        src={`https://avatars3.githubusercontent.com/u/${user.uid}?s=48&v=4`}
        className="avatar__image"
        title={ user.username }
      />
    </div>
  )
}

export default Avatar
