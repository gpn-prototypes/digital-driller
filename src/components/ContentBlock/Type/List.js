import React, { useState } from 'react';

import { Text } from '@gpn-design/uikit/Text';
import Field from '../../Field/Field';

function ContentBlockList(props) {
  const { isCommentable, isEditable, addButton, commentButton, deleteButton, commentPopup, newBlockPopup, listItems } = props;
  const [itemsList, setItemsList] = useState([...listItems]);

  return (
    <React.Fragment>
      { itemsList.map((item, index) => {
        return (
        <div className={`Article__section Block decorator decorator_indent-b_l decorator_indent-t_l`} key={index}>
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
          <div className='Block__listItem'>
            { isEditable ? <Field width='full' size='m' view='clear' type='textarea' maxRows={10000} placeholder='Начните писать' dValue={item} /> : '' }
            { !isEditable && item !== '' ? <Text size='m' view='primary' lineHeight='s'>{ item }</Text> : '' }
            { !isEditable && item === '' ? <Text size='m' view='ghost' lineHeight='s'>Не заполнено</Text> : '' }
          </div>
        </div>)
      }) }
      
    </React.Fragment>
  );
}

export default ContentBlockList;
