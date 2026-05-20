function EventCard({
  image,
  date,
  month,
  title,
  venue,
  time = "10PM - 4AM",
}) {
  return (
    <div
      className="
        group
        relative
        w-[min(90vw,500px)]
        aspect-[4/3]
        overflow-hidden
        rounded-2xl
        border
        border-purple-500/40
        bg-black
        transition
        duration-300
        hover:border-purple-400
        hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
      "
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overall Dark Wash */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom Grey/Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/65
          to-transparent
        "
      />

      {/* Subtle Purple Hover Glow */}
      <div
        className="
          absolute
          inset-0
          bg-purple-500/10
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Date */}
      <div className="absolute left-6 top-5">
        <p
          className="
            text-pink-400
            text-sm
            font-bold
            uppercase
            tracking-[0.25em]
            leading-none
          "
        >
          {month}
        </p>

        <h2
          className="
            mt-1
            text-5xl
            font-black
            leading-none
            text-pink-400
          "
        >
          {date}
        </h2>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
        <div>
          <h3
            className="
              text-white
              text-2xl
              font-black
              uppercase
              leading-tight
              tracking-tight
            "
          >
            {title}
          </h3>

          <p className="mt-3 text-sm font-medium text-white/70">
            {venue}
          </p>

          <p className="mt-1 text-sm font-medium text-white/60">
            {time}
          </p>
        </div>

        <button
          className="
            shrink-0
            text-3xl
            leading-none
            text-purple-400
            transition
            duration-300
            group-hover:translate-x-1
            group-hover:text-pink-400
          "
          aria-label={`View ${title}`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default EventCard;