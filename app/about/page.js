export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About WeatherNow</h1>
      <p className="mb-3">
        WeatherNow একটি সিম্পল ওয়েদার অ্যাপ, যা Open-Meteo-এর ফ্রি API থেকে রিয়েল-টাইম
        আবহাওয়ার তথ্য দেখায়।
      </p>
      <p>
        অ্যাপটি Next.js (App Router) ও Tailwind CSS দিয়ে তৈরি এবং মোবাইল, ট্যাবলেট ও
        ডেস্কটপ সব ডিভাইসে সুন্দরভাবে কাজ করে।
      </p>
    </div>
  );
}
