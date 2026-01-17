import { Toaster } from "sonner";
import UserAvatar from "./components/home/Avatar";
import Me from "./components/home/Me";
import "./index.css";
import { Separator } from "./components/ui/separator";
import GithubStatsCard from "./components/home/GithubStatsCard";
import { motion } from "motion/react";
import NavigationMenu from "./components/home/NavigationMenu";
import AboutMe from "./components/aboutme/AboutMe";
import ClickSpark from "./components/ClickSpark";
import useNavigationStore from "./navigationStore";

const App = () => {
  const { state, setState } = useNavigationStore();

  return (
    <>
      <ClickSpark>
        <div className="flex flex-col md:flex-row min-h-screen pb-20 md:pb-0 jetbrains-mono">
          {/* Left Sidebar - Fixed */}
          <div className="w-full md:w-72 md:fixed md:left-0 md:top-0 md:h-screen md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:overflow-y-auto">
            {/* Navigation Bar (placeholder for user to add later) */}
            <div className="h-16 border-b border-white/10 flex items-center px-6 justify-between">
              <div className="flex flex-col">
                <p className="text-xs font-light tracking-widest text-gray-400">
                  DEVELOPER
                </p>
                <p className="text-sm font-light text-white">krsnna-05</p>
              </div>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, backgroundColor: "#e0e0e0" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:shadow-lg transition-shadow"
                onClick={(e) => e.preventDefault()}
              >
                Resume
              </motion.a>
            </div>

            {/* User Info */}
            <div className="jetbrains-mono dark p-6">
              <UserAvatar />
              <Me />
            </div>

            <Separator />

            <GithubStatsCard />

            <Separator className="mt-4" />

            <NavigationMenu />
          </div>

          {/* Vertical Separator */}
          <Separator
            orientation="vertical"
            className="hidden md:block md:fixed md:left-72 md:top-0 md:h-screen"
          />

          {/* Right Content Area - Scrollable */}
          <div className="w-full md:ml-72 md:h-screen md:overflow-y-auto flex items-center justify-center">
            {state === "aboutme" ? (
              <AboutMe />
            ) : (
              <div className=" text-5xl">Experience</div>
            )}
          </div>
        </div>
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              fontFamily: "'JetBrains Mono', monospace",
            },
          }}
        />
      </ClickSpark>
    </>
  );
};

export default App;
