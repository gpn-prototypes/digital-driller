import React, { useContext } from 'react';
import { RoleContext } from '../../context/ProjectContext';

import FullHeader from './Full/FullHeader';
import MiniHeader from './Mini/MiniHeader';

import './TheHeader.css';

import { team } from '../../mocks/team';

function TheHeader(props) {
  const { page, isMinified, programmName } = props;
  const { role } = useContext(RoleContext);
  const user = team.filter(member => member.role === role)[0];

  if (isMinified)
    return ( <MiniHeader page={page} user={user} programmName={programmName} /> );
  else
    return ( <FullHeader page={page} user={user} /> );
}

export default TheHeader;
