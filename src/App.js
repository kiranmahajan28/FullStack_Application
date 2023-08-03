
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/adduser" element={<AddUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
