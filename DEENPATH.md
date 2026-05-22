# 📌 Deen Path

The Islamic Knowledge App is a modern web application designed to provide easy access to essential Islamic teachings and daily religious tools. It combines Qur’an verses, Hadith collections, prayer times, and Zakat guidance into a single unified platform.

The goal is to make Islamic knowledge more accessible, organized, and interactive for users, especially students and learners who want structured guidance in their daily spiritual life.

The application is built using modern frontend technologies and integrates external APIs to fetch real-time Islamic data such as Qur’an verses and prayer schedules.

## ❗ Problem Statement & Solution

Many Muslims and learners face challenges such as:

- Scattered Islamic resources across different websites and apps
- Lack of a centralized platform for Qur’an, Hadith, and prayer times
- Difficulty understanding Zakat calculations and categories
- Limited offline/structured learning experience
- Poor user experience in many existing Islamic apps

## ✅ Solution

This project solves these issues by:

- Providing a centralized Islamic knowledge platform
- Integrating APIs for real-time Qur’an and prayer time data
- Structuring Islamic knowledge into clear modules:
  - Qur’an
  - Hadith
  - Salah (Prayer)
  - Zakat guidance
- Offering a clean and simple UI for better learning experience
- Using authentication to personalize user experience

## 🛠️ Tech Stack

### Frontend

- ⚛️ React.js
- 🎨 CSS / Tailwind CSS (if used)
- 📦 React Router DOM (for navigation)
- 🧠 Context API + Reducer (state management)

### Backend / Services

- 🔥 Firebase (Authentication & backend services)
- 🌐 REST APIs:
  - AlQuran Cloud API (Qur’an data)
  - Prayer Times API (for daily Salah schedules)

## 🚀 Features

- 📖 Qur’an reading with API integration
- 🕌 Daily prayer times display
- 📿 Hadith collection section
- 💰 Zakat calculation and explanation module
- 🔐 User authentication (login/register/logout)
- 🔄 Global state management using Context API
- 📱 Responsive design (mobile-friendly)

## 🧠 Architecture Overview

The app is structured using a modular React architecture:

```
src/
 ├── components/
 ├── pages/
 ├── context/
 ├── services/ (API calls)
 ├── firebase/ (auth config)
 ├── reducers/
 └── App.jsx
```

- Context API manages global state (user, Quran, Hadith, Prayer times)
- Firebase Authentication handles user sessions
- API layer handles all external data fetching

## 🔐 Authentication Flow

- User registers or logs in via Firebase Auth
- Auth state is stored in global context
- Protected routes ensure secure access to features
- Logout clears session and redirects user

## 📌 Problem Solved Impact

- Reduces time spent searching for Islamic resources
- Helps users maintain daily prayer discipline
- Educates users on Zakat and Islamic obligations
- Provides structured learning for beginners

## 🔮 Future Improvements

- Offline mode support
- Audio recitation for Qur’an
- Push notifications for prayer reminders
- Multi-language support
- Mobile app version (React Native)

## ⚙️ Setup Instructions

```
# Clone repository
git clone https://github.com/your-username/islamic-knowledge-app.git

# Navigate to project
cd islamic-knowledge-app

# Install dependencies
npm install

# Start development server
npm run dev
```
## 🤝 Contribution
Contributions are welcome:

- Fork the repo
- Create a new branch
- Commit changes
- Submit a pull request
## 📄 License
This project is open-source and available under the MIT License.