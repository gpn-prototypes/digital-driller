import React, { createContext, useState, useContext } from 'react';

export const RoleContext = createContext();

const RoleProvider = (props) => {
  const [ role, setRole ] = useState('Куратор');

  const beGeologist = () => {
    setRole('Геолог');
  }

  const beCurator = () => {
    setRole('Куратор');
  }

  return (
    <RoleContext.Provider value={{ role, beGeologist, beCurator }}>
      { props.children }
    </RoleContext.Provider>
  )
};

export default RoleProvider;