import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

type Props = {
  site: GatsbyTypes.Site
}

const NotFoundPage: React.FC<PageProps<Props>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata!.title!

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
