import axios from 'axios'
import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import { goToListTripsPage } from "../../Routes/Coordinator"
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import TextField from '@material-ui/core/TextField'
import useForm from "../../Hooks/UseForm"
import { axiosConfig, createTripUrl } from '../../Parameters'
import styled from 'styled-components'
import Header from '../../Components/HeaderHome'
import Button from "@material-ui/core/Button"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 115vh;
`
const Form = styled.div`
  padding: 20px 0;
  margin: 25px 0;
  font-family: "Poppins", sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 70vh;
  border: solid 1px #d0d0d0;
  box-shadow: 0px 0px 95px 6px rgba(0, 0, 0, 0.34);
  border-radius: 5px;
`
const StyledTextField = styled(TextField)`
  width: 70vw;
`
/* const ContainerInput = styled.div`
  margin: 10px;

` */
const StyledInputLabel = styled(InputLabel)`
width: 70vw;
`
const StyledSelect = styled(Select)`
width: 70vw;
`
const StyledMenuItem = styled(MenuItem)`
width: 70vw;
`

const CreateTripPage = () => {
  const history = useHistory()
  useProtectedPage()

  const [form, onChange, clearFields] = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: 0
  })

  const onClickButton = (event) => {
    event.preventDefault()
    createTrip()
    clearFields()
  }
  useEffect(() => {
    createTrip()
  }, [])

  const createTrip = () => {
    axios.post(createTripUrl, form, axiosConfig)
      .then((res) => {
        alert('Nova viagem criada')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ContainerContent>
      <Header />
      <button onClick={() => goToListTripsPage(history)}>
        Voltar Viagens
        </button>
      <hr />

      <div>
        <Form onSubmit={onClickButton}>

          <StyledTextField
            id="filled-basic"
            label="Nome"
            variant="filled"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            pattern={"^.{5,}"}
            title={"O nome deve ter no mínimo 3 caracteres"}
          />


          <StyledInputLabel id="demo-simple-select-filled-label" value={form.planet}>Planeta</StyledInputLabel>
          <StyledSelect
            onChange={onChange}
            name="planet"
            labelId="demo-simple-select-filled-label"
            /* id="demo-simple-select-filled" */
            value={form.planet}

          >
            <StyledMenuItem value="">
              <em>Planetas</em>
            </StyledMenuItem>
            <StyledMenuItem value={"Terra"}>Terra</StyledMenuItem>
            <StyledMenuItem value={"Netuno"}>Netuno</StyledMenuItem>
            <StyledMenuItem value={"Vênus"}>Vênus</StyledMenuItem>
            <StyledMenuItem value={"Marte"}>Marte</StyledMenuItem>
            <StyledMenuItem value={"Júpiter"}>Júpiter</StyledMenuItem>
            <StyledMenuItem value={"Saturno"}>Saturno</StyledMenuItem>
            <StyledMenuItem value={"Urano"}>Urano</StyledMenuItem>
            <StyledMenuItem value={"Mercúrio"}>Mercúrio</StyledMenuItem>
          </StyledSelect>

          <StyledTextField
            id="date"
            label="Data"
            variant="filled"
            value={form.date}
            onChange={onChange}
            name="date"
            type="date"
            defaultValue="2017-05-24"

            InputLabelProps={{
              shrink: true,
            }}
          />

          <StyledTextField
            /*   id="filled-basic" */
            label="Descrição"
            variant="filled"
            name="description"
            value={form.description}
            onChange={onChange}
            required
            pattern={"^.{30,}"}
            title={"O nome deve ter no mínimo 30 caracteres"}
          />

          <StyledTextField
            /*  id="filled-basic" */
            label="Duração em dias"
            /*  variant="filled" */
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            required
            pattern={"^.{50,}"}
            title={"A duaração deve ter no mínimo 50 dias"}
            type="number"
          />
          <Button variant="outlined" size="large" color="primary">Cadastrar</Button>
        </Form>
      </div>

    </ContainerContent>
  )
}

export default CreateTripPage

