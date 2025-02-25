// src/components/UI/Button/index.js
import React, { useState, useCallback } from 'react';
import { StyledButton } from './styles';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const ripple = {
      top: event.clientY - rect.top - radius,
      left: event.clientX - rect.left - radius,
      width: diameter,
      height: diameter,
      key: Date.now()
    };
    
    setRipples(prevRipples => [...prevRipples, ripple]);
    
    // Limpiar el ripple después de la animación
    setTimeout(() => {
      setRipples(prevRipples => prevRipples.filter(r => r.key !== ripple.key));
    }, 600);
  }, []);

  const handleClick = useCallback((event) => {
    if (!disabled && !loading) {
      createRipple(event);
      onClick?.(event);
    }
  }, [disabled, loading, onClick, createRipple]);

  return (
    <StyledButton
      $variant={variant} // Cambio de variant a $variant
      size={size}
      disabled={disabled}
      $loading={loading}
      $fullWidth={fullWidth}
      onClick={handleClick}
      {...props}
    >
      {!loading && children}
      {ripples.map(ripple => (
        <span
          key={ripple.key}
          className="ripple"
          style={{
            top: ripple.top,
            left: ripple.left,
            width: ripple.width,
            height: ripple.height
          }}
        />
      ))}
    </StyledButton>
  );
};

export default Button;