const paramsString = window.location.search;
const urlParams = new URLSearchParams(paramsString);

const pageUrl = urlParams.get("page");

let paramsPagination = "";
if (pageUrl) {
    paramsPagination = `?page=${pageUrl}`;
}

fetch("https://rickandmortyapi.com/api/character" + paramsPagination)
.then(response => response.json())
.then(json => {
    const container = document.querySelector(".container");
    const pagination = document.querySelector("#pagination");

    let containerData = "";
    json.results.forEach(character => {
        const card = `
            <div class="character">
                <img src="${character.image}" alt="${character.name}">
                <div class="character character--info">
                    <h1><a href="character.html?id=${character.id}">${character.name}</a></h1>
                    <h2>${character.status} - ${character.species}</h2>
                    <h3>Last known location:</h3>
                    <h4>${character.location.name}</h4>
                    <h5>First seen in:</h5>
                    <p>${character.origin.name}</p>
                </div>
            </div>
        `;
        containerData += card;
    });
    container.innerHTML = containerData;

    let pages = "";
    for(let pageIndex = 1; pageIndex <= json.info.pages; pageIndex++){
        const page = `<a href="?page=${pageIndex}">${pageIndex}</a>`;
        pages += page;
    }
    pagination.innerHTML = pages;
})
.catch(error => console.error("Error al obtener datos:", error));
