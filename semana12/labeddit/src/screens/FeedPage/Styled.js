import Styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'

export const ContainerFeed = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #f0f0f0;  
width: 100vw;
padding-top: 12vh;
min-height: 100vh;
`
export const ContainerCard = Styled.div`
display: flex;
justify-content: center;
flex-direction: column;
border: 2px solid #f0f0f0; 
width: 45vw; 
margin: 15px;
padding:10px;
`
export const ContainerComment = Styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px solid #f0f0f0; 
width: 45vw; 
margin: 15px;
padding: 10px;
`

export const FormComment = Styled.form`
/* display: flex;
flex-direction: column; */
align-items: center;
border: 2px solid #fff; 
justify-content: center;
width: 65vw; 
margin: 15px;
border-radius: 15px;
`

export const StyledCard = Styled(Card)`
display: flex;
justify-content: center;

margin: 20px;
width: 70vw;
border: 1px solid #fff;
&:hover{
    transition-duration: 3s;
}

`

export const CardActions = Styled.div`
  display: flex;

`
export const AddPostButton = Styled(Fab)`
position: fixed !important;
right: 30px;
bottom: 30px;
z-index: 30;
`
