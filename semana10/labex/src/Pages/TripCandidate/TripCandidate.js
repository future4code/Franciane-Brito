import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { goToTripCandidate, goToApplicationForm } from "../../Routes/Coordinator"
import axios from 'axios'
import useForm from "../../Hooks/UseForm"
import TextField from '@material-ui/core/TextField'
import HeaderHome from '../../Components/HeaderHome'
import Card from "@material-ui/core/Card";
import styled from 'styled-components'
import Button from "@material-ui/core/Button";

const ContainerContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #f0f0f0;
height: 100vh;
`
const Form = styled.div`
padding: 20px 0;
  margin-bottom: 15px;
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
const ContainerInput = styled.div`
margin: 10px;

`



const TripCandidate = () => {
  const history = useHistory()
  const params = useParams()
  const [trip, setTrip] = useState({})

  const [form, onChange, clearFields] = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: ""
  })
  const onClickButton = (event) => {
    event.preventDefault()
    details()
   
    clearFields()
  }



  useEffect(() => {
    details()
  }, [])
  console.log("Id", params.id)

  const details = () => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/trips/${params.id}/apply`,
      form)
      .then((res) => {
        setTrip(res.data.trip)
        alert("Você acaba de completar sua candidatura para esta viagem :)")
      })
      .catch((err) => {
        console.log("Id2" + params.id + ")")
        console.log(err)
      })
  }
  return (
    <ContainerContent>
      <HeaderHome />

      <h2>Candidate-se para uma Viagem!</h2>
      <Form>
        <form onSubmit={onClickButton}>

      {/*     <ContainerInput> */}

            <StyledTextField
               id="filled-basic"
              label="Nome"
              variant="filled"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 caracteres"}
            />
        {/*   </ContainerInput>

          <ContainerInput>
 */}
            <StyledTextField
              label="Idade"
              variant="filled"
              name="age"
              value={form.age}
              onChange={onChange}
              required
              type={"number"}
            />
          {/* </ContainerInput>

          <ContainerInput> */}
            <StyledTextField
              label="Descrição"
              variant="filled"
              name="applicationText"
              value={form.applicationText}
              onChange={onChange}
              required
              title={"O nome deve ter no mínimo 3 caracteres"}
            />

        {/*   </ContainerInput>
          <ContainerInput> */}

            <StyledTextField
              label="Profissão"
              variant="filled"
              name="profession"
              value={form.profession}
              onChange={onChange}
              required
              /*    pattern={"^.{3,}"} */
              title={"O nome deve ter no mínimo 3 caracteres"}
            />

         {/*  </ContainerInput>
          <ContainerInput> */}
            <StyledTextField
              /*  id="filled-basic" */
              label="País"
              variant="filled"
              name="country"
              value={form.country}
              onChange={onChange}
              required
            /*    pattern={"^.{3,}"} */
            /*   title={"O nome deve ter no mínimo 3 caracteres"} */
            />

         {/*  </ContainerInput> */}
          <Button variant="outlined" size="large" color="primary" onClick={onClickButton}>Cadastrar</Button>


        </form>


      </Form>
    </ContainerContent>
  )
}

export default TripCandidate;