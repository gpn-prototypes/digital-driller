import React from 'react';

import { Text } from '@gpn-design/uikit/Text';
import Field from '../../Field/Field';

function ContentBlockHeader(props) {
  const { isCommentable, isEditable, addButton = '', commentButton = '', deleteButton = '', commentPopup, newBlockPopup, children } = props;

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
      { isCommentable || isEditable ? 
        <React.Fragment>
          { commentPopup }
          <div className='Block__rightButtons'>
            {commentButton}
          </div>
        </React.Fragment> : ''
      }

      { isEditable ? <Field width='full' size='xl' view='clear' type='textarea' maxRows={10000} placeholder='Начните писать' dValue={children} /> : '' }
      { !isEditable ? <Text tag='h3' weight='regular' size='xl' view='primary'>{children}</Text> : '' }
    </div>
  );
}

export default ContentBlockHeader;
