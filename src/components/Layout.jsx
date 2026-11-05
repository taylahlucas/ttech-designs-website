import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  const { pathname } = useLocation();
  const variant = pathname === "/apps" ? "apps" : "home";

  useEffect(() => {
    document.title =
      pathname === "/apps"
        ? "Our Apps · TTech Designs Ltd."
        : pathname === "/about"
          ? "About · TTech Designs Ltd."
          : pathname === "/contact"
            ? "Contact · TTech Designs Ltd."
            : "TTech Designs Ltd.";
  }, [pathname]);

  return (
    <div className={`shell shell-${variant}`}>
      <div className="backdrop" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
        <svg className="wave" viewBox="0 0 900 700" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.05" />
              <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveFill)"
            d="M280 0h620v180c-90 70-180 20-280 70-90 46-150 10-230-20C300 190 250 80 280 0z"
          />
          <path
            fill="#6d28d9"
            opacity="0.28"
            d="M430 40c90 30 160 110 250 90 70-16 140-70 220-40v120c-90 10-150 80-250 60-110-22-170-90-260-70-40 8-70-20-70-50 0-50 40-130 110-110z"
          />
          <path
            fill="#a78bfa"
            opacity="0.16"
            d="M520 0c40 80 20 150-40 190 80 10 180-30 250-10 60 16 110-10 170-30V0H520z"
          />
        </svg>
      </div>

      <div className="page">
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Navbar />
        <main id="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
