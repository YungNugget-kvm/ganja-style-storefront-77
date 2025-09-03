import { Link } from "react-router-dom";
import { XCircle, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <Card className="p-8">
            <CardContent className="p-0 space-y-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Payment Canceled
                </h1>
                <p className="text-muted-foreground">
                  Your payment was canceled. No charges were made to your account.
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Products
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentCanceled;