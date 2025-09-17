import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DashboardOverview from './components/Dashboard/DashboardOverview';
import InwardDAK from './components/DAK/InwardDAK';
import OutwardDAK from './components/DAK/OutwardDAK';
import SearchAndFilter from './components/Search/SearchAndFilter';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'inward': return 'Inward DAK Management';
      case 'outward': return 'Outward DAK Management';
      case 'search': return 'Search & Filter';
      case 'tracking': return 'DAK Tracking';
      case 'reports': return 'Reports & MIS';
      case 'departments': return 'Department Management';
      case 'users': return 'User Management';
      case 'escalations': return 'Escalation Management';
      case 'settings': return 'System Settings';
      default: return 'DAK Management System';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'inward':
        return <InwardDAK />;
      case 'outward':
        return <OutwardDAK />;
      case 'search':
        return <SearchAndFilter />;
      case 'tracking':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">DAK Tracking</h3>
            <p className="text-gray-600">Real-time tracking functionality will be implemented here.</p>
          </div>
        );
      case 'reports':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Reports & MIS</h3>
            <p className="text-gray-600">Comprehensive reporting and MIS dashboard will be available here.</p>
          </div>
        );
      case 'departments':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Department Management</h3>
            <p className="text-gray-600">Department configuration and management tools.</p>
          </div>
        );
      case 'users':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">User Management</h3>
            <p className="text-gray-600">User roles, permissions, and access control management.</p>
          </div>
        );
      case 'escalations':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Escalation Management</h3>
            <p className="text-gray-600">Automated escalation rules and overdue DAK management.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">System Settings</h3>
            <p className="text-gray-600">System configuration, backup settings, and security options.</p>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getPageTitle()} />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;