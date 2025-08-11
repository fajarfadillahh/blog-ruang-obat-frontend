import { ImageIcon } from "@phosphor-icons/react";

export default function DummyThumbnail() {
  return (
    <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-900/5">
      <ImageIcon weight="duotone" size={64} className="text-gray-500" />
    </div>
  );
}
