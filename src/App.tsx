import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthenticatinPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ConversationPage from './pages/ConversationPage';
import ConversationChannelPage from './pages/ConversationChannelPage';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthenticatinPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/conversations" element={<ConversationPage />} >
        <Route path=':id' element={<ConversationChannelPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
