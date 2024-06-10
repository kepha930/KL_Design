import { createTheme } from "@mui/material";
  
const theme = () => {
    return createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 375,
                md: 768,
                lg: 1024,
                xl: 1200
            },
        },
        palette: {
            // 4 grays
            primary: { 
                main: "#757575",
                light: "#bfc0c4",
                dark: "#424242",
                contrastText: "#858483",
            },
            // 2 oranges
            secondary: {
                main: "#EA4A18",
                dark: "#F6521E"
            },
            // 1 creame
            info: {
                main: "#EEE5D8"
            },
            warning: {
                main: "#141414",
                dark: "#424242"
            },
        }
    });
}
export default theme;
