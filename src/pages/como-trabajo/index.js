import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

import { SectionTitle, PageContainer } from "../../components/styled/Interface"

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Ardillan.com | Cómo trabajo"
        postDescription="Aquí muestro las aplicaciones que utilizo para desarrollar y diseñar, la música que escucho o qué utilidades uso para notas"
      />
      <SectionTitle>
        <div>
          <h1>¿Cómo trabajo?</h1>
          <h2>
            Me gusta mucho conocer dinámicas nuevas y ver cómo aplicaciones o
            pequeños scripts facilitan el trabajo de la gente. A continuación
            indico qué aplicaciones utilizo en mi día a día, qué música escucho
            o qué utilizo para editar gráficos y construir interfaces.
          </h2>
        </div>
      </SectionTitle>
      <PageContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        ></div>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { title: { eq: "Cómo trabajo" } }) {
      fileAbsolutePath
      id
      frontmatter {
        title
        date
      }
      html
    }
  }
`
