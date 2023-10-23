import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Events from './Pages/Events';
import Home from './Pages/Home';
import Avirat from './Pages/Avirat';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/avirat' element={<Avirat/>}/>

        </Routes>
      </Router>
    </div >
  );
}

export default App;

