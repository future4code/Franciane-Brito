import React, { useEffect, useState } from 'react'
import PageHome from './Components/PageHome/PageHome'
import Styled from 'styled-components'
import CardMaches from './Components/PageMaches/CardMaches'

const ContainerApp = Styled.div`
display: flex;
justify-content: center;
align-items: center;
`

function App() {
  



  return (
    <ContainerApp>
   {/*    <PageHome /> */}
    <CardMaches />
    </ContainerApp>
  );
}

export default App;
