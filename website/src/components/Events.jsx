import EventCard from "./EventCard";

import event1 from "../assets/events/event 1.png";
import event2 from "../assets/events/event 2.png";
import event3 from "../assets/events/event 3.png";

function Events() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 translate-x-[5vw]">

      {/* Heading */}
      <div className="flex items-center justify-between mb-12">

        <div>
          
          <p className="text-pink-500 uppercase tracking-[0.3em] text-sm mb-3">
            What's Next
          </p>

          <h2 className="text-4xl font-black uppercase">
            Upcoming Events
          </h2>

        </div>

        <button className="text-purple-400 hover:text-white transition uppercase tracking-wider text-sm">
          View All Events →
        </button>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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

    </section>
  );
}

export default Events;