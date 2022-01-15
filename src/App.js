import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import GridComponent from './components/GridComponent';
import ChartStat from './components/ChartStat';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/practice" />
          <Route path="/stats" element={<ChartStat />} />
          <Route path="/sections" />
        </Routes>
      </Router>
      <>
        <GridComponent />
      </>

    </>
  );
}

export default App;
