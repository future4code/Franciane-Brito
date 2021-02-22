import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToTripCandidate } from "../../Routes/Coordinator";
import axios from 'axios'
import styled from "styled-components"
import Card from "../../Components/Card";
import HeaderHome from '../../Components/HeaderHome'

const ContainerTrips = styled.div`
border: solid black 1px;
background-color: #f0f0f0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const ApplicationFormPage = () => {
  const history = useHistory()
  const [trips, setTrips] = useState([])

  useEffect(() => {
    listTrips()
  }, [])

  const listTrips = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/trips")
      .then((res) => {
        setTrips(res.data.trips)
        console.log(res.data.trips)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ContainerTrips>
        <HeaderHome />

      <div>
        <h1>Viagens Disponiveis :)</h1>
  
      </div>

      <div>
        {trips.map((trip) => {
          return (
            <div>
              <Card
                tytle={trip.name}
                date={trip.date}
                planet={trip.planet}
                duration={trip.durationInDays}
                description={trip.description}
                button={() => goToTripCandidate(history, trip.id)}
                content={"Quero ir"}
              />

            </div>
          )
        })}

      </div>


    </ContainerTrips>
  );
}

export default ApplicationFormPage;


