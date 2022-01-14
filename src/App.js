import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import GridComponent from './components/GridComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
      <>
        <GridComponent />
      </>
    </Router>
  );
}

export default App;
