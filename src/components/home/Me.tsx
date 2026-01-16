import { TypingAnimation } from "./TypingAnimation";
import {
  Coffee,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-3"
    >
      {/* Title with reveal animation */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-lg font-light text-white">krsna</h1>
      </motion.div>

      {/* Subtitle with staggered animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-center text-sm text-gray-500">
          <TypingAnimation items={title} />
        </p>
      </motion.div>

      {/* Time with fade and scale animation */}
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-xs text-gray-600"
      >
        {time.hrs}:{time.mins}
        <motion.span
          key={time.secs}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          :{time.secs}
        </motion.span>{" "}
        {isDayTime ? "☀️" : "🌙"} +5:30 UTC
      </motion.p>

      <p className=" flex justify-center gap-5 text-gray-500 mt-5">
        <LinkedinIcon
          className="hover:text-white hover:-rotate-12 hover:scale-110 transition-all"
          onClick={() => {
            window.open("https://www.linkedin.com/in/krishnagavali/", "_blank");
          }}
        />
        <GithubIcon
          className="hover:text-white hover:-rotate-12 hover:scale-110 transition-all"
          onClick={() => {
            window.open("https://github.com/krsnna-05", "_blank");
          }}
        />
        <MailIcon
          className="hover:text-white hover:-rotate-12 hover:scale-110 transition-all"
          onClick={() => {
            toast.success("Email Copied To Clipboard");
            navigator.clipboard.writeText("krishnagavali973@gmail.com");
          }}
        />
      </p>
    </motion.div>
  );
};

export default Me;
