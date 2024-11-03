import "./css/index.css";
import Pomodoro from "./screens/Pomodoro";
import { GlobalStyle } from "./styles/AppStyled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Pomodoro />
    </>
  );
}

export default App;
