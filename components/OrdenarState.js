import React, { useContext, useState } from 'react';
import MyContext from '../context/myContext';

export default function OrdenarState() {
  const {
    stateHook:
      { sortItem } } = useContext(MyContext);

  const [colum, setcolum] = useState('population');
  const [sort, setsort] = useState('');
  return (
    <div>
      <form>
        <select
          id="sort-column"
          data-testid="column-sort"
          name="column"
          value={ colum }
          onChange={ ({ target }) => setcolum(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="sort"
          onClick={ ({ target }) => setsort(target.value) }
        />
        ASCENDENTE
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DSC"
          name="sort"
          onClick={ ({ target }) => setsort(target.value) }
        />
        DECRESCENTE
      </form>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => sortItem(colum, sort) }
      >
        Ordenar
      </button>
    </div>
  );
}
