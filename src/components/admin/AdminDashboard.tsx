
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Users, Star, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-playfair font-bold text-elegance-navy mb-6">Dashboard</h2>
        <p className="text-gray-500 mb-6">Welcome to your admin dashboard. Here's an overview of your store performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collections</CardTitle>
            <ShoppingBag className="h-4 w-4 text-elegance-pink" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2 added this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <TrendingUp className="h-4 w-4 text-elegance-pink" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all collections
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Inquiries</CardTitle>
            <Users className="h-4 w-4 text-elegance-pink" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              3 new in the last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Featured Items</CardTitle>
            <Star className="h-4 w-4 text-elegance-pink" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">
              Currently on homepage
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Latest changes to your catalog</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Added "Emerald Halo" to Engagement Rings</p>
                  <p className="text-sm text-gray-500">5 days ago</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">New</Badge>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Updated "Royal Necklaces" collection description</p>
                  <p className="text-sm text-gray-500">1 week ago</p>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Update</Badge>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <div>
                  <p className="font-medium">Added "Vintage Inspired" to Engagement Rings</p>
                  <p className="text-sm text-gray-500">2 weeks ago</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">New</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
