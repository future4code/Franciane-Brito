import React from 'react';
import Logo from '../images/labex.png'
import styled from 'styled-components'

const ContainerHome = styled.header`
display: flex;
justify-content: space-between;
/* margin: 10px; */
background-color: #1E2B71;
padding: 10px;
align-items: center;
`
const Image = styled.img`
width: 7vw;
`
const ConteinerButtons = styled.nav`
display: flex;
`
const Button = styled.button`
width: 5vw;
`
const HeaderHome = () => {
  return (
    <ContainerHome>
        <div>
            <Image src={Logo} alt='' />
        </div>

    <ConteinerButtons>
        <button>Home</button>
        <button>Login</button>
        <button>É novo por aqui?</button>
        </ConteinerButtons>

    </ContainerHome>
  );
}

export default HeaderHome;


/* 
ABOUT PAGE 
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToHomePage } from "../../routes/Coordinator";

const AboutPage = () => {
  const history = useHistory();
  const pathParams = useParams();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (pathParams.linguagem !== "pt" && pathParams.linguagem !== "en") {
      history.push("/erro");
    }
  }, [pathParams, history]);

  return (
    <div>
      <h1>{pathParams.linguagem === "pt" ? "Página Sobre" : "About Page"}</h1>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default AboutPage;


*/




/* 
HOME PAGE

import React from "react";
import { useHistory } from "react-router-dom";
import { goToAboutPage, goToContactsPage } from "../../routes/Coordinator";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Home Page</h1>
      
      <button onClick={() => goToContactsPage(history)}>
        Ir para Contatos
      </button>
    </div>
  );
};

export default HomePage;

*/