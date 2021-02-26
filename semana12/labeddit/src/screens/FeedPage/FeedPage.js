/* import { Container, TextareaAutosize } from '@material-ui/core'; */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerFeed, ContainerCard } from './Styled'
import { gotoPostPage } from '../../Router/Coordinator'
import useProtectedPage from '../../Hooks/useProtectedPage';
import GlobalStateContext from '../../Global/GlobalStateContext';
import useForm from '../../Hooks/UseForm';
import FormCreatePost from './FormCreatePost'
import { votesCounter } from '../../services/user';
import CardPost from '../../Components/CardPost';

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const { states, setters, requests } = useContext(GlobalStateContext);
  /* const [posts, setPosts] = useState([]) */
 /*  const [form, onChange, clearFields] = useForm({ title: "", text: "" }) */

  useEffect(() => {
    requests.getPosts()
  }, [requests])

  const renderCardPost = states.posts.map((post) => {
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
      />

        /* <div>
          <button onClick={() => { votesCounter(post.id, +1) }}>+</button>
          <p>{post.votesCount}</p>
          <button onClick={() => { votesCounter(post.id, -1) }}>-</button>
          <button onClick={() => { votesCounter(post.id, 0) }}>Retirar meu voto</button>
        </div>
        <div onClick={() => gotoPostPage(history, post.id)}>
          <div>
          </div>
          <h3>{post.username}</h3>
          <div>{post.text}</div>
          <div>

            <div>{post.commentsCount} Comentarios</div>
          </div>
        </div> */
      /* </ContainerCard> */
    )
  })

  return (
    <ContainerFeed>
      <div>
        
        <FormCreatePost />
      </div>
     {/*  <form>
        <input placeholder="Buscar" />
      </form> */}

      {renderCardPost}

    </ContainerFeed>
  );
}

export default FeedPage;