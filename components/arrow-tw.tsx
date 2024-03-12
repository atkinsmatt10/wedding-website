'use client';
import { motion } from 'framer-motion';

const vars = {
  from: {
    // opacity: 0,
    pathLength: 0,
  },
  to: {
    // opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

export default function ArrowTwoS() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className="absolute -translate-x-full scale-[1.5] -ml-20 -mt-12"
    >
      <motion.path
        variants={vars}
        initial="from"
        animate="to"
        d="M697.8494262695312,59.67741775512695C691.2783406575521,76.70250765482585,684.8565979003906,139.72521018981934,658.4229125976562,161.8279571533203C631.9892272949219,183.9307041168213,582.4074096679688,195.4300994873047,539.247314453125,192.2938995361328C496.08721923828125,189.15769958496094,437.6941223144531,160.63321812947592,399.46234130859375,143.01075744628906C361.2305603027344,125.38829676310222,347.04300689697266,91.33810933430989,309.85662841796875,86.55913543701172C272.67024993896484,81.78016153971355,204.86856333414713,89.24730809529622,176.3440704345703,114.3369140625C147.8195775349935,139.42652002970377,150.20907338460287,202.44921875,138.7096710205078,237.09677124023438C127.21026865641277,271.74432373046875,112.5746587117513,308.03465270996094,107.34765625,322.22222900390625"
        fill="none"
        stroke-width="2"
        stroke="#b8a775"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient id="SvgjsLinearGradient1005">
          <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
          <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
