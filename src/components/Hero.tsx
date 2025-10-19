import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, BookOpen } from "lucide-react";
import heroStar from "@/assets/hero-star.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroStar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text-primary">
            Jewish Educational AI Hub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Explore ancient wisdom through cutting-edge AI technology
          </p>
          <p className="text-lg text-accent glow-text-accent">
            Powered by the latest ChatGPT technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Torah GPT Card - Fully Clickable */}
          <a 
            href="https://chatgpt.com/g/g-68f0f5ca5af88191b5eb9be8aa45d5f2-torah-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="p-8 elevated-glow group-hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 animate-fade-in-up cursor-pointer h-full">
              <div className="text-center space-y-6">
                <BookOpen className="w-20 h-20 mx-auto text-secondary animate-float" />
                <h2 className="text-3xl font-bold glow-text-secondary">Torah GPT</h2>
                <p className="text-muted-foreground text-lg">
                  Dive deep into Torah wisdom with AI-powered insights. Explore sacred texts, 
                  interpretations, and traditional Jewish teachings through an intelligent 
                  conversational interface.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full pointer-events-none"
                >
                  Explore Torah GPT
                </Button>
              </div>
            </Card>
          </a>

          {/* Kabbalah GPT Card - Fully Clickable */}
          <a 
            href="https://chatgpt.com/g/g-68c6ea6143748191bed5360219b0b02a-kabbalah-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="p-8 elevated-glow group-hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent/50 animate-fade-in-up cursor-pointer h-full" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-6">
                <Sparkles className="w-20 h-20 mx-auto text-accent animate-float" style={{ animationDelay: '1s' }} />
                <h2 className="text-3xl font-bold glow-text-accent">Pre-Roman Kabbalah GPT</h2>
                <p className="text-muted-foreground text-lg">
                  Unlock mystical Kabbalistic knowledge from the pre-Roman era. Discover ancient 
                  spiritual wisdom, sacred geometry, and esoteric teachings through AI-guided exploration.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full pointer-events-none"
                >
                  Explore Kabbalah GPT
                </Button>
              </div>
            </Card>
          </a>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            These tools utilize advanced AI to make Jewish wisdom accessible for educational, 
            informational, and spiritual exploration purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
