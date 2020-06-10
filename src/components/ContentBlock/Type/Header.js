import React from 'react';

import { Text } from '@gpn-design/uikit/Text';
import Field from '../../Field/Field';
import CommentBlind from '../../CommentBlind/CommentBlind';

function ContentBlockHeader(props) {
  const { isEditable, addButton = '', deleteButton = '', newBlockPopup, commentID, children } = props;

  return (
    <div className='Article__section Block decorator decorator_indent-b_xs decorator_indent-t_3xl'>
      { isEditable ?
        <React.Fragment>
          {newBlockPopup}
          <div className='Block__leftButtons'>
            {deleteButton}
            {addButton}
          </div>
        </React.Fragment> : ''
      }
      
      <CommentBlind id={commentID} />

      { isEditable ? <Field width='full' size='xl' view='clear' type='textarea' maxRows={10000} placeholder='Начните писать' dValue={children} /> : '' }
      { !isEditable ? <Text tag='h3' weight='regular' size='xl' view='primary'>{children}</Text> : '' }
    </div>
  );
}

export default ContentBlockHeader;
