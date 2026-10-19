function Intro({ author = "Ingrid Mae M Ontario" }) {
  return (
    <header className="px-6 pt-8 text-center md:px-20">
      <h2 className="text-5xl font-bold md:text-7xl">Build pages faster.</h2>
      <p className="mt-5 text-xl text-black md:text-2xl">
        An open-source component kit for React.
      </p>
      <p className="mt-2 text-lg text-black md:text-xl">Made by {author}</p>
    </header>
  );
}
export default Intro;