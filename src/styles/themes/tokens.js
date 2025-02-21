export const tokens = {
    colors: {
      // Gradientes predefinidos para botones y elementos destacados
      gradients: {
        cyberpunk: {
            from: '#FF0080',    // Rosa neón
            via: '#7928CA',     // Púrpura eléctrico
            to: '#00FFFF'       // Cyan brillante
          },
          toxic: {
            from: '#39FF14',    // Verde nuclear
            via: '#CCFF00',     // Verde lima eléctrico
            to: '#FFFF00'       // Amarillo brillante
          },
          lava: {
            from: '#FF0000',    // Rojo fuego
            via: '#FF4D00',     // Naranja lava
            to: '#FFD700'       // Dorado brillante
          },
          rainbow: {
            color1: '#FF0000',  // Rojo
            color2: '#FF7F00',  // Naranja
            color3: '#FFFF00',  // Amarillo
            color4: '#00FF00',  // Verde
            color5: '#0000FF',  // Azul
            color6: '#4B0082',  // Índigo
            color7: '#9400D3'   // Violeta
          },
          alien: {
            from: '#00FF9F',    // Verde alienígena
            via: '#00FFE5',     // Cyan brillante
            to: '#00FFFF'       // Azul eléctrico
          },
        sunset: {
          from: '#FF416C',
          via: '#FF4B2B',
          to: '#F97316'
        },
        ocean: {
          from: '#0EA5E9',
          via: '#2563EB',
          to: '#4F46E5'
        },
        forest: {
          from: '#059669',
          via: '#10B981',
          to: '#34D399'
        },
        berry: {
          from: '#9333EA',
          via: '#C026D3',
          to: '#DB2777'
        },
        golden: {
          from: '#F59E0B',
          via: '#FBBF24',
          to: '#FCD34D'
        }
      },
      // Colores base para UI
      primary: {
        main: '#2563EB',    // Azul vibrante
        light: '#60A5FA',
        dark: '#1D4ED8',
      },
      secondary: {
        main: '#9333EA',    // Púrpura rico
        light: '#A855F7',
        dark: '#7E22CE',
      },
      accent: {
        main: '#F97316',    // Naranja vibrante
        light: '#FB923C',
        dark: '#EA580C',
      },
      state: {
        success: '#059669',
        warning: '#F59E0B',
        error: '#DC2626',
        info: '#0EA5E9',
      },
      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      }
    },
  
    typography: {
      fonts: {
        primary: "'Inter', sans-serif",
        secondary: "'Poppins', sans-serif",
      },
      sizes: {
        xs: '0.75rem',    
        sm: '0.875rem',   
        base: '1rem',     
        lg: '1.125rem',   
        xl: '1.25rem',    
        '2xl': '1.5rem',  
        '3xl': '1.875rem',
        '4xl': '2.25rem', 
      },
      weights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      }
    },
    spacing: {
      xs: '0.25rem',   
      sm: '0.5rem',    
      md: '1rem',      
      lg: '1.5rem',    
      xl: '2rem',      
      '2xl': '2.5rem', 
      '3xl': '3rem',   
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',  
      base: '0.25rem', 
      md: '0.375rem',  
      lg: '0.5rem',    
      xl: '0.75rem',   
      '2xl': '1rem',   
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    }
  }