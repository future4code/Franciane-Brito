import React, { useState, useEffect } from 'react';
import { ContainerContent, Form, StyledTextField, ContainerInput, StyledCard } from './Styled'
import Button from '@material-ui/core/Button'
/* import useForm from '../../Hooks/UseForm'; */
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import RegisterForm from './RegisterForm';

const RegisterPage = () => {

 /*  useProtectedPage() */
  /* const history = useHistory()
  
  const [form, onChange, clearFields] = userForm({
      email: '',
      password: '',
      username: ''
  })
  
  const onClickButton = (e) => {
    e.preventDefault()
    
  } */
/* 
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') */
  const history = useHistory()

 /*  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  } */

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      history.push('/feed')
    }
  }, [history])

 /*  const login = () => {
    const body = {
      email: email,
      password: password,
      username: username
    }
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup',
        body
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        history.push('/feed')
        console.log('Deu certo')
      })
      .catch((err) => {
        console.log(err)
      })
  } */



  return (
    <ContainerContent>
<h1>Faça parte dessa rede ;)  </h1>

<RegisterForm/>
 

    </ContainerContent>
  );
}

export default RegisterPage;