function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#800020] px-6 py-6 text-[#FFF9F2] md:px-20">
      <h1 className="text-3xl font-bold">Maroon UI</h1>
      <ul className="flex gap-4 text-base md:gap-10 md:text-xl">
        <li>Docs</li>
        <li>Components</li>
        <li>GitHub</li>
      </ul>
      <p className="rounded-full bg-[#D45060] px-4 py-2 text-lg font-bold">v1.0</p>
    </nav>
  );
}

export default Navbar;