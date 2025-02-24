import React, { useState, useRef, useEffect } from 'react';
import { 
  DropdownContainer, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem,
  Divider 
} from './styles';

const Dropdown = ({ 
  options,
  selected,
  onSelect,
  placeholder = 'Select option',
  variant = 'default',
  dark = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownTrigger 
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        variant={variant}
        $dark={dark}
      >
        {selected ? selected.label : placeholder}
      </DropdownTrigger>
      
      {isOpen && (
        <DropdownMenu 
          variant={variant}
          $dark={dark}
        >
          {options.map((option, index) => (
            option.divider ? (
              <Divider key={index} $dark={dark} />
            ) : (
              <DropdownItem
                key={option.value}
                onClick={() => handleSelect(option)}
                $selected={selected?.value === option.value}
                variant={variant}
                $dark={dark}
              >
                {option.icon && <span>{option.icon}</span>}
                {option.label}
              </DropdownItem>
            )
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;