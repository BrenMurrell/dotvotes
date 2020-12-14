import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Avatar = (props) => {
  const [avatarUser, setAvatarUser] = useState({})

  useEffect(() => {
    setAvatarUser(props.users.filter(user => user.uid === props.memberId)[0])
  }, [props.users])
  return (
    <div
      className="avatar"
      draggable="false">
      <picture>
        <source className="avatar__image" alt={avatarUser.username} srcSet={`https://avatars3.githubusercontent.com/u/${avatarUser.uid}?s=48&v=4`} type="image/jpeg" />
        <source className="avatar__image" alt={avatarUser.username} srcSet="/images/avatar-dark.png" type="image/png" />
        <img
          src={`https://avatars3.githubusercontent.com/u/${avatarUser.uid}?s=48&v=4`}
          className="avatar__image"
          title={ avatarUser.username }
        />
      </picture>
      {props.showName && (
        <p className="avatar__name">{avatarUser.username}</p>
      )}
    </div>
  )
}
const mapStateToProps = (globalState) => {
  return {
    users: globalState.users
  }
}

export default connect(mapStateToProps)(Avatar)
