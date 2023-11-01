import './App.css';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Login></Login>
          <Home></Home>
          <Game></Game>
      </header>
    </div>
  );
}

export default App;
