import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/Login/WelcomePage';
import Login from './pages/Login/Login';
import LoginConfirm from './pages/Login/LoginConfirm';
import AccountSetup from './pages/Login/AccountSetup';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LoginConfirm" element={<LoginConfirm />} />
          <Route path="/AccountSetup" element={<AccountSetup />} />
        </Routes>
    </Router>
  );
}

export default App;
