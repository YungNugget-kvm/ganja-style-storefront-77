import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Payment Successful!
                </h1>
                <p className="text-muted-foreground">
                  Thank you for your purchase. Your order has been confirmed and will be processed shortly.
                </p>
              </div>

              {sessionId && (
                <div className="text-sm text-muted-foreground">
                  <p>Order ID: {sessionId.slice(-8).toUpperCase()}</p>
                </div>
              )}

              <div className="space-y-3">
                <div className="text-sm text-hemp-green font-medium">
                  ✓ Free shipping included
                </div>
                <div className="text-sm text-muted-foreground">
                  You will receive an email confirmation shortly with tracking information.
                </div>
              </div>

              <Button asChild className="w-full">
                <Link to="/">
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;