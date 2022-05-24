import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
