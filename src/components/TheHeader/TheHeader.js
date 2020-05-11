import React, { useContext } from 'react';
import { UserContext } from '../../context/ProjectContext';

import FullHeader from './Full/FullHeader';
import MiniHeader from './Mini/MiniHeader';

import './TheHeader.css';

import { team } from '../../mocks/team';

function TheHeader(props) {
  const { page, isMinified, programmName } = props;
  const { user } = useContext(UserContext);
  const thisUser = team.filter(member => member.role === user.role)[0];

  if (isMinified)
    return ( <MiniHeader page={page} user={thisUser} programmName={programmName} /> );
  else
    return ( <FullHeader page={page} user={thisUser} /> );
}

export default TheHeader;
