import React from 'react';

import { Text } from '@gpn-design/uikit/Text';
import Field from '../../Field/Field';

function ContentBlockParagraph(props) {
  const { isCommentable, isEditable, addButton = '', commentButton = '', deleteButton = '', commentPopup, newBlockPopup, children } = props;

  return (
    <div className='Article__section Block decorator decorator_indent-b_l'>
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
        </React.Fragment>: ''
      }

      { isEditable ? <Field width='full' size='m' view='clear' type='textarea' maxRows={10000} placeholder='Начните писать' dValue={children} /> : '' }
      { !isEditable && children ? <Text size='m' view='primary' lineHeight='s'>{ children }</Text> : '' }
      { !isEditable && !children ? <Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text> : '' }
    </div>
  );
}

export default ContentBlockParagraph;
