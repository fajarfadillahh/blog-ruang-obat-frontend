import { ArrowLeftIcon } from "@phosphor-icons/react";

interface ButtonBackProps {
  href?: string;
}

export default function ButtonBack({ href }: ButtonBackProps) {
  return (
    <a
      href={href}
      className="inline-flex w-max items-center gap-2 text-sm font-semibold text-gray-900 hover:underline"
    >
      <ArrowLeftIcon weight="bold" size={18} />
      Kembali
    </a>
  );
}
