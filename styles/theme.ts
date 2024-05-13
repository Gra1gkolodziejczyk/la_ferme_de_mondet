import { createTheme } from '@mui/material'
import { frFR } from '@mui/material/locale'
import { responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    orange: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    orange?: PaletteOptions['primary']
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    orange: true
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    orange: true
  }
}
const theme = responsiveFontSizes(
  createTheme(
    {
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontFamily: 'Comfortaa',
              'text-transform': 'none',
              'font-size': ' 18px',
              'border-radius': '.8rem',
            },
            outlined: {
              'border-width': '2px',
              ':hover': {
                'border-width': '2px',
              },
            },
          },
        },
        MuiSelect: {
          styleOverrides: {
            icon: {
              color: 'var(--orange)',
              marginRight: 10,
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              backgroundColor: 'white',
              borderRadius: '4px',
            },
          },
        },
        MuiAutocomplete: {
          styleOverrides: {
            inputRoot: {
              backgroundColor: 'white',
            },
            popupIndicator: {
              color: 'var(--orange)',
            },
          },
        },
      },
      palette: {
        primary: {
          main: '#0F222D',
          contrastText: 'white',
        },
        secondary: {
          main: '#FFF5D0',
          contrastText: 'white',
        },
        info: {
          main: '#f25c05',
          contrastText: 'white',
        },
        orange: {
          main: '#f25c05',
          contrastText: '#d65104',
        },
      },
      typography: {
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
          fontFamily: 'Comfortaa',
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 600,
          fontFamily: 'Comfortaa',
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'Comfortaa',
        },
        h4: {
          fontSize: '1.4rem',
          fontFamily: 'Comfortaa',
        },
        h5: {
          fontSize: '1.3rem',
          fontFamily: 'Comfortaa',
        },
        h6: {
          fontSize: '1.2rem',
          fontFamily: 'Comfortaa',
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 300,
          fontFamily: 'Comfortaa',
        },
        body2: {
          fontSize: '1rem',
          fontWeight: 400,
          fontFamily: 'Comfortaa',
        },
      },
      zIndex: {
        appBar: 999,
        drawer: 998,
      },
    },
    frFR,
  ),
)
export default theme
