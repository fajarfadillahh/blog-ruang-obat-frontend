import { topics } from "@/data/dummy";

type Topic = {
  title: string;
  category: string;
  content: string;
};

type TopicsPerLetter = {
  [key: string]: Topic[];
};

export default function TopicsPage() {
  const dataTopics: TopicsPerLetter = topics;

  return (
    <div className="relative grid gap-20 py-16">
      <div className="grid gap-1">
        <h1 className="text-2xl font-extrabold -tracking-wide text-gray-900 md:text-4xl">
          Semua Topik Artikel<span className="text-ruangobat">.</span>
        </h1>

        <p className="max-w-[600px] leading-[170%] font-medium text-gray-500">
          Jelajahi berbagai topik menarik dan temukan artikel yang sesuai dengan
          kebutuhan serta minatmu di sini.
        </p>
      </div>

      <div className="grid">
        <h5 className="text-xl font-bold text-gray-900">Daftar Topik</h5>

        <div className="grid divide-y-2 divide-gray-900/5">
          {Object.entries(dataTopics).map(([letter, topics]) => (
            <div
              key={letter}
              className="grid gap-4 py-16 md:grid-cols-[100px_1fr] md:gap-8 lg:grid-cols-[200px_1fr]"
            >
              <h6 className="text-ruangobat text-3xl font-bold">{letter}</h6>

              <div className="grid grid-cols-2 items-start gap-4 overflow-hidden md:grid-cols-3 lg:grid-cols-4">
                {topics.map((topic, index) => (
                  <a
                    href={`/topics/asd`}
                    key={index}
                    className="hover:text-ruangobat group inline-flex items-center gap-2 leading-[170%] font-medium text-gray-900 hover:underline"
                  >
                    {topic.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
