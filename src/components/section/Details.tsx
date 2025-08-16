import DummyThumbnail from "@/components/DummyThumbnail";
import ButtonBack from "@/components/button/ButtonBack";

export default function DetailsPage() {
  return (
    <div className="grid gap-8 py-16">
      <ButtonBack href="/posts" />

      {/* === main content article === */}
      <div className="grid w-full max-w-3xl gap-16 justify-self-center">
        <div className="grid gap-6">
          <h1 className="text-2xl leading-[120%] font-extrabold -tracking-wide text-gray-900 md:text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos iure odit debitis.
          </h1>

          <div className="flex items-center justify-between gap-4">
            <p className="leading-[170%] font-medium text-gray-500">
              08 Agustus 2025
            </p>

            <div className="text-ruangobat inline-flex items-center gap-4">
              <p className="leading-[170%] font-medium">Topik</p>

              <p className="leading-[170%] font-medium">Kategori</p>
            </div>
          </div>

          <DummyThumbnail />
        </div>

        <p className="leading-[170%] font-medium text-gray-800 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          eius suscipit mollitia eveniet totam impedit nihil, rerum repellendus
          voluptatem perferendis quibusdam, itaque ipsum, ipsa ad! Eos
          perferendis fugiat eius ab harum dignissimos quia porro amet inventore
          accusantium suscipit aspernatur, ea dolor impedit officiis! Nemo
          aspernatur aliquid sunt qui, minima aliquam cumque quia dolorum
          deserunt nulla obcaecati illum facere unde rem quasi repudiandae
          corporis ipsum? Perspiciatis ullam ipsa neque, natus adipisci,
          exercitationem numquam vero, quo aliquam velit iure inventore. Maxime
          laudantium explicabo aut, nihil quae temporibus in maiores quam vel
          dicta debitis minus blanditiis quod id sed nulla quia suscipit sequi.
        </p>
      </div>
    </div>
  );
}
