
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const StyledCardActions = styled(CardActions)`
  background-color: #333;
`;
const StyledCardActionArea = styled(CardActionArea)`
  border: solid 1px #0000ff;
`;
const StyledCard = styled(Card)`
  width: 40vw;
`;


export default function CardCandidate(props) {
  return (
    <StyledCard>
      <StyledCardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2>{props.name},  </h2> {props.age} anos
          </Typography>
          <Typography color="textSecondary" component="h2">
            Profissão: {props.profession}
          </Typography>
          <Typography color="textSecondary" component="p">
            País: {props.country}
          </Typography>
          <Typography color="textSecondary" component="p">
            Explicação: {props.applicationText}
          </Typography>
        </CardContent>
      </StyledCardActionArea>
      <StyledCardActions>
        <Button variant="contained" color="primary" onClick={props.approve}>
          Aprovar
        </Button>
        <Button variant="contained" onClick={props.cancel}>Cancelar</Button>
      </StyledCardActions>
    </StyledCard>
  );
}


