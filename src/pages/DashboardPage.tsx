import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import StudentDashboard from '../components/Dashboard/StudentDashboard';
import WardenDashboard from '../components/Dashboard/WardenDashboard';
import AuthorityDashboard from '../components/Dashboard/AuthorityDashboard';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Please log in to access the dashboard.
          </p>
        </div>
      </div>
    );
  }

  switch (user.role) {
    case 'student':
      return <StudentDashboard />;
    case 'warden':
      return <WardenDashboard />;
    case 'authority':
      return <AuthorityDashboard />;
    default:
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Invalid Role
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Your account role is not recognized.
            </p>
          </div>
        </div>
      );
  }
};

export default DashboardPage;