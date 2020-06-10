import React from 'react';

import { Button } from '@gpn-design/uikit/Button';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconTrash } from '@gpn-design/uikit/IconTrash';
import CommentBlind from '../../CommentBlind/CommentBlind';

function ContentBlockTableRow(props) {
  const { edit, children } = props;

  return (
    <tr>
      { edit ? 
        <td>
          <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconTrash} form='round' className='' onClick={() => {}} />
          <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconAdd} form='round' className='' onClick={() => {}} />
        </td> : ''
      }
      {children}
      <td><CommentBlind /></td>
    </tr>
  );
}

export default ContentBlockTableRow;
