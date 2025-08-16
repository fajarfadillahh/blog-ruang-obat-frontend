import CardArticle from "@/components/card/CardArticle";
import { Input } from "../ui/input";

export default function PostsPage() {
  return (
    <div className="grid gap-20 py-16">
      <div className="grid gap-1">
        <h1 className="text-2xl font-extrabold -tracking-wide text-gray-900 md:text-4xl">
          Semua Artikel<span className="text-ruangobat">.</span>
        </h1>

        <p className="max-w-[600px] leading-[170%] font-medium text-gray-500">
          Jelajahi semua artikel kami yang berisi informasi seputar dunia
          farmasi, kesehatan, tips & trik, hingga insight terbaru.
        </p>
      </div>

      <div className="grid gap-4">
        <Input
          placeholder="Cari artikel..."
          className="max-w-[500px] justify-self-end font-medium text-gray-900 placeholder:font-medium placeholder:text-gray-400"
        />

        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <CardArticle key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
