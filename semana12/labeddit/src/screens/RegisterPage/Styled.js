import styled from 'styled-components'
import TextField from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #F0F0F0; */
  height: 80vh;
  color: 22FFFF;
`
export const Form = styled.form`
margin: 10px;
  width: 80vw;
  max-width: 450px;
/*   padding: 20px 0;
  margin: 30px 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55vw;
  height: 55vh;
  border: solid 1px #d0d0d0;
  box-shadow: 0px 0px 95px 6px rgba(0, 0, 0, 0.34);
  border-radius: 5px; */
`
export const StyledTextField = styled(TextField)`
  width: 40vw;
  height: 5vh;
`
export const ContainerInput = styled.div`
  margin: 10px;
`
export const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items
  flex-direction: column;
  margin: 10px;
  width: 70vw;
  border: solid 1px gray;
  height: 50vh;
`
