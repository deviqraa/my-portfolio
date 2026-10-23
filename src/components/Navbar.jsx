
import { NavLink } from "react-router";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[92%] max-w-6xl">
      <nav className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/8 px-5 py-4 shadow-xl backdrop-blur-xl">
        <NavLink to="/" className="text-xl font-bold text-white">
          <span className="text-cyan-400"></span>
        </NavLink>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `nav-link transition hover:text-cyan-300 ${
                  isActive
                    ? "active font-semibold text-cyan-300"
                    : "text-slate-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
