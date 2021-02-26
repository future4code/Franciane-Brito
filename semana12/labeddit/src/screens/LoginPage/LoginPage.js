import React, { useEffect } from 'react';
import { ContainerContent, SignUpConteinerButton } from './Styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import { gotoRegisterPage } from '../../Router/Coordinator'
import LoginForm from './LoginForm'

const LoginPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      history.push('/feed')
    }
  }, [history])

  return (
      <ContainerContent>
        <h1>Digite seu E-amail e Senha :)</h1>
        <LoginForm />
 
      <SignUpConteinerButton>
        <p>Não possui conta?</p>
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
      </SignUpConteinerButton>
    </ContainerContent >
    );
}

export default LoginPage;