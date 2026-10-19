import StatCard from "./StatCard";

function Stats({ stars, downloads, issues }) {
  const stats = [
    { label: "Stars", value: stars },
    { label: "Downloads", value: downloads },
    { label: "Issues reported", value: issues },
  ];

  return (
    <section className="grid grid-cols-1 justify-items-center gap-4 px-6 pb-8 sm:grid-cols-3 md:gap-6" aria-label="Project statistics">
      {stats.map((stat) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </section>
  );
}

export default Stats;