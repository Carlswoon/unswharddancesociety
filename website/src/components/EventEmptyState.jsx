export default function EventEmptyState({ past = false }) {
  return (
    <div
      role="status"
      className="w-full rounded-3xl border border-fuchsia-500/15 bg-[#05010b] px-6 py-12 text-center"
    >
      <h2 className="text-2xl font-bold text-white">
        {past ? "No past events listed yet" : "No upcoming events announced yet"}
      </h2>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-white/60">
        {past
          ? "Our past event archive will appear here once details are confirmed."
          : "Check back for confirmed HDS events, or follow us on Instagram for announcements."}
      </p>
      <a
        href="https://www.instagram.com/unswharddancesoc/"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-xl border border-fuchsia-500/30 px-6 py-3 font-semibold text-fuchsia-400 transition-colors hover:border-fuchsia-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400"
      >
        Follow HDS on Instagram
      </a>
    </div>
  );
}
