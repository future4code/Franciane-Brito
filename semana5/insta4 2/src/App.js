import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      <Post
         nomeUsuario={'carlos-2020'}
         fotoUsuario={'https://picsum.photos/id/1/50/50'}
         fotoPost={'https://picsum.photos/id/1/200/150'}
       />
        <Post
         nomeUsuario={'luiza-254'}
         fotoUsuario={'https://picsum.photos/id/10/50/50'}
         fotoPost={'https://picsum.photos/id/16/200/150'}
       />




      </div>
    );
  }
}

export default App;
