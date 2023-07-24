import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/users.context';
import HomePage from './components/HomePage';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
