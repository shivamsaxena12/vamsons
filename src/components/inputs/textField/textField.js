import React, { useState } from 'react';
import './textField.scss';

function TextField({
  style,
  className,
  type,
  value,
  placeholder,
  handleChange
}) {
  const [isFocus, setIsFocus] = useState(false);
  const classes = isFocus ? 'text-input focus ' : 'text-input ';
  return (
    <input
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      placeholder={placeholder}
      className={classes + className}
      style={style}
      type={type || 'text'}
      value={value}
      onChange={handleChange}
    />
  );
}

export default TextField;
