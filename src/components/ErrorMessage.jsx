import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ErrorMessage({ message }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`alert alert-${theme === "dark" ? "danger" : "warning"} my-2`} role="alert">
      {message}
    </div>
  );
}
