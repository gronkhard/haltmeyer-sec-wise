import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Mitarbeiterschulungen",
      description: "Individuell zugeschnittene Workshops und Schulungen, die Ihre Mitarbeiter für die neuesten Betrugsmaschen sensibilisieren.",
      features: [
        "Phishing-Awareness Training",
        "Social Engineering Abwehr", 
        "Interaktive Workshops",
        "Praxisnahe Szenarien"
      ]
    },
    {
      icon: Shield,
      title: "Aktuelle Sicherheitsprotokolle",
      description: "Ich informiere Sie über die wichtigsten Sicherheitsstandards und unterstütze Sie bei der Implementierung effektiver Maßnahmen.",
      features: [
        "Sicherheitsanalyse",
        "Protokoll-Implementierung",
        "Compliance-Beratung",
        "Risikobewertung"
      ]
    },
    {
      icon: Mail,
      title: "Wöchentlicher Sicherheits-Newsletter",
      description: "Erhalten Sie jede Woche aktuelle Warnungen, Tipps und Best Practices direkt in Ihr Postfach – exklusiv für meine Kunden.",
      features: [
        "Aktuelle Bedrohungen",
        "Wöchentliche Updates",
        "Praxistipps",
        "Exklusiver Content"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meine Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Umfassende IT-Sicherheitslösungen, die Ihr Unternehmen und Ihre Mitarbeiter schützen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-professional h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full btn-secondary"
                >
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="btn-primary text-lg px-8 py-4"
          >
            Kostenlose Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;