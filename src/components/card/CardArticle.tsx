import DummyThumbnail from "@/components/DummyThumbnail";

export default function CardArticle() {
  return (
    <a href="/posts/1" className="group grid gap-4 hover:cursor-pointer">
      <DummyThumbnail />

      <div className="grid gap-2">
        <p className="text-ruangobat text-sm leading-[170%] font-medium">
          Topik
        </p>

        <div className="mb-4 flex flex-col gap-1">
          <h1 className="group-hover:text-ruangobat line-clamp-2 text-lg font-bold -tracking-wide text-gray-900 group-hover:underline md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            incidunt dolore dicta quas debitis optio animi.
          </h1>
          <p className="line-clamp-3 text-sm leading-[170%] font-medium text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            incidunt repudiandae impedit cupiditate laborum fuga aliquam iste?
            Molestias quis labore ab ipsam tenetur, reprehenderit omnis
            quibusdam praesentium, aperiam dolore dicta!
          </p>
        </div>

        <p className="text-sm leading-[170%] font-medium text-gray-500">
          08 Agustus 2025
        </p>
      </div>
    </a>
  );
}
