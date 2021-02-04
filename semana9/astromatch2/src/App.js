import React, { useState } from 'react'
import Styled from 'styled-components'
import CardMaches from './Components/PageMaches/CardMaches'
import HeaderHome from './Components/PageHome/HeaderHome'
import HeaderMaches from './Components/PageMaches/HeaderMaches'
import ContentHome from './Components/PageHome/ContentHome'

const Page = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F3F1F2;
  border: solid 1px #F1527B;
  width: 32vw;
  border-radius: 10px;
  -webkit-box-shadow: 4px 1px 30px -3px #F1527B; 
  box-shadow: 4px 1px 30px -3px #F1527B;
`
const ContainerApp = Styled.div`
  display: flex;
  justify-content: center;
  background-color: #F1527B;
  background: -moz-linear-gradient(#F1527B, #F36360, #F68044);
`

function App() {
  const [page, setPage] = useState(true)

  const returnMaches = () => {
    setPage(false)
  }

  const returnHome = () => {
    setPage(true)
  }

  return (
    <ContainerApp>
      <Page>
        {page ? <HeaderHome click={() => { returnMaches() }} /> : <HeaderMaches click={() => { returnHome() }} />}
        {page ? <ContentHome /> : <CardMaches />}
      </Page>
    </ContainerApp>
  );
}
export default App;