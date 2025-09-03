import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { ProductSection } from "@/components/ProductSection";
import vapePen1 from "@/assets/vape-pen-1.jpg";

const Index = () => {
  const vapeProducts = [
    {
      id: 1,
      name: "Premium CBD Vape Pen",
      image: vapePen1,
      rating: 5,
      reviewCount: 24,
      price: "$49.99",
      originalPrice: "$69.99"
    },
    {
      id: 2,
      name: "Delta-8 THC Cartridge",
      image: vapePen1,
      rating: 4,
      reviewCount: 18,
      price: "$39.99"
    },
    {
      id: 3,
      name: "Full Spectrum Vape Cart",
      image: vapePen1,
      rating: 5,
      reviewCount: 31,
      price: "$44.99"
    },
    {
      id: 4,
      name: "Live Resin Disposable",
      image: vapePen1,
      rating: 5,
      reviewCount: 42,
      price: "$29.99",
      originalPrice: "$39.99"
    },
    {
      id: 5,
      name: "HHC Vape Cartridge",
      image: vapePen1,
      rating: 4,
      reviewCount: 15,
      price: "$34.99"
    },
    {
      id: 6,
      name: "THC-O Disposable Vape",
      image: vapePen1,
      rating: 5,
      reviewCount: 28,
      price: "$54.99"
    },
    {
      id: 7,
      name: "Delta-10 Vape Cart",
      image: vapePen1,
      rating: 4,
      reviewCount: 12,
      price: "$42.99"
    },
    {
      id: 8,
      name: "Hybrid Strain Disposable",
      image: vapePen1,
      rating: 5,
      reviewCount: 36,
      price: "$32.99"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InfoSection />
      
      <ProductSection 
        title="Premium Vape Products" 
        products={vapeProducts}
      />
    </div>
  );
};

export default Index;
