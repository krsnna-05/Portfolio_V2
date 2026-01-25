import { Toaster } from "sonner";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { Separator } from "./components/ui/separator";
import ClickSpark from "./components/ClickSpark";
import ImgViewer from "./components/ImgViewer";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutme/AboutMe";
import Exp from "./components/exp/Exp";
import Projects from "./components/projects/Projects";
import NavigationMenu from "./components/home/NavigationMenu";
import MobileNavigationMenu from "./components/home/MobileNavigationMenu";
import UserAvatar from "./components/home/Avatar";
import Me from "./components/home/Me";
import GithubStatsCard from "./components/home/GithubStatsCard";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pb-20 md:pb-0 jetbrains-mono">
      {/* Left Sidebar - Fixed */}
      <div className="w-full md:w-72 md:fixed md:left-0 md:top-0 md:h-screen md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:overflow-y-auto hidden md:block">
        {/* Navigation Bar */}
        <div className="h-16 border-b border-white/10 flex items-center px-6 justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-light tracking-widest text-gray-400">
              DEVELOPER
            </p>
            <p className="text-sm font-light text-white">krsnna-05</p>
          </div>
          <div
            className=" bg-white text-black hover:scale-105 rounded-lg px-3 py-1 text-base font-light cursor-pointer select-none transition-all"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1xF6m6AaebS287aBzzIJ42kkcZhi-7e7b/view?usp=sharing",
                "_blank",
              )
            }
          >
            Resume
          </div>
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
        {children}
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavigationMenu />
    </div>
  );
};

const DesktopRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (isDesktop && location.pathname === "/") {
      navigate("/about", { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

const App = () => {
  return (
    <>
      <ClickSpark>
        <DesktopRedirect />
        <Routes>
          {/* Home route - shows home on mobile, redirects to /about on desktop */}
          <Route
            path="/"
            element={
              <DesktopLayout>
                <Home />
              </DesktopLayout>
            }
          />

          {/* About route - shows in desktop layout */}
          <Route
            path="/about"
            element={
              <DesktopLayout>
                <AboutMe />
              </DesktopLayout>
            }
          />

          {/* Experience route */}
          <Route
            path="/exp"
            element={
              <DesktopLayout>
                <Exp />
              </DesktopLayout>
            }
          />

          {/* Projects route */}
          <Route
            path="/projects"
            element={
              <DesktopLayout>
                <Projects />
              </DesktopLayout>
            }
          />
        </Routes>

        <ImgViewer />
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
