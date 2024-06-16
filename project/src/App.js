import './App.css';
import Home from './pages/Home';
import Details from './pages/Details'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { flushCacheInterval } from './utils/cache'




function App() {

  // flushing cache after 1 hour
  flushCacheInterval(60*60*1000);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/details/:city' Component={Details}/>
          </Routes>
        </header>
      </div>
    </Router>

  );
}

export default App;
