import Image from "next/image";
import type { Photo } from "@/lib/photos";

/** 사진 + 캡션 + 출처. 브랜드 톤(둥근 모서리·테두리)에 맞춘 공통 이미지 블록. */
export function Figure({
  photo,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  aspect = "aspect-[4/3]",
  className,
  rounded = "rounded-2xl",
  showCaption = true,
}: {
  photo: Photo;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  className?: string;
  rounded?: string;
  showCaption?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className={`relative ${aspect} w-full overflow-hidden ${rounded} border border-ink/12 bg-card`}
      >
        <Image
          src={photo.img}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className="object-cover"
        />
      </div>
      {showCaption && (
        <figcaption className="mt-2 flex items-center justify-between gap-3 text-xs text-ink/50">
          <span>{photo.caption}</span>
          <span className="shrink-0 text-ink/35">{photo.credit}</span>
        </figcaption>
      )}
    </figure>
  );
}
