import React from 'react';
import { Form, ContainerInput } from './Styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import useForm from '../../Hooks/UseForm'
import axios from 'axios';
import { baseAxios, BASE_URL } from '../../Contants/urls';

const FormCreatePost = () => {
   /*  const history = useHistory() */
    const [form, onChange, clearFields] = useForm({ text: "", title: "" })

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, baseAxios)
          .then((res) => {
              alert("Seu comentário foi publicado :)")
              clearFields()
          /*   detailsPost() */
             /*  console.log(res.data) */
          })
          .catch((err) => {
            alert(err.response.data)
            console.log(err)
          })
      }

    const onSubmitForm = (e) => {
        e.preventDefault()
        createPost()
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Título"}
                    id={"outlined-basic"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"title"} />

                <TextField
                    name={"text"}
                    value={form.text}
                    onChange={onChange}
                    label={"Conteúdo do post"}
                    id="outlined-basic"
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"text"} />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    margin={"normal"}
                    size={'large'}
                    color={"primary"}>
                    Postar
                </Button>
            </form >
        </div>
    );
}
export default FormCreatePost;