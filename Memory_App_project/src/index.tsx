import React from "react";
import ReactDOM from "react-dom";
import { defineCustomElements } from '@ionic/pwa-elements/loader'

import App from "./App";
import MemoriesContextProvider from "./data/MemoriesContextProvider";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <MemoriesContextProvider>
    <App />
  </MemoriesContextProvider>,
  document.getElementById("root")
);

serviceWorker.register();
defineCustomElements(window)