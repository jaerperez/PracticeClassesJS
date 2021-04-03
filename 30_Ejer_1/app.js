//Fetch información de 3 pokémones con la pokeapi endpoint "https://pokeapi.co/api/v2/pokemon/:id"
//Hacer un promise.all para esperar que se hagan todos los fetchs
//Imprimir en el DOM los 3 pokémones en orden alfabético de los nombres
//Información a poner en el DOM: Nombre, id e Imagen (está en sprites) 

let pokeCtn = document.getElementById('pokeCtn');

let fetch1 = fetch('https://pokeapi.co/api/v2/pokemon/46').then(response => response.json());
let fetch2 = fetch('https://pokeapi.co/api/v2/pokemon/72').then(response => response.json());
let fetch3 = fetch('https://pokeapi.co/api/v2/pokemon/66').then(response => response.json());

Promise.all([fetch1, fetch2, fetch3])
    .then((data) => {
        //Sort personalizado con callback mostrado en clase 28
        data.sort((valor1, valor2) => {
            if (valor1.name < valor2.name) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            addToDOM(data[i]);
        }
    }).catch((error) => {
        console.log(`Error: ${error}`);
    })

function addToDOM(info) {
    let ctn = document.createElement('div');
    let name = document.createElement('h2');
    name.textContent = `${info.name} #${info.id}`;
    let img = document.createElement('img');
    img.setAttribute('src', info.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}