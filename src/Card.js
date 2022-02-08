import React from 'react'
import Link from 'next/link'

import Teaser from '@project-r/template-newsletter/lib/web/Teaser'

const CardLink = ({path, href, children}) => (
  <Link href={href || `/newsletter${path}`} passHref>
    {children}
  </Link>
)

export default props => <Teaser {...props} Link={CardLink} />
