import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { goToListTripsPage } from "../../Routes/Coordinator";
import axios from 'axios'
import Header from '../../Components/HeaderHome'
import Card from "@material-ui/core/Card";
import styled from 'styled-components'
import DescriptionIcon from "@material-ui/icons/Description";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import TodayIcon from "@material-ui/icons/Today";
import CardCandidate from "../../Components/CardCandidate"

const StyledCard = styled(Card)`
margin: 35px;
padding: 15px;
  font-family: "Poppins", sans-serif;
  background-color: red;
  width: 80vw;
  height: 50vh;
  border-radius: 50px;
  border: solid 1px #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 6px rgba(0, 0, 0, 0.34);
  & {
    border: solid 1px #d0d0d0;
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

const Description = styled.div`
  color: black;
  font-family: sans-serif;
  font-size: 17px;
  height: 15vh;
  border: solid 1px #f0f0f0;
  padding: 2px;
`;

const ConteinerDetails = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


function TripDetailsPage(props) {
  const history = useHistory()
  const params = useParams()
  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    details()
  }, [])

  const details = () => {

    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/trip/${params.id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        })
      .then((res) => {
        setTrip(res.data.trip)
        setCandidates(res.data.trip.candidates)
      })
      .catch((err) => {
      })
  }

  /// Aprovar cadidato
  const candidate = (id, option) => {
    const body = {
      approve: option
    }

    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/trips/${params.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        details()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ConteinerDetails>
      <Header />

      <button onClick={() => goToListTripsPage(history)}>
        Voltar Viagens
      </button>

      <div>
        <StyledCard>
          <Tytle>Nome: {trip.name}</Tytle>
          <p>
            <TodayIcon fontSize="small" />
             Data: {trip.date}
          </p>
          <p>
            <EmojiEmotionsIcon fontSize="small" /> Planeta: {trip.planet}
          </p>
          <p>
            <CalendarViewDayIcon fontSize="small" /> Duração: {trip.durationInDays} dias
           </p>
          <Description>
            <DescriptionIcon fontSize="small" />Descrição: {trip.description}
          </Description>
        </StyledCard>
        <h2>Candidatos :)</h2>
        <p>Numero de candidatos: {candidates.length}</p>
        <div>
          {candidates.map((candidato) => {
            return (
              <CardCandidate
                name={candidato.name}
                age={candidato.age}
                applicationText={candidato.applicationText}
                country={candidato.country}
                profession={candidato.profession}
                approve={() => { candidate(candidato.id, true) }}
                cancel={() => { candidate(candidato.id, false) }}

              />
            )
          })}
        </div>

      </div>
    </ConteinerDetails>
  );
}

export default TripDetailsPage;