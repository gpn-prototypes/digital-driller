import React, { createContext, useState } from 'react';

export const ProgrammInfoContext = createContext();

const ProgrammInfoProvider = (props) => {
  const [ programmTeam, setProgrammTeam ] = useState([]);
  const [ programmDeadline, setProgrammDeadline ] = useState([]);
  const [ programmSplit, setProgrammSplit ] = useState('left');

  const showLeftBlind = () => {
    setProgrammSplit('left');
  }
  const showRightBlind = () => {
    setProgrammSplit('right');
  }
  const hideAllBlinds = () => {
    setProgrammSplit('center');
  }

  return (
    <ProgrammInfoContext.Provider value={{ programmTeam, setProgrammTeam,
                                           programmDeadline, setProgrammDeadline,
                                           programmSplit, setProgrammSplit, showLeftBlind, showRightBlind, hideAllBlinds }}>
      { props.children }
    </ProgrammInfoContext.Provider>
  )
};

export default ProgrammInfoProvider;