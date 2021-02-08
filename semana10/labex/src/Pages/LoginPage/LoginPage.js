import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage, goToListTripsPage } from "../../Routes/Coordinator";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
/* import Skeleton from '@material-ui/lab/Skeleton';*/
import Header from '../../Components/HeaderHome'

const ContainerContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #4791db;
height: 100vh;
`
const Form = styled.div`
padding: 20px 0;
  margin: 30px 0;
  font-family: "Poppins", sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55vw;
  height: 70vh;
  border: solid 1px #d0d0d0;
  box-shadow: 0px 0px 95px 6px rgba(0, 0, 0, 0.34);
  border-radius: 5px;
`
const StyledTextField = styled(TextField)`
width: 40vw;
`
const ContainerInput = styled.div`
margin: 10px;
`
const StyledCard = styled(Card)`
display: flex;
justify-content: center;
align-items
flex-direction: column;
margin: 10px;
width: 70vw;
border: solid 1px gray;
height: 50vh;
`
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
     if (token !== null) {
       history.push("/list-trips")
     }
  }, [history])

  const login = () => {
    const body = {
      email: email,
      password: password
    }
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/login',
        body
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        history.push("/list-trips")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ContainerContent>
      <Header />
      <Form>
      <h1>Digite seu E-amail e Senha :)</h1>
        <ContainerInput >
        <StyledTextField id="outlined-basic" label="E-mail" variant="outlined" value={email} onChange={handleEmail} placeholder='E-mail' />
        </ContainerInput>

        <ContainerInput >
        <StyledTextField id="outlined-basic" label="Senha" variant="outlined" value={password} onChange={handlePassword} placeholder='Senha' />
        </ContainerInput>
        <Button variant="outlined" size="large" color="primary" onClick={login}>
        Entrar
        </Button>
      </Form>

    </ContainerContent>
  );
}

export default LoginPage;