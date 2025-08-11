export default function Footer() {
  return (
    <div className="mx-auto mt-16 flex h-32 w-full max-w-[1440px] items-center justify-center border-t-2 border-gray-900/5 px-4 lg:px-0">
      <p className="leading-[170%] font-medium text-gray-500">
        &copy; RuangObat. All rights reserved -{" "}
        <a
          href="https://ruangobat.id"
          target="_blank"
          className="text-ruangobat font-semibold underline"
        >
          RuangObat.
        </a>
      </p>
    </div>
  );
}
