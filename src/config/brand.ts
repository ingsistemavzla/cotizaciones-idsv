/**
 * Identidad Visual de IDSV - Ingenieros de Sistema Venezuela
 * Guía de marca para todos los desarrollos futuros
 */

export const brand = {
  name: {
    full: 'IDSV - Ingenieros de Sistema Venezuela',
    short: 'IDSV',
    legal: 'IDSV - Ingenieros de Sistema Venezuela',
  },
  
  colors: {
    primary: {
      50: '#E6F2FF',
      100: '#CCE5FF',
      200: '#99CBFF',
      300: '#66B1FF',
      400: '#3397FF',
      500: '#0056B3', // Azul profesional principal
      600: '#004599',
      700: '#003480',
      800: '#002266',
      900: '#001133',
    },
    accent: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#D91E18', // Rojo profesional
      600: '#B51A15',
      700: '#9E1612',
      800: '#85120F',
      900: '#6C0E0C',
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#333333', // Gris oscuro
    },
    success: '#10B981',
    warning: '#F59E0B',
    error: '#D91E18',
    info: '#0056B3',
  },
  
  typography: {
    fontFamily: {
      sans: ["'Segoe UI'", 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      mono: ['Monaco', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  company: {
    rif: 'J-274030070-0',
    phone: '+58 412-3563070',
    email: 'ingenierosdesistemavenezuela@gmail.com',
    address: 'Venezuela',
    logo: {
      main: 'https://federaciondecoaching.com/wp-content/uploads/2025/04/IDSV-LOGO.png',
      icmf: 'https://federaciondecoaching.com/wp-content/uploads/2025/04/ICMF.png',
    },
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #0056B3, #003366)',
    accent: 'linear-gradient(135deg, #D91E18, #B51A15)',
  },
  
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.15)',
    xl: '0 12px 48px rgba(0, 0, 0, 0.2)',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
}

export type BrandConfig = typeof brand





