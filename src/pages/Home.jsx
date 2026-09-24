import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { MapPin, CalendarDays, Users, Search, ShieldCheck, MousePointerClick, Headset, Lock, BadgePercent, Ban, Building2, Star, Users2, Globe2, ArrowRight } from "lucide-react";
import { destinations, stays, reviews, guides, img, P } from "../data.js";
import { Wrap, Heading, Reveal, DestCard, StayCard } from "../components/ui.jsx";

const tabs = [["Stays", "/stays"], ["Flights", "/flights"], ["Experiences", "/experiences"]];
const trust = [[ShieldCheck, "Best Price Guarantee"], [MousePointerClick, "Easy Booking"], [Headset, "24/7 Support"], [Lock, "Secure Payments"]];
const why = [[BadgePercent, "Best Rates Always"], [ShieldCheck, "Verified Properties"], [Ban, "Flexible Cancellations"], [Headset, "Travel Support 24/7"]];
const stats = [[Users2, "1M+", "Happy Travelers"], [Building2, "5K+", "Verified Hotels"], [Globe2, "120+", "Countries"], [Headset, "24/7", "Customer Support"]];

export default function Home() {
  const [tab, setTab] = useState(0);
  const nav = useNavigate();
  return (
    <>
      <Helmet><title>Antixor Booking.com | Your Next Getaway Awaits</title>
        <meta name="description" content="Discover handpicked hotels, resorts and unique stays around the world." /></Helmet>

      {/* HERO */}
      <div className="relative flex min-h-[640px] items-center bg-navy pt-24 pb-40 lg:min-h-[720px]">
        <div className="absolute inset-0 overflow-hidden"><motion.img initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2 }} src={img(P.resort, 1800)} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" /></div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold">DREAM · EXPLORE · STAY</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="max-w-xl text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">Your Next Getaway Awaits</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-md text-white/90">Discover handpicked hotels, resorts, and unique stays around the world — all in one place.</motion.p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {trust.map(([I, t]) => <div key={t} className="flex items-center gap-2 text-xs text-white"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/40"><I size={18} /></span>{t}</div>)}
          </div>
        </div>
        {/* search card */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="absolute inset-x-4 bottom-[-70px] z-10 mx-auto max-w-5xl rounded-2xl bg-white p-4 shadow-2xl sm:p-5">
          <div className="mb-4 flex gap-2">
            {tabs.map(([t], i) => <button key={t} onClick={() => setTab(i)} className={`rounded-lg px-5 py-2 text-sm font-medium transition ${tab === i ? "bg-navy text-white" : "text-slate-600 hover:bg-slate-100"}`}>{t}</button>)}
          </div>
          <div className="grid gap-3 md:grid-cols-[1.3fr_1.3fr_1fr_auto]">
            {[[MapPin, "Where are you going?", "Search destinations"], [CalendarDays, "Check-in · Check-out", "Select dates"], [Users, "Guests & Rooms", "1 Room · 2 Guests"]].map(([I, l, v]) => (
              <label key={l} className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 focus-within:border-sea"><I size={18} className="text-slate-500" />
                <span className="block text-xs text-slate-500">{l}<input placeholder={v} className="block w-full text-sm text-navy outline-none placeholder:text-slate-400" /></span></label>
            ))}
            <button onClick={() => nav(tabs[tab][1])} className="flex items-center justify-center gap-2 rounded-lg bg-navy px-8 py-3 font-medium text-white transition hover:bg-sea"><Search size={18} />Search</button>
          </div>
        </motion.div>
      </div>

      <div className="h-24" />
      <Wrap>
        <Heading kicker="Explore the world" title="Popular Destinations" sub="From tropical beaches to bustling cities, find the perfect place for your next adventure." to="/experiences" more="View All Destinations" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{destinations.map((d, i) => <Reveal key={d.name} delay={i * 0.08}><DestCard d={d} /></Reveal>)}</div>
      </Wrap>

      <Wrap>
        <Heading kicker="Top rated hotels" title="Featured Stays" sub="Handpicked accommodations for the perfect experience." to="/stays" more="View All Stays" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{stays.map((s, i) => <StayCard key={s.name} s={s} i={i} />)}</div>
      </Wrap>

      <Wrap className="!py-6">
        <Reveal><div className="relative overflow-hidden rounded-2xl bg-sea p-8 sm:p-12">
          <img src={img(P.overwater, 1400)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
          <div className="relative max-w-md text-white"><p className="text-xs font-semibold tracking-widest text-gold">SPECIAL OFFER</p>
            <h3 className="mt-2 text-3xl font-bold">Up to 40% Off on Your Dream Stay</h3>
            <p className="mt-2 text-sm text-white/85">Book now and enjoy exclusive deals on selected hotels and resorts worldwide.</p>
            <Link to="/stays" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy hover:brightness-110">Explore Deals <ArrowRight size={14} /></Link></div>
        </div></Reveal>
      </Wrap>

      <div className="mt-10 bg-slate-50"><Wrap>
        <Heading kicker="Why choose Antixor Booking.com" title="Your Travel, Our Priority" sub="We make travel simple, safe and unforgettable — with the best options, prices and support." />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">{why.map(([I, t], i) => <Reveal key={t} delay={i * 0.08}><div className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><I className="mx-auto mb-3 text-gold" size={30} /><p className="text-sm font-semibold text-navy">{t}</p></div></Reveal>)}</div>
      </Wrap></div>

      <Wrap>
        <Reveal><div className="relative overflow-hidden rounded-2xl bg-navy">
          <img src={img(P.villa, 1400)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
          <div className="relative grid gap-6 p-8 sm:p-12 md:grid-cols-[1fr_auto]"><div className="max-w-sm text-white"><h3 className="text-3xl font-bold">Luxury Stays for Special Moments</h3>
            <p className="mt-2 text-sm text-white/85">From romantic getaways to family vacations, find stays that make every moment count.</p>
            <Link to="/stays" className="mt-5 inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy">Explore Luxury Stays</Link></div>
            <div className="hidden flex-col gap-2 md:flex">{["Villas", "Resorts", "Apartments", "Bungalows", "Guest Houses"].map((c) => <span key={c} className="rounded-md bg-white/90 px-4 py-1.5 text-xs font-medium text-navy">{c}</span>)}</div></div>
        </div></Reveal>
      </Wrap>

      <Wrap>
        <Heading kicker="Traveler reviews" title="Real Experiences, Real Stories" sub="See what our travelers have to say about their unforgettable journeys." to="/about" more="View All Reviews" />
        <div className="grid gap-5 md:grid-cols-3">{reviews.map((r, i) => (
          <Reveal key={r.n} delay={i * 0.1}><div className="h-full rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 transition hover:-translate-y-1">
            <div className="flex items-center gap-3"><img src={`https://i.pravatar.cc/80?img=${r.a}`} alt={r.n} className="h-12 w-12 rounded-full" /><div><p className="text-sm font-semibold text-navy">{r.n}</p><p className="text-xs text-slate-500">{r.c}</p></div></div>
            <p className="mt-4 text-sm text-slate-600">"{r.t}"</p>
            <div className="mt-4 flex gap-0.5">{[...Array(5)].map((_, k) => <Star key={k} size={16} className="fill-gold text-gold" />)}</div></div></Reveal>))}</div>
      </Wrap>

      <Wrap>
        <Heading kicker="Travel tips & guides" title="Latest Travel Guides" sub="Get inspired with travel tips, destination guides and expert advice." to="/experiences" more="View All Guides" />
        <div className="grid gap-5 sm:grid-cols-3">{guides.map((g, i) => (
          <Reveal key={g.t} delay={i * 0.1}><article className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100">
            <div className="h-44 overflow-hidden bg-slate-200"><img src={img(g.p, 600)} alt={g.t} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></div>
            <div className="p-4"><span className="rounded bg-sea/10 px-2 py-0.5 text-xs font-medium text-sea">{g.tag}</span><h3 className="mt-2 font-semibold text-navy">{g.t}</h3><p className="mt-1 text-xs text-slate-500">{g.d}</p></div></article></Reveal>))}</div>
      </Wrap>

      <Wrap className="!pt-4"><Reveal><div className="relative overflow-hidden rounded-2xl bg-navy p-8 text-white sm:p-14">
        <img src={img(P.overwater, 1400)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="relative max-w-md"><p className="text-xs font-semibold tracking-widest text-gold">READY FOR YOUR NEXT ADVENTURE?</p><h3 className="mt-2 text-3xl font-bold">Book Your Dream Trip Today</h3>
          <p className="mt-2 text-sm text-white/85">Explore amazing destinations, top-rated hotels and exclusive deals — all at your fingertips.</p>
          <Link to="/stays" className="mt-5 inline-block rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy">Start Booking</Link></div></div></Reveal></Wrap>

      <div className="border-t border-slate-100 bg-slate-50"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([I, n, l]) => <div key={l} className="flex items-center gap-3"><I className="text-gold" size={28} /><div><p className="text-xl font-bold text-navy">{n}</p><p className="text-xs text-slate-500">{l}</p></div></div>)}</div></div>
    </>
  );
}
