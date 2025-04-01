async function getSimpsonsCharacters() {
  try {
    const response = await fetch('https://api.tvmaze.com/shows/83/cast');
    
    if (!response.ok) {
      throw new Error("HTTP error! Status: todo mal");
    }

    const personajes = await response.json();
    console.log(personajes);
    return personajes;

  } catch (error) {
    console.error("Error llamada:", error);
    throw error;
  }
}

// llamada al método
getSimpsonsCharacters ();





