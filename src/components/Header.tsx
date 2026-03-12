import { useState } from "react";
import { Button } from "@/components/ui/button";
import StarOfDavid from "@/components/StarOfDavid";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/30 border-b border-primary/20">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarOfDavid className="w-8 h-8 text-primary animate-glow-pulse" animated />
            <div>
              <h1 className="text-xl font-bold glow-text-primary">Jewish AI Hub</h1>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="glow" size="sm" asChild>
              <a href="https://chatgpt.com/g/g-68f0f5ca5af88191b5eb9be8aa45d5f2-torah-gpt" target="_blank" rel="noopener noreferrer">
                TORAH GPT
              </a>
            </Button>
            <Button variant="glow" size="sm" asChild>
              <a href="https://chatgpt.com/g/g-68c6ea6143748191bed5360219b0b02a-kabbalah-gpt" target="_blank" rel="noopener noreferrer">
                KABBALAH GPT
              </a>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("faq")}>
              FAQ
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("disclaimer")}>
              Disclaimer
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
                More AI Tools
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            <Button variant="glow" size="sm" asChild onClick={() => setMenuOpen(false)}>
              <a href="https://chatgpt.com/g/g-68f0f5ca5af88191b5eb9be8aa45d5f2-torah-gpt" target="_blank" rel="noopener noreferrer">
                TORAH GPT
              </a>
            </Button>
            <Button variant="glow" size="sm" asChild onClick={() => setMenuOpen(false)}>
              <a href="https://chatgpt.com/g/g-68c6ea6143748191bed5360219b0b02a-kabbalah-gpt" target="_blank" rel="noopener noreferrer">
                KABBALAH GPT
              </a>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("faq")}>
              FAQ
            </Button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("disclaimer")}>
              Disclaimer
            </Button>
            <Button variant="outline" size="sm" asChild onClick={() => setMenuOpen(false)}>
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
