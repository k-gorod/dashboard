import React from "react";

import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";

import { MainTheme } from "./Ant/theme";
import App from "components/App";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container!);

root.render(
  <ConfigProvider theme={MainTheme}>
    <App />
  </ConfigProvider>
);
