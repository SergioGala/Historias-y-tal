import React, { useState } from 'react';
import { InputWrapper, Label, StyledInput, SearchIcon, TextArea } from './styles';

const Input = ({ 
  label,
  variant = 'default',
  type = 'text',
  startIcon,
  multiline = false,
  floating = false,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const InputComponent = multiline ? TextArea : StyledInput;

  return (
    <InputWrapper>
      {label && (
        <Label 
          floating={floating && isFocused} 
          variant={variant}
        >
          {label}
        </Label>
      )}
      <InputComponent
        type={type}
        variant={variant}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {startIcon && <SearchIcon>{startIcon}</SearchIcon>}
    </InputWrapper>
  );
};

export default Input;