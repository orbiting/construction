import React from 'react'
import Link from 'next/link'
import {css} from 'glamor'
import {timeFormat} from '../lib/format'

import {imageResizeUrl} from './Templates/utils'

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

const parseDate = string => {
  const date = new Date(string)
  return isNaN(date) ? undefined : date
}
const formatPublishDate = timeFormat('%d. %B %Y')

const CardLink = ({slug, href, children}) => (
  <Link href={href || {pathname: '/newsletter', query: {slug}}} as={href || `/newsletter/${slug}`} passHref>
    {children}
  </Link>
)

const Card = ({slug, href, title, publishDate, image, imageAlt}) => {
  let parsedDate = parseDate(publishDate)
  return (
    <div {...containerStyle}>
      <CardLink href={href} slug={slug}>
        <a {...imageStyle}>
          <img src={imageResizeUrl(image, '580x326')} alt={imageAlt} />
        </a>
      </CardLink>
      <CardLink href={href} slug={slug}>
        <a {...textStyle}>
          <h3>{title}</h3>
          {!!parsedDate && <p>{formatPublishDate(parsedDate)}</p>}
        </a>
      </CardLink>
    </div>
  )
}

export default Card
