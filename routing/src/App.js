import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CompA from './components/CompA';
import CompB from './components/CompB';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import InnerDashboard1 from './components/InnerDashboard1';
import InnerDashboard2 from './components/InnerDashboard2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="d1" element={<InnerDashboard1 />} >
              <Route path="d2" element={<InnerDashboard2 />} />
            </Route>
          </Route>
          <Route path="/compB?/:Id" element={<CompB />} />
          <Route path="/compa" element={<CompA />} />
          <Route path="*" element={<h2>Default Route</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// /comp - /comp route
// /comp/* - /comp/12/323 route - * = 12/323
// /comp?/:Id - parameter is optional

// Try the route which is not present by removing optional query parameter or optional route segment from compB route
