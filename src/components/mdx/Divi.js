import styled from '@emotion/styled'

const MySection styled.div`
display:flex;
flex-direction:column;

width: 46%;
margin: 2% 0;
border:1px red solid;
font-family: 'Roboto Slab',serif;
.html5-video-container {
  width:49%;
}

h2 {
  font-size:40px;

}

a {
  color:red;
}
@media (max-width:800px){
width: 100%;

}
`
export default MySection
