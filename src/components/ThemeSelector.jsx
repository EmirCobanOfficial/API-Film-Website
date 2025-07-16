import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector pointer">
      {theme === "dark" ? (
        <i className="ms-2 bi bi-sun-fill text-white" onClick={toggleTheme}></i>
      ) : (
        <i className="ms-2 bi bi-moon-fill" onClick={toggleTheme}></i>
      )}
    </div>
  );
}
