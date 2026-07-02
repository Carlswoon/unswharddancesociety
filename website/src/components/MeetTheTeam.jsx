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
import andrew from "../assets/team/andrew.png"
import jessie from "../assets/team/jessie.png"
import katon from "../assets/team/katon.png"

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

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  {
    name: "Carlson Perez",
    role: "Secretary",
    department: "Executive",

    description:
      "likes BBC",

    image: carlson,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  {
    name: "Isobel Garcia",
    role: "Vice-President (Externals)",
    department: "Executive",

    description:
      "your mum",

    image: bel,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },

  {
    name: "Parisha",
    role: "Vice-President (Internals)",
    department: "Executive",

    description:
      "your mum",

    image: parisha,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Vladyslav Klymenko",
    role: "Treasurer",
    department: "Executive",

    description:
      "your mum",

    image: vlad,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Madison Virtudazo",
    role: "Welfare Officer",
    department: "Executive",

    description:
      "your mum",

    image: madison,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Rita Nip",
    role: "Director",
    department: "Sponsorship",

    description:
      "your mum",

    image: rita,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Andrew Pham",
    role: "Director",
    department: "Events",

    description:
      "your mum",

    image: andrew,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Jessie Keep",
    role: "Director",
    department: "Marketing",

    description:
      "your mum",

    image: jessie,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Katon Junaidi",
    role: "Director",
    department: "HR",

    description:
      "your mum",

    image: katon,

    instagram: "https://www.instagram.com/unswharddancesoc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
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
      className="class=relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16"
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