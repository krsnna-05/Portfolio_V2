import { TypingAnimation } from "./TypingAnimation";
import { Coffee, Rocket, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Me = () => {
  const title = [
    { text: "Full Stack Developer", icon: <Rocket size={20} /> },
    { text: "Backend Developer", icon: <Zap size={20} /> },
    { text: "Coffee Addict", icon: <Coffee size={20} /> },
    { text: "Jack Of All Trades", icon: <Sparkles size={20} /> },
  ];

  const [time, setTime] = useState({
    hrs: new Date().getHours(),
    mins: String(new Date().getMinutes()).padStart(2, "0"),
    secs: String(new Date().getSeconds()).padStart(2, "0"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hrs: now.getHours(),
        mins: String(now.getMinutes()).padStart(2, "0"),
        secs: String(now.getSeconds()).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isDayTime = time.hrs >= 6 && time.hrs < 18;

  return (
    <div className="text-center">
      <h1 className="text-lg font-light text-white">devkrsna</h1>
      <p className="text-center mt-2 text-sm text-gray-500">
        <TypingAnimation items={title} />
      </p>
      <p className="text-xs text-gray-600 mt-2">
        {time.hrs}:{time.mins}:
        <motion.span
          key={time.secs}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {time.secs}
        </motion.span>{" "}
        {isDayTime ? "☀️" : "🌙"} +5:30 UTC
      </p>
    </div>
  );
};

export default Me;
