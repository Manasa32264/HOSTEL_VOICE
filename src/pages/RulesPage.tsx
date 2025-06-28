import React from 'react';
import { FileText, DollarSign, Clock, Zap, Droplets, Utensils, Coffee } from 'lucide-react';

const RulesPage: React.FC = () => {
  const rules = [
  'Students should not occupy their allotted rooms without written permission from the Hostel Warden.',
  'Students should give the list of articles, furniture etc., in their respective rooms belonging to the college and are wholly responsible for the same; any damage should be intimated immediately, else the entire cost will be recovered from the inmates.',
  'Administering, consumption or storage of liquor, ganja or any such drugs prohibited by the Central Excise/Customs is strictly prohibited inside the college campus and hostel.',
  'Entertaining gents guests in the hostel is prohibited.',
  'Inmates are expected to be back in the hostel by 7:30 p.m. and should not leave the hostel premises after 7:30 p.m.',
  'Students are expected to maintain their rooms clean and tidy.',
  'In case of any disturbance in the dining hall, students should report immediately to the Warden or Assistant Warden, not to the mess staff.',
  'Caution deposit paid at the time of joining will be refunded only at the time of leaving the hostel at the end of the academic year.',
  'Students must fulfill all general financial commitments imposed by the hostel authorities.',
  'Ragging in any form is strictly prohibited and may lead to expulsion from the hostel and college.'
];


  const feeStructure = [
    { category: 'Room Rent', amount: 3000, frequency: 'Monthly', icon: FileText },
    { category: 'Electricity', amount: 500, frequency: 'Monthly', icon: Zap },
    { category: 'Water', amount: 200, frequency: 'Monthly', icon: Droplets },
    { category: 'Mess', amount: 2800, frequency: 'Monthly', icon: Utensils },
    { category: 'Snacks', amount: 800, frequency: 'Monthly', icon: Coffee }
  ];

  const dailyCosts = [
    { item: 'Mess (per day)', cost: '₹93.33' },
    { item: 'Snacks (per day)', cost: '₹26.67' },
    { item: 'Total Food (per day)', cost: '₹120' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hostel Rules & Fee Structure
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Guidelines and transparent pricing for a better hostel experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Rules Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hostel Rules</h2>
            </div>
            
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-blue-800 dark:text-blue-200 font-medium">
                  Quiet Hours: 10 PM - 6 AM
                </span>
              </div>
            </div>
          </div>

          {/* Fee Structure Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <DollarSign className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fee Structure</h2>
            </div>
            
            <div className="space-y-4 mb-8">
              {feeStructure.map((fee, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <fee.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {fee.category}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {fee.frequency}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      ₹{fee.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  Total Monthly Fee:
                </span>
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  ₹{feeStructure.reduce((sum, fee) => sum + fee.amount, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Cost Breakdown */}
        <div className="mt-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Daily Cost Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dailyCosts.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{item.item}</h3>
                  <span className="text-2xl font-bold">{item.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">
            Payment Information
          </h3>
          <div className="text-amber-700 dark:text-amber-300 space-y-2">
            <p>• Fees are due on the 1st of each month</p>
            <p>• Late payment charges: ₹100 after 5 days</p>
            <p>• Security deposit: ₹5,000 (refundable)</p>
            <p>• Payment methods: Cash, UPI, Bank Transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;