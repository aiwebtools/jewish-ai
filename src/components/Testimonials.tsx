import { Card } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rabbi David Cohen",
      role: "Torah Scholar",
      image: testimonial1,
      quote: "These AI tools have revolutionized how I study and teach. The depth of knowledge and instant access to interpretations is remarkable.",
    },
    {
      name: "Sarah Lieberman",
      role: "Jewish Studies Student",
      image: testimonial2,
      quote: "As a student, having Torah GPT available has enhanced my learning journey tremendously. It's like having a wise teacher available 24/7.",
    },
    {
      name: "Michael Goldstein",
      role: "Kabbalah Researcher",
      image: testimonial3,
      quote: "The Pre-Roman Kabbalah GPT offers insights I've never encountered elsewhere. It's an invaluable resource for serious spiritual seekers.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-accent">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands exploring Jewish wisdom through AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 elevated-3d bg-card/50 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
