import { Button } from "@/components/ui/button";
import StarOfDavid from "@/components/StarOfDavid";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/30 border-b border-primary/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <StarOfDavid className="w-8 h-8 text-primary animate-glow-pulse" animated />
            <div>
              <h1 className="text-xl font-bold glow-text-primary">Jewish AI Hub</h1>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <Button
              variant="glow"
              size="sm"
              asChild
            >
              <a href="https://chatgpt.com/g/g-68f0f5ca5af88191b5eb9be8aa45d5f2-torah-gpt" target="_blank" rel="noopener noreferrer">
                TORAH GPT
              </a>
            </Button>
            
            <Button
              variant="glow"
              size="sm"
              asChild
            >
              <a href="https://chatgpt.com/g/g-68c6ea6143748191bed5360219b0b02a-kabbalah-gpt" target="_blank" rel="noopener noreferrer">
                KABBALAH GPT
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("disclaimer")}
            >
              Disclaimer
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
                More AI Tools
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
