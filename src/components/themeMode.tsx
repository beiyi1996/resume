import React, { useCallback, useState } from "react";
import { ReactComponent as SunIcon } from "../images/sunIcon.svg";
import { ReactComponent as MoonIcon } from "../images/moonIcon.svg";

export default function ThemedMode() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = useCallback(() => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  }, [isDark]);

  return (
    <div className="fixed right-3 top-3">
      <button
        aria-label="modeBtn"
        className="btn-custom flex h-7 w-7 items-center justify-center"
        onClick={handleToggle}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
