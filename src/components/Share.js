import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from './Theming'

import { TwitterShareButton, FacebookShareButton } from 'react-share'

const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        width:100%;
        div {
          margin-right: 20px;
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};

          }
        }
        span {
          margin: 0 20px;
          padding:0;
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.5;
          opacity: 0.7;

      `}
    >

      <span>Share article</span>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
      <span
      css={css`
        font-family: 'Roboto-Regular';
        font-size:12px;
        color: #F15A24;

        `}
      >Twitter</span>
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
        css={css`
          cursor: pointer;
        `}
      >
       <span
       css={css`
         font-family: 'Roboto-Regular';
         font-size:12px;
         color: #F15A24;
         outline:none;

         `}
       >
        Facebook
       </span>
      </FacebookShareButton>

    </div>
  )
}

export default Share
