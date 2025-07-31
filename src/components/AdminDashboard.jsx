import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>
      <p className="text-gray-600">
        Welcome to your admin dashboard! You can manage users, settings, and view statistics here.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-xl font-bold text-blue-800 mt-2">150</p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Active Sessions</h3>
          <p className="text-xl font-bold text-green-800 mt-2">45</p>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Pending Tasks</h3>
          <p className="text-xl font-bold text-yellow-800 mt-2">8</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
