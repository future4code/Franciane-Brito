import React, { useContext, useEffect, useState } from 'react';
import { ContainerFeed, ContainerCard, ContainerComments, ContainerPage, StyledTextField, StyledCard  } from './Styled'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useProtectedPage from '../../Hooks/useProtectedPage';
import { baseAxios, BASE_URL } from '../../Contants/urls';
import GlobalStateContext from '../../Global/GlobalStateContext';
import useForm from '../../Hooks/UseForm';
import { Button, TextField } from '@material-ui/core';
import { createComment, votesCounter, votesCounterComments } from '../../services/user';
import CardPost from '../../Components/CardPost'
import CardComment from '../../Components/CardComment';

const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  const [postComments, setPostComments] = useState([])
  const { states, setters, requests } = useContext(GlobalStateContext)
  const [form, onChange, clearFields] = useForm({ text: "" })


  useEffect(() => {
    detailsPost()
  }, [])

  const detailsPost = () => {
    axios.get(`${BASE_URL}/posts/${params.id}`, baseAxios)
      .then((res) => {
        setPostComments(res.data.post.comments)
        setters.setPost(res.data.post)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderCardscomments = postComments.map((post) => {
    return (
      <CardComment key={post.id}
        name={post.username}
        title={post.title}
        text={post.text}
        positive={() => { votesCounterComments(post.id, +1, params.id, detailsPost) }}
        negative={() => { votesCounterComments(post.id, -1, params.id, detailsPost) }}
        voteCount={post.votesCount}
      />
    /*   <button onClick={() => {votesCounterComments(post.id, 0, params.id, detailsPost )}}>Retirar ação</button> */
    )
  })

  const onSubmitForm = (e) => {
    e.preventDefault()
    createComment(form, clearFields, detailsPost, params.id)
  }
  console.log(states.post)
  return (
    <ContainerPage>

    <ContainerFeed>
      

      {/*  <button onClick={() => {votesCounter(params.id, 0, detailsPost)}}>Retirar meu voto</button> */}

      {/* <form onSubmit={onSubmitForm}>

        <StyledTextField
          name={"text"}
          value={form.text}
          onChange={onChange}
          label={"Deixe seu comentário"}
          id={"outlined-basic"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"text"} />

        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          margin={"normal"}
          size={'large'}
          color={"primary"}>
          Comentar
            </Button>

      </form> */}
      {/*     </ContainerComment> */}
     {/*  <ContainerComments> */}

        <StyledCard >
        <CardPost
        voteCount={states.post.votesCount}
        positive={() => { votesCounter(params.id, +1, detailsPost) }}
        negative={() => { votesCounter(params.id, -1, detailsPost) }}
        name={states.post.username}
        title={states.post.title}
        text={states.post.text}
        comments={states.post.commentsCount}
      />




        {renderCardscomments}
        </StyledCard >
      {/* </ContainerComments> */}
    </ContainerFeed>
    </ContainerPage>
  );
}

export default PostPage;