import React, { useState } from 'react';

function ContentBlockImage(props) {
  const { isCommentable, isEditable, addButton, commentButton, deleteButton, commentPopup, newBlockPopup, children } = props;

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
      { isCommentable || isEditable ? 
        <React.Fragment>
          { commentPopup }
          <div className='Block__rightButtons'>
            {commentButton}
          </div>
        </React.Fragment> : ''
      }
      { children }
    </div>
  );
}

export default ContentBlockImage;
