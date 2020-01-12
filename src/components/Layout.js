import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql , Link} from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { lighten } from 'polished'
import { Global, css } from '@emotion/core'
import { ThemeProvider, themes } from './Theming'
import { bpMaxSM } from '../lib/breakpoints'
import mdxComponents from './mdx'
import Header from './Header/'
import reset from '../lib/reset'
import { fonts } from '../lib/typography'
import config from '../../config/website'
import Footer from '../components/Footer'
import Container from '../components/Container'




const getGlobalStyles = theme => {
  return css`
    body {
      background: ${theme.colors.bodyBg};
      color: ${theme.colors.text};
    }
    &::selection {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    article {
      display:flex;
    flex-wrap:wrap;

     width:100%;
     height:auto;
     margin: 0 2px;
     @media(max-width:700px)  {
      flex-direction:column;
       width:100%;
     }
    }
    article h1 a {
      font-size: 12px;
    }
article.mybody  {
  display:flex;
  flex-wrap: wrap;
  @media(min-width:800px){
 flex-direction:column;
  width:100%;
  }
}

.mybody  {
  display:flex;
  flex-direction: column;
  padding:0 23px;
  @media(min-width:800px){
 flex-direction:column;
  width:100%;
  }
  @media(max-width:600px)  {
    padding:0;
  }
}


    section {
      display:flex;
      flex-direction: column;
     width:48%;
     height:auto;
     margin:0 1%;
     @media(max-width:600px)  {
       width:100%;
     }
    }

    a {
      font-weight:200;
      color: ${theme.colors.link};
      text-decoration: none;
      &:hover,
      &:focus {
        color: ${theme.colors.link};
      }
      &:hover {
      color: grey;
      }
    }

    h1 {
      font-size: 24px;
      color:red;
    }
    h2 {
      font-size: 17px;

    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Roboto Slab', serif;
      color: ${theme.colors.text};
      a {
        color: ${theme.colors.text};
        &:hover,
        &:focus {
          color: ${theme.colors.text};
        }
      }
    }
    ${bpMaxSM} {
      p,
      em,
      strong {
        font-size: 90%;
      }
}


    hr {
      margin: 50px 0;
      border: none;
      border-top: 1px solid ${theme.colors.gray};
      background: none;
    }
    em {
      font-family: ${fonts.regularItalic};
    }
    strong {
      em {
        font-family: ${fonts.semiboldItalic};
      }
    }
    input {
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};
      padding: 5px 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      font-family: ${fonts.regular};
      margin-top: 5px;
      ::placeholder {
        opacity: 0.4;
      }
    }
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
    }
    button {
      border-radius: 4px;
      opacity:1;
      border: none;
      background:black;
      color: ${theme.colors.white};
      padding: 5px 10px;
      cursor: pointer;
      border: 1px solid ${theme.colors.white};
      transition: all 150ms;
      :hover {
        background: ${lighten(0.05, theme.colors.primary)};
        border: 1px solid ${lighten(0.05, theme.colors.primary)};
      }
    }

    button.top {
      background:blue;
      border:black;
    }

    pre {
      background-color: #061526 !important;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px;
      overflow-x: auto;
      /* Track */
      ::-webkit-scrollbar {
        width: 100%;
        height: 5px;
        border-radius: 0 0 5px 5px;
      }
      ::-webkit-scrollbar-track {
        background: #061526;
        border-radius: 0 0 4px 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }
    }
  `
}

export default ({
  site,
  frontmatter = {},
  children,
  noFooter,
  noSubscribeForm,
}) => {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }

  }


  const [themeName, setTheme] = useState(initializeTheme)
  const [akzeptiertpraml, setAkzeptiert] = useState(true)

  const mach = () => {
    setAkzeptiert(true)
    if(typeof window === 'undefined') return
    localStorage.setItem('akzeptiertpraml',true)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let g = localStorage.getItem('akzeptiertpraml')

    if(g===null||g===false){
      setAkzeptiert(false)
    } else{
      setAkzeptiert(true)
    }

  }
  }, [])

  useEffect(() => {
    if(typeof window !== 'undefined') return
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)
  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
  }
  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={reset()} />
        <Global styles={getGlobalStyles(theme)} />



        <Container noHorizontalPadding
          css={css`
            display: flex;
            max-width:900px;
            margin:0 auto;
            flex-direction: column;

            border-left:30px gray solid;
            border-right:30px gray solid;
            @media(max-width:500px){
              border-left:10px gray solid;
              border-right:10px gray solid;
            }

          `}
        >
          <Header />
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="de" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
          </Helmet>
          {typeof window !== 'undefined' && !akzeptiertpraml
           &&
          <div
           css={css`
               background-color: black !important;
               padding: 20px 20px;
               width:100%;            `
           }
          >
             <Link style={{color:'white'}} to="/datenschutz">Datenschutzbestimmungen lesen -></Link>
             <p style={{color:'white'}}>Akzeptieren Sie unsere Datenschutzbestimmungen?{" "}
             <button style={{color:'black'}}onClick = {()=> mach() }>Ja</button><br/>
             Die Nutzung der Webseite auch ohne  Zustimmung gilt als Einverständnis mit unseren Datenschutzbestimmungen.
             </p>
             <br/>
             <p style={{color:'white'}}><b>Nein</b>?
             Sie finden auf der Datenschutzseite Links, mit deren Hilfe Sie die Datenerhebung stark
             einschränken können.</p><br/>
             <Link style={{color:'white'}}  to="datenschutz">Bestimmungen zur Datenerhebung anpassen -></Link>
          </div>

        }

          <MDXProvider components={mdxComponents}>
            <Fragment>{children}</Fragment>
          </MDXProvider>

          {!noFooter && (

            <Footer
              author={site.siteMetadata.author.name}
              noSubscribeForm={noSubscribeForm}
            />

          )}


    </Container>
      </Fragment>
    </ThemeProvider>

  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
