import React from 'react'
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
    transition-duration: 3s;
    border: 1px solid #c0c0c0;
}
`
const StyledCardActions = styled(CardActions)`
display: flex;
flex-direction: column;
`
const StyledCardActionArea = styled.div`
width: 66vw;
padding: 7px;
word-break: break-all;
&:hover {
  background-color: #f0f0f0;
}
`



let numeros = Math.floor(Math.random() * 16)

const CardPost = (props) => {

  return (
    <StyledCard>
      <StyledCardActions>
        <ThumbUpAltIcon fontSize='large' onClick={props.positive} />
        {props.voteCount}
        <ThumbDownAltIcon fontSize='large' onClick={props.negative} />

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
            <p>Postado poru / HistoricRevisionist {numeros} horas atrás</p>
          </CardActions>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {props.text}
            </Typography>
          </CardContent>
        </StyledCardActionArea>
        <CardActions>
          {/*   <Button size="small" color="primary">
      </Button> */}
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

