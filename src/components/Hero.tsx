import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          BEST PRICE VERIFIED<br />
          <span className="text-5xl md:text-7xl">HEMP BRANDS AND PRODUCTS</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="text-center">
            <div className="text-lg font-semibold">SHIPPED QUICKLY, DISCREETLY & FOR FREE</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">PRODUCTS IN STOCK & SHIP WITHIN 72 HOURS</div>
          </div>
        </div>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-hover text-primary-foreground px-12 py-6 text-xl font-bold rounded-lg transform transition-transform hover:scale-105"
        >
          SHOP
        </Button>
      </div>
    </section>
  );
};