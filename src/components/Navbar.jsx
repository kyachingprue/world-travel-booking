import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Search } from "lucide-react";
import { links } from "../data.js";
import { Logo } from "./ui.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const cls = ({ isActive }) => `text-sm font-medium transition ${isActive ? "text-gold" : "text-white/90 hover:text-gold"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${solid ? "bg-navy/95 shadow-lg backdrop-blur" : "bg-gradient-to-b from-black/50 to-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => <NavLink key={l.to} to={l.to} className={cls}>{l.label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Search size={18} className="text-white" />
          <Link to="/contact" className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white ring-1 ring-white/30 hover:bg-white hover:text-navy">Sign In</Link>
          <Link to="/contact" className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy hover:brightness-110">Create Account</Link>
        </div>
        <button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-md p-2 text-white lg:hidden"><Menu size={28} /></button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-navy px-6 py-5 lg:hidden">
            <div className="flex items-center justify-between"><Logo />
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full bg-white/10 p-2 text-white"><X size={26} /></button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {links.map((l, i) => (
                <motion.div key={l.to} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
                  <NavLink to={l.to} className={({ isActive }) => `text-3xl font-semibold ${isActive ? "text-gold" : "text-white"}`}>{l.label}</NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-3 pb-6">
              <Link to="/contact" className="flex-1 rounded-lg py-3 text-center font-medium text-white ring-1 ring-white/30">Sign In</Link>
              <Link to="/contact" className="flex-1 rounded-lg bg-gold py-3 text-center font-semibold text-navy">Create Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
