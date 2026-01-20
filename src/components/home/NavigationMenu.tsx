import { motion } from "motion/react";
import { UserIcon, BriefcaseIcon, Code2 } from "lucide-react";
import useNavigationStore from "../../navigationStore";
import { useNavigate, useLocation } from "react-router";

const NavigationMenu = () => {
  const { setState } = useNavigationStore();
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { label: "About Me", icon: UserIcon, key: "aboutme", path: "/about" },
    { label: "Experience", icon: BriefcaseIcon, key: "exp", path: "/exp" },
    { label: "Projects", icon: Code2, key: "projects", path: "/projects" },
  ] as const;

  const currentMenu = menus.findIndex(
    (menu) => menu.path === location.pathname,
  );

  const handleNavigation = (menu: (typeof menus)[number]) => {
    setState(menu.key);
    navigate(menu.path);
  };

  return (
    <div className="w-full px-6 py-4 hidden md:block z-50 relative">
      <div className="relative inline-flex flex-col gap-1 rounded-lg backdrop-blur w-full">
        {/* Animated background pill */}
        <motion.div
          className="absolute inset-x-1 bg-white rounded-md "
          layoutId="nav-bg"
          initial={false}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          style={{
            top: `calc(${currentMenu * (100 / menus.length)}% + 0.25rem)`,
            height: `${80 / menus.length}%`,
          }}
        />

        {/* Menu items */}
        {menus.map((menu, idx) => (
          <motion.button
            key={menu.label}
            onClick={() => handleNavigation(menu)}
            className={`relative px-4 py-2 text-sm font-light rounded-md transition-colors text-left flex items-center gap-2 ${
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

export default NavigationMenu;
