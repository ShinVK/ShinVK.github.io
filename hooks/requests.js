import { useEffect, useState } from 'react';

function useRequestPlanets() {
  const URLStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  // const [planet, setPlanets] = useState();

  const requestStarWars = async () => {
    const response = await fetch(URLStarWars);
    const { results } = await response.json();
    // const dataPlanets = await response.json();
    // console.log(dataPlanets.results);
    const dataOrdered = results.sort((a, b) => {
      if (a.name < b.name) {
        return +'-1';
      }
      if (a.name > b.name) {
        return +'1';
      }
      return +'0';
    });

    // console.log(dataOrdered);

    // setData(dataPlanets.results);
    setData(dataOrdered);
  };

  useEffect(() => {
    // console.log('didmount');
    requestStarWars();
  }, []);
  return [data];
}

export default useRequestPlanets;
