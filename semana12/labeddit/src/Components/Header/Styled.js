import Styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';

export const ContainerHeader = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: gray; 
height: 15vh;
`
export const ContainerButton = Styled.div`
padding: 0 25px;
`

export const Tytle = Styled.h1`
padding: 0 25px;
`

export const StyledAppBar = Styled(AppBar)`

display: flex;
justify-content: center;
` 

export const Img = Styled.img`
padding-top: 10px;
width: 10vw; 
@media screen and (max-width: 500px) {
    width: 25vw;
    }
`
