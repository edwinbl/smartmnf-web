import { useEffect } from "react";
// TODO(migration): map [useLocation] to the App Router file structure
import { initGA, trackPageView } from "@/lib/analytics";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);
};
