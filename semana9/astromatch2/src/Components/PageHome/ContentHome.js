import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import Footer from './FooterHome'

const ContainerContent = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #F2F1F3;
  padding: 10px;
`
const Name = Styled.p`
  color: #FF7F50;
`
const Description = Styled.p`
  width: 23vw;
  color: #333;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Image = Styled.img`
  width: 30vw;
  height: 55vh;
`

function ContentPage() {
    const [perfil, setPerfil] = useState([])

    const pegaPerfil = () => {
        axios.
            get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
            .then((response) => {
                setPerfil(response.data.profile)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        pegaPerfil()
    }, [])

    return (
        <ContainerContent>
            <Image src={perfil.photo} alt='' />
            <Name>{perfil.name}, <span>{perfil.age}</span></Name>

            <Description>{perfil.bio}</Description>

            <Footer
                teste={() => { pegaPerfil(perfil.id) }}
                id={perfil.id} />
        </ContainerContent>
    )
}

export default ContentPage;