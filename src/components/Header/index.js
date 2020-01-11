import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
//import { useTheme } from '../Theming'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'
//import {FaCrow} from 'react-icons/fa'
import Container from '../Container'
import HG from './vogel.png'
const Header = ({ siteTitle}) => {
//  const theme = useTheme()
  return (
<>
    <Container
      css={css`
        display:flex;
        background-image: url(${HG});
        background-repeat: no-repeat;
        background-position:20px 0px;
        `}
    >

      <Link
        to="/"
        aria-label="go to homepage"
        css={css`
          font-family: 'Roboto Slab', serif;
          color: black;
          padding-left:85px;
             font-size:27px;
             letter-spacing:.09rem;
          @media(max-width:500px) {
            font-size: 15px;
            text-align:center;
            padding-left:60px;

          }
          &:hover {
            color: gray;
            text-decoration: none;
          }
        `}
      >
         {siteTitle}
      </Link>
    </Container>
      <Container noVerticalPadding>
        <nav
          css={css`
              width: 100%;

            display: flex;
            justify-content: flex-end;
            align-items: space-between;

            margin:auto;

          `}
        >

          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;

              a {
                font-family: 'Roboto',sans-serif;
                text-decoration: none;
                color:black;
                margin-left: 16px;
                margin-right: 16px;
                opacity:1;
                enabled:true;
              }
              .active {

                opacity:.3;
                enabled:false;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
</>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => {
      return(
      <Header siteTitle={data.site.siteMetadata.title} {...props}/>
    )}}
  />
)

export default ConnectedHeader
