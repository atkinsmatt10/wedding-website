'use client';
import { cn } from '@/lib/utils';
import React from 'react';

function NavLink({
  href,
  children,
  isLogo,
  hideOnMobile,
}: {
  href: string;
  children: React.ReactNode;
  isLogo?: boolean;
  hideOnMobile?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        'rounded-full px-3 py-1',
        !isLogo &&
          'hover:transition-color hover:bg-gold/30 hover:backdrop-blur',
        hideOnMobile && 'hidden lg:block',
      )}
    >
      {children}
    </a>
  );
}

export default function Navbar({ isFixed }: { isFixed: boolean }) {
  return (
    <div
      className={cn(
        'mt-4 w-full lg:w-auto',
        isFixed && 'fixed left-1/2 top-4 z-[100] mt-0 -translate-x-1/2 px-2',
      )}
    >
      <nav
        className={cn(
          'flex w-full snap-x items-center justify-between gap-4 overflow-x-auto whitespace-nowrap px-4 py-0 text-white lg:justify-center lg:gap-12',
          isFixed &&
            'rounded-full bg-white/50 text-sm text-gray ring-1 ring-light-gray/50 backdrop-blur-md',
        )}
      >
        <NavLink href="#our-story" hideOnMobile>
          Our Story
        </NavLink>
        <NavLink href="#schedule" hideOnMobile>
          Schedule
        </NavLink>
        <NavLink href="#stay" hideOnMobile>
          Stay
        </NavLink>
        <NavLink href="#top" isLogo>
          <svg
            width="91"
            height="auto"
            viewBox="0 0 91 100"
            fill="none"
            className={cn('lg:mx-auto', isFixed ? 'w-12' : 'w-12 lg:w-20 ')}
          >
            <path
              d="M41.6058 49.0803L41.573 49.1204C41.517 49.2314 41.4485 49.3355 41.3686 49.4307C42.1788 50.3978 42.4343 51.8139 42.4343 54.2555V81.8504L17.5182 49.0803H14.5109C15.6058 50.0511 15.8577 51.5037 15.8577 54.2555V83.146C15.8577 85.8942 15.5876 87.3504 14.5109 88.3212H18.9307C17.854 87.3504 17.5803 85.8942 17.5803 83.146V55.1095L42.646 88.3212H44.1058V54.2555C44.1058 52.5438 44.2117 51.3358 44.5511 50.4307C44.5733 50.2823 44.6112 50.1367 44.6642 49.9964C44.7366 49.665 44.8784 49.3528 45.0803 49.0803H41.6058Z"
              className={cn(isFixed ? 'fill-gray' : 'fill-white')}
            />
            <path
              d="M77.1971 44.2445V15.354C77.1971 12.6058 77.4635 11.1496 78.5438 10.1788H74.3394L59.854 43.8139L46.3066 10.1788H41.2956C42.3905 11.1496 42.6423 12.6058 42.6423 15.354V44.2445C42.6423 46.9963 42.3759 48.4526 41.2956 49.4197H44.9453C44.9734 49.2189 45.0626 49.0316 45.2007 48.8832L45.2299 48.854C44.562 47.8942 44.3759 46.5109 44.3759 44.2445V15.354L58.0657 49.4197H59.2518L73.2117 17.0255V44.2445C73.2117 46.9963 72.8905 48.4526 71.8102 49.4197H78.5511C77.4635 48.4526 77.1971 46.9963 77.1971 44.2445Z"
              className={cn(isFixed ? 'fill-gray' : 'fill-white')}
            />
            <path
              d="M55.1095 66.7153C53.135 66.7153 50.9599 66.0548 48.4781 63.9635C46.5766 65.2409 44.0146 66.792 39.3212 66.6752C34.354 66.5219 30.2409 64.3869 30.2409 59.3431C30.2409 55.0767 32.7263 52.6679 39.2044 50.7664C38.0401 48.2482 37.2263 45.7628 37.2263 43.9818C37.2263 40.2153 40.0985 37.8504 43.8212 37.8504C47.6241 37.8504 50.0693 39.9453 50.0693 42.9307C50.0693 47.2774 44.635 49.9927 42.2299 50.9234C42.8359 52.272 43.5499 53.5694 44.365 54.8029C46.5 57.9854 48.2847 60.1168 49.7956 61.5548C54.646 56.1606 52.9015 53.0584 52.2409 52.5146C52.6277 51.6241 52.9416 50.8467 53.989 50.8467C55.1496 50.8467 55.6533 51.8139 55.6533 53.135C55.6533 56.0073 53.2482 59.8504 50.5438 62.2153C52.5584 63.9635 54.073 64.3467 55.4307 64.3467C56.6715 64.3467 57.6788 63.9234 58.4927 63.6898C58.6898 65.4708 57.4453 66.7153 55.1168 66.7153M47.6715 63.2226C45.8928 61.479 44.317 59.5396 42.9744 57.4416C41.7609 55.5983 40.6639 53.681 39.6898 51.7007C34.2153 53.5621 33.2518 55.7737 33.2518 59.073C33.2518 63.3394 36.0073 65.511 40.4307 65.511C43.0277 65.5174 45.5627 64.7179 47.6861 63.2226M40.0219 43.3978C40.0219 45.1058 40.7956 47.5511 41.8066 49.8759C44.5219 49.0219 47.9343 46.5402 47.9343 42.5767C47.9343 40.1314 46.3066 38.8139 43.9197 38.8139C41.5328 38.8139 40.0036 40.6387 40.0036 43.3905"
              className={cn(isFixed ? 'fill-gray' : 'fill-white')}
            />
          </svg>
        </NavLink>
        <NavLink href="#faq" hideOnMobile>
          FAQ
        </NavLink>
        <NavLink href="#registry" hideOnMobile>
          Registry
        </NavLink>
        <NavLink href="#rsvp">RSVP</NavLink>
      </nav>
    </div>
  );
}
