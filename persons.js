/**
 * Fetches a character from the Simpsons API by ID
 * @param {number} id - The ID of the character to fetch
 * @returns {Promise<Object>} A promise that resolves to the character data
 */
async function getCharacterById(id) {
  try {
    const response = await fetch(`https://api.sampleapis.com/simpsons/characters/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const character = await response.json();
    return character;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
}

/**
 * Fetches all characters from the Simpsons API
 * @returns {Promise<Array>} A promise that resolves to an array of character data
 */
async function getAllCharacters() {
  try {
    const response = await fetch('https://api.sampleapis.com/simpsons/characters');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const characters = await response.json();
    return characters;
  } catch (error) {
    console.error('Error fetching all characters:', error);
    throw error;
  }
}

/**
 * Display character information in the DOM
 * @param {Object} character - The character data to display
 */
function displayCharacter(character) {
  const characterDiv = document.createElement('div');
  characterDiv.className = 'character-card';
  
  characterDiv.innerHTML = `
    <h2>${character.name}</h2>
    ${character.avatar ? `<img src="${character.avatar}" alt="${character.name}" width="150">` : ''}
    <p><strong>Occupation:</strong> ${character.occupation || 'Unknown'}</p>
    <p><strong>Quote:</strong> "${character.quote || 'No quote available'}"</p>
    <p><strong>Voice:</strong> ${character.voicedBy || 'Unknown'}</p>
  `;
  
  document.getElementById('character-container').appendChild(characterDiv);
}

/**
 * Example usage to demonstrate fetching a specific character
 */
async function fetchAndDisplayCharacter(id) {
  try {
    const character = await getCharacterById(id);
    displayCharacter(character);
  } catch (error) {
    console.error('Failed to display character:', error);
  }
}

/**
 * Example usage to demonstrate fetching multiple characters
 */
async function fetchAndDisplayMultipleCharacters(idList) {
  try {
    const container = document.getElementById('character-container');
    container.innerHTML = ''; // Clear previous results
    
    for (const id of idList) {
      await fetchAndDisplayCharacter(id);
    }
  } catch (error) {
    console.error('Failed to display characters:', error);
  }
}

// You can also fetch all characters and display them
async function fetchAndDisplayAllCharacters() {
  try {
    const characters = await getAllCharacters();
    const container = document.getElementById('character-container');
    container.innerHTML = ''; // Clear previous results
    
    characters.forEach(character => {
      displayCharacter(character);
    });
  } catch (error) {
    console.error('Failed to display all characters:', error);
  }
}

// Export functions for use in other files
export {
  getCharacterById,
  getAllCharacters,
  displayCharacter,
  fetchAndDisplayCharacter,
  fetchAndDisplayMultipleCharacters,
  fetchAndDisplayAllCharacters
};