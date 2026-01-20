import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useMediaQuery } from "react-responsive";

const useDesktopRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    if (isDesktop && location.pathname === "/") {
      navigate("/about", { replace: true });
    }
  }, [isDesktop, location.pathname, navigate]);
};

export default useDesktopRedirect;
