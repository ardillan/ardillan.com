import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>¿Cómo trabajo?</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />{" "}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "como-trabajo" } } }
    ) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
