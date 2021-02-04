import React from 'react'
import HeaderHome from './HeaderHome'
import FooterHome from './FooterHome'
import ContentHome from './ContentHome'
import Styled from 'styled-components'
import Footer from './FooterHome'


const ContainerPage = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #F3F1F2;
border: solid 1px gray;
width: 25vw;
border-radius: 20px;
-webkit-box-shadow: 4px 1px 30px -3px rgba(0,0,0,0.75); 
box-shadow: 4px 1px 30px -3px rgba(0,0,0,0.75);
`

function PageHome() {
  return (
    <ContainerPage>
      <HeaderHome />
      <ContentHome />
{/*       <FooterHome /> */}
    </ContainerPage>
  )
}

export default PageHome;