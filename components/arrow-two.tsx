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

export default function ArrowTwo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
      className="absolute right-0 translate-x-full scale-x-[2] ml-12"
    >
      <motion.path
        variants={vars}
        initial="from"
        animate="to"
        d="M125.26880645751953,57.706092834472656C130.6451505025228,74.43249638875325,129.00237655639648,128.79330825805664,157.52687072753906,158.06451416015625C186.05136489868164,187.33572006225586,255.7945073445638,229.15172831217447,296.415771484375,233.3333282470703C337.0370356241862,237.51492818196616,364.0680745442708,202.4193458557129,401.25445556640625,183.15411376953125C438.4408365885417,163.8888816833496,478.01673380533856,120.1314214070638,519.5340576171875,117.74193572998047C561.0513814290365,115.35245005289714,619.2950846354166,144.3249651590983,650.3583984375,168.81719970703125C681.4217122395834,193.3094342549642,693.9665120442709,241.69653828938803,705.9139404296875,264.6953430175781C717.8613688151041,287.69414774576825,719.3547973632812,299.79091389973956,722.04296875,306.8100280761719"
        fill="none"
        stroke-width="5"
        stroke="#b8a775"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient id="SvgjsLinearGradient1004">
          <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
          <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
