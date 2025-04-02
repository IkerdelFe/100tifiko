async function getSimpsonsCharacters() {
  try {
    const response = await fetch('https://api.tvmaze.com/shows/83/cast');
    
    if (!response.ok) {
      throw new Error("HTTP error! Status: todo mal");
    }

    const personajesDatos = await response.json();
    console.log(personajesDatos);
    return personajesDatos;

  } catch (error) {
    console.error("Error llamada:", error);
    throw error;
  }
}

// llamada al método
getSimpsonsCharacters ();


async function drawCharacters() {
  const personajes = await getSimpsonsCharacters();

  let characterContainer = document.getElementById("character-container");

  characterContainer.innerHTML = 
    `<article class="fichaPersonaje">
      <img src="" alt="imagen API">
        <div class="infoPersonaje">
          <h3>Nombre</h3> 
          <a class="info_link" href="https://www.youtube.com/watch?v=5sfuH6vFahk" target="_blank">Info</a>
        </div>
    </article>`
  

    for (personajes=0; personajes<9; personajes++);
}

drawCharacters ();