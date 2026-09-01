import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

interface IntroSplashProps {
  onComplete: () => void;
}

const IntroSplash = ({ onComplete }: IntroSplashProps) => {
  const [showSkip, setShowSkip] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if we've already shown the splash this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      onComplete();
    }
  }, [onComplete]);

  const handleComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setIsExiting(true);
    setTimeout(onComplete, 600);
  };

  const handleSkip = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setIsExiting(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Skip button */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleSkip}
              className="absolute top-6 right-6 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md"
              aria-label="Skip intro animation"
            >
              Skip →
            </motion.button>
          )}

          {/* Typing animation container */}
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <TypeAnimation
                sequence={[
                  personalInfo.name,
                  1000,
                  () => handleComplete(),
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                className="text-foreground"
              />
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 h-1 w-0 bg-primary mx-auto"
              style={{
                animation: "expandWidth 2s ease-out forwards",
              }}
            />
          </div>

          <style>{`
            @keyframes expandWidth {
              from { width: 0; }
              to { width: 100px; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
