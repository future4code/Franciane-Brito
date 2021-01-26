import React, {useState, useEffect} from "react";
import axios from "axios";

function PokeCard() {
    const [pokemon, setPokemon] = useState()

   const pegaPokemon = (pokeName) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => {
            setPokemon(response.data)
          })
          .catch(err => {
            console.log('Não foi possivel', err);
          });
      };

    //DID MOUNT

 /*    useEffect(() => {
        pegaPokemon(pokemon)
      }) */

     /*  useEffect((props) => {
        pegaPokemon(props.pokemon)
      }) */

//DID UPDATE

useEffect((prevProps) => {
    console.log('Erro', prevProps)
    if (prevProps.pokemon !== pokemon) {
        pegaPokemon(pokemon.name);
      }
  }, [pokemon])

/* useEffect((prevProps) => {
    if (prevProps.pokemon !== props.pokemon) {
        pegaPokemon(props.pokemon);
      }
  }, [pokemon]) */

  /* const pokemon = this.state.pokemon; */

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );



  /*
  state = {
    pokemon: {}
  };
  componentDidUpdate(prevProps) {
    if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  }

  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    ); */
  
}

export default PokeCard;
