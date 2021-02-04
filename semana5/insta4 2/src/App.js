import React from 'react';
import Post from './components/Post/Post';
import './App.css';

class App extends React.Component {

  state = {

       postFeito: [ 

       { 
         nomeUsuario: 'paulinha',
         fotoUsuario: 'https://picsum.photos/50/50',
         fotoPost: 'https://picsum.photos/200/150'
       },

       {  
         nomeUsuario: 'carlos-2020',
         fotoUsuario: 'https://picsum.photos/id/1/50/50',
         fotoPost: 'https://picsum.photos/id/1/200/150'
       },

        { 
         nomeUsuario: 'luiza-254',
         fotoUsuario: 'https://picsum.photos/id/10/50/50',
         fotoPost: 'https://picsum.photos/id/16/200/150'
        }
      ],
      valorInputNomeUsuario: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: ''
    };
      
      adicionaPost = () => {
        const novoPost = {
          nomeUsuario: this.state.valorInputNomeUsuario,
          fotoUsuario: this.state.valorInputFotoUsuario,
          fotoPost: this.state.valorInputFotoPost
  };

  const postAtualizados = [...this.state.postFeito, novoPost];

  this.setState({ postFeito: postAtualizados });
      }


  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };
  
  render() {
    const listaDePost = this.state.postFeito.map((post) => {
      return (
        <Post nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
        />
      );
    });

    return (
      <div>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome Usuário"}
          />
          <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link Foto Usuário"}
            />
            <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
            />
            
            <button onClick={this.adicionaPost}>Publicar</button>
            </div>
            <div className={'container-posts'}>{listaDePost}</div>
            </div>
            );
          }
          
        }
        
        
      
  



export default App;
