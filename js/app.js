

let pokemones;
const modal = document.querySelector("#modal");

fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
  .then(response => response.json())
  .then((data) => {
    pokemones = data;
    dibujar();
});

let dibujar = () => {

    document.querySelector("#resultados").innerHTML="";

    for(let i in pokemones){
        console.log(pokemones[i]);

        let col = document.createElement("div");
        col.classList.add("col","col-lg-3");

        let card = document.createElement("div");
        card.classList.add("card","mt-5");

        let img = document.createElement("img")
        img.src=pokemones[i].ThumbnailImage;
        img.classList.add("card-img-top");

        card.append(img);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h5 = document.createElement("h5");
        h5.classList.add("card-title")
        h5.innerHTML=pokemones[i].name;
        cardBody.append(h5);

        let a = document.createElement("a");
        a.setAttribute("href","#")
        a.classList.add("btn","btn-primary");
        a.innerHTML="Informacion";
        a.setAttribute("data-number",pokemones[i].number);
        a.dataset.name=pokemones[i].name;
        a.dataset.type=pokemones[i].type;

        a.addEventListener("click",function(evt){
            evt.preventDefault();
            alert(`${evt.target.dataset.name},  ${evt.target.dataset.number}, ${evt.target.dataset.type} `);
        });


        cardBody.append(a);

        card.append(cardBody)
        col.append(card);

        document.querySelector("#resultados").append(col);
    }

}