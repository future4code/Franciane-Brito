import React from 'react'
import Card from '@material-ui/core/Card';
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
margin: 20px 0;
width: 70vw;
border: 1px solid #fff;
&:hover{
   /*  transition-duration: 3s; */
   /*  border: 1px solid #c0c0c0; */
}
@media screen and (max-width: 500px) {
  width: 95vw;
  flex-direction: column;
  }
`
const StyledCardActions = styled(CardActions)`
  display: flex;
flex-direction: column;
@media screen and (max-width: 500px) {
  flex-direction: row;
  height: 60px;
  }
`
const StyledCardActionArea = styled.div`
width: 66vw;
padding: 7px;
word-wrap: break-word;
&:hover {
  background-color: #f0f0f0;
}
@media screen and (max-width: 500px) {
  width: 95vw;
  flex-direction: row;
  font-size: 10px;
  }
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
const StyledTypography = styled(Typography)`
@media screen and (max-width: 500px) {
  font-size: 20px;
  }
`


const CardPost = (props) => {
  let hours = Math.floor(Math.random() * 24)

  return (

    <StyledCard>
      <StyledCardActions>
        <StyledThumbUpAltIcon fontSize='large' onClick={props.positive} vote={props.vote} />
        <h3>{props.voteCount}</h3>
        <StyledThumbDownAltIcon fontSize='large' onClick={props.negative} vote={props.vote} />

      </StyledCardActions>

      <div onClick={props.click}>

        <StyledCardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <AccountCircleIcon fontSize={'large'} />

            </Button>
            <Typography size="small" color="primary">
              {props.name}
            </Typography>
            <p>Postado poru / HistoricRevisionist {hours} horas atrás</p>
          </CardActions>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <StyledTypography gutterBottom variant="h3" component="h2">
              {props.title}
            </StyledTypography>
            <StyledTypography variant="h4" color="textSecondary" component="p">
              {props.text}
            </StyledTypography>
          </CardContent>
        </StyledCardActionArea>
        <CardActions>
      
          <Button size="small" color="primary" >
            <ModeCommentIcon fontSize='large' margin='normal' />
            <p>{props.comments} Comentários</p>
          </Button>
        </CardActions>
      </div>
    </StyledCard>
    
  );
}
export default CardPost

