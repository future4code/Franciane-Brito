import React, { useState } from 'react'
import Styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import axios from 'axios'
const Footer = Styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 25vw;
height: 15vh;
padding: 10px;
`

const Heart = Styled.div`
background-color:  #FFF;
width: 30px;
height: 30px;
padding: 10px;
border-radius: 80px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px green;
&:hover {
    background-color:  green;  
    transform: scale(1.1)
}
`

const Eliminar = Styled.div`
background-color:  #FFF;
width: 30px;
height: 30px;
padding: 10px;
border-radius: 80px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px red;
&:hover {
    background-color:  red;  
    transform: scale(1.1)
}
`

function FooterHome(props) {
  const [match, setMatch] = useState(false)

  const mudaMatch = (id) => {
    setMatch(true)
    escolhePessoa(id)
  }

  const escolhePessoa = (id) => {
    const body = {
      id: id,
      choice: match
    }

    axios.
      post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)
      .then((response) => {
        console.log(response)
        alert('Deu tudo certo')
        setMatch(true)
      })
      .catch((erro) => {
        console.log('Não adicionaou mais maches', erro)
      })
  }

  return (
    <Footer>
      <Eliminar>
        <CloseOutlinedIcon onClick={props.teste} />
      </Eliminar>
      <Heart onClick={() => { mudaMatch(props.id) }}>
        <FavoriteIcon onClick={props.teste} />
      </Heart>
    </Footer>
  )
}

export default FooterHome;

