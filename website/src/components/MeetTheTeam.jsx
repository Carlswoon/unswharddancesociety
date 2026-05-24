// MeetTheTeam.jsx

import { useState } from "react";

import TeamCard from "./TeamCard";

import bel from "../assets/team/bel.png";
import carlson from "../assets/team/carlson.png";
import madison from "../assets/team/madison.png";
import parisha from "../assets/team/parisha.png";
import vanessa from "../assets/team/vanessa.png";
import vlad from "../assets/team/vlad.png";
import rita from "../assets/team/rita.png"

const filters = [
  "All",
  "Executive",
  "Marketing",
  "Events",
  "Sponsorship",
  "HR",
];

const teamMembers = [
  {
    name: "Vanessa Chang",
    role: "President",
    department: "Executive",

    description:
      "your mum",

    image: vanessa,

    instagram: "https://instagram.com",
    email: "arya@unswhd.com",
  },

  {
    name: "Carlson Perez",
    role: "Secretary",
    department: "Executive",

    description:
      "your mum",

    image: carlson,

    instagram: "https://instagram.com",
    email: "mia@unswhd.com",
  },

  {
    name: "Isobel Garcia",
    role: "Vice-President (Externals)",
    department: "Executive",

    description:
      "your mum",

    image: bel,

    instagram: "https://instagram.com",
    email: "mia@unswhd.com",
  },

  {
    name: "Parisha",
    role: "Vice-President (Internals)",
    department: "Executive",

    description:
      "your mum",

    image: parisha,

    instagram: "https://instagram.com",
    email: "mia@unswhd.com",
  },
  {
    name: "Vladyslav Klymenko",
    role: "Treasurer",
    department: "Executive",

    description:
      "your mum",

    image: vlad,

    instagram: "https://instagram.com",
    email: "mia@unswhd.com",
  },
  {
    name: "Madison Virtudazo",
    role: "Welfare Officer",
    department: "Executive",

    description:
      "your mum",

    image: madison,

    instagram: "https://instagram.com",
    email: "mia@unswhd.com",
  },
  {
    name: "Rita Nip",
    role: "Director",
    department: "Sponsorship",

    description:
      "your mum",

    image: rita,

    instagram: "https://instagram.com",
    email: "mia@unswhd.com",
  },

  // etc...
];

export default function MeetTheTeam() {

  // =========================
  // ACTIVE FILTER STATE
  // =========================

  const [activeFilter, setActiveFilter] =
    useState("All");

  // =========================
  // FILTERED MEMBERS
  // =========================

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) =>
            member.department === activeFilter
        );

  return (
    <section
      id="team"
      className="mx-auto max-w-7xl px-6 py-24"
    >

      {/* SECTION HEADER */}
      <div className="mb-4">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-fuchsia-500
          "
        >
          Meet The Team
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="mb-14 flex flex-wrap gap-4">

        {filters.map((item) => (

          <button
            key={item}

            onClick={() =>
              setActiveFilter(item)
            }

            className={`
              rounded-full
              border
              px-6
              py-3
              text-sm
              uppercase
              tracking-[0.2em]
              transition-all
              duration-300

              ${
                item === activeFilter
                  ? "border-fuchsia-400 bg-fuchsia-600/20 text-white shadow-[0_0_20px_rgba(217,70,239,0.35)]"
                  : "border-zinc-700 text-zinc-400 hover:border-fuchsia-500 hover:text-white"
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

      {/* TEAM GRID */}
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {filteredMembers.map((member) => (

          <TeamCard
            key={member.name}

            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
            instagram={member.instagram}
            email={member.email}
          />

        ))}

      </div>

    </section>
  );
}