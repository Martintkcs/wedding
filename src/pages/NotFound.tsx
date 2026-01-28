import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 hiba: a felhasználó nem létező útvonalat próbált elérni:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Hoppá! Az oldal nem található</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Vissza a kezdőlapra
        </a>
      </div>
    </div>
  );
};

export default NotFound;
