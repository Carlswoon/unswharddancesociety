function EventCard({
  image,
  date,
  month,
  title,
  venue,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-black/40 backdrop-blur-md hover:border-purple-500 transition duration-300">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Purple Glow */}
        <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">

        {/* Date */}
        <div>
          <p className="text-pink-500 text-sm uppercase tracking-widest">
            {month}
          </p>

          <h2 className="text-4xl font-black text-pink-400">
            {date}
          </h2>
        </div>

        {/* Bottom Info */}
        <div>

          <h3 className="text-2xl font-bold mb-2 uppercase">
            {title}
          </h3>

          <p className="text-white/70 text-sm mb-4">
            {venue}
          </p>

          <button className="text-purple-400 hover:text-white transition">
            →
          </button>

        </div>

      </div>

    </div>
  );
}

export default EventCard;