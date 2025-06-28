import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, FileText, Eye, User } from 'lucide-react';

const AuthorityDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'students', label: 'Student Details', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  const stats = {
    totalStudents: 450,
    occupancyRate: 85,
    monthlyRevenue: 1250000
  };

  const TabButton: React.FC<{ tab: any, isActive: boolean, onClick: () => void }> = ({ tab, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <tab.icon className="h-4 w-4 mr-2" />
      {tab.label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Photo and Name */}
        <div className="mb-8 flex items-center space-x-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dr. Sarah Mitchell
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Chief Administrative Officer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Strategic oversight and administrative insights
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Students</p>
                <p className="text-3xl font-bold">{stats.totalStudents}</p>
              </div>
              <Users className="h-12 w-12 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100">Occupancy Rate</p>
                <p className="text-3xl font-bold">{stats.occupancyRate}%</p>
              </div>
              <BarChart3 className="h-12 w-12 text-emerald-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Total Expenses</p>
                <p className="text-2xl font-bold">₹8.2L</p>
              </div>
              <FileText className="h-12 w-12 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map(tab => (
                <TabButton 
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Performance Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Room Utilization</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Staff Efficiency</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">92%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">Fee Collection Rate</span>
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">95%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Highlights
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">95% Fee Collection Rate</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Best performance this quarter</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">New Digital Menu System</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Implemented successfully</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">Zero Safety Incidents</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Maintained for 6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Monthly Financial Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold">₹12.5L</p>
                      <p className="text-blue-100">Total Revenue</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold">₹8.2L</p>
                      <p className="text-blue-100">Total Expenses</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Administrative Reports
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">Financial Reports</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Monthly Revenue Report</span>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Download
                        </button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Expense Analysis</span>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Download
                        </button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Fee Collection Status</span>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">Operational Reports</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Student Attendance Report</span>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Download
                        </button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Complaint Analysis</span>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Download
                        </button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">Staff Performance Report</span>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Student Details (View Only)
                </h3>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Note:</strong> Student details are view-only for Higher Authorities. 
                    Only Wardens can edit student information.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50 dark:bg-gray-600">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Room
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Attendance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                      {[
                        { name: 'John Doe', room: '101', department: 'Computer Science', attendance: 95 },
                        { name: 'Jane Smith', room: '205', department: 'Electronics', attendance: 88 },
                        { name: 'Mike Johnson', room: '110', department: 'Mechanical', attendance: 92 },
                        { name: 'Alice Brown', room: '203', department: 'Civil', attendance: 78 }
                      ].map((student, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {student.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {student.room}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            {student.department}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              student.attendance >= 90 ? 'bg-green-100 text-green-800' :
                              student.attendance >= 80 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {student.attendance}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Analytics & Insights
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">Occupancy Trends</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">January</span>
                          <span className="text-gray-900 dark:text-white">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">February</span>
                          <span className="text-gray-900 dark:text-white">82%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">March</span>
                          <span className="text-gray-900 dark:text-white">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">Complaint Categories</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Room Related</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Mess Related</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Maintenance</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">Other</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;