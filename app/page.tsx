import Image from 'next/image';
import { Meow_Script } from 'next/font/google';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import FAQ from '@/components/faq';
import Heading from '@/components/heading';
import Carousel from '@/components/carousel';
import Countdown from '@/components/countdown';
import { RSVPForm } from '@/components/rsvp';
import AnimatedScrable from '@/components/scrable';

const meow = Meow_Script({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main role="main">
      <header
        className="bg-[url('/main-hero.jpg')] bg-cover bg-bottom w-full h-[120vh]"
        id="top"
      >
        <nav className="flex items-center justify-center gap-12 text-white text-sm py-4">
          <a href="#our-story">Our Story</a>
          <a href="#schedule">Schedule</a>
          <a href="#stay">Stay</a>
          <a href="#top">
            <Image src="/logo.svg" alt="" width={71} height={80} />
          </a>
          <a href="#faq">FAQ</a>
          <a href="#registry">Registry</a>
          <a href="#rsvp">RSVP</a>
        </nav>
        <div>
          <h1
            className={cn(
              'text-center text-gold text-[180px] pt-3',
              meow.className
            )}
          >
            Nicole & Matt
          </h1>
          <Countdown />
        </div>
      </header>
      <section className="relative">
        <div className="absolute left-0 top-0 -z-10 rounded-full bg-gold w-48 h-48 blur-[80px]" />
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-4xl font-bold mb-2">Saturday, June 1, 2024</h2>
          <p className="mb-6 font-semibold">
            At Lilah 1601 N Front St, <br />
            Philadelphia, PA 19122
          </p>
          <Select>
            <SelectTrigger className="w-[200px] border-light-gray text-sm">
              <SelectValue placeholder="Save to your calendar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Google Calendar</SelectItem>
              <SelectItem value="dark">Apple Calendar</SelectItem>
              <SelectItem value="system">Outlook</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d764.3821011451081!2d-75.1341665!3d39.9742954!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c955cc3e2d19%3A0x5d1dc5c0ca2f84b!2sLilah!5e0!3m2!1ses-419!2smx!4v1709532845513!5m2!1ses-419!2smx"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Image
        src="/divider.svg"
        width={318}
        height={22}
        alt=""
        className="mt-20 mb-6 mx-auto"
      />
      <section id="our-story" className="py-12 relative">
        <Image
          src="/flower.svg"
          width={133}
          height={85}
          alt=""
          className="mt-20 mb-6 mx-auto absolute right-10 -top-48 rotate-180"
        />
        <div className="max-w-3xl mx-auto text-center">
          <Heading>How it all began</Heading>
          <p className="text-3xl mb-4">
            Nicole Gasser and Matt Atkins first crossed paths in 2016 at
            McGillians in Philadelphia during Nicole's sister's birthday party.
            Matt was immediately taken with Nicole's charm. They exchanged
            pleasantries and parted ways that night. However, the following
            week, Matt asked Nicole out to lunch near her school in Northeast
            PA.
          </p>
          <p className="text-3xl">
            They immediately clicked, leading Nicole to visit Colorado for a
            weekend adventure hosted by Matt. Eventually, Matt moved into a
            four-floor walk-up in Philly, a place that continues to hold a
            special place in their hearts.
          </p>
        </div>
        <Carousel />
      </section>
      <section id="schedule" className="relative py-12">
        <Image
          src="/flower.svg"
          width={133}
          height={85}
          alt=""
          className="mt-20 mb-6 mx-auto absolute left-1/2 -translate-x-96 -top-28 rotate-180"
        />
        <div className="absolute right-0 top-0 rounded-full -z-10 bg-gold w-48 h-48 blur-[80px]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 rounded-full bg-gold w-48 h-48 blur-[80px]" />
        <Heading>The Wedding Day</Heading>
        <div className="grid place-items-center gap-40 mt-20">
          <div className="max-w-sm col-start-1 relative">
            <h4 className="text-lg font-bold before:content-['❤︎'] before:absolute before:-translate-x-full before:-ml-4">
              Welcome to Lilah
            </h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              Arrive by 5:30 pm
            </span>
            <p>
              Entry to Lilah begins at 5 pm. Street parking is available in
              Fishtown if you can find it. There will also be a shuttle bus from
              the hotel.
            </p>
            <AnimatedScrable variant={1} />
          </div>
          <div className="max-w-sm row-start-2 col-start-2 relative">
            <h4 className="text-lg font-bold before:content-['❤︎'] before:absolute before:-translate-x-full before:-ml-4">
              The Ceremony
            </h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              6:00 pm - 6:30 pm
            </span>
            <p>
              Make your way over to the ceremony at Lilah for the I Do's part of
              the night.
            </p>
            <AnimatedScrable variant={2} />
          </div>
          <div className="max-w-sm row-start-3 col-start-1 relative">
            <h4 className="text-lg font-bold before:content-['❤︎'] before:absolute before:-translate-x-full before:-ml-4">
              Coctail Hour
            </h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              6:00 pm - 6:30 pm
            </span>
            <p>
              After the ceremony, head to the bar area for cocktail hour. Both
              alcoholic and non-alcoholic drinks will be served, along with a
              passed appetizers. Enjoy a drink and catch up with friends and
              family.
            </p>
            <AnimatedScrable variant={3} />
          </div>
          <div className="max-w-sm row-start-4 col-start-2 relative">
            <h4 className="text-lg font-bold before:content-['❤︎'] before:absolute before:-translate-x-full before:-ml-4">
              Reception
            </h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              6:00 pm - 6:30 pm
            </span>
            <p>
              Join us for the main event! Head through the large doors to our
              reception, where we'll continue celebrating with dinner, drinks,
              and dancing. We're excited to party with everyone!
            </p>
            <AnimatedScrable variant={4} />
          </div>
          <div className="max-w-sm row-start-5 col-start-1">
            <h4 className="text-lg font-bold before:content-['❤︎'] before:absolute before:-translate-x-full before:-ml-4">
              After Party
            </h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              6:00 pm - 6:30 pm
            </span>
            <p>
              After the reception, we'll be heading out in Fishtown for a
              low-key, nothing fancy after party featuring a cash bar. Let's
              keep the party going!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 py-8 mt-28 relative before:absolute before:h-full before:border-y-4 before:border-gold before:w-32">
          <Image src="/museum.svg" width={248} height={392} alt="" />
          <div className="max-w-sm">
            <h4 className="text-xl font-bold">After Party</h4>
            <span className="text-sm font-bold text-gold mb-4 block">
              Friday May 31st, at 6:00 pm
            </span>
            <p className="mb-4">
              Please join us at Museum of the American Revolution, 101 South
              Third Street, Philadelphia, PA
            </p>
            <Select>
              <SelectTrigger className="w-[200px] border-light-gray text-sm">
                <SelectValue placeholder="Save to your calendar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Google Calendar</SelectItem>
                <SelectItem value="dark">Apple Calendar</SelectItem>
                <SelectItem value="system">Outlook</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <Image
        src="/divider.svg"
        width={318}
        height={22}
        alt=""
        className="mt-20 mb-5 mx-auto"
      />
      <section id="stay" className="py-16 relative">
        <Image
          src="/flower.svg"
          width={133}
          height={85}
          alt=""
          className="mt-20 mb-6 mx-auto absolute right-0 -top-28 rotate-180"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 rounded-full bg-gold w-56 h-56 blur-[100px]" />
        <Heading>Your Stay in Philadelphia</Heading>
        <p className="text-center max-w-md mx-auto">
          Turn your weekend into an adventure! Explore nearby locations and our
          favorite spots in Philly.
        </p>
        <div className="mt-20 max-w-7xl mx-auto grid place-items-center gap-12">
          <div className="max-w-xs text-center">
            <h3 className="font-bold text-xl mb-2">Lodging</h3>
            <p className="text-sm mb-4">
              There will be shuttles with limited seating available from the
              Hilton Penns Landing & Kimpton Monico to the event and back.
            </p>
            <Button variant="default">Book a Room</Button>
          </div>
          <div className="max-w-xs text-center row-start-2 col-start-2">
            <h3 className="font-bold text-xl mb-2">Eat & Drink</h3>
            <p className="text-sm mb-4">
              Wm. Mulherin’s Sons, Lark, Middle Child, LMNO, Gilda, Johnny
              Brenda's, International Bar, Martha, Two Robbers, Bok Ba
            </p>
            <Button variant="default">Open Map</Button>
          </div>
          <div className="max-w-xs text-center row-start-3 col-start-3">
            <h3 className="font-bold text-xl mb-2">Things To Do</h3>
            <p className="text-sm mb-4">
              Philadelphia Museum of Art, Franklin Institute, Schuylkill River
              Trail, The Barnes Foundation, Wissahickon, Eastern State
              Penitentiary
            </p>
            <Button variant="default">Open Map</Button>
          </div>
        </div>
        <Image
          src="/city.svg"
          width={692}
          height={200}
          alt=""
          className="absolute left-0 -bottom-8"
        />
      </section>
      <Image
        src="/divider.svg"
        width={318}
        height={22}
        alt=""
        className="my-20 mx-auto"
      />
      <section id="faq" className="py-12 relative">
        <div className="absolute left-0 top-40 -z-10 rounded-full bg-gold w-48 h-48 blur-[80px]" />
        <Heading>Frequently Asked Questions</Heading>
        <FAQ />
      </section>
      <section
        id="registry"
        className="flex flex-col items-center justify-center py-12"
      >
        <Heading>Our Registry</Heading>
        <p className="max-w-md text-center mb-6">
          You know what they say — your presence is a gift! However, if you want
          to give us a present, we’re registered at Zola.
        </p>
        <Button variant="default">Give a Gift</Button>
      </section>
      <Image
        src="/divider.svg"
        width={318}
        height={22}
        alt=""
        className="my-20 mx-auto"
      />
      <section id="rsvp" className="relative pb-32">
        <Image
          src="/flower.svg"
          width={133}
          height={85}
          alt=""
          className="mt-20 mb-6 mx-auto absolute left-1/2 -translate-x-96 -top-28"
        />
        <div className="absolute right-0 bottom-0 rounded-full -z-10 bg-gold w-48 h-48 blur-[80px]" />
        <h3 className="font-bold text-xl text-gold text-center">RSVP</h3>
        <Heading>You’re Invited!</Heading>
        <RSVPForm />
      </section>
    </main>
  );
}
