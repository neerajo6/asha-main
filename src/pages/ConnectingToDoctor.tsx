import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AshaAvatar from "@/assets/asha-avatar.png";
import DoctorImage from "@/assets/doctor-sharma.jpg";

const ConnectingToDoctor = () => {
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Simulate connection process
    const connectTimer = setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 3000);

    return () => clearTimeout(connectTimer);
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8 mt-4">
          <button 
            onClick={() => navigate("/symptoms")}
            className="mr-4 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft size={24} className="text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Connecting to Doctor
            </h1>
            <p className="text-lg text-muted-foreground">
              डॉक्टर से जुड़ रहे हैं
            </p>
          </div>
        </div>

        <div className="text-center">
          {isConnecting ? (
            /* Connection Process */
            <div>
              <div className="mb-8">
                <img 
                  src={AshaAvatar} 
                  alt="Asha Avatar" 
                  className="w-24 h-24 mx-auto rounded-full gentle-pulse shadow-[var(--gentle-glow)]"
                />
              </div>
              
              <div className="soft-card p-8 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Please wait while we connect you
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  कृपया प्रतीक्षा करें, हम आपको डॉक्टर से जोड़ रहे हैं
                </p>
                
                <div className="flex justify-center">
                  <div className="gentle-pulse">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V5.5C15 4.6 14.4 4 13.5 4S12 4.6 12 5.5V7.5L6 7V9L12 8L18 9Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Connected State */
            <div>
              <div className="mb-8">
                <img 
                  src={DoctorImage} 
                  alt="Dr. Sharma" 
                  className="w-32 h-32 mx-auto rounded-full shadow-[var(--soft-shadow)] border-4 border-primary/20"
                />
              </div>
              
              <div className="soft-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Dr. Rajesh Sharma
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  General Physician • 15+ years experience
                </p>
                
                <div className="mb-6">
                  <img 
                    src={AshaAvatar} 
                    alt="Asha" 
                    className="w-12 h-12 inline-block rounded-full mr-3"
                  />
                  <div className="inline-block bg-primary/10 rounded-2xl px-4 py-2">
                    <p className="text-base text-foreground">
                      "Connected! Dr. Sharma is ready to help you."
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      "जुड़ गए! डॉ. शर्मा आपकी मदद के लिए तैयार हैं।"
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full gentle-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="action-button">
                  <span className="text-4xl mb-2">📞</span>
                  <span className="text-base font-semibold">Voice Call</span>
                  <span className="text-sm opacity-80">आवाज़ कॉल</span>
                </button>
                
                <button className="action-button-secondary">
                  <span className="text-4xl mb-2">💬</span>
                  <span className="text-base font-semibold">Chat</span>
                  <span className="text-sm opacity-80">चैट</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectingToDoctor;