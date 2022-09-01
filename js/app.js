
const nombrePokemon = document.querySelector("#nombrePokemon")
const imagenPokemon = document.querySelector("#imagenPokemon")
const pesoPokemon = document.querySelector("#pesoPokemon")
const alturaPokemon = document.querySelector("#alturaPokemon")
const tipoPokemon = document.querySelector("#tipoPokemon")
const habilidadesPokemon = document.querySelector("#habilidadesPokemon")
const debilidadesPokemon = document.querySelector("#debilidadesPokemon")


let pokemones;


 fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")

  .then(response => response.json())
  .then((data) => {
    pokemones = data;
    dibujar(pokemones);
});

let dibujar = (pokemonesArr) => {

    document.querySelector("#resultados").innerHTML="";

    for(let i in pokemonesArr){
        // console.log(pokemones[i]);

        let col = document.createElement("div");
        col.classList.add("col","col-lg-3");

        let card = document.createElement("div");
        card.classList.add("card","mt-5");
        card.setAttribute("data-number", pokemonesArr[i].number);

        let img = document.createElement("img")
        img.src=pokemonesArr[i].ThumbnailImage;
        img.classList.add("card-img-top");
        img.setAttribute("data-bs-toggle","modal");
        img.setAttribute("data-bs-target","#miModal");

        card.append(img);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h4 = document.createElement("h4");
        h4.classList.add("card-title")
        h4.innerHTML=pokemonesArr[i].name;
        cardBody.append(h4);
        
        let h5 =document.createElement("h5");
        h5.classList.add("card.text")
        h5.style.textAlign = "right";
        h5.innerHTML=pokemonesArr[i].number;
        cardBody.append(h5);

        let h6 =document.createElement("h6");
        h6.classList.add("card.text")
        h6.innerHTML=pokemonesArr[i].type;
        cardBody.append(h6);


    
        card.addEventListener("click", ()=> mostrarModal(card.dataset.number));

        card.append(cardBody)
        col.append(card);

        document.querySelector("#resultados").append(col);
    } 



}

const llenarModal =(filtropokemon) => {

  const {number,name,ThumbnailImage,weight,height,type,abilities,weakness} = filtropokemon[0];
 
  nombrePokemon.innerText = name;
  imagenPokemon.setAttribute("src", ThumbnailImage);
  pesoPokemon.innerText =`Peso:  ${weight}` ;
  alturaPokemon.innerText =`Altura:  ${height}` ;
  tipoPokemon.innerText =`Tipo:  ${type}` ;
  habilidadesPokemon.innerText =`Habilidad:  ${abilities}` ;
  debilidadesPokemon.innerText =`Debilidad:  ${weakness}` ;
};

const mostrarModal = (number) => {
    // console.log(modal.classList)
    
    nombrePokemon.innerText ="";
    pesoPokemon.innerText = "";
    alturaPokemon.innerText = "";
    tipoPokemon.innerText = "";
    habilidadesPokemon.innerText = "";
    debilidadesPokemon.innerText = "";

    let filtro = pokemones.filter((pokemon)=>{
        return pokemon.number == number; 

    });

    llenarModal(filtro);
} 