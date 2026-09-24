import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Plane, Mountain, Utensils, Waves, Camera, Bike, Heart, Compass, ShieldCheck, Send, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { stays, destinations, P } from "../data.js";
import { PageHero, Wrap, Heading, Reveal, StayCard, DestCard } from "../components/ui.jsx";

export const Stays = () => {
  const cats = ["All", "Luxury", "Beachfront", "City View", "Family Friendly"];
  const [c, setC] = useState("All");
  const list = c === "All" ? stays : stays.filter((s) => s.tag === c);
  return (<>
    <PageHero title="Find Your Perfect Stay" sub="Handpicked hotels, villas and resorts with verified reviews." p={P.villa} seo="Stays" />
    <Wrap>
      <div className="mb-8 flex flex-wrap gap-2">{cats.map((x) => <button key={x} onClick={() => setC(x)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${c === x ? "bg-navy text-white" : "bg-slate-100 hover:bg-slate-200"}`}>{x}</button>)}</div>
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map((s, i) => <StayCard key={s.name} s={s} i={i} />)}</motion.div>
    </Wrap></>);
};

export const Flights = () => {
  const deals = [["Dhaka → Dubai", "$320"], ["Dhaka → Bali", "$410"], ["Dhaka → Tokyo", "$560"], ["Dhaka → Santorini", "$640"]];
  return (<>
    <PageHero title="Flights to Everywhere" sub="Compare fares and fly to your next destination for less." p={P.bag} seo="Flights" />
    <Wrap>
      <Reveal><div className="-mt-24 relative z-10 grid gap-3 rounded-2xl bg-white p-5 shadow-2xl md:grid-cols-4">
        {["From", "To", "Departure"].map((l) => <label key={l} className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500">{l}<input type={l === "Departure" ? "date" : "text"} placeholder={l === "From" ? "Dhaka (DAC)" : "Anywhere"} className="block w-full text-sm text-navy outline-none" /></label>)}
        <button className="flex items-center justify-center gap-2 rounded-lg bg-navy py-3 font-medium text-white hover:bg-sea"><Plane size={18} />Search Flights</button></div></Reveal>
      <div className="mt-12"><Heading title="Popular Flight Deals" sub="Lowest round-trip fares this month." /></div>
      <div className="grid gap-4 sm:grid-cols-2">{deals.map(([r, p], i) => <Reveal key={r} delay={i * 0.08}><motion.div whileHover={{ x: 6 }} className="flex items-center justify-between rounded-xl bg-white p-5 shadow ring-1 ring-slate-100"><span className="flex items-center gap-3 font-medium text-navy"><Plane className="text-gold" size={20} />{r}</span><b className="text-navy">from {p}</b></motion.div></Reveal>)}</div>
    </Wrap></>);
};

export const Experiences = () => {
  const ex = [[Waves, "Snorkeling & Diving"], [Mountain, "Mountain Trekking"], [Utensils, "Food Tours"], [Camera, "Photo Safaris"], [Bike, "City Bike Rides"], [Compass, "Cultural Walks"]];
  return (<>
    <PageHero title="Unforgettable Experiences" sub="Tours and activities led by local experts." p={P.tokyo} seo="Experiences" />
    <Wrap>
      <Heading title="Things to Do" sub="Pick an activity and make the trip yours." />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">{ex.map(([I, t], i) => <Reveal key={t} delay={i * 0.07}><motion.div whileHover={{ y: -6 }} className="rounded-2xl bg-white p-7 text-center shadow-lg ring-1 ring-slate-100"><I size={34} className="mx-auto mb-3 text-sea" /><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-xs text-slate-500">From $25 per person</p></motion.div></Reveal>)}</div>
    </Wrap>
    <Wrap className="!pt-0"><Heading title="Top Destinations" /><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{destinations.map((d) => <DestCard key={d.name} d={d} />)}</div></Wrap></>);
};

export const About = () => (<>
  <PageHero title="About Antixor Booking.com" sub="We make travel simple, safe and unforgettable." p={P.beach} seo="About" />
  <Wrap className="grid items-center gap-10 md:grid-cols-2">
    <Reveal><h2 className="text-3xl font-bold text-navy">Travel that starts with trust</h2>
      <p className="mt-4">Since our first booking, we've helped over a million travelers find verified stays, fair prices and real support. Every property is checked before it is listed.</p>
      <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-sea">Talk to our team <ArrowRight size={14} /></Link></Reveal>
    <div className="grid grid-cols-2 gap-4">{[[Heart, "Traveler first"], [ShieldCheck, "Verified stays"], [Compass, "Local expertise"], [Plane, "Global reach"]].map(([I, t], i) => <Reveal key={t} delay={i * 0.08}><div className="rounded-2xl bg-slate-50 p-6 text-center"><I className="mx-auto mb-2 text-gold" size={28} /><p className="text-sm font-semibold text-navy">{t}</p></div></Reveal>)}</div>
  </Wrap></>);

export const Contact = () => {
  const [sent, setSent] = useState(false);
  return (<>
    <PageHero title="Contact Us" sub="Questions about a booking? Our team replies within 24 hours." p={P.overwater} seo="Contact" />
    <Wrap className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <Reveal className="space-y-5">{[[Phone, "+880 123 456 789"], [Mail, "support@antixorbooking.com"], [MapPin, "Dhaka, Bangladesh"]].map(([I, t]) => <div key={t} className="flex items-center gap-4 rounded-xl bg-slate-50 p-5"><I className="text-gold" /><span className="text-navy">{t}</span></div>)}</Reveal>
      <Reveal>{sent ? <div className="grid h-full place-items-center rounded-2xl bg-slate-50 p-10 text-center"><div><CheckCircle2 size={44} className="mx-auto text-green-600" /><p className="mt-3 font-semibold text-navy">Message sent. We'll reply soon.</p></div></div> :
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
          {["Full name", "Email"].map((p) => <input key={p} required placeholder={p} type={p === "Email" ? "email" : "text"} className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-sea" />)}
          <textarea required rows={5} placeholder="How can we help?" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-sea" />
          <button className="flex items-center justify-center gap-2 rounded-lg bg-gold py-3 font-semibold text-navy hover:brightness-110"><Send size={16} />Send Message</button></form>}</Reveal>
    </Wrap></>);
};
