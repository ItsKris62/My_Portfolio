import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { initGA, trackPageView } from "./utils/googleAnalytics";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGA("G-Q220W2QCND");
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div className="font-quicksand bg-gray-200 text-gray-700">
      <Home />
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
