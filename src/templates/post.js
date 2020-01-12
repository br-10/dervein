import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from 'components/SEO'
import { css,keyframes } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
//import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
import { bpMaxSM } from '../lib/breakpoints'

const Move = keyframes`
0%{

  opacity:0;
  color:white;
  left:-200px;
}

100%{
left:0;
color:black;
opacity:1;
}

`

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  //const author = mdx.frontmatter.author || config.author
  //const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
  const banner = mdx.frontmatter.banner

  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />

        <Container>
          <h1
            css={css`
              position:relative;
              animation: ${Move} .3s ease-in;
              text-align: center;

              margin-bottom: 20px;
              font-family:'Roboto Slab', serif;
              width: 100%;
              display: block;
              margin:auto;

            `}
          >
            {title}
          </h1>

          {banner && (
            <div
              css={css`
                padding: 30px 0;
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img
                sizes={banner.childImageSharp.fluid}
                alt={site.siteMetadata.keywords.join(', ')}
              />
            </div>
          )}
          <br />
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
        {/* <SubscribeForm /> */}

      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
      }
      body
    }
  }
`
