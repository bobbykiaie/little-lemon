import './App.css';
import Container from './Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import BookingPage from './Components/BookingPage';

function App() {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* Add more routes as needed */}
        </Routes>
      
    </Router>
  );
}

export default App;
