import EventCard2 from "./EventCard2";

import winterRaveImage from "../assets/events/event1.png";

export default function EventSection() {
  return (

    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <EventCard2
          month="JUN"
          day="07"
          weekday="SAT"

          genre="Hardstyle"

          title={
            <>
              WINTER RAVE
            </>
          }

          description="
            A massive indoor rave to kick off winter.
            High energy, heavy kicks, unforgettable vibes.
          "

          location="Arcadium, Sydney"
          time="10:00PM - 4:00AM"
          age="18+ Event"

          image={winterRaveImage}

          link="https://events.humanitix.com"
        />

      </div>

    </section>

  );
}