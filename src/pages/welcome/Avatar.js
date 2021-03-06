import React from 'react'

export default function Avatar() {
  return (
    <figure className="picture is-loaded">
      <div className="picture-shadow" />
      <img
        className="picture-image"
        src="/images/avatar.jpg"
        alt="Portrait of Abel Pastur"
      />
    </figure>
  )
}
