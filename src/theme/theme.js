import { createTheme } from '@mui/material/styles';
// #E8E8E8 plomo
// #F05454
//#30475E
//#222831
//"#53BF9D",
//danger: "#FAC213"
const Colors = {
    primary: {
        light: "#596b7e",
        main:"#30475E",
        dark: "#222831",
        contrastText: "#E8E8E8"
    },
    secondary: {
        light: '#f37676',
        main: '#F05454',
        dark: '#a83a3a',
        contrastText: '#E8E8E8',
    },
    success: {
        light: "#75cbb0",
        main: "#53BF9D",
        dark: "#518e7b"
    },
    info: {
        light: "#51d1e1",
        main:"#26c6da",
        dark:"#1a8a98"
    },
    danger: "#FF5722",
    warning: "#FAC213",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
};

// background:{
//   default: Colors.primary.main
// },
const theme = createTheme({
    palette: {
      primary: Colors.primary,
      secondary: Colors.secondary,
      success: Colors.success, 
      danger: Colors.danger, 
      info: Colors.info,
    },
    background:{
         default: Colors.primary.main
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
    },

    components: {
      MuiTextField:{
        styleOverrides:{
          root: {
            '& .MuiTextField-root': {
              margin: "10px",
              width: "900px",
            }
          }
        }
      }
    }
});
  
// theme.typography.h3 = {
//   fontSize: '20px',
//   '@media (min-width:600px)': {
//     fontSize: '20px',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '60px',
//   },
//   };

// theme.typography.body1 = {
//     fontSize: '60px',
//     '@media (min-width:600px)': {
//       fontSize: '60px',
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '60px',
//     },
// };


export default theme; 

