import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import DescriptionIcon from "@material-ui/icons/Description";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import TodayIcon from "@material-ui/icons/Today";
import ImageCard from "../images/viagem.webp"

const StyledCard = styled(Card)`
margin: 15px;
  font-family: "Poppins", sans-serif;
  background-color: red;
  display: flex;
  width: 80vw;
  height: 50vh;
  border-radius: 50px;
  border: solid 1px #fff;
  border-radius: 10px;
  &:hover {
    border: solid 1px #d0d0d0;
    -webkit-box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.34);
    box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.34);
  }
`;

const Tytle = styled.h3`
  font-size: 25px;
  color: #0000ff;
  border-bottom: solid 1px #fff;
  font-family: "Montserrat", sans-serif;
  &:hover {
    border-bottom: solid 1px #d0d0d0;
  }
`;

const ContentCard = styled.div`
  margin: 35px;
  width: 75vw;
`;
const ContainerTytle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
`;

const Description = styled.div`
  color: black;
  font-family: sans-serif;
  font-size: 17px;
  height: 15vh;
  border: solid 1px #f0f0f0;
  padding: 2px;
`;

const Image = styled.img`
  border-radius: 5px;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  flex-direction: column-reverse;
  width: 15vw;
  border-left: solid 1px #f0f0f0;
  background-color: #030303;
  color: #fff;
`;

export default function MediaCard(props) {
  return (
    <StyledCard>
      <div>
        <Image src={ImageCard} alt="Imagem espaço" />
      </div>
      <ContentCard>
        <ContainerTytle>
          <Tytle>{props.tytle}</Tytle>
          <p>
            <TodayIcon fontSize="small" />
           {props.date}
          </p>
        </ContainerTytle>
        <p>
          <EmojiEmotionsIcon fontSize="small" /> Para {props.planet}
        </p>
        <p>
          <CalendarViewDayIcon fontSize="small" /> Durante {props.duration} dias
        </p>
        <Description>
          
          <DescriptionIcon fontSize="small" /> {props.description}
        </Description>
      </ContentCard>

      <StyledCardActions>
        <Button variant="outlined" size="large" color="primary" onClick={props.button}>
         {props.content}
        </Button>
        <p>{props.duration} dias viajando conosco!</p>
      </StyledCardActions>
    </StyledCard>
  );
}
