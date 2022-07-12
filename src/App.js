import './App.css';
import { GraphPaper } from './components';

function App() {
  return (
    <div>
      <div className='game'> 
        <div className='game__graphBackground'>
          <GraphPaper />
        </div>
      </div>
      <div className='control'>
        
      </div>
    </div>
  );
}

export default App;
