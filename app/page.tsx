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
import { Input } from '@/components/ui/input';
import Carousel from '@/components/carousel';
import Countdown from '@/components/countdown';
import { RSVPForm } from '@/components/rsvp';

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
            <svg
              width="357"
              height="205"
              viewBox="0 0 357 205"
              fill="none"
              className="left-20 translate-x-full absolute top-6"
            >
              <path
                d="M257 40.0005L256.516 40.8755L257 40.0005ZM348.28 204.695C348.664 205.092 349.297 205.103 349.694 204.72L356.171 198.471C356.568 198.087 356.58 197.454 356.196 197.057C355.813 196.659 355.18 196.648 354.782 197.031L349.025 202.586L343.47 196.829C343.087 196.432 342.454 196.421 342.056 196.804C341.659 197.188 341.648 197.821 342.031 198.218L348.28 204.695ZM0.999982 4.00073C1.09827 4.99589 1.09871 4.99584 1.09976 4.99574C1.10093 4.99563 1.1026 4.99546 1.10494 4.99523C1.10963 4.99477 1.11677 4.99407 1.12636 4.99314C1.14553 4.99127 1.17448 4.98847 1.2131 4.98477C1.29033 4.97738 1.40622 4.9664 1.5599 4.95214C1.86725 4.92364 2.32574 4.88209 2.92834 4.83002C4.13356 4.72589 5.9152 4.57977 8.21714 4.41214C12.8211 4.07688 19.5059 3.65563 27.8225 3.31234C44.4567 2.62573 67.6136 2.25124 93.7022 3.49947C145.918 5.99776 209.725 14.9912 256.516 40.8755L257.484 39.1254C210.275 13.0098 146.082 4.00334 93.7978 1.50175C67.6364 0.250041 44.4183 0.625611 27.74 1.31404C19.4003 1.65828 12.6945 2.0808 8.07188 2.41742C5.76054 2.58574 3.96992 2.73258 2.75619 2.83744C2.14932 2.88987 1.68667 2.93181 1.37525 2.96068C1.21954 2.97512 1.10163 2.9863 1.02241 2.99389C0.982806 2.99768 0.952869 3.00057 0.93271 3.00254C0.922631 3.00352 0.914998 3.00427 0.909826 3.00477C0.907237 3.00503 0.905206 3.00522 0.903909 3.00535C0.902494 3.00549 0.901693 3.00557 0.999982 4.00073ZM256.516 40.8755C303.226 66.7153 326.1 107.465 337.299 141.81C342.899 158.982 345.575 174.539 346.85 185.8C347.488 191.43 347.775 195.984 347.903 199.127C347.967 200.698 347.991 201.916 348 202.74C348.004 203.151 348.004 203.464 348.003 203.673C348.002 203.778 348.002 203.856 348.001 203.908C348.001 203.934 348.001 203.953 348 203.965C348 203.972 348 203.976 348 203.979C348 203.98 348 203.981 348 203.982C348 203.982 348 203.982 349 204C350 204.018 350 204.017 350 204.016C350 204.015 350 204.013 350 204.011C350 204.007 350 204.002 350 203.994C350 203.98 350.001 203.958 350.001 203.93C350.002 203.874 350.002 203.791 350.003 203.682C350.004 203.464 350.004 203.141 349.999 202.72C349.991 201.877 349.966 200.638 349.902 199.045C349.772 195.86 349.481 191.258 348.837 185.575C347.55 174.212 344.851 158.518 339.201 141.19C327.9 106.536 304.774 65.2856 257.484 39.1254L256.516 40.8755Z"
                fill="#B8A775"
              />
            </svg>
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

            <svg
              width="587"
              height="175"
              viewBox="0 0 587 175"
              fill="none"
              className="absolute -translate-x-full scale-90"
            >
              <path
                d="M158 17.9994L157.791 18.9774L158 17.9994ZM7.27702 174.691C7.65871 175.09 8.29172 175.104 8.6909 174.722L15.196 168.503C15.5951 168.121 15.6093 167.488 15.2276 167.089C14.846 166.689 14.2129 166.675 13.8138 167.057L8.03151 172.586L2.50291 166.803C2.12122 166.404 1.48822 166.39 1.08904 166.772C0.689857 167.153 0.67567 167.786 1.05736 168.185L7.27702 174.691ZM585 -0.00244782C584.977 12.3698 580.652 22.3623 572.82 30.3676C564.965 38.3977 553.535 44.4717 539.254 48.8729C510.682 57.6784 470.999 59.6982 426.653 57.5797C337.991 53.3443 231.109 32.5945 158.209 17.0215L157.791 18.9774C230.694 34.551 337.717 55.3335 426.558 59.5775C470.962 61.6987 510.929 59.695 539.843 50.7841C554.306 46.3271 566.078 40.1196 574.25 31.7662C582.446 23.3881 586.976 12.8951 587 0.0012919L585 -0.00244782ZM158.209 17.0215C121.539 9.18814 93.6658 15.0656 72.5185 28.3883C51.3978 41.6942 37.0963 62.3568 27.4114 83.9095C17.7248 105.466 12.6253 127.98 9.94574 145.09C8.60541 153.648 7.86922 160.862 7.468 165.94C7.26739 168.479 7.15052 170.484 7.08372 171.857C7.05036 172.543 7.02948 173.071 7.01691 173.428C7.01068 173.607 7.00645 173.743 7.00386 173.835C7.00254 173.881 7.0016 173.916 7.00098 173.94C7.00067 173.952 7.00046 173.961 7.00033 173.967C7.00026 173.97 7.0002 173.973 7.00014 173.974C7.0001 173.976 7.00007 173.977 7.99983 173.999C8.99958 174.022 8.9996 174.022 8.99958 174.02C8.99966 174.019 8.99966 174.017 8.99976 174.015C8.99985 174.01 9.00008 174.002 9.00035 173.991C9.00089 173.969 9.00175 173.936 9.003 173.893C9.0055 173.805 9.00956 173.673 9.01569 173.499C9.02794 173.15 9.04841 172.631 9.0814 171.954C9.14724 170.6 9.2629 168.615 9.46179 166.098C9.85964 161.062 10.5904 153.899 11.9217 145.399C14.5853 128.392 19.6476 106.066 29.2357 84.7293C38.8253 63.3888 52.9111 43.1046 73.5845 30.0805C94.2312 17.0732 121.559 11.2374 157.791 18.9774L158.209 17.0215Z"
                fill="#B8A775"
              />
            </svg>
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

            <svg
              width="442"
              height="159"
              viewBox="0 0 442 159"
              fill="none"
              className="absolute right-0 translate-x-full"
            >
              <path
                d="M92.194 121.531L91.7821 122.442L92.194 121.531ZM291.069 69.8948L290.883 70.8774L291.069 69.8948ZM439.447 158.043C439.997 158.093 440.484 157.688 440.535 157.138L441.36 148.176C441.411 147.626 441.006 147.14 440.456 147.089C439.906 147.038 439.419 147.443 439.369 147.993L438.635 155.959L430.669 155.226C430.119 155.175 429.632 155.58 429.581 156.13C429.53 156.68 429.935 157.167 430.485 157.217L439.447 158.043ZM1 0.999995C0.00366596 1.08554 0.00373538 1.08633 0.00382813 1.08744C0.00389724 1.08822 0.00402119 1.08964 0.00415982 1.09121C0.0044339 1.09436 0.00482339 1.09876 0.00533203 1.1044C0.00634224 1.11569 0.00782551 1.13196 0.00980788 1.15315C0.0137761 1.19554 0.0197555 1.25762 0.0280079 1.33891C0.0445189 1.50147 0.070133 1.74088 0.107001 2.05323C0.18073 2.67792 0.299461 3.59449 0.480319 4.77187C0.842019 7.12651 1.45232 10.525 2.44836 14.7188C4.44015 23.1052 7.9762 34.679 14.1562 47.4472C26.5197 72.9909 49.47 103.32 91.7821 122.442L92.6058 120.619C50.8094 101.731 28.1628 71.795 15.9564 46.5759C9.85144 33.9627 6.35935 22.5307 4.39423 14.2567C3.41181 10.1202 2.81147 6.7749 2.45713 4.46821C2.27997 3.31493 2.16434 2.42148 2.09321 1.81881C2.05765 1.51748 2.03321 1.28887 2.01778 1.13685C2.01006 1.06084 2.00459 1.00398 2.0011 0.966745C1.99936 0.948135 1.99811 0.934428 1.99733 0.92569C1.99694 0.921325 1.99666 0.918194 1.9965 0.916316C1.99642 0.915378 1.99637 0.914916 1.99634 0.914439C1.99632 0.914286 1.99633 0.914447 1 0.999995ZM91.7821 122.442C113.011 132.035 130.559 132.521 146.339 128.062C162.066 123.617 175.969 114.276 189.926 104.386C217.911 84.5556 246.261 62.4393 290.883 70.8774L291.255 68.9122C245.68 60.294 216.646 83.0004 188.77 102.754C174.796 112.656 161.15 121.798 145.795 126.137C130.495 130.461 113.431 130.031 92.6058 120.619L91.7821 122.442ZM290.883 70.8774C335.779 79.3673 372.755 101.064 398.522 120.663C411.403 130.459 421.472 139.724 428.319 146.537C431.742 149.943 434.359 152.735 436.118 154.674C436.998 155.643 437.663 156.398 438.107 156.911C438.329 157.167 438.496 157.362 438.607 157.492C438.662 157.558 438.703 157.607 438.731 157.639C438.744 157.655 438.754 157.667 438.761 157.675C438.764 157.679 438.767 157.682 438.768 157.684C438.769 157.685 438.769 157.685 438.77 157.686C438.77 157.686 438.77 157.686 439.539 157.047C440.308 156.408 440.307 156.407 440.307 156.406C440.306 156.406 440.305 156.405 440.304 156.403C440.302 156.401 440.299 156.397 440.296 156.393C440.288 156.384 440.277 156.37 440.262 156.353C440.233 156.318 440.189 156.266 440.131 156.198C440.016 156.062 439.845 155.862 439.618 155.6C439.164 155.077 438.489 154.31 437.599 153.33C435.819 151.368 433.179 148.551 429.73 145.119C422.832 138.256 412.696 128.93 399.733 119.071C373.815 99.3575 336.555 77.4786 291.255 68.9122L290.883 70.8774Z"
                fill="#B8A775"
              />
            </svg>
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

            <svg
              width="317"
              height="150"
              viewBox="0 0 317 150"
              fill="none"
              className="absolute bottom-0 scale-125 translate-y-full top-16 left-0 -translate-x-full"
            >
              <path
                d="M210 117L210.502 117.865L210 117ZM0.572477 135.096C0.0731984 135.332 -0.140091 135.928 0.0960318 136.427L3.94409 144.563C4.18022 145.062 4.77637 145.276 5.27562 145.04C5.7749 144.804 5.98819 144.207 5.75207 143.708L2.33158 136.476L9.56346 133.056C10.0627 132.82 10.276 132.223 10.0399 131.724C9.80376 131.225 9.2076 131.012 8.70835 131.248L0.572477 135.096ZM316 0.999896C315.005 0.896995 315.005 0.896436 315.005 0.8961C315.005 0.896282 315.005 0.896165 315.005 0.896525C315.005 0.897253 315.005 0.898856 315.005 0.901339C315.004 0.906302 315.003 0.914772 315.002 0.926719C314.999 0.950619 314.995 0.988431 314.988 1.03994C314.975 1.14295 314.953 1.30074 314.92 1.51155C314.855 1.93316 314.744 2.56684 314.569 3.39846C314.217 5.06167 313.602 7.51683 312.552 10.6511C310.452 16.9189 306.613 25.9059 299.659 36.7088C285.755 58.3106 259.377 87.2052 209.498 116.135L210.502 117.865C260.623 88.7951 287.245 59.6896 301.341 37.7913C308.387 26.8441 312.298 17.7061 314.448 11.2863C315.523 8.07678 316.158 5.54755 316.525 3.8123C316.709 2.94469 316.825 2.27563 316.896 1.8193C316.932 1.59114 316.956 1.41617 316.972 1.29616C316.979 1.23616 316.985 1.18989 316.989 1.15759C316.991 1.14144 316.992 1.12878 316.993 1.11964C316.993 1.11507 316.994 1.11138 316.994 1.10857C316.994 1.10717 316.994 1.10572 316.995 1.10502C316.995 1.1038 316.995 1.1028 316 0.999896ZM209.498 116.135C159.723 145.005 107.688 149.744 68.0628 147.252C48.2535 146.006 31.5593 142.953 19.8211 140.213C13.9525 138.844 9.32416 137.552 6.16638 136.604C4.58755 136.131 3.37647 135.743 2.56191 135.474C2.15464 135.34 1.84654 135.235 1.64115 135.164C1.53847 135.129 1.46147 135.102 1.41061 135.084C1.38519 135.075 1.36629 135.069 1.35399 135.064C1.34783 135.062 1.34334 135.061 1.34049 135.06C1.33907 135.059 1.33816 135.059 1.33746 135.058C1.33697 135.058 1.33692 135.058 1.00003 136C0.663138 136.941 0.663921 136.942 0.665108 136.942C0.666042 136.942 0.66763 136.943 0.669521 136.944C0.673332 136.945 0.678781 136.947 0.685863 136.949C0.700054 136.954 0.720854 136.962 0.748196 136.971C0.802903 136.991 0.883753 137.019 0.990359 137.055C1.20357 137.129 1.51972 137.236 1.93522 137.373C2.76617 137.647 3.99453 138.041 5.59148 138.52C8.78526 139.479 13.4538 140.781 19.3665 142.161C31.1907 144.921 47.9965 147.994 67.9372 149.248C107.812 151.756 160.277 146.995 210.502 117.865L209.498 116.135Z"
                fill="#B8A775"
              />
            </svg>
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
