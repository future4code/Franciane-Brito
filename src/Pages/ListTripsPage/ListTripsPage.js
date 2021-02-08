//Para vermos todas as viagens  



import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage, goToCreateTripPage, goToHomePage } from "../../Routes/Coordinator";
import styled from "styled-components"
import { useProtectedPage } from "../../Hooks/useProtectedPage"

const ContainerTrip = styled.div`
border: solid black 1px;

`
/* 
const Image = styled.img``
const ContainerTrip = styled.div``
const ContainerTrip = styled.div``
const ContainerTrip = styled.div``
 */



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
  console.log("Trips", trips)


  const cardTrip = trips.map((trip) => {
    return (
      <ContainerTrip>
        <div>{/* <img src={trips} alt=""/> */}</div>
        <div>
          <h4>{trip.planet}</h4>
          <span>{trip.durationInDays}</span>
          <p>{trip.name}</p>
        </div>

        <div>
          <span>{trip.date}</span>
          <h4>{trip.description}</h4>
          <button>Detalhes</button>
        </div>

      </ContainerTrip>
    )
  })
  



  return (
    <div>
      <h1>Lista de viagens</h1>
      <button onClick={() => goToTripDetailsPage(history)}>
        Detalhes Viagem
      </button>
      <button onClick={() => goToCreateTripPage(history)}>
        Criar nova Viagem
      </button>
      <button onClick={() => goToHomePage(history)}>
        Sair
      </button>
          <div> 
      {cardTrip}
      </div>
    </div>
  );
}

export default ListTripsPage;




/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";

export const GetTripDetailPage = () => {
  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-teixeira-epps/trip/dYQMafr821vsZby0xRkr",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Get trip detail</h1>
      <h2>{trip.name}</h2>
      <p>{trip.description}</p>
    </div>
  );
};

*/