import Weather from "@/components/Weather";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-500 to-sky-300 text-white text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Check Today&apos;s Weather</h1>
        <p className="mt-3">Live weather data, simple and fast.</p>
      </section>

      <Weather />

      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-2">About This App</h2>
          <p>
            WeatherNow একটি সহজ ওয়েদার অ্যাপ যা Next.js, Tailwind CSS এবং Open-Meteo
            API দিয়ে তৈরি। এখানে তাপমাত্রা, আর্দ্রতা ও বাতাসের গতি দেখা যায়।
          </p>
        </div>
      </section>
    </>
  );
}
