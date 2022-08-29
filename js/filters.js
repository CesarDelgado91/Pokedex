

let buscar = (evt) => {
    evt.preventDefault();
    let name = document.querySelector("#inputBusqueda").value;
    let filtrados = pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(name);
    });
    // console.log(filtrados);

   dibujar(filtrados);
  }

 let buscarTipo = (categoria)=>{
    let filtro = pokemones.filter((pokemon)=>{
        return pokemon.type == categoria; 

    });
    dibujar(filtro)
 }

  document.querySelector("#busqueda").addEventListener("submit", buscar); 
  
// document.querySelector("#busqueda button").addEventListener("click", buscar);
// keydown, keyup, keypress
  document.querySelector("#inputBusqueda").addEventListener("keyup", buscar);
 
  document.querySelector("#home").addEventListener("click", function (){dibujar(pokemones)} );
  document.querySelector("#Fire").addEventListener("click", function (){buscarTipo("fire")} );
  document.querySelector("#Electric").addEventListener("click", function (){buscarTipo("electric")} );
  document.querySelector("#Water").addEventListener("click", function (){buscarTipo("water")} );
  document.querySelector("#Ground").addEventListener("click", function (){buscarTipo("ground")} );
  document.querySelector("#Fire").addEventListener("click", function (){buscarTipo("fire")} );
  document.querySelector("#Flying").addEventListener("click", function (){buscarTipo("flying")} );
  document.querySelector("#Ice").addEventListener("click", function (){buscarTipo("ice")} );

  document.querySelector("#Grass").addEventListener("click", function (){buscarTipo("grass")} );
  document.querySelector("#Poison").addEventListener("click", function (){buscarTipo("poison")} );
  document.querySelector("#Bug").addEventListener("click", function (){buscarTipo("bug")} );
  document.querySelector("#Dark").addEventListener("click", function (){buscarTipo("dark")} );
  document.querySelector("#Steel").addEventListener("click", function (){buscarTipo("steel")} );
  document.querySelector("#Fighting").addEventListener("click", function (){buscarTipo("fighting")} );
  document.querySelector("#Psychic").addEventListener("click", function (){buscarTipo("psychic")} );
  document.querySelector("#Rock").addEventListener("click", function (){buscarTipo("rock")} );
  document.querySelector("#Ghost").addEventListener("click", function (){buscarTipo("ghost")} );
  document.querySelector("#Normal").addEventListener("click", function (){buscarTipo("normal")} );
  
  document.querySelector("#alfabeto").addEventListener("click",()=>{
    pokemones.sort(function(a,b){
      return a.name > b.name ? 1 : -1;
    });
    dibujar(pokemones);
  })