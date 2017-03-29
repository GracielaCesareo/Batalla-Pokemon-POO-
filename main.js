function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  };
}

var pokemons = [];

function crearPokemon() {
  var nombrePokemon = document.getElementById("nombrePokemon");
  var colorPokemon = document.getElementById("colorPokemon");
  var puntosAtaque = document.getElementById("puntosAtaque");

  var pokemon = new Pokemon (nombrePokemon.value,
                             colorPokemon.value,
                             parseInt(puntosAtaque.value)
                             )
   pokemons.push(pokemon);
}

function mostrarPokemon() {
  var listaPokemons  = document.getElementById('listaPokemons');
  var lista1 = document.getElementById('lista1');
  var lista2 = document.getElementById('lista2');
  var pokemon1 = document.createElement("option");
  var pokemon2 = document.createElement("option");

  pokemons.forEach(function(pokemon){
    pokemon1.innerText = pokemon.nombre;
    lista1.appendChild(pokemon1);
    });

  pokemons.forEach(function(pokemon){
    pokemon2.innerText = pokemon.nombre;
    lista2.appendChild(pokemon2);
  });

  listaPokemons.appendChild(lista1);
  listaPokemons.appendChild(lista2);
}

function pelearPokemons() {
  var pokemon1 = document.getElementById('lista1').selectedIndex;
  var pokemon2 = document.getElementById('lista2').selectedIndex;

  if (pokemons[pokemon1].nombre == pokemons[pokemon2].nombre) {
    alert("No puedes pelear contra el mismo pokemon");
  }
  else if (pokemons[pokemon1].nombre != pokemons[pokemon2].nombre) {
    pokemons[pokemon1].pelear(pokemons[pokemon2]);

    var batallaPokemon = document.getElementById('batallaPokemon');
    batallaPokemon.innerHTML = pokemons[pokemon1].nombre + " ataco a " + pokemons[pokemon2].nombre + " y " + pokemons[pokemon2].nombre + " tiene " + pokemons[pokemon2].vida + " de vida restante"
  }
}
