import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Users } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    {
      icon: Award,
      title: "Expertise",
      description: "Langjährige Erfahrung im Bereich IT-Sicherheit"
    },
    {
      icon: Target,
      title: "Praxisnah",
      description: "Verständliche und umsetzbare Lösungen"
    },
    {
      icon: Users,
      title: "Fokus Mensch",
      description: "Mitarbeiter als wichtigste Verteidigungslinie"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Über mich
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Als erfahrener Unternehmensberater im Bereich IT-Sicherheit habe ich es mir zur Aufgabe gemacht, 
                Unternehmen praxisnah und verständlich zu unterstützen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mein <strong className="text-foreground">Fokus liegt auf der Schulung von Mitarbeitern</strong>, 
                denn sie sind die wichtigste Verteidigungslinie gegen Cyberangriffe. Mit individuell zugeschnittenen 
                Trainings und kontinuierlicher Beratung helfe ich Ihrem Unternehmen dabei, sich optimal gegen 
                moderne Bedrohungen zu wappnen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dabei setze ich auf eine Kombination aus fundiertem Fachwissen, praxisnahen Beispielen und 
                einer verständlichen Kommunikation, die auch komplexe Sicherheitsthemen für jeden zugänglich macht.
              </p>
            </div>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="btn-primary text-lg px-8 py-4"
            >
              Lassen Sie uns sprechen
            </Button>
          </div>
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-professional">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="card-professional bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-medium text-primary mb-2">
                  Bereit für den nächsten Schritt?
                </p>
                <p className="text-muted-foreground">
                  Lassen Sie uns gemeinsam Ihre IT-Sicherheit auf das nächste Level bringen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;