import styled from 'styled-components'
import TextField from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import ImageImageNetwork from '../../images/network.png'

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
    background-image: url(ImageNetwork);
`
export const Form = styled.form`
  margin: 10px;
  width: 80vw;
  max-width: 450px;
`
export const SignUpConteinerButton = styled.div`
  width: 80vw;
  max-width: 450px;
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ContainerInput = styled.div`
/* padding: 20px 0;
margin: 30px 0;
background-color: #f0f0f0;
font-family: "Poppins", sans-serif;
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
export const Image = styled.img`
width: 35vw;
/* @media screen and (max-width: 500px) {
  & {
    width: 90vw;
  }
} */

`