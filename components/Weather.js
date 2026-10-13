"use client";
import { useEffect, useState } from "react";

const cities = {
  Dhaka: [23.81, 90.41],
  Gazipur: [24.0, 90.42],
  Chattogram: [22.36, 91.78],
  Sylhet: [24.89, 91.87],
  Rajshahi: [24.37, 88.6],
};

export default function Weather() {
  const [city, setCity] = useState("Dhaka");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const [lat, lon] = cities[city];
    setLoading(true);
    setError("");
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
    )
      .then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
      .then((json) => setData(json))
      .catch(() => setError("Weather data লোড করা যায়নি।"))
      .finally(() => setLoading(false));
  }, [city]);

  const c = data?.current;
  const u = data?.current_units;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-2xl font-bold">Current Weather</h2>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded px-3 py-2 bg-white"
        >
          {Object.keys(cities).map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {c && !loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="🌡️ Temperature" value={`${c.temperature_2m} ${u.temperature_2m}`} />
          <Card title="💧 Humidity" value={`${c.relative_humidity_2m} ${u.relative_humidity_2m}`} />
          <Card title="💨 Wind Speed" value={`${c.wind_speed_10m} ${u.wind_speed_10m}`} />
          <Card title="🕒 Time" value={c.time.replace("T", " ")} />
          <Card title="⏱️ Interval" value={`${c.interval} ${u.interval}`} />
          <Card title="📍 Location" value={city} />
        </div>
      )}
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 text-center">
      <p className="text-slate-500 text-sm">{title}</p>
      <p className="text-xl font-semibold mt-2">{value}</p>
    </div>
  );
}
