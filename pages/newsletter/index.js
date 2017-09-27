import React, { Component } from 'react'

import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import withData from '../../lib/apollo/withData'
import { renderMdast } from '../../src/Templates'
import newsletterSchema from '../../src/Templates/Newsletter'

import Layout from '../../src/Layout'

const getDocument = gql`
  query getDocument($slug: String!) {
    newsletter: document(slug: $slug) {
      content
      meta {
        slug
        title
        description
        image
      }
    }
  }
`

class Index extends Component {
  render () {
    const { data: {loading, error, newsletter}, url } = this.props

    const meta = {
      title: 'Project R geht an den Start',
      description: '«Es ist Zeit, dass sich die Journalisten unabhängig machen und der Journalismus unabhängig von den Grossverlagen existieren kann. Und ein Modell dafür schafft man nur gemeinsam – oder gar nicht.»',
      image: 'https://assets.project-r.construction/images/balkon.jpg',
      url: `https://project-r.construction${url.pathname}`
    }

    if (loading) {
      return null
    }
    if (error) {
      return <div>{error.toString()}</div>
    }

    if (!newsletter) {
      return <div>404</div>
    }
    return (
      <Layout raw meta={meta} url={url}>
        {renderMdast(newsletter.content, newsletterSchema)}
      </Layout>
    )
  }
}

export default compose(
  withData,
  graphql(getDocument, {
    options: props => ({
      variables: {
        slug: props.url.query.slug
      }
    })
  })
)(Index)
