import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  showMore?: boolean;
}

const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-rating-gold text-rating-gold' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{reviewCount}</span>
    </div>
  );
};

export const ProductSection = ({ title, products, showMore = true }: ProductSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          {showMore && (
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
              Shop More
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg text-foreground">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                <div className="text-xs text-hemp-green font-medium mt-1">
                  Free Shipping & Easy Returns
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};