import React, { useState, useEffect } from 'react';
import { User, FileText, MessageSquare, Calendar, Bell, Home, Phone, Mail, DollarSign, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface AttendanceRecord {
  month: string;
  year: number;
  present: number;
  total: number;
  percentage: number;
}

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [complaintType, setComplaintType] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');
  const [complaintImage, setComplaintImage] = useState<File | null>(null);
  const [complaintRoom, setComplaintRoom] = useState('');
  const [complaints, setComplaints] = useState<any[]>([]);

  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [leaveReason, setLeaveReason] = useState('');
  const [leaveRequests, setLeaveRequests] = useState<any[]>([]);

  // Mock attendance data for multiple months
  const attendanceHistory: AttendanceRecord[] = [
    { month: 'January', year: 2024, present: 28, total: 31, percentage: 90.3 },
    { month: 'February', year: 2024, present: 26, total: 29, percentage: 89.7 },
    { month: 'March', year: 2024, present: 29, total: 31, percentage: 93.5 },
    { month: 'April', year: 2024, present: 27, total: 30, percentage: 90.0 },
    { month: 'May', year: 2024, present: 30, total: 31, percentage: 96.8 },
    { month: 'June', year: 2024, present: 28, total: 30, percentage: 93.3 },
    { month: 'July', year: 2024, present: 29, total: 31, percentage: 93.5 },
    { month: 'August', year: 2024, present: 30, total: 31, percentage: 96.8 },
    { month: 'September', year: 2024, present: 28, total: 30, percentage: 93.3 },
    { month: 'October', year: 2024, present: 31, total: 31, percentage: 100.0 },
    { month: 'November', year: 2024, present: 28, total: 30, percentage: 93.3 },
    { month: 'December', year: 2024, present: 25, total: 31, percentage: 80.6 },
    // Adding 2025 data
    { month: 'January', year: 2025, present: 31, total: 31, percentage: 100 },
    { month: 'February', year: 2025, present: 28, total: 28, percentage: 100 },
    { month: 'March', year: 2025, present: 31, total: 31, percentage: 100 },
    { month: 'April', year: 2025, present: 30, total: 30, percentage: 100 },
    { month: 'May', year: 2025, present: 31, total: 31, percentage: 100 },
    { month: 'June', year: 2025, present: 28, total: 30, percentage: 93.3 },
    { month: 'July', year: 2025, present: 0, total: 0, percentage: 0.0 },
    { month: 'August', year: 2025, present: 0, total: 31, percentage: 0.0 },
    { month: 'September', year: 2025, present: 0, total: 30, percentage: 0.0 },
    { month: 'October', year: 2025, present: 0, total: 31, percentage: 0.0 },
    { month: 'November', year: 2025, present: 0, total: 30, percentage: 0.0 },
    { month: 'December', year: 2025, present: 0, total: 31, percentage: 0.0 }
  ];

  // Get current month attendance based on selected month/year
  const getCurrentMonthAttendance = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = monthNames[selectedMonth];
    return attendanceHistory.find(record => 
      record.month === currentMonth && record.year === selectedYear
    ) || { month: currentMonth, year: selectedYear, present: 0, total: 0, percentage: 0 };
  };

  const currentAttendance = getCurrentMonthAttendance();

  // Mock data - replace with actual API calls
  const studentData = {
    name: 'Arohi',
    roomNumber: 'G-8',
    department: 'Computer Science',
    email: 'arohi@example.com',
    phone: '+91-9876543210',
    parentName: 'Basavannappa',
    parentPhone: '+91-9876543211',
    profileImage: 'https://i.pinimg.com/originals/87/66/e5/8766e5f221fa30acb078d6d2d6b7af81.jpg', // Professional student photo
    pendingComplaints: 2,
    approvedLeaves: 3,
    pendingRefund: 1250
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'attendance', label: 'Attendance', icon: User },
    { id: 'complaints', label: 'Complaints', icon: MessageSquare },
    { id: 'leave', label: 'Leave Requests', icon: Calendar },
    { id: 'refund', label: 'Refund Requests', icon: DollarSign },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

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

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return 'from-green-500 to-emerald-600';
    if (percentage >= 85) return 'from-blue-500 to-cyan-600';
    if (percentage >= 75) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  // Get month name for display
  const getMonthName = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[selectedMonth];
  };

  // Load from localStorage on mount
  useEffect(() => {
    const storedComplaints = localStorage.getItem('complaints');
    if (storedComplaints) setComplaints(JSON.parse(storedComplaints));
    const storedLeaves = localStorage.getItem('leaveRequests');
    if (storedLeaves) setLeaveRequests(JSON.parse(storedLeaves));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Profile */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="relative">
                <img 
                  src={studentData.profileImage} 
                  alt={studentData.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = 'https://i.pinimg.com/originals/87/66/e5/8766e5f221fa30acb078d6d2d6b7af81.jpg';
                  }}
                />
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1.5 shadow-lg hover:bg-blue-700 transition-colors">
                  <Camera className="h-3 w-3" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, {studentData.name}!
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Room {studentData.roomNumber} • {studentData.department}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats - Now shows selected month data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`bg-gradient-to-br ${getAttendanceColor(currentAttendance.percentage)} rounded-xl p-6 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80">
                  {activeTab === 'attendance' ? `${getMonthName()} ${selectedYear}` : 'Monthly Attendance'}
                </p>
                <p className="text-2xl font-bold">{currentAttendance.percentage.toFixed(1)}%</p>
                <p className="text-sm text-white/70">{currentAttendance.present}/{currentAttendance.total} days</p>
              </div>
              <User className="h-12 w-12 text-white/60" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100">Pending Complaints</p>
                <p className="text-3xl font-bold">{studentData.pendingComplaints}</p>
              </div>
              <MessageSquare className="h-12 w-12 text-emerald-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Approved Leaves</p>
                <p className="text-3xl font-bold">{studentData.approvedLeaves}</p>
              </div>
              <Calendar className="h-12 w-12 text-orange-200" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100">Pending Refund</p>
                <p className="text-2xl font-bold">₹{studentData.pendingRefund}</p>
              </div>
              <DollarSign className="h-12 w-12 text-pink-200" />
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
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{studentData.name}</span>
                      </div>
                      <div className="flex items-center">
                        <Home className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">Room {studentData.roomNumber}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{studentData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{studentData.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Emergency Contact
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{studentData.parentName}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{studentData.parentPhone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <button 
                      onClick={() => setActiveTab('attendance')}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                    >
                      <User className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">View Attendance</p>
                    </button>
                    <button 
                      onClick={() => setActiveTab('complaints')}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                    >
                      <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">File Complaint</p>
                    </button>
                    <button 
                      onClick={() => setActiveTab('leave')}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                    >
                      <Calendar className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Request Leave</p>
                    </button>
                    <button 
                      onClick={() => setActiveTab('refund')}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                    >
                      <DollarSign className="h-8 w-8 text-pink-600 dark:text-pink-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Request Refund</p>
                    </button>
                    <button className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
                      <FileText className="h-8 w-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">View Rules</p>
                    </button>
                    <button 
                      onClick={() => setActiveTab('notifications')}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                    >
                      <Bell className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Notifications</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'attendance' && (
              <div className="space-y-6">
                {/* Month Navigation */}
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <button 
                    onClick={() => navigateMonth('prev')}
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-md transition-shadow"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {currentAttendance.month} {selectedYear}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Monthly Attendance Report
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => navigateMonth('next')}
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-md transition-shadow"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                {/* Current Month Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`bg-gradient-to-br ${getAttendanceColor(currentAttendance.percentage)} rounded-xl p-6 text-white`}>
                    <h4 className="text-lg font-semibold mb-2">Attendance Rate</h4>
                    <p className="text-3xl font-bold">{currentAttendance.percentage.toFixed(1)}%</p>
                    <div className="mt-4 bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white rounded-full h-2 transition-all duration-500"
                        style={{ width: `${currentAttendance.percentage}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Present Days</h4>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{currentAttendance.present}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">out of {currentAttendance.total} days</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Absent Days</h4>
                    <p className="text-3xl font-bold text-red-600 dark:text-red-400">{currentAttendance.total - currentAttendance.present}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">missed this month</p>
                  </div>
                </div>

                {/* Attendance History */}
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Attendance History
                  </h4>
                  <div className="grid gap-4">
                    {attendanceHistory.slice(-6).reverse().map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            record.percentage >= 95 ? 'bg-green-500' :
                            record.percentage >= 85 ? 'bg-blue-500' :
                            record.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {record.month} {record.year}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {record.present}/{record.total} days
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {record.percentage.toFixed(1)}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'complaints' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  File a New Complaint
                </h3>
                {/* List of submitted complaints */}
                {complaints.length > 0 && (
                  <div className="mb-6 space-y-4">
                    {complaints.map((c, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 shadow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-blue-700 dark:text-blue-300">{c.type}</span>
                          <span className="text-xs text-gray-500">{c.date}</span>
                        </div>
                        <div className="text-gray-900 dark:text-white mb-1">{c.description}</div>
                        {c.room && <div className="text-xs text-gray-500">Room: {c.room}</div>}
                        {c.image && <img src={c.image} alt="complaint" className="mt-2 max-h-32 rounded" />}
                        <div className="text-xs text-emerald-600 mt-2">Status: Pending (Sent to Warden)</div>
                      </div>
                    ))}
                  </div>
                )}
                <form className="space-y-4" onSubmit={e => {
                  e.preventDefault();
                  const newComplaint = {
                    id: Date.now(),
                    student: studentData.name,
                    room: complaintType === 'room' ? (complaintRoom || studentData.roomNumber) : '',
                    type: complaintType ? (
                      complaintType === 'room' ? 'Room Related' :
                      complaintType === 'mess' ? 'Mess Related' :
                      complaintType === 'maintenance' ? 'Maintenance' : 'Other'
                    ) : '',
                    status: 'Pending',
                    date: new Date().toLocaleString(),
                    description: complaintDescription,
                    estimatedDays: '',
                    image: complaintImage ? URL.createObjectURL(complaintImage) : null
                  };
                  const updatedComplaints = [newComplaint, ...complaints];
                  setComplaints(updatedComplaints);
                  localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
                  setComplaintType('');
                  setComplaintDescription('');
                  setComplaintImage(null);
                  setComplaintRoom('');
                }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Complaint Type
                    </label>
                    <select 
                      value={complaintType}
                      onChange={(e) => setComplaintType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select complaint type</option>
                      <option value="room">Room Related</option>
                      <option value="mess">Mess Related</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/* Conditionally show room number field only for Room Related complaints */}
                  {complaintType === 'room' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Room Number
                      </label>
                      <input 
                        type="text"
                        value={complaintRoom}
                        onChange={e => setComplaintRoom(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Enter room number"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea 
                      rows={4}
                      value={complaintDescription}
                      onChange={e => setComplaintDescription(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Describe your complaint in detail..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Upload Image (Optional)
                    </label>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={e => setComplaintImage(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Complaint
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'leave' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Request Leave
                </h3>
                {/* List of submitted leave requests */}
                {leaveRequests.length > 0 && (
                  <div className="mb-6 space-y-4">
                    {leaveRequests.map((l, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 shadow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-orange-700 dark:text-orange-300">{l.from} to {l.to}</span>
                          <span className="text-xs text-gray-500">{l.date}</span>
                        </div>
                        <div className="text-gray-900 dark:text-white mb-1">{l.reason}</div>
                        <div className="text-xs text-emerald-600 mt-2">Status: Pending (Sent to Warden)</div>
                      </div>
                    ))}
                  </div>
                )}
                <form className="space-y-4" onSubmit={e => {
                  e.preventDefault();
                  if (!leaveFrom || !leaveTo || !leaveReason) return;
                  const newLeave = {
                    id: Date.now(),
                    student: studentData.name,
                    room: studentData.roomNumber,
                    from: leaveFrom,
                    to: leaveTo,
                    reason: leaveReason,
                    status: 'Pending',
                    appliedDate: new Date().toLocaleString(),
                  };
                  const updatedLeaves = [newLeave, ...leaveRequests];
                  setLeaveRequests(updatedLeaves);
                  localStorage.setItem('leaveRequests', JSON.stringify(updatedLeaves));
                  setLeaveFrom('');
                  setLeaveTo('');
                  setLeaveReason('');
                }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        From Date
                      </label>
                      <input 
                        type="date"
                        value={leaveFrom}
                        onChange={e => setLeaveFrom(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        To Date
                      </label>
                      <input 
                        type="date"
                        value={leaveTo}
                        onChange={e => setLeaveTo(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Reason
                    </label>
                    <textarea 
                      rows={3}
                      value={leaveReason}
                      onChange={e => setLeaveReason(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Reason for leave..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                  >
                    Submit Leave Request
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'refund' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Request Refund
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Refund Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                      <option>Mess Fee Refund</option>
                      <option>Room Fee Refund</option>
                      <option>Security Deposit Refund</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Amount (₹)
                    </label>
                    <input 
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter refund amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Reason for Refund
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Explain why you are requesting this refund..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Supporting Documents (Optional)
                    </label>
                    <input 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200"
                  >
                    Submit Refund Request
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">
                        Mess Menu Updated
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        Weekly menu has been updated with new items for next week.
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">2 hours ago</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <Bell className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800 dark:text-green-200">
                        Leave Request Approved
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Your leave request from 15th to 17th March has been approved.
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-2">1 day ago</p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-pink-800 dark:text-pink-200">
                        Refund Processed
                      </h4>
                      <p className="text-sm text-pink-700 dark:text-pink-300 mt-1">
                        Your mess fee refund of ₹500 has been processed successfully.
                      </p>
                      <p className="text-xs text-pink-600 dark:text-pink-400 mt-2">3 days ago</p>
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

export default StudentDashboard;