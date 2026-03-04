import Image from "next/image";

type Props = {
  images: string[];
};

export function HorizontalGalleryST({ images }: Props) {
  return (
    <div className="flex gap-0 justify-center overflow-x-hidden">
      {images.map((src, i) => (
        <div key={i} className="h-60 shrink-0 rounded-lg overflow-hidden">
          <Image
            src={src}
            width={400}
            height={600}
            alt=""
            className="h-full w-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
