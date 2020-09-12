import React from 'react'

import userAvatar from '../../../../user-avatar.webp'

const ContactsItem = ({imgAvatar, fullName}) => {
  return (
    <div className="contacts-item w-full h-20 flex items-center cursor-pointer">
      <div className="contacts-item__avatar ml-2 mr-6">
        <img
          className="w-12 rounded-full"
          src={(imgAvatar) ? imgAvatar : userAvatar} alt="user-avatar"
        />
      </div>
      <div className="contacts-item__name">
        <span className="text-lg tracking-wider">{fullName}</span>
      </div>
    </div>
  )
}

export default ContactsItem