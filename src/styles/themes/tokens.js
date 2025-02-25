// src/styles/themes/tokens.js
const tokens = {
  fonts: {
    body: "'Comic Neue', 'Baloo 2', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: "'Fredoka One', 'Comic Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    mono: "'Roboto Mono', monospace",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.875rem',
    '3xl': '2.25rem',
    '4xl': '2.75rem',
    '5xl': '3.5rem',
    '6xl': '4rem',
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeights: {
    normal: 'normal',
    none: '1',
    tight: '1.2',
    base: '1.5',
    loose: '1.8',
  },
  
  space: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  
  sizes: {
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
  },
  
  radii: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    pill: '9999px',
    circle: '50%',
    bubble: '2rem 2rem 2rem 0.5rem',
    cloud: '6rem 6rem 6rem 6rem / 6rem 6rem 6rem 6rem',
  },
  
  borders: {
    none: 'none',
    thin: '1px solid',
    medium: '3px solid',
    thick: '5px solid',
    dashed: '3px dashed',
    dotted: '4px dotted',
    wavy: '4px wavy',
  },
  
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 24px rgba(0, 0, 0, 0.1)',
    soft: '0 5px 15px rgba(0, 0, 0, 0.05)',
    inset: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    rainbow: '0 0 10px rgba(255, 0, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.3), 0 0 30px rgba(255, 255, 0, 0.3), 0 0 40px rgba(0, 128, 0, 0.3), 0 0 50px rgba(0, 0, 255, 0.3), 0 0 60px rgba(75, 0, 130, 0.3), 0 0 70px rgba(238, 130, 238, 0.3)',
    magical: '0 0 15px rgba(255, 223, 0, 0.6)',
  },
  
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700,
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  
  animations: {
    slowBounce: 'bounce 2s infinite',
    mediumBounce: 'bounce 1.5s infinite',
    fastBounce: 'bounce 0.8s infinite',
    wiggle: 'wiggle 1s ease-in-out infinite',
    float: 'float 3s ease-in-out infinite',
    pop: 'pop 0.3s ease-in-out',
    spin: 'spin 2s linear infinite',
  }
};

export default tokens;