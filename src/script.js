//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

// Daqui para baixo voce ira escrever
// o código para resolver o desafio

var now = 1;

async function getPokemonData(now){
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/'+ now).then((res) => res.json() );
  return pokemon;
}

function previousPokemon() {
  console.log(now);

  if (now == 1){
    now = 1025;
  } else{
    now--;
  }

  getPokemonData(now).then(
    (pokemon) =>{
      changeText('nome', pokemon.name);
      changeImage('img_sprite_front_default', pokemon.sprites.front_default);
    }
  )

}

function nextPokemon() {
  console.log(now);

  if (now == 1025){
    now = 1;
  } else{
    ++now;
  }

  getPokemonData(now).then(
    (pokemon) => {
      changeText('nome', pokemon.name);
      changeImage('img_sprite_front_default', pokemon.sprites.front_default);
    }
  )

}
