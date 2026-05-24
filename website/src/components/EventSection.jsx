// EventSection.jsx

import { useState } from "react";

import EventCard2 from "./EventCard2";

import winterRaveImage from "../assets/events/event 11.jpg";
import winterRaveImage2 from "../assets/events/event 12.png";

// =========================
// EVENTS
// =========================

const events = [
  {
    date: "2026-07-10",

    genre: "Hardstyle",

    title: "WINTER RAVE",

    description:
      "A massive indoor rave to kick off winter. High energy, heavy kicks, unforgettable vibes.",

    location: "Arcadium, Sydney",
    time: "10:00PM - 4:00AM",
    age: "18+ Event",

    image: winterRaveImage,

    link: "https://events.humanitix.com",
  },

  {
    date: "2026-05-18",

    genre: "Rawstyle",

    title: "RAW ENERGY",

    description:
      "A night of relentless kicks and euphoric chaos.",

    location: "Sydney Warehouse",
    time: "9:00PM - 3:00AM",
    age: "18+ Event",

    image: winterRaveImage2,

    link: "https://events.humanitix.com",
  },

  {
    date: "2026-12-18",

    genre: "Rawstyle",

    title: "RAW ENERGY",

    description:
      "A night of relentless kicks and euphoric chaos.",

    location: "Sydney Warehouse",
    time: "9:00PM - 3:00AM",
    age: "18+ Event",

    image: winterRaveImage2,

    link: "https://events.humanitix.com",
  },
];

export default function EventSection() {

  // =========================
  // ACTIVE FILTER
  // =========================

  const [activeFilter, setActiveFilter] =
    useState("Upcoming");

  // =========================
  // CURRENT DATE
  // =========================

  const now = new Date();

  // =========================
  // UPCOMING EVENTS
  // =========================

  const upcomingEvents = events

    .filter(
      (event) =>
        new Date(event.date) >= now
    )

    .sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );

  // =========================
  // PAST EVENTS
  // =========================

  const pastEvents = events

    .filter(
      (event) =>
        new Date(event.date) < now
    )

    .sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );

  // =========================
  // FILTERED EVENTS
  // =========================

  const filteredEvents =
    activeFilter === "Upcoming"
      ? upcomingEvents
      : pastEvents;

  return (

    <section className="px-6 py-24">

      <div className="class=relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16">

        {/* FILTER BAR */}
        <div
          className="
            mb-10

            flex
            items-center
            gap-4

            overflow-x-auto

            rounded-2xl
            border
            border-fuchsia-500/15

            bg-[#05010b]

            p-4
          "
        >

          {/* UPCOMING */}
          <button

            onClick={() =>
              setActiveFilter("Upcoming")
            }

            className={`
              rounded-xl

              px-6
              py-3

              text-sm
              font-semibold
              uppercase

              tracking-[0.15em]

              transition-all
              duration-300

              ${
                activeFilter === "Upcoming"
                  ? `
                    bg-gradient-to-b
                    from-[#d946ef]
                    to-[#9333ea]

                    text-white

                    shadow-[0_0_30px_rgba(217,70,239,0.35)]
                  `
                  : `
                    border
                    border-fuchsia-500/10

                    text-white/40

                    hover:border-fuchsia-500/40
                    hover:text-white
                  `
              }
            `}
          >

            UPCOMING EVENTS

          </button>

          {/* PAST */}
          <button

            onClick={() =>
              setActiveFilter("Past")
            }

            className={`
              rounded-xl

              px-6
              py-3

              text-sm
              font-semibold
              uppercase

              tracking-[0.15em]

              transition-all
              duration-300

              ${
                activeFilter === "Past"
                  ? `
                    bg-gradient-to-b
                    from-[#d946ef]
                    to-[#9333ea]

                    text-white

                    shadow-[0_0_30px_rgba(217,70,239,0.35)]
                  `
                  : `
                    border
                    border-fuchsia-500/10

                    text-white/40

                    hover:border-fuchsia-500/40
                    hover:text-white
                  `
              }
            `}
          >

            PAST EVENTS

          </button>

        </div>

        {/* EVENTS */}
        <div className="space-y-8">

          {filteredEvents.map((event) => (

            <EventCard2
              key={event.title}

              month={new Date(event.date)
                .toLocaleString("en-US", {
                  month: "short",
                })
                .toUpperCase()}

              day={String(
                new Date(event.date).getDate()
              ).padStart(2, "0")}

              weekday={new Date(event.date)
                .toLocaleString("en-US", {
                  weekday: "short",
                })
                .toUpperCase()}

              genre={event.genre}

              title={event.title}

              description={event.description}

              location={event.location}
              time={event.time}
              age={event.age}

              image={event.image}

              link={event.link}
            />

          ))}

        </div>

      </div>

    </section>

  );
}