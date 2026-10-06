// Only publish confirmed HDS events. Each entry needs a unique id, date
// (YYYY-MM-DD in Sydney), genre, title, description, location, time, age,
// image, and an event-specific ticket/details link. Never use a ticket homepage.
// The previous May, July and December 2026 entries were unverified templates.
export const events = [];

export function getEventsByPeriod(eventList, now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Sydney",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  // Keep today's events visible for the entire Sydney calendar day.
  return {
    upcoming: eventList
      .filter((event) => event.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date)),
    past: eventList
      .filter((event) => event.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)),
  };
}
