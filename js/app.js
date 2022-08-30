
const modal = document.querySelector('#modal')

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

        card.append(img);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h4 = document.createElement("h4");
        h4.classList.add("card-title")
        h4.innerHTML=pokemonesArr[i].name;
        cardBody.append(h4);
        
        let h5 =document.createElement("h5");
        h5.classList.add("card.text")
        h5.innerHTML=pokemonesArr[i].number;
        cardBody.append(h5);

        let h6 =document.createElement("h6");
        h6.classList.add("card.text")
        h6.innerHTML=pokemonesArr[i].type;
        cardBody.append(h6);


        //  let a = document.createElement("a");
        // a.setAttribute("href","#")
        // a.classList.add("btn","btn-primary");
        // a.innerHTML="Informacion";
        // a.setAttribute("data-number",pokemonesArr[i].number);
        // a.dataset.name=pokemonesArr[i].name;
        // a.dataset.type=pokemonesArr[i].type;

        // a.addEventListener("click",function(evt){
        //     evt.preventDefault();
        //     alert(`${evt.target.dataset.name},  ${evt.target.dataset.number}, ${evt.target.dataset.type} `);
        // }); 

        // cardBody.append(a);

        card.addEventListener("click", ()=> mostrarModal(card.dataset.number));

        card.append(cardBody)
        col.append(card);

        document.querySelector("#resultados").append(col);
    } 



}

const mostrarModal = (number) => {
    // console.log(modal.classList)
    
    modal.a

    console.log("mostrar modal", number);
}