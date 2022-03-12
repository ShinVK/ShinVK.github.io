import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

export default function Provider({ children }) {
  const state = {
    teste: 1,
  };

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
