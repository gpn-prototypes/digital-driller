import React, { useState } from 'react';
import { TextField } from '@gpn-design/uikit';

function Field(props) {
  const { width, size, type, placeholder, view, rightSide, leftSide, maxRows, form, dValue, className } = props;
  const [value = dValue, setValue] = useState(undefined);

  return (
    <TextField
      width={width}
      size={size}
      type={type}
      view={view}
      placeholder={placeholder}
      rightSide={rightSide}
      leftSide={leftSide}
      onChange={({ value }) => setValue(value)}
      value={value}
      className={className}
      maxRows={maxRows}
      form={form}
    />
  );
}

export default Field;
