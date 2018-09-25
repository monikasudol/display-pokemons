export const fetchPokemons = (page) => fetch(`http://localhost:3000/pokemon?_page=${page}&_limit=12`)
  .then(response => response.json())
  .catch(ex => console.log('parsing failed: ', ex));
