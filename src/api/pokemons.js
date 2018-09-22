export const fetchPokemons = (page) => fetch(`http://localhost:3004/pokemon?_page=${page}&_limit=24`)
  .then(response => response.json())
  .catch(ex => console.log('parsing failed: ', ex));
