import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./familyTree.css";
import "./i18n/config";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { transitions, Provider as AlertProvider } from "react-alert";
import Alert from "react-bootstrap/Alert";
// import AlertTemplate from "react-alert-template-basic";
import { useTranslation } from "react-i18next";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: "top center",
  timeout: 5000,
  offset: "2rem",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const AlertTemplate = ({ message }) => {
  const { t } = useTranslation();

  return (
    <Alert variant="danger">
      <Alert.Heading>{t("oh-snap")}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
