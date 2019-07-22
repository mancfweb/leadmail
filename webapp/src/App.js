import React from "react";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "./config/ReactotronCofing";

import Routes from "./routes";
import history from "./services/history";

import { store, persistor } from "./store";

// Material helpers
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./theme";

// Styles
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/index.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
            <ToastContainer autoClose={3000} />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
