import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100;
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "How it Works", href: "#how-it-works", onClick: () => scrollToSection('how-it-works') },
    { name: "For Partners", href: "#partners", onClick: () => scrollToSection('partners') },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-12 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 w-auto min-w-fit max-w-lg" 
          : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl"
      }`}
    >
      <div className={`h-full flex items-center justify-center transition-all duration-300 ${isScrolled ? "px-4" : "px-6"}`}>
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Command className={`text-primary transition-all duration-300 ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
            <span className={`font-bold transition-all duration-300 ${isScrolled ? "text-sm" : "text-base"}`}>Minture</span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? "gap-3 ml-6" : "gap-6"}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className={`transition-all duration-300 text-muted-foreground hover:text-foreground whitespace-nowrap ${isScrolled ? "text-xs" : "text-sm"}`}
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection('cta')}
              size="sm"
              className={`button-gradient transition-all duration-300 whitespace-nowrap ${isScrolled ? "text-xs px-3 py-1.5 h-8" : "px-4 py-2 h-9"}`}
            >
              Integrate Minture
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={`glass transition-all duration-300 ${isScrolled ? "h-8 w-8" : "h-10 w-10"}`}>
                  <Menu className={`transition-all duration-300 ${isScrolled ? "h-3 w-3" : "h-5 w-5"}`} />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToSection('cta');
                    }}
                    className="button-gradient mt-4"
                  >
                    Integrate Minture
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
