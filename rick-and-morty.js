const paramsString = window.location.search;
const urlParams = new URLSearchParams(paramsString);

fetch("https://rickandmortyapi.com/api/character")
.then (response => response.json())
.then(json => {
    console.log(json)
    const container = document.querySelector(".container")
    const characterImage = document.querySelector("#character--image")

    let containerData = ""

    json.results.forEach(character => {
        const card = `
            <div class="character">
                <img src="${character.image}" alt="${character.name}">
                <div class="character character--info">
                    <h1><a href="character.html?id=${character.id}">${character.name}</a></h1>
                    <h2>${character.status} - ${character.species}</h2>
                    <h3>Last known Location:</h3>
                    <h4>${character.location.name}</h4>
                    <h5>First seen in:</h5>
                    <p>${character.origin.name}</p>
                </div>
            </div>
        `

        containerData += card
    })        
    container.innerHTML = containerData;
})
