import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
    >
      <Moon className="h-5 w-5 dark:hidden" />
      <Sun className="h-5 w-5 hidden dark:block" />
    </button>
  );
};

export default ThemeToggler;
