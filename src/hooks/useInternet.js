import { useEffect, useState } from "react";

export const useInternet = function () {
  const [active, setActive] = useState(navigator.onLine);

  useEffect(function internetEffect() {
    function handleOnline() {
      setActive(true);
    }

    function handleOffline() {
      setActive(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    //This is called when component is unmounted

    
    return function cleanup() {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { active };
};