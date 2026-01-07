'use client';

import Image from 'next/image';
import { MdPalette, MdHeadphones } from 'react-icons/md';
import { useSectionContext } from '@/contexts/SectionContext';

export default function LifeSection() {
  const { activeSection } = useSectionContext();
  
  const isActive = activeSection === 'life' || activeSection === null;
  const isMuted = activeSection !== null && activeSection !== 'life';

  const lifeImages = [
    {
      id: 1,
      title: 'Hiking',
      subtitle: 'Finding perspective at altitude.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWifDscEV7Se6wfWrpvHbmjF3Fhc0TCJihTSk8NmbDRFKbVkxnM0lZaP6JEeR_xKdNpL-oUc3DbyimEo97GaOFZ5-o1vcmpLWG5Qqpdhyy90Wo5eZzxlA8fSCOSYiQljelMQSfEIpYOdeepwWGIeW5gB1IxMZn4uwuslm-DI9In0CXxUvUfSuaSf1n9CRAshqHOGNG6AbJYCLzOiRb-xcGEn1yBvETuRZOs4nIvTduX3iPHksxrC21QgC2FFdigru-IWpMOsT7fh1E',
      alt: 'Person hiking on a mountain trail with backpack during sunset',
      span: 'col-span-2 row-span-3 md:col-span-1 md:row-span-6'
    },
    {
      id: 2,
      title: 'Painting',
      icon: MdPalette,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRPsLNkiVgxL4KqyO0PBLz77iMrimLGHSH6uAAoHXRhHh8OFgkDrxBeB-urqGGOlNOG2Zq6jKKV2SUi3m29RACQbd5R8ksu9TtjT6bgRTRcbztPqm4X24EQWetrqX5trHzscfIkk4ZY7k72A5Kxo4pc2TiPSpoGz6no3fatKc1pji7-S0zu8UsMrlnXpHVWccXwtRfkfLWfiu0Y23OCbnAEA8eazPLhRbB8YmzFAyTapQujMNM5NrEHF35BRimNJh5rEUVBI5KDLXb',
      alt: 'Artistic painting canvas with colorful oil paints and brushes',
      span: 'col-span-1 row-span-3 md:row-span-3'
    },
    {
      id: 3,
      title: 'Production',
      icon: MdHeadphones,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLD1G9xjuhYWPOWP0y5G4YblncwprQXzvb3eia9L41Dusa7Beq-HwakhxekM2rAV8msNUNswGj_d0_OUkBf7XrALysqysCnedfa52H_aUafxKZt_bO0rQyQBFQmYmR4Sc7fjmxnk_lGRBnF6YgUlMrBWKrHcSNy-s9ThzfGolrtIjkeRlBSykK7zQfd6F2_UYBKAdqmyW7rWvS211ZlhZ2tFfzTUBW_Ko7yMsPpa3FvjwwX0dD9byI5ULDJLSaXF2erNUK-ZSxUYmO',
      alt: 'Close up of musical instruments and headphones in a studio setting',
      span: 'col-span-1 row-span-3 md:row-span-3'
    }
  ];

  return (
    <section className={`scroll-mt-40 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
      isMuted ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'
    }`} id="life">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Content Section - Mobile First */}
          <div className="flex flex-col gap-6 lg:w-1/3 lg:sticky lg:top-32">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight transition-colors duration-500 ${
              isMuted ? 'text-slate-500 dark:text-slate-600' : 'text-slate-900 dark:text-white'
            }`}>
              Beyond the <br />
              <span className={`text-transparent bg-clip-text transition-all duration-500 ${
                isMuted ? 'bg-gradient-to-r from-slate-400 to-slate-500' : 'bg-gradient-to-r from-primary to-purple-400'
              }`}>
                Keyboard
              </span>
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed max-w-md lg:max-w-none transition-colors duration-500 ${
              isMuted ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'
            }`}>
              To write better code, I step away from the screen. These are the pursuits that recharge
              my creativity and keep me balanced.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-500 cursor-default ${
                isMuted 
                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500' 
                  : 'bg-slate-200 dark:bg-card border-slate-300 dark:border-border text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-muted'
              }`}>
                #NatureLover
              </span>
              <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-500 cursor-default ${
                isMuted 
                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500' 
                  : 'bg-slate-200 dark:bg-card border-slate-300 dark:border-border text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-muted'
              }`}>
                #Artist
              </span>
              <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-500 cursor-default ${
                isMuted 
                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500' 
                  : 'bg-slate-200 dark:bg-card border-slate-300 dark:border-border text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-muted'
              }`}>
                #Audiophile
              </span>
            </div>
          </div>
          
          {/* Images Grid - Responsive Layout */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
            {/* Mobile Layout - Single Column */}
            <div className="grid grid-cols-1 gap-4 sm:hidden">
              <div className="relative h-64 rounded-2xl overflow-hidden group">
                <Image
                  src={lifeImages[0].image}
                  alt={lifeImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {lifeImages[0].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {lifeImages[0].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {lifeImages.slice(1).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.id} className="relative h-32 rounded-2xl overflow-hidden group">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-white">
                          {IconComponent && <IconComponent className="text-sm" />}
                          <h3 className="font-bold text-sm">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tablet Layout - 2 Columns */}
            <div className="hidden sm:grid md:hidden grid-cols-2 gap-4 h-[400px]">
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src={lifeImages[0].image}
                  alt={lifeImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-2xl mb-1">
                    {lifeImages[0].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {lifeImages[0].subtitle}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-rows-2 gap-4">
                {lifeImages.slice(1).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.id} className="relative rounded-2xl overflow-hidden group">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-white">
                          {IconComponent && <IconComponent className="text-base" />}
                          <h3 className="font-bold text-base">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop Layout - Complex Grid */}
            <div className="hidden md:grid grid-cols-2 gap-4 h-[500px] lg:h-[600px] grid-rows-6">
              {lifeImages.map((item) => {
                const IconComponent = item.icon;
                
                return (
                  <div
                    key={item.id}
                    className={`${item.span} relative rounded-2xl overflow-hidden group`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {item.id === 1 ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <h3 className="text-white font-bold text-2xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.subtitle}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-4 w-full bg-black/50 backdrop-blur-sm">
                          <div className="flex items-center gap-2 text-white">
                            {IconComponent && <IconComponent className="text-lg" />}
                            <h3 className="font-bold text-lg">{item.title}</h3>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}