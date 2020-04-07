import React from 'react';

function Image(props) {
  const { leftButton, rightButton, leftPopup, className = '', children } = props;

  return (
    <div className={`content__main block block_editable decorator decorator_indent-v_3xl ${className}`}>
      <div className='block__left-button'>{leftButton}</div>
      <div className='block__right-button'>{rightButton}</div>
      {leftPopup}
      
      {children}
    </div>
  );
}

export default Image;
