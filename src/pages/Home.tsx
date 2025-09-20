import { useNavigate } from "react-router-dom";
import { User, FileText, Pill, Phone } from "lucide-react";
import AshaAvatar from "@/assets/asha-avatar.png";

const Home = () => {
  const navigate = useNavigate();
  const userName = "Lakshmi"; // This would come from user data

  const menuItems = [
    {
      title: "New Complaint",
      subtitle: "नई शिकायत",
      icon: User,
      action: () => navigate("/symptoms"),
      variant: "primary"
    },
    {
      title: "My Reports",
      subtitle: "मेरी रिपोर्ट",
      icon: FileText,
      action: () => console.log("My Reports"),
      variant: "secondary"
    },
    {
      title: "Find Medicines",
      subtitle: "दवाएं खोजें",
      icon: Pill,
      action: () => console.log("Find Medicines"),
      variant: "primary"
    },
    {
      title: "Talk to Doctor",
      subtitle: "डॉक्टर से बात करें",
      icon: Phone,
      action: () => navigate("/connecting"),
      variant: "secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header with Greeting */}
        <div className="flex items-center mb-12 mt-8">
          <img 
            src={AshaAvatar} 
            alt="Asha Avatar" 
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Namaste, {userName}
            </h1>
            <p className="text-lg text-muted-foreground">
              नमस्ते, कैसे मदद कर सकते हैं?
            </p>
          </div>
        </div>

        {/* Main Menu Grid */}
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`${
                  item.variant === "primary" ? "action-button" : "action-button-secondary"
                }`}
              >
                <IconComponent size={48} className="mb-2" />
                <div className="text-lg font-semibold">
                  {item.title}
                </div>
                <div className="text-sm opacity-80">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Tap any option to get started • विकल्प चुनें
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;