import { useNavigate } from "react-router-dom";
import AshaAvatar from "@/assets/asha-avatar.png";

const languages = [
  { code: "hi", name: "हिन्दी", displayName: "Hindi" },
  { code: "mr", name: "मराठी", displayName: "Marathi" },
  { code: "pa", name: "ਪੰਜਾਬੀ", displayName: "Punjabi" },
  { code: "en", name: "English", displayName: "English" },
];

const LanguageSelection = () => {
  const navigate = useNavigate();

  const selectLanguage = (langCode: string) => {
    // Store selected language in localStorage
    localStorage.setItem("selectedLanguage", langCode);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <img 
            src={AshaAvatar} 
            alt="Asha Avatar" 
            className="w-20 h-20 mx-auto mb-6 rounded-full"
          />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Select Your Language
          </h1>
          <p className="text-lg text-muted-foreground">
            अपनी भाषा चुनें
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="language-button"
            >
              <div className="text-2xl font-bold text-foreground mb-1">
                {lang.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {lang.displayName}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Choose the language you are most comfortable with
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;