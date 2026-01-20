import UserAvatar from "./Avatar";
import Me from "./Me";
import { Separator } from "../ui/separator";
import GithubStatsCard from "./GithubStatsCard";
import NavigationMenu from "./NavigationMenu";
import MobileNavigationMenu from "./MobileNavigationMenu";

const Home = () => {
  return (
    <>
      {/* Desktop - Left Sidebar */}
      <div className="w-full md:w-72 md:fixed md:left-0 md:top-0 md:h-screen md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:overflow-y-auto hidden md:block">
        {/* Navigation Bar */}
        <div className="h-16 border-b border-white/10 flex items-center px-6 justify-between">
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

        <Separator className="mt-4" />

        <NavigationMenu />
      </div>

      {/* Mobile - Full Screen Home */}
      <div className="md:hidden w-full h-screen flex flex-col pb-20">
        <div className="h-16 border-b border-white/10 flex items-center px-6 justify-between">
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
        <MobileNavigationMenu />
      </div>
    </>
  );
};

export default Home;
