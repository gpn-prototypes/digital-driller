import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [ user, setUser ] = useState({ role: 'Куратор', name: 'Тихон Кувшинов' });

  const beGeologist = () => {
    setUser({ role: 'Геолог', name: 'Анастасия Алёшина' });
  }

  const beCurator = () => {
    setUser({ role: 'Куратор', name: 'Тихон Кувшинов' });
  }

  return (
    <UserContext.Provider value={{ user, beGeologist, beCurator }}>
      { props.children }
    </UserContext.Provider>
  )
};

export default UserProvider;