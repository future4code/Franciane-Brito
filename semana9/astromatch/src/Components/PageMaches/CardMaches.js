import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const ContainerContent = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #F2F1F3;
    -webkit-box-shadow: 4px 7px 26px 11px; 
    box-shadow: 4px 7px 26px 11px;
    padding: 10px;
`

const Name = Styled.p`
    position: absolute;
    margin-top: -90px;
    padding: 5px;
`

const Description = Styled.p`
    width: 20vw;
    padding: 5px;
    position: absolute;
    margin-top: -70px;
    font-size: 13px;
`
const Image = Styled.img`
    width: 23vw;
    height: 70vh;
`

function CardMaches() {
    const [perfil, setPerfil] = useState([])

    const pegaPerfil = () => {
        axios.
            get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')
            .then((response) => {
                setPerfil(response.data.profile)
                /*    console.log(response.data.profile) */
            })
            .catch((error) => {
                console.log(error)
            })
    }

    console.log('Não deu dessa vez:', perfil)
    return (
        <ContainerContent>
            <h2>Ola Mundo</h2>
            <Image src={perfil.photo} alt='' />
            <Name>{perfil.name}, <span>{perfil.age}</span></Name>

            <Description>{perfil.bio}</Description>

            {/*     <Footer teste={() => { pegaPerfil() }} /> */}
        </ContainerContent>
    )

}

export default CardMaches;