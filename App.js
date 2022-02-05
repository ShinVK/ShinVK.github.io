import React from 'react';
import './App.css';
import FilterComponent from './components/FilterComponent';
import InputName from './components/InputName';
import MainContent from './components/MainContent';
import OrdenarState from './components/OrdenarState';
import ShowFilters from './components/ShowFilters';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <header> Aqui fica o Header </header>
      <InputName />
      <FilterComponent />
      <ShowFilters />
      <OrdenarState />
      <MainContent />
      <span>Hello, App!</span>
    </Provider>

  );
}

export default App;
