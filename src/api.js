const API_KEY = 'ab8fdc868dmshadbe32e457e3193p190e7djsnb96b7b29fd1d';
const BASE_URL = 'https://exercisedb.p.rapidapi.com';

async function fetchExercises(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch exercises');
  }

  return response.json();
}

export { fetchExercises };



