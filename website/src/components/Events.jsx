import EventCard from "./EventCard";

import event1 from "../assets/events/event 1.png";
import event2 from "../assets/events/event 2.png";
import event3 from "../assets/events/event 3.png";

function Events() {
  return (
    <section className="relative w-full py-8 overflow-hidden">

      {/* SECTION GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_60%)] pointer-events-none" />
          {/* HEADER */}
          <div className="px-6 sm:px-10 md:px-16">

            <p
              className="
                text-[#d946ef]
                uppercase
                tracking-[0.3em]
                text-[0.7rem]
                md:text-sm
                mb-4
              "
            >
              WHAT'S NEXT
            </p>

            {/* TITLE ROW */}
            <div className="flex items-center justify-between gap-6 flex-wrap">

              {/* LEFT SIDE */}
              <div className="flex items-center gap-6">

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    uppercase
                    tracking-[-0.04em]
                    leading-none
                  "
                >
                  Upcoming Events
                </h2>

                {/* LINE */}
                <div
                  className="
                    hidden lg:block
                    h-[1px]
                    w-[45vw]
                    bg-gradient-to-r
                    from-[#9333ea]
                    to-transparent
                  "
                />

              </div>

              {/* CTA */}
              <button
                className="
                  text-[#d946ef]
                  hover:text-white
                  transition
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  md:text-sm
                "
              >
                View All Events →
              </button>

            </div>
          </div> 

      <div className="w-full flex justify-center mt-4">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-[5vw]
            justify-items-center
            w-fit
            mx-auto
          "
        >

            <EventCard
              image={event1}
              month="Jun"
              date="07"
              title="Winter Rave"
              venue="Arcadium, Sydney"
            />

            <EventCard
              image={event2}
              month="Jun"
              date="21"
              title="Hardstyle Collective"
              venue="The Abercrombie, Sydney"
            />

            <EventCard
              image={event3}
              month="Jul"
              date="12"
              title="Euphoric Nights"
              venue="I. Port Warehouse, Sydney"
            />

          </div>


      </div>
    </section>
  );
}

export default Events;