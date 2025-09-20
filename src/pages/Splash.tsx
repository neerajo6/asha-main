import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AshaAvatar from "@/assets/asha-avatar.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/language");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-8 gentle-pulse">
          <img 
            src={AshaAvatar} 
            alt="Asha - Your Healthcare Assistant" 
            className="w-32 h-32 mx-auto rounded-full shadow-[var(--gentle-glow)]"
          />
        </div>
        
        <h1 className="text-5xl font-bold text-primary mb-4 tracking-wide">
          आशा
        </h1>
        <h2 className="text-3xl font-semibold text-foreground mb-2">
          Asha
        </h2>
        <p className="text-xl text-muted-foreground font-medium">
          Your Trusted Healthcare Guide
        </p>
        
        <div className="mt-12">
          <div className="inline-block w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full gentle-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;