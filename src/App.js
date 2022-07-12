import "./App.css";
import { GraphPaper, Math } from "./components";

function App() {
  return (
    <div className="game-container">
      <div className="game">
        <div className="game-graphBackground">
          <GraphPaper />
        </div>
      </div>
      <div className="control">
        <div className="control-input">
          <Math />
        </div>
        <div className="control__buttons">
          <div className="control__button-submit">
            <button>Submit</button>
          </div>
          <div className="control__button-other">
            <button className="control__button-other-reset">Reset</button>
            <label for="levels">Choose a level: </label>
            <select id="levels">
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
