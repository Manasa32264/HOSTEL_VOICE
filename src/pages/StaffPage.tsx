import React from 'react';
import { Users, Shield, Utensils, Sparkles, Eye } from 'lucide-react';

const StaffPage: React.FC = () => {
  const chiefWarden = {
    name: 'Dr. Manny',
    phone: '+91-9876543210',
    email: 'chief.warden@hostel.edu',
    photo: 'data:image/jpeg;base64,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'
  };

  const assistantWarden = {
    name: 'Mrs. Rosy',
    phone: '+91-9876543211',
    email: 'assistant.warden@hostel.edu',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoTfZYkXNEK-d98ztZodAuG6dQ6WiaFgI2A&s'
  };

  const messStaff = [
    { name: 'Raman Singh', role: 'Head Cook', phone: '+91-9876543212' },
    { name: 'Meera Devi', role: 'Assistant Cook', phone: '+91-9876543213' },
    { name: 'Suresh Kumar', role: 'Kitchen Helper', phone: '+91-9876543214' },
    { name: 'Anjali Rani', role: 'Mess Supervisor', phone: '+91-9876543215' }
  ];

  const cleaningStaff = [
    { name: 'Lakshmi Bai', role: 'Cleaning Supervisor', phone: '+91-9876543216' },
    { name: 'Ramesh Yadav', role: 'Floor Cleaner', phone: '+91-9876543217' },
    { name: 'Sunita Kumari', role: 'Bathroom Cleaner', phone: '+91-9876543218' },
    { name: 'Mohan Lal', role: 'Ground Maintenance', phone: '+91-9876543219' }
  ];

  const securityStaff = [
    { name: 'Vikram Singh', role: 'Security Head', phone: '+91-9876543220', shift: 'Day (6 AM - 6 PM)' },
    { name: 'Ashok Kumar', role: 'Night Guard', phone: '+91-9876543221', shift: 'Night (6 PM - 6 AM)' }
  ];

  const StaffCard: React.FC<{ 
    staff: any, 
    icon: React.ElementType, 
    color: string, 
    showPhoto?: boolean 
  }> = ({ staff, icon: Icon, color, showPhoto = false }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-4">
        {showPhoto && staff.photo ? (
          <img 
            src={staff.photo} 
            alt={staff.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
          />
        ) : (
          <div className={`p-4 ${color} rounded-full`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {staff.name}
          </h3>
          {staff.role && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {staff.role}
            </p>
          )}
          {staff.shift && (
            <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">
              {staff.shift}
            </p>
          )}
          <div className="space-y-1">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              📞 {staff.phone}
            </p>
            {staff.email && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                ✉️ {staff.email}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const StaffSection: React.FC<{ 
    title: string, 
    staff: any[], 
    icon: React.ElementType, 
    color: string 
  }> = ({ title, staff, icon: Icon, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-6">
        <div className={`p-3 ${color} rounded-lg mr-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="grid gap-4">
        {staff.map((member, index) => (
          <StaffCard 
            key={index} 
            staff={member} 
            icon={Icon} 
            color={color}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hostel Staff Directory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Meet our dedicated team working to make your hostel experience comfortable
          </p>
        </div>

        {/* Wardens Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Chief Warden</h2>
            </div>
            <StaffCard 
              staff={chiefWarden} 
              icon={Shield} 
              color="bg-blue-500" 
              showPhoto={true}
            />
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Assistant Warden</h2>
            </div>
            <StaffCard 
              staff={assistantWarden} 
              icon={Users} 
              color="bg-emerald-500" 
              showPhoto={true}
            />
          </div>
        </div>

        {/* Other Staff Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <StaffSection 
            title="Mess Staff" 
            staff={messStaff} 
            icon={Utensils} 
            color="bg-orange-500" 
          />
          <StaffSection 
            title="Cleaning Staff" 
            staff={cleaningStaff} 
            icon={Sparkles} 
            color="bg-purple-500" 
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <StaffSection 
            title="Security Staff" 
            staff={securityStaff} 
            icon={Eye} 
            color="bg-red-500" 
          />
          
          {/* Emergency Contacts */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6">
              Emergency Contacts
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <span className="font-semibold text-gray-900 dark:text-white">Police</span>
                <span className="text-red-600 dark:text-red-400 font-bold">100</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <span className="font-semibold text-gray-900 dark:text-white">Fire</span>
                <span className="text-red-600 dark:text-red-400 font-bold">101</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <span className="font-semibold text-gray-900 dark:text-white">Ambulance</span>
                <span className="text-red-600 dark:text-red-400 font-bold">108</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <span className="font-semibold text-gray-900 dark:text-white">Hostel Emergency</span>
                <span className="text-red-600 dark:text-red-400 font-bold">+91-9876543200</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Hours */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Office Hours & Availability
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-blue-700 dark:text-blue-300">
            <div>
              <p><strong>Chief Warden:</strong> 9 AM - 6 PM (Mon-Sat)</p>
              <p><strong>Assistant Warden:</strong> 8 AM - 8 PM (Daily)</p>
            </div>
            <div>
              <p><strong>Emergency Contact:</strong> 24/7</p>
              <p><strong>Mess Supervisor:</strong> 6 AM - 10 PM (Daily)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;