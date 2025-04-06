import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Image from "next/image";

import fonzosLogo from "../public/logo.webp";
import paintPouring from "../public/paint-pour.webp";
import kidsPainting from "../public/kids-painting.jpg";

export default function FonzosLaunchPage() {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const eventDate = new Date("2025-04-26T19:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Event is happening now!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      <header className="text-center mb-12">
        <div className="mx-auto max-w-xs mb-4">
          <Image src={fonzosLogo} alt="Fonzo's Logo" width={200} height={200} className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Fonzo's Launch Event</h1>
        <p className="text-lg font-semibold italic">The Dual Hideaway Experience</p>
        <p className="text-md mt-1 mb-2">One night, two worlds—where parents unwind and kids explore.</p>
        <p className="text-md">
          Ever dreamt of a night out that feels easy, guilt-free, and sitter stress–free?<br />
          We did too. That’s why we created The Dual Hideaway Experience—a speakeasy-style evening
          where parents and kids each have their own immersive space.
        </p>
        <div className="mt-6 text-xl font-semibold text-purple-700">Countdown to Fun: {timeLeft}</div>
      </header>

      {/* The rest of the layout remains the same as you've already seen (Cards, Event Info, Ticket Options, etc.) */}
    </div>
  );
}// Paste your component code here from ChatGPT
