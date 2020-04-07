import React from 'react';

function Text(props) {
  const { leftButton, rightButton, leftPopup, advicePopup, adviceButton, className = '', children } = props;

  return (
    <div className={`content__main block block_editable decorator decorator_indent-b_l ${className}`}>
      <div className='block__left-button'>{leftButton}</div>
      <div className='block__right-button'>{adviceButton}{rightButton}</div>
      {leftPopup}
      {advicePopup}

      {children}
    </div>
  );
}

export default Text;
