import Typography from 'typography'
import '../fonts/fonts.css'

export const fonts = {
  regular: '"Roboto Slab",serif',
  regularItalic: 'Bitter',
  semibold: 'Bitter',
  semiboldItalic: 'Bitter',
  cursive: 'Bitter',
  serif: 'Bitter',
  boldItalic: 'Bitter',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.regular, 'serif'],
  bodyFontFamily: [fonts.regular, 'serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',

  overrideStyles: ({ rhythm }) => ({
    a: {
      fontSize: '14px',
      color:'rebeccapurple',

    },
     h1: {
      color: 'hsla(0,0%,0%,0.75)',


    },
    span: {
      color: 'black',
    },

    h2: {
      color: 'hsla(0,0%,0%,0.775)',

    },
    h3: {
      color: 'hsla(0,0%,0%,0.8)',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
