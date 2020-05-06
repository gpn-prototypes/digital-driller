import React from 'react';

function Image(props) {
  const { leftButton, rightButton, leftPopup, rightPopup, className = '', children } = props;

  return (
    <div className={`Article__section block block_editable decorator decorator_indent-v_3xl ${className}`}>
      <div className='block__left-button'>{leftButton}</div>
      <div className='block__right-button'>{rightButton}</div>
      {leftPopup}
      {rightPopup}
      
      {children}
    </div>
  );
}

export default Image;
