import styled from '@emotion/styled'

export default styled.ol`
padding:0;
margin:0;
width: 100%;
display:flex;
flex-direction: column;

li  {
  font-size: 16px;

  width:100%;
}
li p {
  font-size: 16px;

}
@media (max-width:800px){
  li {
      font-size: 14px;
  }
  li p {
    font-size: 14px;
  }

}
`
