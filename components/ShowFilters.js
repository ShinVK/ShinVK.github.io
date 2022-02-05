import React, { useContext } from 'react';
import MyContext from '../context/myContext';
// import PropTypes from 'prop-types';

function ShowFilters() {
  const {
    stateHook:
      { allFilters, handleClickDelete },
  } = useContext(MyContext);

  const { filterByNumericValues } = allFilters;

  return (
    <div>
      { filterByNumericValues && filterByNumericValues.map((filter, i) => (
        <div key={ i } data-testid="filter">
          <h3>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </h3>
          <button
            type="button"
            onClick={ () => handleClickDelete(filter) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

// ShowFilters.propTypes = {};

export default ShowFilters;
