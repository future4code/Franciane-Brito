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
    border-bottom: 1px solid #c0c0c0;
}
@media screen and (max-width: 500px) {
  width: 90vw;
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
background-color: #f0f0f0;
width: 2vw;
/* width: 66vw;
padding: 7px;
word-wrap: break-word; */
`
const StyledCardContent = styled(CardContent)`
min-height: 8vh; 
width: 66vw;
padding: 10px;
word-wrap: break-word;
`

const ContainerVotes = styled.div`
padding-top: 10px;
height: 40px;
display: flex;
align-items: center;
width: 80vw;
`
const CountVotes = styled.div`
padding: 10px;
display: flex;
align-items: center;
`
const StyledThumbUpAltIcon = styled(ThumbUpAltIcon)`
  color: ${(props) => {
    if (props.vote === 1) {
      return "#3b5998"
    } else {
      return "#9f9f9f"
    
    }
}}
`
const StyledThumbDownAltIcon = styled(ThumbDownAltIcon)`
  color: ${(props) => {
    if (props.vote === -1) {
      return "#FF0000"
    } else {
      return "#9f9f9f"
    
    }
}}
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

          <StyledCardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
            {props.text}
          </Typography>
          </StyledCardContent>
        </CardActionArea>

        <ContainerVotes>
                <StyledThumbUpAltIcon fontSize='large' onClick={props.positive} vote={props.vote}/>
                    <CountVotes>{props.voteCount}</CountVotes>
                    <StyledThumbDownAltIcon fontSize='large'onClick={props.negative} vote={props.vote}/>
              
        </ContainerVotes>
      </div>
    </StyledCard>
  );
}

export default CardComment