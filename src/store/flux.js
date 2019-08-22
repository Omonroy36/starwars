const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      vehicles: []
    },
    actions: {
      getPlanets: url => fetch(url)
        .then(resp => resp.json())
        .then(data => setStore({ planets: data.results }))
        .catch(err => console.log(err)),
      getVehicles: url => fetch(url)
        .then(resp => resp.json())
        .then(data => setStore({ vehicles: data.results }))
        .catch(err => console.log(err)),
      getCharacters: url => fetch(url)
        .then(resp => resp.json())
        .then(data => setStore({ characters: data.results }))
        .catch(err => console.log(err))
    }
  };
};

export default getState;