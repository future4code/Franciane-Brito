/* import { Container, TextareaAutosize } from '@material-ui/core'; */
import React, { useContext, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerFeed, ContainerCard, StyledCard, CardActions, AddPostButton } from './Styled'
import { gotoPostPage, gotoCreatePostPage } from '../../Router/Coordinator'
import useProtectedPage from '../../Hooks/useProtectedPage';
import GlobalStateContext from '../../Global/GlobalStateContext';
import useForm from '../../Hooks/UseForm'
import FormCreatePost from './FormCreatePost'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import { votesCounter } from '../../services/user';
import CardPost from '../../Components/CardPost';
import Skeleton from '@material-ui/lab/Skeleton'
import { Add } from '@material-ui/icons';
const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const { states, setters, requests } = useContext(GlobalStateContext);
  const [form, onChange, clearFields] = useForm({ busca: "" })
  useEffect(() => {
    requests.getPosts()
  }, [requests])

  const filterJobs = () => {

    let filteredPosts = states.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(form.busca.toLowerCase()) ||
        post.text.toLowerCase().includes(form.busca.toLowerCase())
    )
    return filteredPosts;
  };

  const filteredJobs = filterJobs();

  return (
    <ContainerFeed>
      <ContainerCard>

        <TextField
          name={"busca"}
          value={form.busca}
          onChange={onChange}
          label={"Buscar"}
          id={"outlined-basic"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          type={"busca"} 
          />
            
      </ContainerCard>



      {states.posts.length === 0 ? (

        <div>
          <Skeleton animation="wave" width={1360} height={404} />
          <Skeleton animation="wave" width={1360} height={404} />
          <Skeleton animation="wave" width={1360} height={404} />
          <Skeleton animation="wave" width={1360} height={404} />
          <Skeleton animation="wave" width={1360} height={404} />
          <Skeleton animation="wave" width={1360} height={404} />
          <Skeleton animation="wave" width={1360} height={404} />
        </div>
      ) : (
          filteredJobs.map((post) => {
            return (
              /*     <ContainerCard key={post.id} onClick={() => gotoPostPage(history, post.id)}> */
              <CardPost key={post.id}
                voteCount={post.votesCount}
                positive={() => { votesCounter(post.id, +1) }}
                negative={() => { votesCounter(post.id, -1) }}
                name={post.username}
                title={post.title}
                text={post.text}
                comments={post.commentsCount}
                click={() => gotoPostPage(history, post.id)}
                vote={post.userVoteDirection}
              />
              /*  <button onClick={() => { votesCounter(post.id, 0) }}>Retirar meu voto</button> */
            )
          })
        )}

      <AddPostButton color={'primary'} onClick={() => { gotoCreatePostPage(history) }}>
        <Add />
      </AddPostButton>

    </ContainerFeed>
  );
}

export default FeedPage;

