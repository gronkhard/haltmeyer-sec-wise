import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb von 24 Stunden bei Ihnen.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-Mail",
      value: "info@rolf-haltmeyer.de",
      href: "mailto:info@rolf-haltmeyer.de"
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+49 (0) 123 456 789",
      href: "tel:+49123456789"
    },
    {
      icon: MapPin,
      label: "Standort",
      value: "Deutschland",
      href: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre IT-Sicherheit auf das nächste Level bringen. Kontaktieren Sie mich unverbindlich!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Nachricht senden
              </CardTitle>
              <CardDescription>
                Teilen Sie mir Ihre Herausforderungen mit und ich erstelle Ihnen ein maßgeschneidertes Angebot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ihr Name"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="ihre@email.de"
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Ihr Unternehmen"
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Beschreiben Sie Ihre Herausforderungen oder Fragen..."
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-3"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Kontaktinformationen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-[var(--transition-fast)]"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="card-professional bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Schnelle Antwort garantiert
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ich antworte in der Regel innerhalb von 24 Stunden auf alle Anfragen. 
                  Bei dringenden Anliegen zögern Sie nicht, mich direkt anzurufen.
                </p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  Kostenlose Erstberatung
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;