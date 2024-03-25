import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/faq';
import Heading from '@/components/heading';
import Carousel from '@/components/carousel';
import { RSVPForm } from '@/components/rsvp';
import Divider from '@/components/divider';
import AnimatedFlower from '@/components/flower';
import Hero from '@/components/hero';
import StayLink from '@/components/stay-link';
import ScheduleBox from '@/components/schedule-box';
import { config } from '@/config';
import SaveToCalendar from '@/components/save-to-calendar';

export default function Home() {
  return (
    <div role="main">
      <Hero />
      <section className="relative px-5">
        <div className="absolute left-0 top-0 -z-10 rounded-full bg-gold w-48 h-48 blur-[80px]" />
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-2xl xl:text-4xl font-bold mb-2">
            Saturday, June 1, 2024
          </h2>
          <p className="text-sm mb-6 font-semibold">
            At Lilah 1601 N Front St, <br />
            Philadelphia, PA 19122
          </p>
          <SaveToCalendar
            title="Nicole & Matt's Wedding"
            description="Join us at Museum of the American Revolution, 101 South
              Third Street, Philadelphia, PA"
            location="Lilah 1601 N Front St, Philadelphia, PA 19122"
            date="June 1, 2024 17:30"
          />
        </div>
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d764.3821011451081!2d-75.1341665!3d39.9742954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c955cc3e2d19%3A0x5d1dc5c0ca2f84b!2sLilah!5e0!3m2!1ses-419!2smx!4v1709532845513!5m2!1ses-419!2smx"
            width="600"
            height="450"
            className="aspect-video w-full h-auto max-w-3xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Divider />
      <section id="our-story" className="py-12 relative">
        <AnimatedFlower className="mt-20 mb-6 mx-auto absolute right-10 -top-48 rotate-180" />
        <div className="max-w-3xl mx-auto text-center px-5">
          <Heading>How it all began</Heading>
          <p className="text-xl xl:text-3xl mb-4">
            Nicole Gasser and Matt Atkins first crossed paths in 2016 at
            McGillians in Philadelphia during Nicole's sister's birthday party.
            Matt was immediately taken with Nicole's charm. They exchanged
            pleasantries and parted ways that night. However, the following
            week, Matt asked Nicole out to lunch near her school in Northeast
            PA.
          </p>
          <p className="text-xl xl:text-3xl">
            They immediately clicked, leading Nicole to visit Colorado for a
            weekend adventure hosted by Matt. Eventually, Matt moved into a
            four-floor walk-up in Philly, a place that continues to hold a
            special place in their hearts.
          </p>
        </div>
        <Carousel />
      </section>
      <section id="schedule" className="relative py-12 px-5">
        <AnimatedFlower className="mt-20 mb-6 mx-auto absolute left-1/2 -translate-x-96 -top-28 rotate-180" />
        <div className="absolute right-0 top-0 rounded-full -z-10 bg-gold w-48 h-48 blur-[80px]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 rounded-full bg-gold w-48 h-48 blur-[80px]" />
        <Heading>The Wedding Day</Heading>
        <div className="grid place-items-center gap-12 xl:gap-40 mt-20 ml-6 xl:ml-auto">
          <ScheduleBox
            title="Welcome to Lilah"
            time="Arrive by 5:30 pm"
            variant={1}
          >
            Entry to Lilah begins at 5 pm. Street parking is available in
            Fishtown if you can find it. There will also be a shuttle bus from
            the hotel.
          </ScheduleBox>
          <ScheduleBox
            title="The Ceremony"
            time="6:00 pm - 6:30 pm"
            variant={2}
          >
            Make your way over to the ceremony at Lilah for the I Do's part of
            the night.
          </ScheduleBox>
          <ScheduleBox
            title="Coctail Hour"
            time="6:00 pm - 6:30 pm"
            variant={3}
          >
            After the ceremony, head to the bar area for cocktail hour. Both
            alcoholic and non-alcoholic drinks will be served, along with a
            passed appetizers. Enjoy a drink and catch up with friends and
            family.
          </ScheduleBox>
          <ScheduleBox title="Reception" time="6:00 pm - 6:30 pm" variant={4}>
            Join us for the main event! Head through the large doors to our
            reception, where we'll continue celebrating with dinner, drinks, and
            dancing. We're excited to party with everyone!
          </ScheduleBox>
          <ScheduleBox title="After Party" time="6:00 - 6:30 pm" variant={5}>
            After the reception, we'll be heading out in Fishtown for a low-key,
            nothing fancy after party featuring a cash bar. Let's keep the party
            going!
          </ScheduleBox>
        </div>
        <div className="flex items-center text-center lg:text-left justify-center gap-8 py-8 mt-28 relative before:absolute before:h-full before:border-y-4 before:border-gold before:w-32">
          <Image
            src="/museum.svg"
            width={248}
            height={392}
            alt=""
            className="hidden xl:block"
          />
          <div className="max-w-sm">
            <h4 className="text-xl font-bold">After Party</h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              Friday May 31st, at 6:00 pm
            </span>
            <p className="mb-4">
              Please join us at Museum of the American Revolution, 101 South
              Third Street, Philadelphia, PA
            </p>
            <SaveToCalendar
              title="After Party"
              description="Join us at Museum of the American Revolution, 101 South
              Third Street, Philadelphia, PA"
              location="Museum of the American Revolution, 101 South
              Third Street, Philadelphia, PA"
              date="May 31, 2024 18:00"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section id="stay" className="py-16 relative px-5">
        <AnimatedFlower className="mt-20 mb-6 mx-auto absolute right-12 -top-28 rotate-180" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 rounded-full bg-gold w-56 h-56 blur-[100px]" />
        <Heading>Your Stay in Philadelphia</Heading>
        <p className="text-center max-w-md mx-auto">
          Turn your weekend into an adventure! Explore nearby locations and our
          favorite spots in Philly.
        </p>
        <div className="mt-20 max-w-7xl mx-auto grid place-items-center gap-12">
          <StayLink
            title="Lodging"
            href={config.links.lodging}
            label="Book a Room"
          >
            There will be shuttles with limited seating available from the
            Hilton Penns Landing & Kimpton Monico to the event and back.
          </StayLink>
          <StayLink
            title="Eat & Drink"
            href={config.links.eatdrink}
            label="Open Map"
            align="middle"
          >
            Wm. Mulherin’s Sons, Lark, Middle Child, LMNO, Gilda, Johnny
            Brenda's, International Bar, Martha, Two Robbers, Bok Ba
          </StayLink>
          <StayLink
            title="Things To Do"
            href={config.links.thingstodo}
            label="Open Map"
            align="right"
          >
            Philadelphia Museum of Art, Franklin Institute, Schuylkill River
            Trail, The Barnes Foundation, Wissahickon, Eastern State
            Penitentiary
          </StayLink>
        </div>
        <Image
          src="/city.svg"
          width={692}
          height={200}
          alt=""
          className="xl:absolute left-0 -bottom-8"
        />
      </section>
      <Divider />
      <section id="faq" className="py-12 relative px-5">
        <div className="absolute left-0 top-40 -z-10 rounded-full bg-gold w-48 h-48 blur-[80px]" />
        <Heading>Frequently Asked Questions</Heading>
        <FAQ />
      </section>
      <section
        id="registry"
        className="flex flex-col items-center justify-center py-12 px-5"
      >
        <Heading>Our Registry</Heading>
        <p className="max-w-md text-center mb-6">
          You know what they say — your presence is a gift! However, if you want
          to give us a present, we’re registered at Zola.
        </p>
        <Button variant="default" asChild>
          <a
            href={config.links.registry}
            target="_blank"
            rel="noopener noreferrer"
          >
            Give a Gift
          </a>
        </Button>
      </section>
      <Divider />
      <section id="rsvp" className="relative pb-32 px-5">
        <AnimatedFlower className="mt-20 mb-6 mx-auto absolute left-10 lg:left-1/2 lg:-translate-x-96 -top-28" />
        <div className="absolute right-0 bottom-0 rounded-full -z-10 bg-gold w-48 h-48 blur-[80px]" />
        <h3 className="font-bold text-xl text-gold text-center">RSVP</h3>
        <Heading>You’re Invited!</Heading>
        <RSVPForm />
      </section>
    </div>
  );
}
