import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GuideModal } from "./components/GuideModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";

type Page = "home" | "about" | "community";

export const App = () => {
  const [page, setPage] = useState<Page>("home");
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      <Navbar setPage={setPage} setShowGuide={setShowGuide} page={page} />
      <main className="flex-1 pt-24 px-4 max-w-5xl mx-auto w-full">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "community" && <Community />}
      </main>
      <Footer />
      {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}
    </div>
  );
};