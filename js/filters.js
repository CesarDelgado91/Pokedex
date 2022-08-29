

let buscar = (evt) => {
    evt.preventDefault();
    let name = document.querySelector("#inputBusqueda").value;
    let filtrados = pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(name);
    });
    // console.log(filtrados);

   dibujar(filtrados);
  }
  
  document.querySelector("#busqueda").addEventListener("submit", buscar); 
  
// document.querySelector("#busqueda button").addEventListener("click", buscar);
// keydown, keyup, keypress
  document.querySelector("#inputBusqueda").addEventListener("keyup", buscar);

  