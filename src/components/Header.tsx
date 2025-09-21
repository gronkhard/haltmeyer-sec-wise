import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-xl text-foreground">
          Rolf Haltmeyer
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-muted-foreground hover:text-foreground transition-[var(--transition-fast)]"
          >
            Start
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-muted-foreground hover:text-foreground transition-[var(--transition-fast)]"
          >
            Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-[var(--transition-fast)]"
          >
            Über mich
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Kontakt
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="sm"
          className="md:hidden"
          onClick={() => scrollToSection('contact')}
        >
          Kontakt
        </Button>
      </nav>
    </header>
  );
};

export default Header;