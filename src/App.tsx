import UserAvatar from "./components/home/Avatar";
import { TypingAnimation } from "./components/home/TypingAnimation";
import "./index.css";
import { Rocket, Zap, Coffee, Sparkles } from "lucide-react";

const App = () => {
  const title = [
    { text: "Full Stack Developer", icon: <Rocket size={20} /> },
    { text: "Backend Developer", icon: <Zap size={20} /> },
    { text: "Coffee Addict", icon: <Coffee size={20} /> },
    { text: "Jack Of All Trades", icon: <Sparkles size={20} /> },
  ];

  return (
    <div className=" jetbrains-mono  w-full pt-10">
      <UserAvatar />
      <div className="">
        <h1 className=" text-4xl text-center mt-4">devkrsna</h1>
        <p className=" text-center mt-2 text-lg text-gray-400">
          <TypingAnimation items={title} />
        </p>
      </div>
    </div>
  );
};

export default App;
