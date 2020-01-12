import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
//import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
//import { useTheme } from 'components/Theming'
import Container from 'components/Container'
//import { rhythm } from '../lib/typography'




export default function Index({ data: { site } }) {
//  const theme = useTheme()


  return (
    <Layout site={site}>
      <Container
        css={css`
          display:flex;
          flex-direction: column;
          padding-bottom: 0;
          justify-content: flex-start;
        `}
      >


<h3 style={{fontSize:'22px'}}>Monika Held und Georg Praml </h3>

 <Link to="/impressum">Impressum</Link>


      </Container>
    </Layout>
  )
}

export const ppageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

  }
`
