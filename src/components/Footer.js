import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
//import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub } from './Social'
import Container from './Container'
import {Link} from 'gatsby'
const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <Container
      css={css`
        padding-top: 0;
        margin-top:40px;
        border-top: 1px solid  grey;
       width:100%;
       max-width:800px;
          padding-top: 0;
        }
      `}
    >
    <div
      css={css`

        display:flex;
        justify-content: space-between;
        margin:10px auto;
        padding:10px 20px;
        a{
          color:black;
        }
        ${bpMaxSM} {
         padding:10px 5px;
         flex-direction: column;
         justify-content: center;
         align-items:center;

        }
        `}
    >
    <Link to="/impressum">Impressum</Link>
    <Link to="/kontakt">Kontakt</Link>
    <Link to="/datenschutz">Datenschutz</Link>
    </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >

        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >

        </div>
        <div>
          <Twitter />
          <GitHub />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
