import React, { useContext } from 'react';
import MyContext from '../context/myContext';
// import OrdenarState from './OrdenarState';
// import PropTypes from 'prop-types';

function FilterComponent() {
  const {
    stateHook:
      { filterNumb, handleFilterByNumeric, handleClickSubmit, selectFilters },
  } = useContext(MyContext);

  return (
    <form>
      <label htmlFor="column-id">
        Escolha uma categoria
        <select
          id="column-id"
          data-testid="column-filter"
          name="column"
          value={ filterNumb.column }
          onChange={ (e) => handleFilterByNumeric(e) }
        >
          { selectFilters.map((el) => (
            <option value={ el } key={ el }>{el}</option>
          ))}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
      </label>

      <select
        id="comparison-id"
        data-testid="comparison-filter"
        name="comparison"
        value={ filterNumb.comparison }
        onChange={ (e) => handleFilterByNumeric(e) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ filterNumb.value }
        onChange={ (e) => handleFilterByNumeric(e) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (e) => handleClickSubmit(e) }
      >
        Filtrar
      </button>
    </form>
  );
}

// FilterComponent.propTypes = {};

export default FilterComponent;
