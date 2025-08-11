import { LogoRuangobat } from "@/assets/img/LogoRuangobat";

export default function Navbar() {
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
