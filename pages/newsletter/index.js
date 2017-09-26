import React, { Component } from 'react'

import { gql, graphql } from 'react-apollo'
import { compose } from 'redux'
import withData from '../../lib/apollo/withData'
import { renderMdast } from '../../src/Templates'
import newsletterSchema from '../../src/Templates/Newsletter'

import Layout from '../../src/Layout'

const getDocuments = gql`
  query getDocuments {
    documents {
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
    const { data: {loading, error, documents}, url } = this.props

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
    const newsletterDoc = documents
      .find(doc => doc.meta.slug === url.query.slug)

    if (!newsletterDoc) {
      return <div>404</div>
    }

    return (
      <Layout raw meta={meta} url={url}>
        {renderMdast(newsletterDoc.content, newsletterSchema)}
      </Layout>
    )
  }
}

export default compose(
  withData,
  graphql(getDocuments)
)(Index)
