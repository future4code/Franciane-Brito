import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage, goToCreateTripPage, goToHomePage } from "../../Routes/Coordinator";
import styled from "styled-components"
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import Card from '../../Components/Card'
import Header from '../../Components/HeaderHome'
import Button from "@material-ui/core/Button";

const ContainerPage = styled.div`
border: solid black 1px;
background-color: #f0f0f0;
`
const ContainerTrip = styled.div`
color: #333;
`
const ContainerListCard = styled.div`
display: grid;
color: #F5F5F5;
justify-items: center;
`

function ListTripsPage() {
  const history = useHistory()
  const [trips, setTrips] = useState([])
  useProtectedPage()

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


  const cardTrip = trips.map((trip) => {
    return (
      <ContainerTrip>
        <Card 
        tytle={trip.name}
        date={trip.date}
        planet={trip.planet}
        duration={trip.durationInDays}
        description={trip.description}
        button={() => goToTripDetailsPage(history, trip.id)}
        content={"Detalhes"}
        />
      </ContainerTrip>
    )
  })

  return (
    <ContainerPage>
      <Header />
      
      
      <ContainerListCard>
      <Button variant="outlined" size="large" color="primary" onClick={() => goToCreateTripPage(history)}>
        Criar nova Viagem
      </Button>
        {cardTrip}
      </ContainerListCard>
  
    </ContainerPage>
  );
}

export default ListTripsPage;

