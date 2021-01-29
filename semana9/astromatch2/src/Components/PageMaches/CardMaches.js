import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const ContainerMaches = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F2F1F3;
`
const ContainerContent = Styled.div`
  display: flex;
  padding: 5px;
  height: 7vh;
  margin: 5px;
` 
const Name = Styled.p`
  padding: 5px;
`
const Image = Styled.img`
  width: 3.5vw;
  height: 8vh;
  padding: 4px;
  border-radius: 60px;
`
const Button = Styled.button`
  -webkit-box-shadow: inset -1px 3px 8px 5px #F1527B, 2px 5px 16px 0px #F1527B, 5px 5px 3px 5px rgba(0,0,0,0); 
  box-shadow: inset -1px 3px 8px 5px #FF7F50, 2px 5px 16px 0px #FF7F50, 5px 5px 3px 5px rgba(0,0,0,0);
  width: 16vw;
  height: 7vh;
  border-radius: 6px;
  margin: 15px;
  background-color: #FF7F50;
  border: solid 1px #F1527B;
  &:hover {
    background-color: #F1527B;
    transform: scale(1.1);
    color: #FFF;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
const Card = Styled.button`
  width: 30vw;
  height: 90vh;
  display: flex:
  justify-content: center;
  align-items: center;
  border: solid 1px #FF7F50;
`

function CardMaches(props) {
    const [perfil, setPerfil] = useState([])

    const listMaches = () => {
        axios.
            get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')
            .then((response) => {
                setPerfil(response.data.matches)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        listMaches()
    }, [])

    const deleteMeches = () => {
        axios.
            put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear')
            .then((response) => {
                listMaches()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <ContainerMaches>
            <Card>
                {perfil.map((item) => {
                    return (
                        <ContainerContent>
                            <Image src={item.photo} alt='' />
                            <Name>{item.name}</Name>
                        </ContainerContent>
                    )
                })}
            </Card>

            {  <Button onClick={() => { deleteMeches() }}>Apagar Maches</Button>}
        </ContainerMaches>
    )
}

export default CardMaches;