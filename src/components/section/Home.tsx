import CardArticle from "@/components/card/CardArticle";
import DummyThumbnail from "@/components/DummyThumbnail";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function HomePage() {
  return (
    <div className="grid gap-20 py-16">
      <div className="grid gap-1">
        <h1 className="text-2xl font-extrabold -tracking-wide text-gray-900 md:text-4xl">
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
            className="group grid gap-4 hover:cursor-pointer lg:grid-cols-[500px_1fr]"
          >
            <div className="order-2 flex flex-col justify-between gap-8 md:-order-1">
              <div className="grid gap-2">
                <p className="text-ruangobat mb-4 leading-[170%] font-medium">
                  Topik
                </p>

                <h1 className="group-hover:text-ruangobat line-clamp-2 text-xl font-bold -tracking-wide text-gray-900 capitalize group-hover:underline md:text-2xl">
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
                08 Agustus 2025
              </p>
            </div>

            {/* === ratio gambar 16:9 === */}
            <DummyThumbnail />
          </a>

          {/* === list artikel terbaru === */}
          <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <CardArticle key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-wrap items-center justify-between gap-8 rounded-xl border-2 border-gray-500/10 p-8">
        <div className="grid">
          <h5 className="text-xl leading-[170%] font-bold text-gray-900">
            Cari Artikel Berdasarkan Topik
          </h5>

          <p className="max-w-[600px] leading-[170%] font-medium text-gray-500">
            Temukan artikel berdasarkan topik yang kamu minati. Mulai dari
            kesehatan, farmasi, tips & trik, dan masih banyak lagi.
          </p>
        </div>

        <a
          href="/topics"
          className="hover:bg-ruangobat inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Semua Topik Artikel
        </a>
      </div>

      <div className="grid gap-4">
        <div className="flex items-end justify-between gap-4 border-b-2 border-gray-900/5 pb-2">
          <h5 className="text-lg leading-[170%] font-semibold text-gray-900">
            Artikel Utama
          </h5>

          <a
            href="/posts"
            className="inline-flex w-max items-center gap-2 text-sm font-semibold text-gray-900 hover:underline"
          >
            Lihat Semua
            <ArrowRightIcon weight="bold" size={18} />
          </a>
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardArticle key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
