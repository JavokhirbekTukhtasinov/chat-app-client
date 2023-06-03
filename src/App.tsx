import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthenticatinPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthenticatinPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
  </BrowserRouter>
}

export default App;
