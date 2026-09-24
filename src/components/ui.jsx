import { motion } from "motion/react";
import { Link } from "react-router";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { img } from "../data.js";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
);

export const Heading = ({ kicker, title, sub, to, more }) => (
  <Reveal className="mb-8 flex items-end justify-between gap-4">
    <div>
      {kicker && <p className="mb-1 text-xs font-semibold tracking-widest text-sea uppercase">{kicker}</p>}
      <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      {sub && <p className="mt-1 max-w-xl text-sm text-slate-500">{sub}</p>}
    </div>
    {to && <Link to={to} className="hidden items-center gap-1 text-sm font-medium text-navy hover:text-sea sm:flex">{more} <ArrowRight size={14} /></Link>}
  </Reveal>
);

export const Wrap = ({ children, className = "" }) => (
  <section className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

export const PageHero = ({ title, sub, p, seo }) => (
  <div className="relative flex h-[46vh] min-h-[320px] items-end overflow-hidden bg-navy">
    <Helmet><title>{seo || title} | Antixor Booking.com</title><meta name="description" content={sub} /></Helmet>
    <motion.img initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.6 }} src={img(p, 1600)} alt="" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/30" />
    <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl font-extrabold text-white sm:text-5xl">{title}</motion.h1>
      <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-3 max-w-xl text-white/85">{sub}</motion.p>
    </div>
  </div>
);

export const DestCard = ({ d }) => (
  <motion.div whileHover={{ y: -6 }} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-200 shadow-md">
    <img src={img(d.p, 600)} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-navy"><Star size={12} className="fill-gold text-gold" />{d.rating}</span>
    <div className="absolute bottom-4 left-4 text-white"><h3 className="text-lg font-bold">{d.name}</h3><p className="flex items-center gap-1 text-xs"><MapPin size={12} />{d.country}</p></div>
  </motion.div>
);

export const StayCard = ({ s, i = 0 }) => (
  <Reveal delay={i * 0.08}>
    <motion.div whileHover={{ y: -6 }} className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
      <div className="group relative h-44 overflow-hidden bg-slate-200">
        <img src={img(s.p, 600)} alt={s.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className={`absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.tagC}`}>{s.tag}</span>
        <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-navy"><Star size={12} className="fill-gold text-gold" />{s.rating}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-navy">{s.name}</h3>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{s.loc}</p>
        <p className="mt-3 text-xl font-bold text-navy">${s.price} <span className="text-xs font-normal text-slate-500">/ night</span></p>
        <Link to="/contact" className={`mt-3 flex items-center justify-center gap-1 rounded-lg py-2 text-sm font-medium text-white transition hover:opacity-90 ${s.btn}`}>View Details <ArrowRight size={14} /></Link>
      </div>
    </motion.div>
  </Reveal>
);

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <svg width="34" height="34" viewBox="0 0 34 34"><path d="M17 3 31 31h-8l-6-13-6 13H3z" fill="#f6b93b" /></svg>
    <span className="leading-none"><b className="block text-xl font-bold text-white">Antixor</b><small className="text-xs text-white/80">Booking.com</small></span>
  </Link>
);
