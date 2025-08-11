import { LogoRuangobat } from "@/assets/img/LogoRuangobat";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [city, setCity] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setCity(`${data.city}, ${data.country_name}`))
      .catch(() => setCity("Lokasi tidak diketemu!"));
  }, []);

  console.log(city);
  console.log(time);

  return (
    <nav className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-center border-b-2 border-gray-900/5 px-4 lg:px-0">
      <a href="/" className="inline-flex items-center gap-2">
        <LogoRuangobat className="h-auto w-9 text-gray-900/20" />
        <h1 className="text-xl font-extrabold -tracking-wide text-gray-900">
          RuangObat<span className="text-ruangobat">.</span>
        </h1>
      </a>
    </nav>
  );
}
