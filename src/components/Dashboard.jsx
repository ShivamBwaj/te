import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'

function Dashboard() {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for charts
  const viewsData = [
    { name: 'Jan', views: 4000, subscribers: 2400, revenue: 2400 },
    { name: 'Feb', views: 3000, subscribers: 1398, revenue: 2210 },
    { name: 'Mar', views: 2000, subscribers: 9800, revenue: 2290 },
    { name: 'Apr', views: 2780, subscribers: 3908, revenue: 2000 },
    { name: 'May', views: 1890, subscribers: 4800, revenue: 2181 },
    { name: 'Jun', views: 2390, subscribers: 3800, revenue: 2500 },
    { name: 'Jul', views: 3490, subscribers: 4300, revenue: 2100 },
  ]

  const audienceData = [
    { name: '18-24', value: 35, color: '#3B82F6' },
    { name: '25-34', value: 30, color: '#8B5CF6' },
    { name: '35-44', value: 20, color: '#10B981' },
    { name: '45+', value: 15, color: '#F59E0B' },
  ]

  const topVideos = [
    { title: 'How to Build a React App', views: '2.4M', growth: '+12%', thumbnail: '🎥' },
    { title: 'JavaScript Best Practices', views: '1.8M', growth: '+8%', thumbnail: '📚' },
    { title: 'CSS Grid Tutorial', views: '1.2M', growth: '+15%', thumbnail: '🎨' },
    { title: 'Node.js Backend Setup', views: '890K', growth: '+5%', thumbnail: '⚙️' },
  ]

  const metrics = [
    {
      title: 'Total Views',
      value: '12.4M',
      change: '+12.5%',
      isPositive: true,
      icon: <Eye className="w-6 h-6" />,
      color: 'blue'
    },
    {
      title: 'Subscribers',
      value: '245K',
      change: '+8.2%',
      isPositive: true,
      icon: <Users className="w-6 h-6" />,
      color: 'green'
    },
    {
      title: 'Watch Time',
      value: '2.1M hrs',
      change: '+15.3%',
      isPositive: true,
      icon: <Clock className="w-6 h-6" />,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: '$45.2K',
      change: '-2.1%',
      isPositive: false,
      icon: <DollarSign className="w-6 h-6" />,
      color: 'yellow'
    }
  ]

  const navigation = [
    { name: 'Overview', id: 'overview', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Content', id: 'content', icon: <Eye className="w-5 h-5" /> },
    { name: 'Audience', id: 'audience', icon: <Users className="w-5 h-5" /> },
    { name: 'Revenue', id: 'revenue', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Analytics', id: 'analytics', icon: <TrendingUp className="w-5 h-5" /> },
  ]

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AnalyticsPro</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={user?.avatar}
                alt={user?.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search analytics..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your analytics today.
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center text-${metric.color}-600`}>
                    {metric.icon}
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <div className={`flex items-center text-sm ${
                  metric.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.isPositive ? (
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Views Trend Chart */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Views Trend</h3>
                <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="subscribers" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Audience Demographics */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Audience Demographics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={audienceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {audienceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Performing Content */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Content</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {topVideos.map((video, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{video.thumbnail}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{video.title}</h4>
                    <p className="text-sm text-gray-500">{video.views} views</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    video.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {video.growth}
                  </div>
                  <button className="p-2 hover:bg-gray-200 rounded-lg">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Engagement Rate */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Engagement Rate</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8%</div>
              <div className="text-sm text-gray-600">+0.3% from last month</div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '48%' }}></div>
              </div>
            </div>

            {/* Average Watch Time */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Avg. Watch Time</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">12:34</div>
              <div className="text-sm text-gray-600">+2:15 from last month</div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* Subscriber Growth */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Subscriber Growth</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">+2.4K</div>
              <div className="text-sm text-gray-600">This month</div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard