import "./App.css";
import svg from "./branding.svg";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="logo">
          <div>
            <img src={svg} alt=""></img>
          </div>
          &nbsp;&nbsp;retrievo
        </div>
        <div className="title">Jungle Char E</div>
        <div className="button">
          <div>Login</div>
          <div>Sign Up</div>
        </div>
      </div>

      <div className="Content">
        <div>안녕하세요</div>
        <div>사용자 분석</div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
