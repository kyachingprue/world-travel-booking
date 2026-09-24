export const img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const P = {
  bali: "photo-1537996194471-e657df975ab4", dubai: "photo-1512453979798-5ea266f8880c",
  santorini: "photo-1570077188670-e3a8d69ac5ff", tokyo: "photo-1493976040374-85c8e12f0c0e",
  overwater: "photo-1573843981267-be1999ff37cd", villa: "photo-1540541338287-41700207dee6",
  hotel: "photo-1566073771259-6a8506099945", beach: "photo-1507525428034-b723cf961d3e",
  bag: "photo-1488646953014-85cb44e25828", resort: "photo-1582719508461-905c673771fd",
};
export const links = [
  { to: "/", label: "Home" }, { to: "/stays", label: "Stays" }, { to: "/flights", label: "Flights" },
  { to: "/experiences", label: "Experiences" }, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" },
];
export const destinations = [
  { name: "Bali", country: "Indonesia", rating: 4.8, p: P.bali }, { name: "Dubai", country: "UAE", rating: 4.7, p: P.dubai },
  { name: "Santorini", country: "Greece", rating: 4.9, p: P.santorini }, { name: "Tokyo", country: "Japan", rating: 4.6, p: P.tokyo },
];
export const stays = [
  { name: "The Royal Villa", loc: "Bali, Indonesia", tag: "Luxury", tagC: "bg-gold text-navy", price: 249, rating: 4.9, p: P.villa, btn: "bg-navy" },
  { name: "Ocean View Resort", loc: "Maldives", tag: "Beachfront", tagC: "bg-blue-600 text-white", price: 399, rating: 4.8, p: P.overwater, btn: "bg-blue-600" },
  { name: "Skyline Hotel", loc: "Dubai, UAE", tag: "City View", tagC: "bg-purple-600 text-white", price: 289, rating: 4.7, p: P.hotel, btn: "bg-purple-600" },
  { name: "Green Valley Resort", loc: "Thailand", tag: "Family Friendly", tagC: "bg-green-600 text-white", price: 189, rating: 4.6, p: P.resort, btn: "bg-green-600" },
];
export const reviews = [
  { n: "Sarah Johnson", c: "United States", a: 5, t: "The booking process was so easy and the hotel was even better than expected. Highly recommend Antixor Booking.com!" },
  { n: "David Miller", c: "Canada", a: 12, t: "Amazing service, great prices and 24/7 support. This is my go-to platform for all my travels now!" },
  { n: "Emma Wilson", c: "Australia", a: 47, t: "From the website to the hotel experience, everything was perfect. Thank you for making our vacation so special!" },
];
export const guides = [
  { t: "10 Best Places to Visit in 2026", tag: "Travel Tips", d: "May 12, 2026", p: P.beach },
  { t: "What to Pack for a Beach Vacation", tag: "Packing Guide", d: "May 6, 2026", p: P.bag },
  { t: "Exploring Tokyo: A Complete Guide", tag: "City Guide", d: "May 3, 2026", p: P.tokyo },
];
