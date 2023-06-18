"use client";

export function Navbar() {
  return (
    <header
      className={" w-full z-50  px-4 fixed top-0"} // backdrop-blur-md
    >
      <div className={"max-w-7xl mx-auto py-4"}>
        <nav className={`flex justify-between items-center h-full `}>
          <p className={"font-semibold"}>Ram Shankar</p>
          <ul className="flex items-center gap-4 justify-between">
            <a href="#">Blog</a>
            <a href="#">Work</a>
          </ul>
          <a href="mailto:ram.codes@gmail.com">ram.codes@gmail.com</a>
        </nav>
      </div>
    </header>
  );
}
