import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home.Component';
import { ContextMovie } from './Component/Context/ContextMovie.Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContextMovie>
        <Home/>
        </ContextMovie>


      </header>
    </div>
  );
}

export default App;
