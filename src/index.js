import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import QuickStart from "components/Home";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = 'fWD9GmwKv4NYrkVP5hSta5PXBgSBn9qehQx6Vtxy';
const SERVER_URL = 'https://zi4etjmbghz5.usemoralis.com:2053/server';

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL) {
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );
  }

  return isServerInfo ? (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <App />
    </MoralisProvider>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <QuickStart />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <Application />,
  </StrictMode>,
  document.getElementById("root")
);
