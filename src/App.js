import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RoutesPage from './pages/RoutesPage';

function App() {
  return (
    <Router basename="/fe-diploma">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/routes" exact element={<RoutesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
