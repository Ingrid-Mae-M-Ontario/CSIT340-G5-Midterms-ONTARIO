function Hero({ onStar, onDownload, onReport, onReset }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-6 py-6 md:gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-6 py-3 text-lg font-bold text-[#FFF9F2] md:px-8 md:text-xl"
          onClick={onStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-6 py-3 text-lg font-bold text-[#FFF9F2] md:px-8 md:text-xl"
          onClick={onDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-black px-6 py-3 text-lg font-bold text-[#FFF9F2] md:px-8 md:text-xl"
          onClick={onReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-6 py-3 text-lg font-bold md:px-8 md:text-xl"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
  );
}

export default Hero;