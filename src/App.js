import './App.css';
import NewTimer from './components/NewTimer.js';
import ListTimers from './components/ListTimers.js';

function App() {
  return (
    <div className="App">
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
