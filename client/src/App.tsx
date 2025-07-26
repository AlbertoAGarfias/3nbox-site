import React from "react";
import { Route } from "wouter";
import { Navbar } from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Community from "@/pages/Community";

export const App = () => (
  <div className="bg-neutral-900 min-h-screen text-white">
    <Navbar />
    <main className="pt-24 max-w-6xl mx-auto">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
    </main>
    {/* Footer aquí */}
  </div>
);