import React from 'react';

function Table(props) {
  const { className = '', children } = props;

  return (
    <div className={`content__main block block_editable decorator decorator_indent-b_3xl decorator_space-h_3xl ${className}`}>
      {children}
    </div>
  );
}

export default Table;
