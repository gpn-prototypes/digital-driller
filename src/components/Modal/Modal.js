import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from '@gpn-design/uikit/Text';
import { Badge } from '@gpn-design/uikit/Badge';
import ModalTeam from './Team/ModalTeam';

import './Modal.css';

function Modal(props) {
  const { content, programmInfo, onClose, onParanjaAction } = props;

  return (
    <div className='Paranja' onClick={ onParanjaAction } onKeyDown={ onParanjaAction } tabIndex={0}>
      { content === 'team' ? <ModalTeam deadline={programmInfo.deadline} programmTeam={programmInfo.team} onClose={ onClose } /> : '' }
    </div>
  );
}

export default Modal;
  