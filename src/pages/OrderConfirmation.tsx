import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home } from 'lucide-react';

interface OrderDetails {
  orderNumber: string;
  total: number;
  email: string;
}

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    // Get order details from navigation state or generate mock data
    const state = location.state as OrderDetails;
    if (state) {
      setOrderDetails(state);
    } else {
      // Generate mock order details if accessed directly
      setOrderDetails({
        orderNumber: `SV${Date.now().toString().slice(-6)}`,
        total: 0,
        email: 'user@example.com'
      });
    }
  }, [location.state]);

  const handleReturnHome = () => {
    navigate('/');
  };

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        <Card className="text-left mb-8">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Order Number:</span>
              <span className="font-mono text-primary">#{orderDetails.orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Amount:</span>
              <span className="font-bold text-lg">${orderDetails.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{orderDetails.email}</span>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your email address with order tracking information.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button onClick={handleReturnHome} size="lg" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
          <p className="text-sm text-muted-foreground">
            Expected delivery: 3-5 business days
          </p>
        </div>
      </div>
    </div>
  );
}