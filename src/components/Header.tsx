import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const navItems = [
    {
      name: "Hemp Flower",
      subcategories: ["CBD Flower", "CBG Flower", "THCA Flower", "Pre Rolls"]
    },
    { name: "Rawbar" },
    { name: "Terpbar" },
    {
      name: "Vape",
      subcategories: ["E Liquid", "Cartridges", "Vape Pens"]
    },
    { name: "Hardware" },
    {
      name: "Edibles",
      subcategories: ["Gummies", "Drinks"]
    },
    {
      name: "Wellness",
      subcategories: ["Capsules", "Topicals"]
    },
    { name: "Mushroom" },
    { name: "Pets" },
    { name: "Merch" }
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50" style={{ boxShadow: 'var(--shadow-header)' }}>
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-wide">DR.GANJA</h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input 
                placeholder="Search products..." 
                className="bg-white/90 text-foreground pr-12 focus:bg-white"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                  <User className="h-4 w-4 mr-2" />
                  <div className="hidden sm:block">
                    <div className="text-xs">Hello, sign in</div>
                    <div className="font-semibold">Account & Lists</div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-card">
                <DropdownMenuItem>Your Account</DropdownMenuItem>
                <DropdownMenuItem>Your Address</DropdownMenuItem>
                <DropdownMenuItem>Your List</DropdownMenuItem>
                <DropdownMenuItem>Create an Account</DropdownMenuItem>
                <DropdownMenuItem>Sign In</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <div className="text-xs text-right hidden sm:block">
                <div>Returns</div>
                <div className="font-semibold">& Orders</div>
              </div>
            </Button>

            <Button variant="ghost" size="sm" className="relative text-primary-foreground hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-1">
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden text-primary-foreground">
              <Menu className="h-4 w-4" />
            </Button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subcategories ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                          {item.name}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-card min-w-[200px]">
                        {item.subcategories.map((sub) => (
                          <DropdownMenuItem key={sub}>{sub}</DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
                      {item.name}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};