import React from 'react';
import { Form, ContainerInput } from './Styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import useForm from '../../Hooks/UseForm'
import { login } from '../../services/user'

const LoginForm = () => {
    const history = useHistory()
    const [form, onChange, clearFields] = useForm({ email: "", password: "" })

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clearFields, history)
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
                    type={"email"} />

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
                    type={"password"} />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    margin={"normal"}
                    size={'large'}
                    color={"primary"}>
                    Entrar
                </Button>
            </Form >
        </ContainerInput>
    );
}
export default LoginForm;