import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RulesPage from './pages/RulesPage';
import StaffPage from './pages/StaffPage';
import MenuPage from './pages/MenuPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;