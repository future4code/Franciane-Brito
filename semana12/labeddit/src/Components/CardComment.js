import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const StyledCard = styled(Card)`
display: flex;
margin: 20px;
width: 70vw;
border: 1px solid #fff;
&:hover{
   /*  border: 1px solid #c0c0c0; */
}
`
const Linha = styled.div`
margin: 10px;
height: 10vh;
width: 4px;
background-color: #b0b0b0;
&:hover {
  background-color: #333;
}
`
const StyledCardActions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;
/* background-color: #f0f0f0; */
width: 2vw;
`
const ContainerVotes = styled.div`
padding-top: 10px;
height: 5vh;
/* background-color: #f5f5f5; */
display: flex;
align-items: center;
width: 80vw;
`
const CountVotes = styled.p`
padding: 10px;
display: flex;
align-items: center;
`
const CardComment = (props) => {
  return (
    <StyledCard>
      <StyledCardActions>
        <AccountCircleIcon fontSize='large' color="primary" />
        <Linha></Linha>
      </StyledCardActions>


      <div>
        <CardActionArea>
          <CardActions>

            <Button size="small" color="primary">
              {props.name}
            </Button>
          </CardActions>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
            {props.text}
          </Typography>
          </CardContent>
        </CardActionArea>

        <ContainerVotes>
          {/*  <StyledCardActions> */}
                <ThumbUpAltIcon /* color="primary" */ fontSize='large' onClick={props.positive}/>
                    <CountVotes>{props.voteCount}</CountVotes>
                    <ThumbDownAltIcon /* color="primary" */ fontSize='large'onClick={props.negative}/>
              
            {/* </StyledCardActions> */}
        </ContainerVotes>
      </div>
    </StyledCard>
  );
}

export default CardComment