export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} WeatherNow. All rights reserved.</p>
      <p className="text-sm mt-1">
        Weather data by{" "}
        <a href="https://open-meteo.com/" target="_blank" rel="noreferrer" className="underline">
          Open-Meteo
        </a>
      </p>
    </footer>
  );
}
