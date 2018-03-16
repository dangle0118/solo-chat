import * as fetch from 'isomorphic-fetch'

const BASE_URL = `https://swapi.co/api`


export const getCharacter = async (userName) => {
  const res = await fetch(`${BASE_URL}/people/?search=${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();
  if (!res.ok) {
    throw response;
  }
  return response
}