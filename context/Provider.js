import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import comparisonFilter from '../helpers/numericValues';
import useRequestPlanets from '../hooks/requests';
import MyContext from './myContext';

function Provider({ children }) {
  const [data] = useRequestPlanets();
  const [planets, setPlanets] = useState(data);
  const [initialPlanets, setinitialPlanets] = useState(data);
  const [numberPlanets, setNumberPlanets] = useState();
  const [filterNumb, setFilterNumb] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );

  useEffect(() => {
    setPlanets(data);
    setinitialPlanets(data);
    setNumberPlanets(data);
  }, [data]);

  const selectedFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [selectFilters, setselectFilters] = useState(selectedFilters);

  const filters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
    ],
    order: {
      column: '',
      sort: 'ASC',
    },
  };

  const [allFilters, setAllFilters] = useState(filters);

  const filteredPlanets = (searchedPlanet) => {
    if (searchedPlanet) {
      const filtered = data.filter(({ name }) => (
        name.toLowerCase().includes(searchedPlanet.toLowerCase())));
      return setPlanets(filtered);
    }
    return setPlanets(data);
  };

  // comparisonFilter
  const filteredByNumbers = (arr, objPar) => {
    const { column, comparison, value } = objPar;
    const newResults = comparisonFilter[`${comparison}`](arr, column, value);
    return newResults;
  };

  const handleClickSubmit = (e) => {
    const { column } = filterNumb;
    const newFilter = selectFilters.filter((el) => el !== column);
    e.preventDefault();
    setAllFilters({
      ...allFilters,
      filterByNumericValues: [...allFilters.filterByNumericValues, filterNumb],
    });
    const resultsPlanets = filteredByNumbers(planets, filterNumb);
    setPlanets(resultsPlanets);
    setselectFilters(newFilter);
    setFilterNumb({ column: newFilter[0], comparison: 'maior que', value: 0 });
  };

  const handleClickDelete = (filter) => {
    const { filterByNumericValues } = allFilters;
    const { column } = filter;
    const newFilters = filterByNumericValues.filter((el) => el !== filter);
    // const updateFilters = selectFilters.push(column);
    setselectFilters([...selectFilters, column]);
    setNumberPlanets(initialPlanets);
    if (newFilters.length > 0) {
      newFilters.forEach((el) => {
        const partialResults = filteredByNumbers(numberPlanets, el);
        setNumberPlanets(partialResults);
        setPlanets(partialResults);
      });
    } else { setPlanets(initialPlanets); }

    setAllFilters({
      ...allFilters,
      filterByNumericValues: newFilters,
    });
  };

  const handleFilterByNumeric = ({ target }) => {
    const { value, name } = target;
    setFilterNumb({ ...filterNumb, [name]: value });
  };

  const sortItem = (column, sort) => {
    // console.log(column, sort);
    const orderByParameters = planets.sort((a, b) => {
      if (sort === 'ASC') {
        return a[column] - b[column];
      }
      return b[column] - a[column];
    });
    setPlanets(orderByParameters);
    setAllFilters({
      ...allFilters,
      order: { column, sort },
    });
  };

  const handleChangeName = ({ target }) => {
    const { value } = target;
    setAllFilters({
      ...allFilters,
      filterByName: { name: value },
    });
    filteredPlanets(value);
  };

  const stateHook = {
    planets,
    allFilters,
    // planetName,
    filterNumb,
    handleChangeName,
    handleFilterByNumeric,
    handleClickSubmit,
    selectFilters,
    handleClickDelete,
    sortItem,
  };

  return (
    <MyContext.Provider value={ { stateHook } }>
      { children }
    </MyContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
