import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample symptoms for head area - in a real app this would be dynamic
const headSymptoms = [
  { id: "headache", name: "Headache", hindi: "सिरदर्द", icon: "🤕" },
  { id: "dizziness", name: "Dizziness", hindi: "चक्कर आना", icon: "😵" },
  { id: "eye-pain", name: "Eye Pain", hindi: "आंख में दर्द", icon: "👁️" },
  { id: "ear-pain", name: "Ear Pain", hindi: "कान में दर्द", icon: "👂" },
];

const SymptomSelection = () => {
  const navigate = useNavigate();
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleBodyPartClick = (part: string) => {
    setSelectedBodyPart(part);
    setSelectedSymptoms([]);
  };

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleContinue = () => {
    if (selectedSymptoms.length > 0) {
      // Store selected symptoms
      localStorage.setItem("selectedSymptoms", JSON.stringify(selectedSymptoms));
      navigate("/connecting");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8 mt-4">
          <button 
            onClick={() => navigate("/home")}
            className="mr-4 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft size={24} className="text-foreground" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Where does it hurt?
            </h1>
            <p className="text-lg text-muted-foreground">
              कहाँ दर्द है?
            </p>
          </div>
        </div>

        {!selectedBodyPart ? (
          /* Body Part Selection */
          <div className="text-center">
            <p className="text-lg mb-8 text-foreground">
              Tap on the body part that is hurting
            </p>
            <p className="text-base mb-12 text-muted-foreground">
              दर्द वाले हिस्से पर टैप करें
            </p>
            
            {/* Simplified Body Diagram */}
            <div className="relative mx-auto w-48 h-80 mb-8">
              <svg viewBox="0 0 200 320" className="w-full h-full">
                {/* Head */}
                <circle 
                  cx="100" 
                  cy="40" 
                  r="30" 
                  fill="hsl(var(--muted))" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="2"
                  className="body-part cursor-pointer hover:fill-primary/20"
                  onClick={() => handleBodyPartClick("head")}
                />
                <text x="100" y="46" textAnchor="middle" className="text-sm fill-foreground pointer-events-none">
                  Head
                </text>
                
                {/* Body */}
                <rect 
                  x="75" 
                  y="70" 
                  width="50" 
                  height="80" 
                  rx="10"
                  fill="hsl(var(--muted))" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="2"
                  className="body-part cursor-pointer hover:fill-primary/20"
                  onClick={() => handleBodyPartClick("chest")}
                />
                <text x="100" y="115" textAnchor="middle" className="text-sm fill-foreground pointer-events-none">
                  Chest
                </text>
                
                {/* Stomach */}
                <rect 
                  x="80" 
                  y="150" 
                  width="40" 
                  height="60" 
                  rx="8"
                  fill="hsl(var(--muted))" 
                  stroke="hsl(var(--border))" 
                  strokeWidth="2"
                  className="body-part cursor-pointer hover:fill-primary/20"
                  onClick={() => handleBodyPartClick("stomach")}
                />
                <text x="100" y="185" textAnchor="middle" className="text-sm fill-foreground pointer-events-none">
                  Stomach
                </text>
              </svg>
            </div>
          </div>
        ) : (
          /* Symptom Selection */
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Select your symptoms:
              </h2>
              <p className="text-base text-muted-foreground">
                अपने लक्षण चुनें
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {headSymptoms.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`symptom-button ${
                    selectedSymptoms.includes(symptom.id) ? "selected" : ""
                  }`}
                >
                  <div className="text-3xl mb-2">{symptom.icon}</div>
                  <div className="text-base font-semibold text-foreground">
                    {symptom.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {symptom.hindi}
                  </div>
                </button>
              ))}
            </div>

            {selectedSymptoms.length > 0 && (
              <button
                onClick={handleContinue}
                className="w-full action-button flex-row"
              >
                <span className="text-xl font-semibold">Continue</span>
                <ArrowRight size={24} className="ml-2" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomSelection;