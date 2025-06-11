import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { Dashboard } from './components/Dashboard';
import { User, UserData } from './types';

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('kara-data');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('kara-data', JSON.stringify(userData));
    }
  }, [userData]);

  const handleAuth = (user: User) => {
    const newUserData: UserData = {
      user,
      library: [],
      watchlist: []
    };
    setUserData(newUserData);
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('kara-data');
  };

  const handleUpdateUserData = (newUserData: UserData) => {
    setUserData(newUserData);
  };

  if (!userData) {
    return <HomePage onAuth={handleAuth} />;
  }

  return (
    <Dashboard
      userData={userData}
      onLogout={handleLogout}
      onUpdateUserData={handleUpdateUserData}
    />
  );
}

export default App;