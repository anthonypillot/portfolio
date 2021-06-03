import TopBar from "./components/TopBar/TopBar";
import LoadingProgressBar from "./components/LoadingProgressBar";
import "./App.css";
import "./style/CenterBox.css";
import "./style/Background.css";

function App() {
  return (
    <div className="App">
      <TopBar />

      <div className="background"></div>
      <div className="background background2"></div>
      <div className="background background3"></div>

      {/* Middle content */}

      <div className="center-box">
        <img
          src="./img/logo_anthonypillotOS_black.svg"
          alt="./img/logo_anthonypillotOS_black.svg"
        ></img>
        <h1>
          Welcome to <br />
          <span className="subtitle-center-box">
            &#123; this.application &#125;
          </span>
        </h1>
        <LoadingProgressBar />
      </div>

      {/* End of middle content */}
    </div>
  );
}

export default App;
