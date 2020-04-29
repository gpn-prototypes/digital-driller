import React from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { IconComment } from '@gpn-design/uikit/IconComment';

import './TableRow.css';

function TableRow(props) {
  const { children, className = '', ...attrs } = props;

  return (
    <div className={`flextable__row ${className}`} {...attrs}>
      <div className='flextable__right-button'>
        <Button view='ghost' size='s' iconSize='s' iconOnly={true} iconLeft={IconComment} />
      </div>
      {children}
    </div>
  );
}

export default TableRow;
  