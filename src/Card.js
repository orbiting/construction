import React from 'react'
import Link from 'next/link'
import {css} from 'glamor'
import {timeParse} from 'd3-time-format'
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

const parsePublishDate = timeParse('%d.%m.%Y %H:%M')
const formatPublishDate = timeFormat('%d. %B %Y')

const Card = ({slug, title, publishDate, image}) => (
  <div {...containerStyle}>
    <Link href={{pathname: '/newsletter', query: {slug}}} as={`/newsletter/${slug}`}>
      <a {...imageStyle}>
        <img src={imageResizeUrl(image, '580x326')} />
      </a>
    </Link>
    <Link href={{pathname: '/newsletter', query: {slug}}} as={`/newsletter/${slug}`}>
      <a {...textStyle}>
        <h3>{title}</h3>
        {!!publishDate && parsePublishDate(publishDate) && <p>{formatPublishDate(parsePublishDate(publishDate))}</p>}
      </a>
    </Link>
  </div>
)

export default Card
