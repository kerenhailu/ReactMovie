import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home.Component';
import { ContextMovie } from './Component/Context/ContextMovie.Component';
import Votes from './Component/Votes/Votes.Copmonent';
import AddMovie from './Component/AddMovie/AddMovie.component';
import Watching from './Component/Watching/Watching.Component';
import Comments from './Component/Comments/Comments.Component';
import Test from './Test/Test.Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Comments/> */}
        {/* <Watching/> */}
        {/* <AddMovie/> */}
        <Test/>
        {/* <Votes/>
        <ContextMovie>
        <Home/>
        </ContextMovie> */}


      </header>
    </div>
  );
}

export default App;
