import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-text">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
          <p className="notfound-description">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <a href="/" className="notfound-btn">
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
