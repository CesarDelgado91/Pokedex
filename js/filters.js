let buscar = (evt) => {
  
    let name = document.querySelector("#inputBusqueda").value.toLowerCase();
    let filtrados = pokemones.filter((pokemon) => {
      
      return pokemon.name.toLowerCase().includes(name);
    });
 dibujar(filtrados);
  };
  
  
  //document.querySelector("#busqueda").addEventListener("submit", buscar);
document.querySelector("#busqueda button").addEventListener("click", buscar);
// keydown, keyup, keypress
document.querySelector("#inputBusqueda").addEventListener("keyup", buscar);