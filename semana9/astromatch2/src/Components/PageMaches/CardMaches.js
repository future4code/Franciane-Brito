import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const ContainerMaches = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #F2F1F3;
-webkit-box-shadow: 4px 7px 26px 11px; 
box-shadow: 4px 7px 26px 11px;
padding: 10px;
`

const ContainerContent = Styled.div`
    display: flex;
    width: 35vw;
  border: solid 1px gray;
    align-items: center;
    /* -webkit-box-shadow: 4px 7px 26px 11px; 
    box-shadow: 4px 7px 26px 11px;
    color: green; */
    padding: 10px;
`

const Name = Styled.p`
    padding: 5px;
`

const Description = Styled.p`
    width: 20vw;
    padding: 5px;
   
    font-size: 13px;
`
const Image = Styled.img`
    width: 10vw;
    height: 15vh;
    padding: 10px;
    border-radius: 20px;
`
const Button = Styled.button`
-webkit-box-shadow: inset -1px 3px 8px 5px #FFF, 2px 5px 16px 0px #FFF, 5px 5px 3px 5px rgba(0,0,0,0); 
box-shadow: inset -1px 3px 8px 5px #FFF, 2px 5px 16px 0px #FFF, 5px 5px 3px 5px rgba(0,0,0,0);
width: 16vw;
height: 7vh;
border-radius: 6px;
`



function CardMaches(props) {
    const [perfil, setPerfil] = useState([])

    const testePerfil = () => {
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
        testePerfil()
    }, [])

    const apagaMeches = () => {
        axios.
            put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear')
            .then((response) => {
                testePerfil()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <ContainerMaches>
            <p>
                {perfil.map((item) => {
                    return (
                        <ContainerContent>
                            <Image src={item.photo} alt='' />
                            <Name>{item.name}</Name>
                        </ContainerContent>
                    )
                })}
            </p>

            {  <Button onClick={() => { apagaMeches() }}>Apagar Maches</Button>}
        </ContainerMaches>
    )
}

export default CardMaches;