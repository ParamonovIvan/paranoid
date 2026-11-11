import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import { themeConfig } from "./theme/theme.ts";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={themeConfig}>
      <Provider store={store}>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </Provider>
    </ConfigProvider>
  </StrictMode>
)
