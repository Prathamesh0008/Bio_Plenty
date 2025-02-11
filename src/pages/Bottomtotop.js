import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTopOnMount() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }, [pathname]);
  
    return null;
  }