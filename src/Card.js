import React from 'react'
import Link from 'next/link'

import Teaser from '@project-r/template-newsletter/lib/web/Teaser'

const CardLink = ({slug, href, children}) => (
  <Link href={href || {pathname: '/newsletter', query: {slug}}} as={href || `/newsletter/${slug}`} passHref>
    {children}
  </Link>
)

export default props => <Teaser {...props} Link={CardLink} />
