import React from 'react'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { css } from '@emotion/core'
import Head from './header.jpg'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: url(${Head});
        background-size: cover;
        background-size: no-repeat;
        background-position: 60% 70%;
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            letter-spacing:0.09rem;
            margin: 0;
            font-weight:400;

            max-width: ${rhythm(15)};
            font-family: 'Indie Flower', cursive;
            @media(max-width:600px){
              font-size:23px;
              font-weight:600;

            }
          `}
        >

        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}
export default Hero
