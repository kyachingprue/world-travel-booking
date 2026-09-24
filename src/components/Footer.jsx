import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";
import { links } from "../data.js";
import { Logo } from "./ui.jsx";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm">Explore. Stay. Create memories.</p>
          <div className="mt-5 flex gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-gold hover:text-navy"><I size={14} /></a>
            ))}
          </div>
        </div>
        <div><h4 className="mb-3 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">{links.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>)}</ul></div>
        <div><h4 className="mb-3 font-semibold text-white">Top Destinations</h4>
          <ul className="space-y-2 text-sm">{["Bali", "Dubai", "Santorini", "Tokyo", "New York", "Paris"].map((d) => <li key={d}>{d}</li>)}</ul></div>
        <div><h4 className="mb-3 font-semibold text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} />+880 123 456 789</li>
            <li className="flex gap-2"><Mail size={16} />support@antixorbooking.com</li>
            <li className="flex gap-2"><MapPin size={16} />Dhaka, Bangladesh</li></ul></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">© 2026 Antixor Booking.com. All rights reserved.</div>
    </footer>
  );
}
