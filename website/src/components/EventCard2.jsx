// EventCard.jsx

import {
  MapPin,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

export default function EventCard2({
  month,
  day,
  weekday,

  genre,
  title,
  description,

  location,
  time,
  age,

  image,
  link,
}) {
  return (
    <div
      className="
        group

        grid
        overflow-hidden

        rounded-3xl
        border
        border-fuchsia-500/15

        bg-[#05010b]

        transition-all
        duration-300

        hover:border-fuchsia-400/40
        hover:shadow-[0_0_40px_rgba(217,70,239,0.12)]

        lg:grid-cols-[1.3fr_1fr_140px]
      "
    >

      {/* IMAGE */}
      <div
        className="
          relative
          overflow-hidden

          border-b
          border-fuchsia-500/10

          lg:border-b-0
          lg:border-r
        "
      >

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
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
            via-transparent
            to-transparent
          "
        />

        {/* DATE OVERLAY */}
        <div
          className="
            absolute
            top-5
            left-5
            z-20

            flex
            flex-col
            items-center

            rounded-2xl
            border
            border-fuchsia-500/20

            bg-black/50
            backdrop-blur-md

            px-5
            py-4
          "
        >

          {/* MONTH */}
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]

              text-fuchsia-400
            "
          >
            {month}
          </p>

          {/* DAY */}
          <h2
            className="
              mt-1

              text-5xl
              font-black

              leading-none

              text-fuchsia-500
            "
          >
            {day}
          </h2>

          {/* WEEKDAY */}
          <p
            className="
              mt-1

              text-xs
              uppercase
              tracking-[0.3em]

              text-white/60
            "
          >
            {weekday}
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div
        className="
          flex
          flex-col
          justify-center

          p-8
        "
      >

        {/* GENRE */}
        <div>

          <span
            className="
              rounded-full
              border
              border-fuchsia-500/30

              px-4
              py-1

              text-xs
              uppercase
              tracking-[0.2em]

              text-fuchsia-400
            "
          >
            {genre}
          </span>

        </div>

        {/* TITLE */}
        <h2
          className="
            mt-6

            text-5xl
            font-black
            uppercase

            leading-[0.95]
            tracking-[-0.04em]
          "
        >
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-5

            max-w-[500px]

            text-white/55
            leading-8
          "
        >
          {description}
        </p>

        {/* META */}
        <div
          className="
            mt-7

            flex
            flex-col
            gap-4

            text-white/55
          "
        >

          {/* LOCATION */}
          <div className="flex items-center gap-3">

            <MapPin
              size={18}
              className="text-fuchsia-400"
            />

            <span>{location}</span>

          </div>

          {/* TIME */}
          <div className="flex items-center gap-3">

            <Clock3
              size={18}
              className="text-fuchsia-400"
            />

            <span>{time}</span>

          </div>

          {/* AGE */}
          <div className="flex items-center gap-3">

            <Users
              size={18}
              className="text-fuchsia-400"
            />

            <span>{age}</span>

          </div>

        </div>

      </div>

      {/* RIGHT ACTION */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"

        className="
          group/button

          flex
          items-center
          justify-center

          border-t
          border-fuchsia-500/10

          transition-all
          duration-300

          hover:bg-fuchsia-500/5

          lg:border-t-0
          lg:border-l
        "
      >

        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center

            rounded-full
            border
            border-fuchsia-500/30

            transition-all
            duration-300

            group-hover/button:border-fuchsia-400
            group-hover/button:bg-fuchsia-500/10
            group-hover/button:shadow-[0_0_30px_rgba(217,70,239,0.25)]
          "
        >

          <ArrowRight
            size={34}
            className="
              text-fuchsia-400

              transition-transform
              duration-300

              group-hover/button:translate-x-1
            "
          />

        </div>

      </a>

    </div>
  );
}