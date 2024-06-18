import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const HideNavBar = ({ children }) => {
  const location = useLocation();
  const [hideNavBar, setHideNavBar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      setHideNavBar(false);
    } else if (location.pathname === "/register") {
      setHideNavBar(false);
    } else {
      setHideNavBar(true);
    }
  }, [location]);

  return <div>{hideNavBar && children}</div>;
};
