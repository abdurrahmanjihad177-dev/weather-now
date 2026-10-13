const services = [
  { icon: "🌡️", title: "Live Temperature", desc: "বর্তমান তাপমাত্রা °C-তে দেখুন।" },
  { icon: "💧", title: "Humidity Info", desc: "বাতাসের আর্দ্রতার শতকরা হার জানুন।" },
  { icon: "💨", title: "Wind Speed", desc: "বাতাসের গতি km/h-এ দেখুন।" },
  { icon: "🕒", title: "Time & Interval", desc: "ডাটা আপডেটের সময় ও ইন্টারভাল দেখুন।" },
  { icon: "📍", title: "Multiple Cities", desc: "বিভিন্ন শহরের আবহাওয়া বেছে নিন।" },
  { icon: "📱", title: "Responsive Design", desc: "যেকোনো ডিভাইসে ব্যবহার করুন।" },
];

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-4xl">{s.icon}</div>
            <h3 className="font-semibold text-lg mt-3">{s.title}</h3>
            <p className="text-slate-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
