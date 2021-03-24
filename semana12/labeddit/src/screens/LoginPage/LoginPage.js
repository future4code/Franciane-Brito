import React, { useEffect } from 'react';
import { ContainerContent, SignUpConteinerButton, Image } from './Styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import { gotoRegisterPage } from '../../Router/Coordinator'
import LoginForm from './LoginForm'
import RedLogo from '../../images/logored.png'
const LoginPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      history.push('/')
    }
  }, [history])
 
  return (
      <ContainerContent>
        <h1><Image src={RedLogo} alt=''/></h1>
        <LoginForm />
 
      <SignUpConteinerButton>
        <p>{/* <span>Esqueceu a senha?</span>   */}       <span>Não tem conta? Cadastre-se</span></p>
      <Button 
        type={"submit"}
        fullWidth
        variant={"outlined"} 
        margin={"normal"}
        size={'large'}
        color={"primary"}
         onClick={() => {gotoRegisterPage(history)}}>
        Cadastre-se
      </Button>
      <p> Copyright © seu site 2021. </p>  
      </SignUpConteinerButton>
    </ContainerContent >
    );
}

export default LoginPage;