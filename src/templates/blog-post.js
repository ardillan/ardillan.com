import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { useGetGenericFeaturedImage } from "../hooks/useGetGenericFeaturedImage"

import { formatDate } from "../utils/helpers"

const PostContainer = styled.div`
  width: 600px;
  margin: 0 auto 20px;
`

const PostContent = styled.div`
  p,
  ol,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 600px;
    margin: auto;
  }
`

const PostHeader = styled.header`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 150px;
  margin: auto;
  width: 600px;
  h1 {
    font-family: "Inter";
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    padding: 0;
    width: auto;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.colors.gradients.top},
      ${(props) => props.theme.colors.gradients.bottom}
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

const PostHeaderTitle = styled.div``

const FeaturedImage = styled.div`
  background: #ffc313;
  border-radius: 50%;
  height: 150px;
  object-fit: cover;
  width: 150px;
  img {
    border-radius: 50%;
  }
`

const Subtitle = styled.div`
  h2 {
    border-bottom: 2px dashed #ffde32;
    border-top: 2px dashed #ffde32;
    font-family: "Gluten";
    font-size: 18px;
    margin: 20px 0;
    padding: 10px 0;
  }
`

const Meta = styled.div`
  background: ${(props) => props.theme.colors.background.meta};
  color: ${(props) => props.theme.colors.fonts.text};
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  width: max-content;
  a {
    color: ${(props) => props.theme.colors.fonts.anchor};
    text-decoration: none;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  const featuredImage =
    post.frontmatter.featuredImage !== null
      ? post.frontmatter.featuredImage.childImageSharp.fluid
      : useGetGenericFeaturedImage().childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={`Ardillan.com | ${post.frontmatter.title}`}
        postDescription={post.frontmatter.description}
      />
      <section>
        <article>
          <PostContainer>
            <PostHeader>
              <PostHeaderTitle>
                <h1>{post.frontmatter.title}</h1>
                <Subtitle>
                  <h2>{post.frontmatter.subtitle}</h2>
                </Subtitle>
              </PostHeaderTitle>
              <FeaturedImage>
                <Img fluid={featuredImage} />
              </FeaturedImage>
            </PostHeader>
            <Meta>
              <time>Escrito el {formatDate(post.frontmatter.date)} </time> en{" "}
              {post.frontmatter.category.map((cat) => (
                <Link to={`/categoria/${cat}`}>{cat}</Link>
              ))}
            </Meta>
          </PostContainer>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        subtitle
        date
        description
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
