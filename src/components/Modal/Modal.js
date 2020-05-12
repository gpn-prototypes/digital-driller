import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text } from '@gpn-design/uikit/Text';
import { Badge } from '@gpn-design/uikit/Badge';
import { ModalTeam } from './Team/ModalTeam';

import './Modal.css';

function Modal(props) {
  const { content, programmInfo, onClose } = props;
  const history = useHistory();

  return (
    <div className='Paranja'>
      { content === 'team' ? <ModalTeam onClose={ onClose } /> : '' }
    </div>
  );
}

export default Modal;
  