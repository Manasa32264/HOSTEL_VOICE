import React, { useState } from 'react';
import { Edit2, Save, X, Utensils } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const MenuPage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  const [menu, setMenu] = useState({
    Sunday: {
      Morning: 'Idli, Sambar, Coconut Chutney, Coffee/Tea',
      Afternoon: 'Rice, Dal, Vegetable Curry, Pickle, Papad',
      Night: 'Chapati, Paneer Curry, Dal, Rice'
    },
    Monday: {
      Morning: 'Poha, Chutney, Coffee/Tea',
      Afternoon: 'Rice, Sambar, Vegetable Fry, Rasam, Curd',
      Night: 'Chapati, Dal, Vegetable Curry, Rice'
    },
    Tuesday: {
      Morning: 'Upma, Chutney, Coffee/Tea',
      Afternoon: 'Rice, Dal, Cabbage Curry, Pickle, Papad',
      Night: 'Chapati, Rajma, Rice, Salad'
    },
    Wednesday: {
      Morning: 'Dosa, Sambar, Chutney, Coffee/Tea',
      Afternoon: 'Rice, Rasam, Potato Curry, Curd, Pickle',
      Night: 'Chapati, Chole, Rice, Onion Salad'
    },
    Thursday: {
      Morning: 'Bread Toast, Butter, Jam, Coffee/Tea',
      Afternoon: 'Rice, Dal, Mixed Vegetable, Papad',
      Night: 'Chapati, Dal Fry, Aloo Gobi, Rice'
    },
    Friday: {
      Morning: 'Pongal, Chutney, Coffee/Tea',
      Afternoon: 'Rice, Sambar, Drumstick Curry, Curd',
      Night: 'Chapati, Palak Paneer, Dal, Rice'
    },
    Saturday: {
      Morning: 'Paratha, Curd, Pickle, Coffee/Tea',
      Afternoon: 'Biryani, Raita, Boiled Egg, Pickle',
      Night: 'Chapati, Dal, Mixed Vegetable, Rice'
    }
  });

  const [editingMenu, setEditingMenu] = useState(menu);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const meals = ['Morning', 'Afternoon', 'Night'];

  const handleEdit = () => {
    setIsEditing(true);
    setEditingMenu({ ...menu });
  };

  const handleSave = () => {
    // TODO: Save to backend
    setMenu(editingMenu);
    setIsEditing(false);
    alert('Menu updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingMenu(menu);
  };

  const handleMenuChange = (day: string, meal: string, value: string) => {
    setEditingMenu(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: value
      }
    }));
  };

  const canEdit = user?.role === 'warden' || user?.role === 'authority';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Utensils className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Weekly Food Menu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Delicious and nutritious meals planned for the week
          </p>
        </div>

        {/* Edit Controls */}
        {canEdit && (
          <div className="flex justify-end mb-6">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Menu
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}

        {/* Menu Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Meal / Day</th>
                  {days.map(day => (
                    <th key={day} className="px-6 py-4 text-center font-semibold min-w-[200px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {meals.map((meal, mealIndex) => (
                  <tr key={meal} className={`${mealIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'} border-b border-gray-200 dark:border-gray-600`}>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30">
                      <div className="flex items-center">
                        {meal === 'Morning' && '🌅'}
                        {meal === 'Afternoon' && '☀️'}
                        {meal === 'Night' && '🌙'}
                        <span className="ml-2">{meal}</span>
                      </div>
                    </td>
                    {days.map(day => (
                      <td key={`${day}-${meal}`} className="px-6 py-4">
                        {isEditing && canEdit ? (
                          <textarea
                            value={editingMenu[day][meal]}
                            onChange={(e) => handleMenuChange(day, meal, e.target.value)}
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm resize-none"
                            rows={3}
                          />
                        ) : (
                          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {menu[day][meal]}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Menu Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">🕕 Meal Timings</h3>
            <div className="space-y-2">
              <p><strong>Morning:</strong> 7:00 AM - 9:00 AM</p>
              <p><strong>Afternoon:</strong> 12:00 PM - 2:00 PM</p>
              <p><strong>Night:</strong> 7:00 PM - 9:00 PM</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">🥗 Special Features</h3>
            <ul className="space-y-2">
              <li>• Fresh ingredients daily</li>
              <li>• Hygienic preparation</li>
              <li>• Nutritionally balanced</li>
              <li>• Vegetarian friendly</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">📞 Mess Contact</h3>
            <div className="space-y-2">
              <p><strong>Mess In-charge:</strong></p>
              <p>Anjali Rani</p>
              <p>📱 +91-9876543215</p>
              <p>Available: 6 AM - 10 PM</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">
            Important Notes
          </h3>
          <div className="text-amber-700 dark:text-amber-300 space-y-2">
            <p>• Menu may change based on ingredient availability</p>
            <p>• Special dietary requirements can be discussed with mess staff</p>
            <p>• Festival special meals will be announced separately</p>
            <p>• Food wastage should be minimized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;