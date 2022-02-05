const biggerThan = (arr, param, value) => {
  const newPlanets = arr.filter((el) => Number(el[param]) > value);
  return newPlanets;
};

const smallerThan = (arr, param, value) => {
  const newPlanets = arr.filter((el) => Number(el[param]) < value);
  return newPlanets;
};

const equalThan = (arr, param, value) => {
  const newPlanets = arr.filter((el) => el[param] === value);
  return newPlanets;
};

const comparisonFilter = {
  'maior que': biggerThan,
  'menor que': smallerThan,
  'igual a': equalThan,
};

export default comparisonFilter;
