# AnalyticsPro - Modern Analytics Dashboard

A beautiful, modern analytics dashboard built with React, featuring a YouTube-like interface with comprehensive data visualization and authentication system.

## ✨ Features

- **Modern Landing Page**: Beautiful hero section with gradient backgrounds and animations
- **Authentication System**: Secure login/logout with protected routes
- **Analytics Dashboard**: YouTube-style analytics with charts and metrics
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Charts**: Line charts, pie charts, and bar charts using Recharts
- **Real-time Metrics**: KPI cards with growth indicators
- **User Management**: User profiles and session management

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd modern-analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Authentication

The app includes a mock authentication system for demonstration purposes:

- **Demo Login**: Use any email and password combination
- **Session Persistence**: Login state is saved in localStorage
- **Protected Routes**: Dashboard is only accessible after login

## 📱 Pages & Components

### Landing Page (`/`)
- Hero section with call-to-action
- Feature highlights
- Statistics showcase
- Modern footer

### Login Page (`/login`)
- Clean login form
- Social login options
- Form validation
- Error handling

### Dashboard (`/dashboard`)
- Sidebar navigation
- KPI metrics cards
- Interactive charts
- Content performance
- User profile management

## 🎨 Design Features

- **Gradient Backgrounds**: Modern blue-to-purple gradients
- **Glass Effects**: Backdrop blur and transparency
- **Smooth Animations**: Fade-in and slide-up effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Icon Integration**: Consistent iconography with Lucide React

## 📊 Analytics Features

- **Views Tracking**: Line charts showing view trends
- **Audience Demographics**: Pie charts for age distribution
- **Performance Metrics**: KPI cards with growth indicators
- **Content Analytics**: Top-performing content lists
- **Engagement Rates**: Progress bars and statistics

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Project Structure

```
src/
├── components/          # React components
│   ├── LandingPage.jsx # Landing page component
│   ├── LoginPage.jsx   # Login form component
│   └── Dashboard.jsx   # Analytics dashboard
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize your primary colors
  }
}
```

### Charts
Update chart data in `Dashboard.jsx`:
```javascript
const viewsData = [
  { name: 'Jan', views: 4000, subscribers: 2400 },
  // ... add your data
]
```

### Metrics
Customize KPI cards in the dashboard:
```javascript
const metrics = [
  {
    title: 'Your Metric',
    value: '1.2K',
    change: '+15%',
    // ... customize
  }
]
```

## 🌟 Future Enhancements

- [ ] Real API integration
- [ ] User registration
- [ ] Password reset functionality
- [ ] More chart types
- [ ] Data export features
- [ ] Real-time updates
- [ ] Dark mode toggle
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ using React and Tailwind CSS**
