import { Toaster } from "sonner";
import UserAvatar from "./components/home/Avatar";
import Me from "./components/home/Me";
import "./index.css";
import { Separator } from "./components/ui/separator";
import GithubStatsCard from "./components/home/GithubStatsCard";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Sidebar */}
        <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-white/10 ">
          {/* Navigation Bar (placeholder for user to add later) */}
          <div className="h-16 border-b border-white/10 flex items-center px-6">
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest text-gray-400">
                DEVELOPER
              </p>
              <p className="text-sm font-light text-white">krsnna-05</p>
            </div>
          </div>

          {/* User Info */}
          <div className="jetbrains-mono dark p-6">
            <UserAvatar />
            <Me />
          </div>

          <Separator />

          <GithubStatsCard />
        </div>

        {/* Vertical Separator */}
        <Separator orientation="vertical" className="hidden md:block" />

        {/* Right Content Area */}
        <div className="w-full md:w-3/4 flex items-center justify-center">
          <div className="h-10 w-full bg-gray-600"></div>
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
    </>
  );
};

export default App;
