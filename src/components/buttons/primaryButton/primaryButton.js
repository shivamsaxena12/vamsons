import React, { useState } from 'react';

// Libraries
import Button from 'react-bootstrap/Button';

// Styles
import './primaryButton.scss';

function PrimaryButton({
  style,
  isActive,
  isBlock,
  variant,
  btnText,
  size,
  handleChange,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      {...props}
      variant={variant || 'primary'}
      size={size || 'lg'}
      block={isBlock}
      active={isActive}
      style={style}
    >
      {btnText || 'Continue'}
    </Button>
  );
}

export default PrimaryButton;
