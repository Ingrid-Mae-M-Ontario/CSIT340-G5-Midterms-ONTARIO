function FeatureCard({ tag , title, description }) {
  return (
    <article className="flex flex-col items-center justify-center rounded-lg bg-[#F3E6D5] px-8 py-7 text-center">
      <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
        {tag}
      </span>
      <h3 className="mt-8 text-3xl font-bold">{title}</h3>
      <p className="mt-3 text-xl text-black">{description}</p>
    </article>
  );
}

export default FeatureCard;