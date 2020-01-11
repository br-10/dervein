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


<h3 style={{fontSize:'22px'}}>Verschönerungsverein Bacharach 1873 e.V. </h3>


Verschönerungsverein Bacharach 1873 e. V.  <br/>
55422 Bacharach <br/>
Tel.: ....<br/>
kontakt@vv-bacharach.de <br/>

<strong>Vorsitzende:</strong>
  <br/>
1. Vorsitzender und Gesamtverantwortung: Fritz Stüber <br/>
2. Vorsitzender: Andreas Stüber <br/>
 <br/>
 Websitebetreuung: Katrin Gloggengiesser, Rene Broich
  <br/>
Schriftführerin: Ilka Hölz
 <br/>
Vereinsregister: Amtsgericht Bingen, VR 479
 <br/>
Haftungsausschluss: Der Herausgeber übernimmt keine Verantwortung für die Inhalte von Websites, die über Links dieser Sammlung erreicht werden. Die Links werden bei der Aufnahme nur provisorisch angesehen und bewertet. Eine kontinuierliche Prüfung der Inhalte ist weder beabsichtigt noch möglich. Der Herausgeber distanziert sich ausdrücklich von allen Inhalten, die möglicherweise straf- oder haftungsrechtlich relevant sind oder gegen die guten Sitten verstoßen.
 <br/>
Copyright: Das Copyright für Bilder und Texte liegt, soweit nicht anders vermerkt, bei dem Verschönerungsverein Bacharach 1873 e. V.
 <br/>


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
