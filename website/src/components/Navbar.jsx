import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/hard_dance_soc_logo_white.png";

const navItemsLeft = ["HOME", "EVENTS"];
const navItemsRight = ["ABOUT", "TEAM"];

function NavLink({ label, active, setActive }) {
  const isActive = active === label;
  
  const routes = {
    HOME: "/",
    EVENTS: "/events",
    ABOUT: "/about",
    TEAM: "/team",
  };

  return (
    <Link
      to={routes[label]}
      onMouseEnter={() => setActive(label)}
      onMouseLeave={() => setActive(null)}
      className="
        relative
        uppercase
        tracking-[0.22em]
        text-[clamp(0.5rem,1vw,1rem)]
        transition-all
        duration-300
        pb-6
      "
      style={{
        color: isActive ? "#f0d9ff" : "rgba(255,255,255,0.75)",
        textShadow: isActive
          ? "0 0 14px rgba(179,136,255,0.9)"
          : "none",
      }}
    >
      {label}

      {/* ACTIVE FRAME BAR */}
      <span
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[0.1rem]
          h-[2px]
          rounded-full
          transition-all
          duration-300
        "
        style={{
          width: isActive ? "130%" : "0%",
          opacity: isActive ? 1 : 0,
          background:
            "linear-gradient(to right, transparent, rgba(240,217,255,0.15), #f0d9ff, rgba(240,217,255,0.15), transparent)",
          boxShadow: isActive
            ? "0 0 12px rgba(179,136,255,0.9)"
            : "none",
        }}
      />
    </Link>
  );
}

function FrameLeft() {
  return (
    <svg
      className="absolute left-0 bottom-0 w-full h-full pointer-events-none"
      viewBox="0 0 900 150"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6E56FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#B388FF" stopOpacity="1" />
        </linearGradient>

        <filter id="leftGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* GLOW */}
      <path
        d="
          M0 95
          L660 95
          L700 135
          L840 135
        "
        fill="none"
        stroke="url(#leftGradient)"
        strokeWidth="5"
        opacity="0.45"
        filter="url(#leftGlow)"
      />

      {/* SHARP */}
      <path
        d="
          M0 95
          L660 95
          L700 135
          L840 135
        "
        fill="none"
        stroke="url(#leftGradient)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FrameRight() {
  return (
    <svg
      className="absolute right-0 bottom-0 w-full h-full pointer-events-none"
      viewBox="0 0 900 150"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B388FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#6E56FF" stopOpacity="0.4" />
        </linearGradient>

        <filter id="rightGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* GLOW */}
      <path
        d="
          M60 135
          L60 135
          L200 135
          L240 95
          L900 95
        "
        fill="none"
        stroke="url(#rightGradient)"
        strokeWidth="5"
        opacity="0.45"
        filter="url(#rightGlow)"
      />

      {/* SHARP */}
      <path
        d="
          M60 135
          L60 135
          L200 135
          L240 95
          L900 95
        "
        fill="none"
        stroke="url(#rightGradient)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          relative
          h-[clamp(7rem,10vw,10rem)]
          overflow-hidden
        "
      >
        {/* NAVBAR PANEL */}
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

      {/* MAIN PANEL */}
        <div
          className="
            absolute
            left-0
            top-0
            w-full
            h-[65%]
            border-t
            border-white/5
          "
          style={{
            background: `
              linear-gradient(
                90deg,

                rgba(5,8,22,0.82) 0%,
                rgba(17,19,37,0.72) 28%,

                rgba(29,26,56,0.58) 37%,
                rgba(29,26,56,0.58) 63%,

                rgba(17,19,37,0.72) 72%,
                rgba(5,8,22,0.82) 100%
              )
            `,
          }}
        />

        {/* CENTER TRAPEZIUM */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            top-[65%]
            w-[33%]
            h-[25%]
            border-b
            border-none
          "
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 83.5% 100%, 16.5% 100%)",

            background: `
              linear-gradient(
                90deg,
                rgba(29,26,56,0.58) 0%,
                rgba(29,26,56,0.58) 100%
              )
            `,
          }}
        />
    </div>
        
        {/* LEFT SIDE */}
        <div
          className="
            absolute
            left-0
            top-0
            w-1/2
            h-full
          "
        >
          <FrameLeft />

          <div
            className="
              relative
              z-20
              h-full
              flex
              items-center
              justify-center
              gap-[5vw]
              pr-[12vw]
            "
          >
            {navItemsLeft.map((item) => (
              <NavLink
                key={item}
                label={item}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            absolute
            right-0
            top-0
            w-1/2
            h-full
          "
        >
          <FrameRight />

          <div
            className="
              relative
              z-20
              h-full
              flex
              items-center
              justify-center
              gap-[5vw]
              pl-[12vw]
            "
          >
            {navItemsRight.map((item) => (
              <NavLink
                key={item}
                label={item}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>

        {/* CENTER LOGO */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -top-[0.3rem]
            -translate-x-1/2
            -translate-y-1/2
            z-30
            w-[clamp(5rem,20vw,20rem)]
            opcaity-90
          "
        >
          <img
            src={logo}
            alt="Hard Dance Logo"
            className="
              w-full
              object-contain
              drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
            "
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;