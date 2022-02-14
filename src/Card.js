import React from 'react'
import Link from 'next/link'

import Teaser from '@project-r/template-newsletter/lib/web/Teaser'
import { css } from 'glamor'
import { colors } from '@project-r/styleguide'

const styles = {
  prepub: css({
    position: 'absolute',
    background: colors.social,
    width: '100%',
    padding: '2px 5px',
    color: '#ffffff'
  })
}

const CardLink = ({path, href, children}) => (
  <Link href={href || `/newsletter${path}`} passHref>
    {children}
  </Link>
)

export default ({ prepublication, ...props }) => (<div style={{ position: 'relative'}}>
  {prepublication && <div {...styles.prepub}>Editoren-Vorschau</div>}
  <Teaser {...props} Link={CardLink} />
</div>)
