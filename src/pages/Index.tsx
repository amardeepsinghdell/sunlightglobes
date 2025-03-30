
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Welcome to Sunlight Overseas Inc.</h1>
        <p className="text-lg md:text-xl text-foreground mb-8">
          Discover our collection of handcrafted premium globes, where artistry meets geographical precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/gallery">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Our Globes
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
