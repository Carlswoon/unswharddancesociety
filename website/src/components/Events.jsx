import EventCard from "./EventCard";

import event1 from "../assets/events/event 1.png";
import event2 from "../assets/events/event 2.png";
import event3 from "../assets/events/event 3.png";

function Events() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.14),transparent_65%)] pointer-events-none" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9333ea]/60 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

        {/* HEADER */}
        <div className="mb-14 lg:mb-20">

          {/* LABEL */}
          <p
            className="
              text-[#d946ef]
              uppercase
              tracking-[0.35em]
              text-[0.68rem]
              sm:text-xs
              md:text-sm
              mb-5
              font-medium
            "
          >
            WHAT'S NEXT
          </p>

          {/* TITLE ROW */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* LEFT */}
            <div className="flex items-center gap-6 min-w-0">

              <h2
                className="
                  font-black
                  uppercase
                  tracking-[-0.05em]
                  leading-none
                  whitespace-nowrap

                  text-[2.5rem]
                  sm:text-[3.5rem]
                  md:text-[4.5rem]
                  lg:text-[5rem]
                "
              >
                Upcoming Events
              </h2>

              {/* LINE */}
              <div
                className="
                  hidden lg:block
                  h-px
                  flex-1
                  min-w-[120px]
                  bg-gradient-to-r
                  from-[#9333ea]
                  via-[#c084fc]/40
                  to-transparent
                "
              />

            </div>

            {/* CTA */}
            <button
              className="
                group
                flex items-center
                gap-3

                text-[#d946ef]
                hover:text-white

                transition-all

                uppercase
                tracking-[0.22em]

                text-[0.72rem]
                sm:text-xs
                md:text-sm

                self-start
                lg:self-auto
              "
            >

              <span>
                View All Events
              </span>

              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>

            </button>
          </div>
        </div>

        {/* EVENT GRID */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3

            gap-8
            md:gap-10
            xl:gap-12

            justify-items-center
          "
        >

          <div className="w-full max-w-[420px]">
            <EventCard
              image={event1}
              month="Jun"
              date="07"
              title="Winter Rave"
              venue="Arcadium, Sydney"
            />
          </div>

          <div className="w-full max-w-[420px]">
            <EventCard
              image={event2}
              month="Jun"
              date="21"
              title="Hardstyle Collective"
              venue="The Abercrombie, Sydney"
            />
          </div>

          <div className="w-full max-w-[420px] sm:col-span-2 xl:col-span-1 sm:justify-self-center">
            <EventCard
              image={event3}
              month="Jul"
              date="12"
              title="Euphoric Nights"
              venue="I. Port Warehouse, Sydney"
            />
          </div>

        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9333ea]/40 to-transparent" />

    </section>
  );
}

export default Events;