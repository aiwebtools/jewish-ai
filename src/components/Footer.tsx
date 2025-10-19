import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* AI Tools */}
          <div>
            <h3 className="font-bold text-lg mb-4 glow-text-primary">Our AI Tools</h3>
            <div className="space-y-2">
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-primary"
                asChild
              >
                <a href="https://chatgpt.com/g/g-68f0f5ca5af88191b5eb9be8aa45d5f2-torah-gpt" target="_blank" rel="noopener noreferrer">
                  Torah GPT
                </a>
              </Button>
              <br />
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-primary"
                asChild
              >
                <a href="https://chatgpt.com/g/g-68c6ea6143748191bed5360219b0b02a-kabbalah-gpt" target="_blank" rel="noopener noreferrer">
                  Pre-Roman Kabbalah GPT
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 glow-text-secondary">Quick Links</h3>
            <div className="space-y-2">
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-secondary"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Button>
              <br />
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-secondary"
                onClick={() => scrollToSection("disclaimer")}
              >
                Disclaimer
              </Button>
              <br />
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-secondary"
                asChild
              >
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
                  More AI Tools
                </a>
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 glow-text-accent">Legal</h3>
            <div className="space-y-2">
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-accent"
                asChild
              >
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </Button>
              <br />
              <Button
                variant="link"
                className="p-0 h-auto text-muted-foreground hover:text-accent"
                asChild
              >
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 glow-text-primary">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+14758008096" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (475) 800-8096
              </a>
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025-∞{" "}
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              AI WEB TOOLS LLC
            </a>
            {" "}All rights reserved.
          </p>
          
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full"
            asChild
          >
            <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
              More AI Tools
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
