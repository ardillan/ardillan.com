import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Hello from "../components/Hello"
import PostList from "../components/PostsList"

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <Hello social={data.site.siteMetadata.social} />
      <PostList length="5" type="blog" />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          instagram
        }
      }
    }
  }
`
