import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ethnocentric from "./assets/ethnocentric.otf";
import "./index.css";
import { router } from "./router/Router.tsx";

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontFamily: "Ethnocentric, sans-serif",
    },
    h2: {
      fontFamily: "Ethnocentric, sans-serif",
    },
    h3: {
      fontFamily: "Ethnocentric, sans-serif",
    },
    h4: {
      fontFamily: "Ethnocentric, sans-serif",
    },
    h5: {
      fontFamily: "Ethnocentric, sans-serif",
    },
    h6: {
      fontFamily: "Ethnocentric, sans-serif",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#1e1e1e",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ethnocentric';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Ethnocentric'), local('Ethnocentric'), url(${ethnocentric}) format('opentype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ApolloProvider>
    </ThemeProvider>
  </StrictMode>
);
