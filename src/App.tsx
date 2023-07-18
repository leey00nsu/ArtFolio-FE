import { Routes, Route } from "react-router-dom";
import AuctionPage from "./pages/AuctionPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { useEffect } from "react";

function App() {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex justify-center w-screen h-full bg-gray-100 overflow-y-hidden">
      <Routes>
        <Route path="/" element={<AuctionPage />} />
        <Route path="/auction/:auctionId" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
