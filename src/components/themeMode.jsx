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
        className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-400 dark:border-stone-50"
        onClick={handleToggle}
      >
        {isDark ? <SunIcon className="dark:text-stone-50" /> : <MoonIcon />}
      </button>
    </div>
  );
}
