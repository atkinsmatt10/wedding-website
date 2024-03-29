import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="my-12 inline-flex w-full flex-nowrap overflow-hidden">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
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
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
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
