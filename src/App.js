import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import OrderingSucceededPage from './pages/OrderingSucceededPage';
import RoutesPage from './pages/RoutesPage';

function App() {
  return (
    <Router basename="/fe-diploma">
      <Routes>
        <Route path="/routes/seat-select" element={<RoutesPage type="seatSelect" />} />
        <Route path="/routes/passengers" element={<RoutesPage type="passengers" />} />
        <Route path="/routes/payment" element={<RoutesPage type="payment" />} />
        <Route path="/routes/verification" element={<RoutesPage type="verification" />} />
        <Route path="/routes" element={<RoutesPage type="routes" />} />
        <Route path="/ordering-succeeded" element={<OrderingSucceededPage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
