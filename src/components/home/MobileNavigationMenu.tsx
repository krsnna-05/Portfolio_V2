import { motion } from "motion/react";
import { Home, UserIcon, BriefcaseIcon, Code2 } from "lucide-react";
import useNavigationStore from "../../navigationStore";
import { useNavigate, useLocation } from "react-router";

const MobileNavigationMenu = () => {
  const { setState } = useNavigationStore();
  const navigate = useNavigate();
  const location = useLocation();

  const mobileMenus = [
    { label: "Home", icon: Home, key: "home", path: "/" },
    { label: "About Me", icon: UserIcon, key: "aboutme", path: "/about" },
    { label: "Experience", icon: BriefcaseIcon, key: "exp", path: "/exp" },
    { label: "Projects", icon: Code2, key: "projects", path: "/projects" },
  ] as const;

  const currentMenu = mobileMenus.findIndex(
    (menu) => menu.path === location.pathname,
  );

  const handleNavigation = (menu: (typeof mobileMenus)[number]) => {
    setState(menu.key);
    navigate(menu.path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-black backdrop-blur border-t border-white/10 p-3">
      <div className="relative flex gap-1 p-1 justify-between">
        {/* Animated background pill */}
        <motion.div
          className="absolute top-1 bottom-1 bg-white rounded-md"
          layoutId="mobile-nav-bg"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          style={{
            left: `calc(${currentMenu * (100 / mobileMenus.length)}% + 0.25rem)`,
            width: `calc(${100 / mobileMenus.length}% - 0.5rem)`,
          }}
        />

        {/* Menu items */}
        {mobileMenus.map((menu, idx) => (
          <motion.button
            key={menu.label}
            onClick={() => handleNavigation(menu)}
            className={`relative flex-1 px-2 py-2 text-xs font-light rounded-md transition-colors text-center flex flex-col items-center gap-1 ${
              currentMenu === idx
                ? "text-black"
                : "text-gray-400 hover:text-gray-200"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <menu.icon size={16} />
            {menu.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigationMenu;
