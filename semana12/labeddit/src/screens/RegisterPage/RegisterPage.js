import React, { useEffect } from 'react';
import { ContainerContent, ContainerImage, ContainerForm, Image } from './Styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import RegisterForm from './RegisterForm';
import ImageLogo2 from '../../images/imagelogo2.png'
import RedeSocial from '../../images/redesocial.gif'
import { Container } from '@material-ui/core';
const RegisterPage = () => {

 
  const history = useHistory()


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      history.push('/')
    }
  }, [history])

  return (
    <ContainerContent>
      <ContainerImage>
        <Image src={RedeSocial} alt='' />
      </ContainerImage>
 

      <ContainerForm>
        <h1 color={'primary'}>Faça parte dessa rede!</h1>
        <RegisterForm />
        <Button color={'secondary'} >Já tem uma conta? Entrar</Button>
      <p> Copyright © seu site 2021. </p>  
      </ContainerForm>


    </ContainerContent>
  );
}

export default RegisterPage;