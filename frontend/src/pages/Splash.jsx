import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/register"), 2500);
  }, []);

  return (
    <div className="page-container">
      <div className="glass-card" style={{ textAlign: "center" }}>
        <h1 style={{ color: "#1da1f2" }}>MY SOCIAL WORLD</h1>
        <p>Welcome to the Future 🌍</p>
      </div>
    </div>
  );
}

export default Splash;
