import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IndexContextProviders } from "./store/index-context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <IndexContextProviders>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IndexContextProviders>,
  document.getElementById("root")
);
