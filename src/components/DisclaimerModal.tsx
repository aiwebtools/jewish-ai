import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("disclaimerAgreed");
    if (!hasAgreed) {
      setOpen(true);
    }
  }, []);

  const handleAgree = () => {
    if (agreed) {
      localStorage.setItem("disclaimerAgreed", "true");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto elevated-glow bg-card border-2 border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl glow-text-primary">Important Disclaimer</DialogTitle>
          <DialogDescription className="text-base">
            Please read and agree to continue
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 text-sm">
          <p className="text-foreground">
            Welcome to the Jewish Educational AI Hub. Before proceeding, please acknowledge the following:
          </p>
          
          <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
            <h4 className="font-bold text-accent">Educational & Informational Use Only</h4>
            <p className="text-muted-foreground">
              These AI tools (Torah GPT and Pre-Roman Kabbalah GPT) are provided strictly for educational, 
              informational, and self-exploration purposes. They are not substitutes for traditional study 
              with qualified teachers or rabbis.
            </p>
          </div>

          <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
            <h4 className="font-bold text-primary">Limitation of Liability</h4>
            <p className="text-muted-foreground">
              AI WEB TOOLS LLC makes no warranties regarding accuracy or completeness of information. 
              Users assume full responsibility for how they use the information provided. These tools 
              should not be used for religious decisions or halachic rulings.
            </p>
          </div>

          <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
            <h4 className="font-bold text-secondary">Consult Qualified Authorities</h4>
            <p className="text-muted-foreground">
              For religious rulings, spiritual guidance, or important life decisions, always consult 
              with qualified rabbis, scholars, or religious authorities.
            </p>
          </div>

          <p className="text-muted-foreground">
            By continuing, you acknowledge that you have read and understood this disclaimer and agree 
            to use these tools for educational and exploratory purposes only.
          </p>
        </div>

        <div className="flex items-center space-x-2 py-4">
          <Checkbox 
            id="agree" 
            checked={agreed} 
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />
          <label
            htmlFor="agree"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            I have read and agree to the terms and disclaimer
          </label>
        </div>

        <DialogFooter>
          <Button 
            variant="hero" 
            onClick={handleAgree} 
            disabled={!agreed}
            className="w-full"
          >
            I AGREE - Continue to Site
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
