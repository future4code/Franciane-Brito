import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const ContainerApp = styled.div`
  margin: 0;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerFooter = styled.div`
  height: 60vh;
  margin: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  width: 100vw;
color: #F2F2F2;
`;

const ContainerTopcs = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  width: 50vw;
  margin: 20px;
`;

const ConatainerTerms = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20vw;
  font-size: 10px;
  margin: 10px;
`;
const SmallTerm = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;

const ContainerNetwork = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  margin: 10px 30px;
  width: 18vw;
`;

const Title = styled.h5`
  display: flex;
  justify-content: end;
  font-size: 11px;
  margin: 4px;

  &:hover {
    color: #0000ff;
  }
`;
const Items = styled.p`
  display: flex;
  justify-content: end;
  font-size: 11px;
  margin: 4px;
`;

export default function Footer() {
  return (
    <ContainerApp className="App">
      <ContainerFooter>
        <ContainerTopcs>
          <div>
            <Title>Empresa</Title>
            <Items>Sobre</Items>
            <Items>App</Items>
            <Items>Blog</Items>
            <Items>Como trabalhamos</Items>
          </div>
          <div>
            <Title>Contato</Title>
            <Items>Ajuda</Items>
            <Items>Perguntas Frequentes</Items>
            <Items>Imprensa</Items>
            <Items>Parceiros</Items>
          </div>
          <div>
            <Title>Mais</Title>
            <Items>Taxa de companhias</Items>
            <Items>Dicas para ser escolhido(a)</Items>
          </div>
          <div>
            <Title>Sugestões</Title>
            <Items>(31)99455-6288</Items>
          </div>
        </ContainerTopcs>

        <ConatainerTerms>
          <SmallTerm>Privacidade</SmallTerm>
          <SmallTerm>Termos e Condições</SmallTerm>
          <SmallTerm>©2021 LabeX</SmallTerm>
        </ConatainerTerms>

        <SmallTerm>
          Os resultados das buscas por passagens aéreas utilizam dados
          fornecidos pelas agências e associados dados esses de uso exclusivo de
          Labex. Buscas são de dados fornecidos por Labex e associados.
        </SmallTerm>
        <ContainerNetwork>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </ContainerNetwork>
      </ContainerFooter>
    </ContainerApp>
  );
}




/* 

//Style.css
.App {
  font-family: sans-serif;
  text-align: center;
}
 */