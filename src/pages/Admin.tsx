
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Logo from '@/components/Logo';
import { LogOut, Home, Grid, Tag, Users } from 'lucide-react';
import AdminCollections from '@/components/admin/AdminCollections';
import AdminDashboard from '@/components/admin/AdminDashboard';

const Admin = () => {
  const { logout, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Header */}
      <header className="bg-elegance-navy text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo size="sm" isFooter={true} />
            <span className="font-playfair text-xl">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:text-elegance-pink" 
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-1" />
                View Site
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-elegance-navy"
              onClick={() => logout()}
            >
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-64 shrink-0">
          <div className="bg-white rounded-lg shadow p-4">
            <Tabs 
              defaultValue="dashboard" 
              className="w-full" 
              orientation="vertical"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="flex flex-col h-auto bg-gray-100 p-0 rounded-md">
                <TabsTrigger 
                  value="dashboard" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-elegance-pink data-[state=active]:text-white"
                >
                  <Grid className="w-4 h-4 mr-2" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger 
                  value="collections" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-elegance-pink data-[state=active]:text-white"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  Collections
                </TabsTrigger>
                <TabsTrigger 
                  value="customers" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-elegance-pink data-[state=active]:text-white"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Customers
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {activeTab === 'dashboard' && <AdminDashboard />}
          {activeTab === 'collections' && <AdminCollections />}
          {activeTab === 'customers' && (
            <div className="text-center py-8">
              <h2 className="font-playfair text-2xl text-elegance-navy mb-4">Customer Management</h2>
              <p className="text-gray-500">Customer management features coming soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* Admin Footer */}
      <footer className="bg-white border-t py-4 px-6">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>© 2024 A.S Jewellers Admin Panel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Admin;
