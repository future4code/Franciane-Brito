import React, { useEffect, useState } from 'react'
import PageHome from './Components/PageHome/PageHome'
import Styled from 'styled-components'
import CardMaches from './Components/PageMaches/CardMaches'
import HeaderHome from './Components/PageHome/HeaderHome'
import HeaderMaches from './Components/PageMaches/HeaderMaches'
import axios from 'axios'


const ContainerApp = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

function App() {
  const [page, setPage] = useState(true)  





  const mudaTela = () => {
    setPage(false)
  
  }

  const voltaHome = () => {
    setPage(true)
  }

  return (
    <ContainerApp>
      
      {page ? <HeaderHome click={() => {mudaTela()}}/> : <HeaderMaches click={() => {voltaHome()}}/>}
      {page ? <PageHome /> : <CardMaches />}
  {/*   <button onClick={() => {mudaTela()}} >Tela</button> */}
    </ContainerApp>
  );
}

export default App;