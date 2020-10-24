import { useEffect } from "react";
import { KEY_CODES } from "lib/keyCodes";

export default function useTabSelection() {
  const usingTabs = e => {
    if (e.keyCode === KEY_CODES.Tab) {
      document.body.setAttribute("tab-user", "");
      window.removeEventListener("keydown", usingTabs);
      window.addEventListener("mousedown", usingMouse);
    }
  };

  const usingMouse = () => {
    document.body.removeAttribute("tab-user");

    window.removeEventListener("mousedown", usingMouse);
    window.addEventListener("keydown", usingTabs);
  };

  useEffect(() => {
    window.addEventListener("keydown", usingTabs);

    return () => {
      window.removeEventListener("keydown", usingTabs);
      window.removeEventListener("mousedown", usingMouse);
    };
  }, []);
}
