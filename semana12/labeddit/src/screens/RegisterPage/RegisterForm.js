import React from 'react';
import { Form, ContainerInput } from './Styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import useForm from '../../Hooks/UseForm';
import {register} from '../../services/user'

const RegisterForm = () => {
    const [form, onChange, clearFields] = useForm({ email: "", username: "", password: "" })
    const history = useHistory()

/* 
    const register = () => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup',
            form
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

    

    const onSubmitForm = (e) => {
        e.preventDefault()
        register(form, clearFields, history)
    }

    return (
        <ContainerInput>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    id={"outlined-basic"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />

                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Name"}
                    id="outlined-basic"
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"name"}
                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    id="outlined-basic"
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />



                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    margin={"normal"}
                    size={'large'}
                    color={"primary"}
                >
                    Entrar
                </Button>
            </Form >
        </ContainerInput>
    );
}
export default RegisterForm;