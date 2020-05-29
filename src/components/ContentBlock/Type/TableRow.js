import React from 'react';

import { Button } from '@gpn-design/uikit/Button';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconTrash } from '@gpn-design/uikit/IconTrash';

function ContentBlockTableRow(props) {
  const { comment, edit, commentButton, commentPopup, children } = props;

  return (
    <tr>
      { edit ? 
        <td>
          <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconTrash} form='round' className='' onClick={() => {}} />
          <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconAdd} form='round' className='' onClick={() => {}} />
        </td> : ''
      }
      {children}
      { comment || edit ?
        <td>{commentButton} {commentPopup}</td> : ''
      }
    </tr>
  );
}

export default ContentBlockTableRow;
