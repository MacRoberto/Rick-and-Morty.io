const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const id = searchParams.get("id")

fetch("https://rickandmortyapi.com/api/character/" + id)
.then(response => response.json())
.then(json => {
    console.log(json)
    const container = document.querySelector(".container--character")
    const title = document.querySelector("#title")
    const characterImage = document.querySelector("#character--image-c")
    title.innerText = json.name
    characterImage.setAttribute("src", json.image)
            const card = `
        <div class="character--info">
            <div class="character_content">
            <h4>Genero: ${json.gender}</h4>
            <h4>Status: ${json.status}</h4>
            <h4>Ubicación: ${json.location.name}</h4>
            <h4>Origen: ${json.origin.name}</h4>
                <h4>Especie: ${json.species}</h4>
            </div>
        </div>
        `
    container.innerHTML = card
})
