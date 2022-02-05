import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import MyContext from '../context/myContext';

function InputName() {
  const {
    stateHook: { allFilters: { filterByName: { name } }, handleChangeName },
  } = useContext(MyContext);

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ (e) => handleChangeName(e) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default InputName;
