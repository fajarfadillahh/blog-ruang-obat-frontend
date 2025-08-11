import CardArticle from "@/components/card/CardArticle";
import DummyThumbnail from "@/components/DummyThumbnail";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function HomePage() {
  return (
    <div className="grid gap-20 py-16">
      <div className="grid gap-1">
        <h1 className="text-4xl font-extrabold -tracking-wide text-gray-900">
          Cerita dari RuangObat<span className="text-ruangobat">.</span>
        </h1>

        <p className="leading-[170%] font-medium text-gray-500">
          Dapat informasi seputar dunia farmasi, kesehatan, tips & trik,
          artikel, dan masih banyak lagi.
        </p>
      </div>

      <div className="grid gap-4">
        <h5 className="border-b-2 border-gray-900/5 pb-2 text-lg leading-[170%] font-semibold text-gray-900">
          Artikel Terbaru
        </h5>

        <div className="grid gap-12">
          {/* === artikel paling baru === */}
          <a
            href="/posts/1"
            className="group grid grid-cols-[500px_1fr] gap-4 hover:cursor-pointer"
          >
            <div className="flex flex-col justify-between gap-8">
              <div className="grid gap-2">
                <p className="text-ruangobat mb-4 leading-[170%] font-medium">
                  Topik
                </p>

                <h1 className="group-hover:text-ruangobat line-clamp-2 text-2xl font-bold -tracking-wide text-gray-900 capitalize group-hover:underline">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores, quo.
                </h1>

                <p className="line-clamp-5 leading-[170%] font-medium text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, hic vitae eos minus at maiores molestiae obcaecati
                  quisquam, voluptatem aperiam architecto unde est nisi. Debitis
                  sit non tempora iure assumenda.
                </p>
              </div>

              <p className="leading-[170%] font-medium text-gray-500">
                08 Agustus 2025 -{" "}
                <span className="text-ruangobat">Kategori</span>
              </p>
            </div>

            {/* === ratio gambar 16:9 === */}
            <DummyThumbnail />
          </a>

          {/* === list artikel terbaru === */}
          <div className="grid grid-cols-3 items-start gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <CardArticle key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="flex items-end justify-between gap-4 border-b-2 border-gray-900/5 pb-2">
          <h5 className="text-lg leading-[170%] font-semibold text-gray-900">
            Artikel Utama
          </h5>

          <Button
            variant="link"
            size="sm"
            className="w-max font-semibold text-gray-900 hover:cursor-pointer"
          >
            Lihat Semua <ArrowRightIcon weight="bold" size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-3 items-start gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardArticle key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
