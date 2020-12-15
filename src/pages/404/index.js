import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { PageContainer } from "../../components/styled/Interface"

const Glitch = styled.div`
  margin: auto;
  text-align: center;
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1rem;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Ardillan.com | Matar humanos"
        postDescription="Evita el alzamiento de las máquinas introduciendo una URL correcta."
      />
      <PageContainer>
        <Glitch>
          <Img
            fluid={data.fileName.childImageSharp.fluid}
            fadeIn={true}
            alt="Captura del vídeo R.U.R, donde aparecen unos robots maltratando a un humano"
            title="Captura de R.U.R"
          />
          <h1>
            <span style={{ textTransform: "italic" }}>¡Qué horrible</span>{" "}
            <span style={{ fontWeight: 800 }}>pesadilla</span>!<br />¡
            <span>Unos</span> y <span>ceros por todas partes</span>!<br />
            <span>Hasta me pareció ver un 2</span>
          </h1>
          <h2>
            Si quieres evitar el{" "}
            <a href="https://en.wikipedia.org/wiki/AI_takeover">
              alzamiento de las máquinas
              <br />
            </a>{" "}
            a toda costa, te aconsejo que vuelvas al <Link to="/">inicio</Link>.
          </h2>
        </Glitch>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
