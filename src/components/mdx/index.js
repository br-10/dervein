import React from 'react'

import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'
//import Divi from './Divi'

//import MyImg from './MyImg'
import MyVideos from './MyVideos'
import MySpan from './MySpan'
//import Mysection from './Mysection'
import Blockquote from './blockquote'
//import MyArticle from './MyArticle'
import Subtitleh3 from './Subtitleh3'
import MyUl from './MyUl'
import MyOl from './MyOl'


export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <Subtitleh3 {...props} />,
  p: props => <Paragraph {...props} />,
  iframe: props => <MyVideos {...props} />,
  ul: props => <MyUl {...props} />,
  ol: props => <MyOl {...props} />,
  span: props => <MySpan {...props}/>,
  blockquote: props => <Blockquote {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
