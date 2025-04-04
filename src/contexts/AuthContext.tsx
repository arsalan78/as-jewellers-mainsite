
import React, { createContext, useState, useContext, useEffect } from 'react';

type AdminUser = {
  id: string;
  name: string;
  role: 'admin';
};

type AuthContextType = {
  currentUser: AdminUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // In a real app, you would connect to a backend for authentication
  // For now, we'll use a simple hardcoded admin user
  const adminEmail = "admin@asjewellers.com";
  const adminPassword = "admin123"; // This should be replaced with a secure solution in production

  useEffect(() => {
    // Check local storage for existing session on page load
    const storedUser = localStorage.getItem('admin-user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple authentication for demo purposes
    if (email === adminEmail && password === adminPassword) {
      const user: AdminUser = {
        id: '1',
        name: 'Admin User',
        role: 'admin',
      };
      
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('admin-user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('admin-user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
