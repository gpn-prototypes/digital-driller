import React, { useState, useContext } from 'react';
import { ProgrammInfoContext } from '../../context/ProgrammInfoContext';

import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css';

import { Button } from '@gpn-design/uikit/Button';
import { IconComment } from '@gpn-design/uikit/IconComment';
import { IconTop } from '@gpn-design/uikit/IconTop';
import { Text } from '@gpn-design/uikit/Text';
import Field from '../Field/Field';

import { commentList } from '../../mocks/commentList';

function NewComment(props) {
  const {  } = props;
  
  return (
    <div className='CommentPopup Theme Theme_color_gpnDisplay'>
      <Field size='s' type='text' width='full' placeholder='Начните писать комментарий' />
      <Text size='xs' view='secondary' className='decorator decorator_indent-t_xs'>Вы можете упомянуть в комментарии других пользователей. Ответственный за раздел и все, кого вы упомянули, получат уведомление.</Text>
    </div>
  )
}

export default NewComment;
  