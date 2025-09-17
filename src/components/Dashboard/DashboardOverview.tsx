import React from 'react';
import { 
  FileText, 
  Inbox, 
  Send, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  Users
} from 'lucide-react';
import StatsCard from './StatsCard';

const DashboardOverview: React.FC = () => {
  const stats = [
    {
      title: 'Total DAK Today',
      value: 247,
      icon: FileText,
      color: 'blue' as const,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Inward DAK',
      value: 156,
      icon: Inbox,
      color: 'green' as const,
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Outward DAK',
      value: 91,
      icon: Send,
      color: 'purple' as const,
      trend: { value: 5, isPositive: false }
    },
    {
      title: 'Pending Actions',
      value: 34,
      icon: Clock,
      color: 'yellow' as const,
      trend: { value: 15, isPositive: false }
    },
    {
      title: 'Overdue',
      value: 8,
      icon: AlertTriangle,
      color: 'red' as const,
      trend: { value: 3, isPositive: false }
    },
    {
      title: 'Closed Today',
      value: 67,
      icon: CheckCircle,
      color: 'green' as const,
      trend: { value: 22, isPositive: true }
    }
  ];

  const recentActivity = [
    {
      id: '1',
      action: 'New Inward DAK Registered',
      dakNumber: 'IN/2024/001234',
      department: 'Finance',
      time: '2 minutes ago',
      priority: 'high'
    },
    {
      id: '2',
      action: 'DAK Forwarded',
      dakNumber: 'OUT/2024/000567',
      department: 'HR',
      time: '15 minutes ago',
      priority: 'medium'
    },
    {
      id: '3',
      action: 'DAK Closed',
      dakNumber: 'IN/2024/001198',
      department: 'IT',
      time: '1 hour ago',
      priority: 'low'
    },
    {
      id: '4',
      action: 'Escalation Alert',
      dakNumber: 'IN/2024/001156',
      department: 'Legal',
      time: '2 hours ago',
      priority: 'urgent'
    }
  ];

  const departmentStats = [
    { name: 'Finance', inward: 45, outward: 23, pending: 8 },
    { name: 'HR', inward: 32, outward: 18, pending: 5 },
    { name: 'IT', inward: 28, outward: 15, pending: 3 },
    { name: 'Legal', inward: 25, outward: 12, pending: 7 },
    { name: 'Admin', inward: 26, outward: 23, pending: 11 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.dakNumber} • {activity.department}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(activity.priority)}`}>
                      {activity.priority}
                    </span>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department-wise Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Department-wise Statistics
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="font-medium text-gray-900">{dept.name}</div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                      <span className="text-gray-600">In: {dept.inward}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                      <span className="text-gray-600">Out: {dept.outward}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                      <span className="text-gray-600">Pending: {dept.pending}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;