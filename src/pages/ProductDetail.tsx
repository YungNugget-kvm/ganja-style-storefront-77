import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import vapePen1 from "@/assets/vape-pen-1.jpg";

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
  description?: string;
  features?: string[];
}

// Sample product data - in a real app this would come from an API
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium CBD Vape Pen",
    image: vapePen1,
    rating: 5,
    reviewCount: 24,
    price: "$49.99",
    originalPrice: "$69.99",
    description: "Experience the finest quality CBD vaping with our premium pen. Lab-tested for purity and potency, this sleek device delivers smooth, consistent vapor with every puff.",
    features: ["Lab-tested CBD", "Rechargeable battery", "Leak-proof design", "Premium ceramic coil", "350+ puffs per cartridge"]
  },
  {
    id: 2,
    name: "Delta-8 THC Cartridge",
    image: vapePen1,
    rating: 4,
    reviewCount: 18,
    price: "$39.99",
    description: "Discover the mild psychoactive effects of Delta-8 THC in this high-quality cartridge. Perfect for those seeking relaxation without overwhelming intensity.",
    features: ["Pure Delta-8 THC", "510 thread compatibility", "Third-party tested", "Natural terpenes", "1ml capacity"]
  },
  {
    id: 3,
    name: "Full Spectrum Vape Cart",
    image: vapePen1,
    rating: 5,
    reviewCount: 31,
    price: "$44.99",
    description: "Get the complete cannabis experience with our full spectrum cartridge. Contains the full range of cannabinoids and terpenes for maximum effect.",
    features: ["Full spectrum extract", "Entourage effect", "CO2 extracted", "Glass cartridge", "Strain-specific terpenes"]
  },
  {
    id: 4,
    name: "Live Resin Disposable",
    image: vapePen1,
    rating: 5,
    reviewCount: 42,
    price: "$29.99",
    originalPrice: "$39.99",
    description: "Premium live resin extraction captures the plant's essence at peak freshness. This disposable device offers convenience without compromising on quality.",
    features: ["Live resin extract", "Disposable design", "Pre-charged", "Draw-activated", "Premium hardware"]
  },
  {
    id: 5,
    name: "HHC Vape Cartridge",
    image: vapePen1,
    rating: 4,
    reviewCount: 15,
    price: "$34.99",
    description: "Try the newest cannabinoid on the market with our HHC cartridge. Offers a unique experience with balanced effects and smooth vapor production.",
    features: ["HHC cannabinoid", "Smooth vapor", "510 thread", "Lab verified", "Natural flavor profile"]
  },
  {
    id: 6,
    name: "THC-O Disposable Vape",
    image: vapePen1,
    rating: 5,
    reviewCount: 28,
    price: "$54.99",
    description: "Experience the potent effects of THC-O with our premium disposable vape. Advanced extraction methods ensure consistent quality and potency.",
    features: ["THC-O acetate", "Disposable convenience", "Premium hardware", "Lab tested", "Long-lasting battery"]
  },
  {
    id: 7,
    name: "Delta-10 Vape Cart",
    image: vapePen1,
    rating: 4,
    reviewCount: 12,
    price: "$42.99",
    description: "Discover the energizing effects of Delta-10 THC. This cartridge provides uplifting experiences perfect for daytime use.",
    features: ["Delta-10 THC", "Energizing effects", "Daytime use", "Premium extraction", "Glass cartridge"]
  },
  {
    id: 8,
    name: "Hybrid Strain Disposable",
    image: vapePen1,
    rating: 5,
    reviewCount: 36,
    price: "$32.99",
    description: "Balance is key with our hybrid strain disposable. Combining the best of indica and sativa effects for a well-rounded experience.",
    features: ["Hybrid effects", "Balanced formula", "Disposable design", "Strain-specific", "Easy to use"]
  }
];

const StarRating = ({ rating, reviewCount }: { rating: number; reviewCount: number }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? 'fill-rating-gold text-rating-gold' : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
    </div>
  );
};

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = sampleProducts.find(p => p.id === parseInt(id || ''));
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-foreground">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="text-sm">
                  Save {Math.round((1 - parseFloat(product.price.slice(1)) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                </Badge>
              )}
            </div>

            <div className="text-hemp-green font-medium">
              ✓ Free Shipping & Easy Returns
            </div>

            {product.description && (
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            )}

            {product.features && (
              <div>
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-hemp-green mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Card className="p-6 bg-accent/50">
              <CardContent className="p-0">
                <Button size="lg" className="w-full mb-4">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <div className="text-sm text-muted-foreground text-center">
                  Secure checkout • 30-day return policy
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;