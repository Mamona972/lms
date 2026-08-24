"use client";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [activateItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Header open={open} 
      setOpen={setOpen} 
      activeItem={activateItem} 
      setRoute={setRoute}
      route={route}
      />
      <Hero />
    </div>
  );
}
