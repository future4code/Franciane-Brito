import Styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export const ContainerFeed = Styled.div`
display: flex;
min-height: 100vh;
align-items: center;
flex-direction: column;
background-color: #f0f0f0;
width: 100vw;
padding-top: 12vh;
`
export const ContainerCard = Styled.div`
display: flex;
justify-content: center;
flex-direction: column;
border: 2px solid #f0f0f0; 
background-color: #f0f0f0; 
width: 45vw; 
margin: 15px;
padding:10px;
`

export const StyledTextFieldComment = Styled(TextField)`
width: 65vw; 

`
export const FormComment = Styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px solid #fff; 
width: 65vw; 
margin: 15px;
border-radius: 15px;
@media screen and (max-width: 500px) {
    width: 85vw;
    }
`
export const ContainerPage = Styled.div`
/* background-color: #0000FF;
width: 100vw;
display: flex;
justify-content: center;
align-items: center; */
`
export const StyledTextField = Styled.textarea`
height: 40vh;
`
export const StyledCard = Styled(Card)`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
margin: 15px;
width: 70vw;
border: 1px solid #fff;
&:hover{
    transition-duration: 0.5s;
    border: 1px solid #c0c0c0;
}
@media screen and (max-width: 500px) {
    width: 95vw;
    }
`