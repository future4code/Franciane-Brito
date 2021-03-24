import styled from 'styled-components'
import TextField from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  color: 22FFFF;
  @media screen and (max-width: 500px) {
  flex-direction: column;
  padding-top: 20vh;
  justify-content: center;
  }
 `
export const Form = styled.form`
  margin: 10px;
  width: 80vw;
  max-width: 650px;
  @media screen and (max-width: 500px) {
    max-width: 450px;
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
export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 35vw;
  height: 50vh;
  margin-left: 100px;
`

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  margin: 10px;
  width: 70vw;
`

export const Image = styled.img`
@media screen and (max-width: 500px) {
  width: 65vw;
  }
`