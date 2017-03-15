import React from 'react'
import Link from 'next/link'
import {css} from 'glamor'

const containerStyle = css({
  height: '100%',
  backgroundColor: '#f2f2f2'
})
const imageStyle = css({
  display: 'block',
  '& img': {
    width: '100%'
  }
})
const textStyle = css({
  display: 'block',
  padding: '5px 10px 10px',
  textDecoration: 'none',
  '& p': {
    marginBottom: 0
  }
})

const Card = ({href, title, date, image}) => (
  <div {...containerStyle}>
    <Link href={href}>
      <a {...imageStyle}>
        <img {...image} />
      </a>
    </Link>
    <Link href={href}>
      <a {...textStyle}>
        <h3>{title}</h3>
        <p>{date}</p>
      </a>
    </Link>
  </div>
)

export default Card
