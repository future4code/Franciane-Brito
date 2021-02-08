import React from 'react';
import Logo from '../images/labex4.png'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { goToHomePage, goToLoginPage, goToApplicationForm } from '../Routes/Coordinator'
import { useHistory } from "react-router-dom";

const ContainerHome = styled.header`
width: 92.5vw;
/* background: fixed; */
display: flex;
justify-content: space-between;
background-color: black;
padding-left: 100px;
align-items: center; 
height: 20vh;

box-shadow: 0px 0px 31px 2px rgba(0,0,0,0.62); 
`
const Image = styled.img`
height: 20vh

`
const ConteinerButtons = styled.nav`
display: flex;
justify-content: space-around;
width: 45vw;
`
const StyledButton = styled(Button)`
width: 10vw;
height: 8vh;
`
const Tel = styled.p`
color: white;
width: 9.5vw;
font-family: Arial;
`
const HeaderHome = () => {
  const history = useHistory()

  return (
    <ContainerHome>
      <div>
        <Image src={Logo} alt='' />
      </div>

      <ConteinerButtons>
        <Tel>(31) 99856- 4589</Tel>
        <StyledButton variant="outlined" color="primary" onClick={() => goToHomePage(history)}>
          Home
      </StyledButton>
        <StyledButton variant="outlined" color="primary" onClick={() => goToLoginPage(history)}>
          Login
      </StyledButton>

      <StyledButton variant="outlined" color="primary" onClick={() => goToApplicationForm(history)}>
          Viagens
      </StyledButton>
     
      </ConteinerButtons>

    </ContainerHome>
  );
}

export default HeaderHome;


