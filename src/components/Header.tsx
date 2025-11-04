import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import cbcLogo from "@/assets/cbc-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Reports", path: "/reports" },
    { name: "Media", path: "/media" },
    { name: "Connect", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-gov-md">
      {/* Top Bar */}
      <div className="bg-primary-dark">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-primary-foreground">
            <div className="flex items-center gap-4">
              <span className="hidden md:block">Ministry of Personnel, Public Grievances & Pensions</span>
              <span className="text-xs opacity-80">Government of India</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <Globe size={16} />
                <span className="hidden sm:inline">English</span>
              </button>
              <button className="hover:opacity-80 transition-opacity">
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={cbcLogo} alt="Capacity Building Commission" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 text-primary-foreground hover:bg-primary-light rounded-md transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-primary-foreground hover:bg-primary-light rounded-md transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-foreground hover:bg-primary-light rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <Input
              type="search"
              placeholder="Search..."
              className="max-w-md ml-auto bg-primary-foreground"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary-dark">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-primary-foreground hover:bg-primary rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
