import React from 'react';
import { useHistory } from "react-router-dom";
import { goToAboutPage, goToLoginPage, goToApplicationForm } from "../../Routes/Coordinator";
import Header from '../../Components/HeaderHome'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ImageS from "../../images/saturno.webp"
import ImageStars from "../../images/ceu-estrelado.jpg"
import ImageT from "../../images/sistema-solar.webp"

const ContentPage = styled.div`
  margin: 0;
`;

const ImageTopo = styled.img`
  background-image: url(ImageTopo);
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 91vh;
  width: 100vw;
  margin: 0;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const ConteinerTytle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TytleTopo = styled.h3`
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 2px 2px #132235;
  /* margin: 10px; */
  padding-bottom: 30vh;
  font-size: 40px;
  color: #fff;
  width: 75vw;
  word-spacing: 9px;
  text-align: center;
`;
const StyledButton = styled(Button)`
  width: 27vw;

`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
border: solid 1px #f0f0f0;

`;

const Image = styled.img`
  width: 35vw;
margin: 30px 0;
`;

const Text = styled.p`
  width: 45vw;
  font-size: 20px;
`;

const HomePage = () =>  {
  const history = useHistory()

  return (
    <div>


      <Header />

 
    <ContentPage>
      <ContainerImage>
        <ConteinerTytle>
          <TytleTopo>
            Conosco você terá a chance de realizar seus sonhos... 
          </TytleTopo>
          <StyledButton variant="contained" color="primary">
            Viagens
          </StyledButton>
        </ConteinerTytle>
        <ImageTopo src={ImageT} alt={""} />
      </ContainerImage>

      <ContainerText>
        <Text>
          <h3>Planeje sua aventura com alguém</h3>
          Planeje sua aventura com alguém Compartilhe suas viagens com quem
          quiser e colabore com os seus companheiros de aventuras.
        </Text>
        <div>
          <Image src={ImageStars} alt={""} />
        </div>
      </ContainerText>

      <ContainerText>
        <div>
          <Image src={ImageS} alt={""} />
        </div>
        <Text>
          <h3>Tenha tudo organizado</h3>
          Nós importamos os detalhes da sua reserva e organizamos tudo em um
          itinerário.
        </Text>
      </ContainerText>

      <ContainerText>
        <Text>
          <h3>Liberte o Astronauta que você é</h3>
          Enquanto vocẽ não viaja com a gente veja algumas fotos tiradas por
          nossos artronautas.
        </Text>
        <div>
          <Image src={ImageS} alt={""} />
        </div>
      </ContainerText>
    </ContentPage>
    </div>
  );
}

export default HomePage;