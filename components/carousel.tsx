import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="snap-x overflow-x-auto flex py-20">
      {Array.from({ length: 9 }).map((_, index) => (
        <Image
          key={`item-${index}`}
          src={`/carousel/frame-${index + 1}.jpg`}
          width={430}
          height={559}
          alt=""
          className="snap-start"
        />
      ))}
    </div>
  );
}
