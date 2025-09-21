import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="p-2 bg-background/10 rounded-lg">
              <Shield className="w-6 h-6 text-background" />
            </div>
            <div>
              <p className="font-semibold text-lg">Rolf Haltmeyer</p>
              <p className="text-background/80 text-sm">IT-Sicherheitsberatung</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/80 text-sm">
              © {currentYear} Rolf Haltmeyer. Alle Rechte vorbehalten.
            </p>
            <p className="text-background/60 text-xs mt-1">
              Professionelle IT-Sicherheitsberatung und Mitarbeiterschulungen
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-background/20 text-center">
          <p className="text-background/60 text-xs">
            Diese Website wurde mit modernster Sicherheitstechnologie entwickelt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;