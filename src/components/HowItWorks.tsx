import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, BookHeart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Choose Your Tool",
      description: "Select either Torah GPT for traditional texts or Kabbalah GPT for mystical insights.",
    },
    {
      icon: Brain,
      title: "Ask Your Questions",
      description: "Engage with the AI using natural language to explore teachings, interpretations, and wisdom.",
    },
    {
      icon: BookHeart,
      title: "Learn & Grow",
      description: "Receive detailed, contextual responses rooted in authentic Jewish scholarship and tradition.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-primary">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access ancient Jewish wisdom through modern AI technology in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 elevated-3d bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <step.icon className="w-8 h-8 text-background" />
                </div>
                <div className="text-2xl font-bold text-secondary glow-text-secondary">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
