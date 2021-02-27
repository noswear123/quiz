import './App.css';
import {Switch, Route} from 'react-router-dom';
import StartPage from './page/start-page/start.page'
import Game from './page/game/game.page';
import EndGame from './page/end-game/end-game.page';


function App() {
  return (
    <div className="App">
  <Switch>
    <Route exact path='/' component={StartPage} />
    <Route exact path='/quiz/:difficulty/:catId' component={Game} />
    <Route exact path='/end-game/:points' component={EndGame} />
  </Switch>
    </div>
  );
}

export default App;
