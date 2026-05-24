// TeamCard.jsx

import {
  FaInstagram,
} from "react-icons/fa";

export default function TeamCard({
  name,
  role,
  description,
  image,
  instagram,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-fuchsia-500/20
        bg-[#07020f]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-fuchsia-400
        hover:shadow-[0_0_35px_rgba(217,70,239,0.25)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-[360px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#05010b]
            via-[#05010b]/30
            to-transparent
          "
        />

        {/* PURPLE GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-fuchsia-500/10
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* ROLE */}
        <p
          className="
            text-xs
            uppercase
            tracking-[0.28em]
            text-fuchsia-400
          "
        >
          {role}
        </p>

        {/* NAME */}
        <h3
          className="
            mt-2
            text-3xl
            font-bold
            uppercase
            tracking-wide
            text-white
          "
        >
          {name}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3
            text-sm
            leading-6
            text-zinc-400
          "
        >
          {description}
        </p>

        {/* SOCIALS */}
        <div className="mt-5 flex gap-3">
          {/* INSTAGRAM */}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <FaInstagram size={18} />
            </a>
          )}
        </div>
      </div>

      {/* OUTER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          shadow-[0_0_80px_rgba(217,70,239,0.15)]
        "
      />
    </div>
  );
}