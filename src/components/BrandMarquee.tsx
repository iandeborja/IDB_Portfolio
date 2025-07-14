import React from 'react';
import amazonLogo from '../assets/logos/amazon-logo-black-transparent.png';
import imdbLogo from '../assets/logos/imdb.png';
import HBOLogo from '../assets/logos/HBO.png';
import nikeLogo from '../assets/logos/Nike-Logo.png';
import baycLogo from '../assets/logos/boredapeyachtclub.png';
import yugaLabsLogo from '../assets/logos/yugaLabs-cover.png';
import lyftLogo from '../assets/logos/Lyft-Logo.png';
import reiLogo from '../assets/logos/rei.png';
import metaplexLogo from '../assets/logos/Metaplex+Logo.png';

const brands = [
  { name: 'Amazon', logo: amazonLogo },
  { name: 'IMDb', logo: imdbLogo },
  { name: 'HBO', logo: HBOLogo },
  { name: 'Nike', logo: nikeLogo },
  { name: 'Bored Ape Yacht Club', logo: baycLogo },
  { name: 'Yuga Labs', logo: yugaLabsLogo },
  { name: 'Lyft', logo: lyftLogo },
  { name: 'REI', logo: reiLogo },
  { name: 'Metaplex', logo: metaplexLogo },
];

const LOGO_WIDTH = 120;
const LOGO_HEIGHT = 48;
const LARGE_LOGO_WIDTH = 140;
const LARGE_LOGO_HEIGHT = 56;
const XL_LOGO_WIDTH = 168; // 20% larger than 140
const XL_LOGO_HEIGHT = 67; // 20% larger than 56
const REPEAT_COUNT = 4; // Repeat enough times to fill any screen

const BrandMarquee: React.FC = () => {
  // Repeat the brands array enough times to fill the container
  const repeatedBrands = Array(REPEAT_COUNT).fill(brands).flat();

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800 py-4">
      <div
        className="relative flex items-center gap-8 whitespace-nowrap animate-marquee"
        style={{ width: 'fit-content', minWidth: '100%' }}
      >
        {repeatedBrands.map((brand, idx) => {
          let width = LOGO_WIDTH;
          let height = LOGO_HEIGHT;
          if (brand.name === 'IMDb' || brand.name === 'Metaplex') {
            width = XL_LOGO_WIDTH;
            height = XL_LOGO_HEIGHT;
          } else if (brand.name === 'Yuga Labs') {
            width = LARGE_LOGO_WIDTH;
            height = LARGE_LOGO_HEIGHT;
          }
          return (
            <div
              key={brand.name + idx}
              className="flex items-center justify-center bg-transparent"
              style={{ width, height }}
            >
              <img
                src={brand.logo}
                alt={brand.name + ' logo'}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandMarquee; 