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
      <DialogContent className="max-w-md max-h-[70vh] overflow-y-auto elevated-glow bg-card border-2 border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-xl glow-text-primary">Important Notice</DialogTitle>
          <DialogDescription className="text-sm">
            Please acknowledge before continuing
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 text-xs">
          <div className="space-y-1 bg-muted/50 p-3 rounded-lg">
            <h4 className="font-bold text-accent text-sm">Educational Use Only</h4>
            <p className="text-muted-foreground">
              These AI tools are for educational and informational purposes. Not a substitute for qualified teachers or rabbis.
            </p>
          </div>

          <div className="space-y-1 bg-muted/50 p-3 rounded-lg">
            <h4 className="font-bold text-primary text-sm">No Liability</h4>
            <p className="text-muted-foreground">
              AI WEB TOOLS LLC makes no warranties. Users assume full responsibility. Not for religious decisions.
            </p>
          </div>

          <p className="text-muted-foreground text-center">
            For religious rulings, consult qualified authorities.
          </p>
        </div>

        <div className="flex items-center space-x-2 py-3">
          <Checkbox 
            id="agree" 
            checked={agreed} 
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />
          <label
            htmlFor="agree"
            className="text-xs font-medium leading-none cursor-pointer"
          >
            I agree - Educational purposes only
          </label>
        </div>

        <DialogFooter>
          <Button 
            variant="hero" 
            onClick={handleAgree} 
            disabled={!agreed}
            className="w-full"
            size="sm"
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
