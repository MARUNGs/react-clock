import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { tomatoTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RecoilRoot>
      <ThemeProvider theme={tomatoTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </>
);
