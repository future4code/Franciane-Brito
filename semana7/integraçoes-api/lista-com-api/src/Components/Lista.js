import axios from "axios";
import React from 'react';
import Styled from 'styled-components';

const Formuario = Styled.form`
border: 1px solid gray;
width: 40vw;
display: flex;
flex-direction: column;
padding: 20px;
margin: 20px;
`
const Container = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class Lista extends React.Component {
  render() {

    return (
      <Container>
        <h2>Usuários Cadastrados:</h2>
        <div>
        <p>{this.props.nome}<button>x</button></p>
        </div>
      </Container>

    );
  }
}