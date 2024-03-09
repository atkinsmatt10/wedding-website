import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="my-12 w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={`item-${index}`}>
            <Image
              src={`/carousel/frame-${index + 1}.jpg`}
              width={330}
              height={459}
              alt=""
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={`item-${index}`}>
            <Image
              src={`/carousel/frame-${index + 1}.jpg`}
              width={330}
              height={459}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
