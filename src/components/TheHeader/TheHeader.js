import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RoleContext } from '../../context/ProjectContext';

import { TextField } from '@gpn-design/uikit/TextField';
import { Button } from '@gpn-design/uikit/Button';
import { IconSearch } from '@gpn-design/uikit/IconSearch';
import { IconRing } from '@gpn-design/uikit/IconRing';
import { User } from '@gpn-design/uikit/User';
import { Text } from '@gpn-design/uikit/Text';
import SavingStatus from '../../components/SavingStatus/SavingStatus';

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
