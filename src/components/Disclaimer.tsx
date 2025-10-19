import { Card } from "@/components/ui/card";
import { AlertCircle, Shield, BookOpen } from "lucide-react";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-primary">
            Legal Disclaimer
          </h2>
          <p className="text-xl text-muted-foreground">
            Please read carefully before using our AI tools
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-8 elevated-3d bg-card/50 backdrop-blur-sm border-2 border-accent/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Educational & Informational Use Only</h3>
                <p className="text-muted-foreground">
                  These AI tools are provided strictly for educational, informational, and self-exploration purposes. 
                  They are designed to enhance your understanding and learning of Jewish texts and traditions, not to 
                  provide authoritative religious guidance or rulings.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 elevated-3d bg-card/50 backdrop-blur-sm border-2 border-primary/30">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Not a Substitute for Traditional Study</h3>
                <p className="text-muted-foreground">
                  While our AI tools provide valuable insights, they should never replace traditional study with 
                  qualified teachers, rabbis, or scholars. For religious decisions, halachic questions, or matters 
                  of spiritual significance, always consult with appropriate religious authorities.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 elevated-3d bg-card/50 backdrop-blur-sm border-2 border-secondary/30">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-secondary shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  AI WEB TOOLS LLC and the creators of these tools make no warranties or representations regarding 
                  the accuracy, completeness, or reliability of the information provided. By using these tools, 
                  you acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>All content is for exploration and educational purposes only</li>
                  <li>Users assume full responsibility for how they use the information provided</li>
                  <li>AI WEB TOOLS LLC is not liable for any decisions or actions taken based on AI-generated content</li>
                  <li>The tools may contain errors, omissions, or inaccuracies</li>
                  <li>Spiritual, religious, and scholarly matters require human expertise and judgment</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground text-center">
              By using these AI tools, you acknowledge that you have read, understood, and agree to this disclaimer. 
              These tools are provided "as is" without warranty of any kind. Use at your own discretion and always 
              verify important information with qualified authorities.
            </p>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              For questions or concerns, please contact us at{" "}
              <a href="mailto:Contact@ai-webtools.com" className="text-primary hover:underline">
                Contact@ai-webtools.com
              </a>
            </p>
            <p>
              Review our{" "}
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>
              {" "}and{" "}
              <a 
                href="https://aiwebtools.ai/terms-of-services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
