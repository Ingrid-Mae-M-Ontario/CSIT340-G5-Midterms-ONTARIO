import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    { tag: "Free", title: "Open source", description: "Read the code and use it in any project." },
    { tag: "Small", title: "Lightweight", description: "Import only the components the page uses." },
    { tag: "Simple", title: "Easy to learn", description: "Every component takes a few plain props." },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 px-6 pb-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:px-20" aria-label="Features">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </section>
  );
}
export default Features;