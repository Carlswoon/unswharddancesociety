// EventSection.jsx

import { useState } from "react";

import EventCard2 from "./EventCard2";

import EventEmptyState from "./EventEmptyState";
import { events, getEventsByPeriod } from "../data/events";

export default function EventSection() {

  // =========================
  // ACTIVE FILTER
  // =========================

  const [activeFilter, setActiveFilter] =
    useState("Upcoming");

  const { upcoming: upcomingEvents, past: pastEvents } =
    getEventsByPeriod(events);

  // =========================
  // FILTERED EVENTS
  // =========================

  const filteredEvents =
    activeFilter === "Upcoming"
      ? upcomingEvents
      : pastEvents;

  return (

    <section className="px-6 py-24">

      <div className="relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16">

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

            aria-pressed={activeFilter === "Upcoming"}
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

            aria-pressed={activeFilter === "Past"}
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

          {filteredEvents.length === 0 && (
            <EventEmptyState past={activeFilter === "Past"} />
          )}

          {filteredEvents.map((event) => (

            <EventCard2
              key={event.id}

              month={new Date(`${event.date}T12:00:00+10:00`)
                .toLocaleString("en-US", {
                  month: "short",
                  timeZone: "Australia/Sydney",
                })
                .toUpperCase()}

              day={String(
                event.date.slice(8, 10)
              ).padStart(2, "0")}

              weekday={new Date(`${event.date}T12:00:00+10:00`)
                .toLocaleString("en-US", {
                  weekday: "short",
                  timeZone: "Australia/Sydney",
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