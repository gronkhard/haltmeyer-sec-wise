import { Button } from "@/components/ui/button";
import { Shield, Users, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Willkommen bei{" "}
            <span className="text-primary">Rolf Haltmeyer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium mb-8">
            Ihr Partner für nachhaltige IT-Sicherheit und Mitarbeiterschulungen
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ich helfe Unternehmen, ihre Mitarbeiter gezielt gegen aktuelle Cybergefahren wie Phishing und Social Engineering zu schützen und zeige Ihnen, welche Sicherheitsprotokolle heute wirklich wichtig sind.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="btn-primary text-lg px-8 py-4"
            >
              Jetzt Kontakt aufnehmen
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              Leistungen entdecken
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">Mitarbeiterschulungen</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">Sicherheitsprotokolle</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground">Wöchentlicher Newsletter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;