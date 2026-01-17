import { motion } from "motion/react";
import { UserIcon, BriefcaseIcon, Code2 } from "lucide-react";
import useNavigationStore from "../../navigationStore";

const NavigationMenu = () => {
  const { state, setState } = useNavigationStore();

  const menus = [
    { label: "About Me", icon: UserIcon, key: "aboutme" },
    { label: "Experience", icon: BriefcaseIcon, key: "exp" },
    { label: "Projects", icon: Code2, key: "projects" },
  ];

  const currentMenu = menus.findIndex((menu) => menu.key === state);

  return (
    <>
      {/* Desktop - Vertical Menu */}
      <div className="w-full px-6 py-4 hidden md:block">
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
              onClick={() => setState(menu.key)}
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

      {/* Mobile - Horizontal Bottom Menu */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-800/95 backdrop-blur border-t border-white/10">
        <div className="relative flex gap-1 p-1 justify-between">
          {/* Animated background pill */}
          <motion.div
            className="absolute top-1 bottom-1 bg-white/10 rounded-md"
            layoutId="mobile-nav-bg"
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{
              left: `calc(${currentMenu * (100 / menus.length)}% + 0.25rem)`,
              width: `calc(${100 / menus.length}% - 0.5rem)`,
            }}
          />

          {/* Menu items */}
          {menus.map((menu, idx) => (
            <motion.button
              key={menu.label}
              onClick={() => setState(menu.key)}
              className={`relative flex-1 px-2 py-3 text-xs font-light rounded-md transition-colors text-center flex flex-col items-center gap-1 ${
                currentMenu === idx
                  ? "text-white"
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
    </>
  );
};

export default NavigationMenu;
