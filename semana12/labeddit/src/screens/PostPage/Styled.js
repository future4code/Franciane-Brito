import Styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export const ContainerFeed = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #f0f0f0;
width: 100vw;
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

export const ContainerComment = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* background-color: pink;   */
border: 2px solid #f0f0f0; 
width: 85vw; 
margin: 15px;
padding:10px;
`
export const ContainerComments = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* background-color: pink;  */ 
border: 2px solid #f0f0f0; 
width: 85vw; 
margin: 15px;
padding:10px;
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
`