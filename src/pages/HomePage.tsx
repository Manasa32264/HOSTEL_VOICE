import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Users, FileText, ChefHat, CreditCard, BookOpen, ArrowRight, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const mainCards = [
    {
      icon: FileText,
      title: 'Rules & Fees',
      description: 'View hostel rules, regulations, fee structure, and payment information',
      color: 'from-blue-500 to-blue-600',
      link: '/rules'
    },
    {
      icon: Users,
      title: 'Staff Directory',
      description: 'Contact information and details of hostel staff members and administration',
      color: 'from-emerald-500 to-emerald-600',
      link: '/staff'
    },
    {
      icon: ChefHat,
      title: 'Food Menu',
      description: 'Daily meal plans, weekly menus, and special dietary information',
      color: 'from-orange-500 to-orange-600',
      link: '/menu'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 dark:from-blue-400/5 dark:to-emerald-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Bell className="h-24 w-24 text-blue-600 dark:text-blue-400 animate-pulse" />
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🔔</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                Hostel Voice
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive hostel management platform for seamless communication, 
              efficient administration, and enhanced student experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => navigate('/login')}
              >
                Get Started
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 text-lg font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300"
                onClick={() => navigate('/rules')}
              >
                View Rules & Fees
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Essential Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quick access to all important hostel information and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCards.map((card, index) => (
              <div
                key={index}
                className="group cursor-pointer p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2"
                onClick={() => navigate(card.link)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-800 dark:to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hostel Management?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of hostels that trust Hostel Voice for their daily operations
          </p>
          <button
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Journey
            <Star className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;