import React, { useState } from 'react';
import CommentBlind from '../../CommentBlind/CommentBlind';

function ContentBlockImage(props) {
  const { commentID, isEditable, addButton, deleteButton, newBlockPopup, children } = props;

  return (
    <div className={`Article__section Block decorator decorator_indent-b_l decorator_indent-t_l`}>
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

      { children }
    </div>
  );
}

export default ContentBlockImage;
