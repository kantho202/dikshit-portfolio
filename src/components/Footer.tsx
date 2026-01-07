'use client';

import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'General',
      links: [
        { name: 'Home', href: '#hero' },
        { name: 'Blogs', href: 'https://medium.com/@dikshitchakma2002' },
        { name: 'Guestbook', href: '#contact' },
        { name: 'Uses', href: '#skills' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'About Me', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dikshit-chakma/' },
        { name: 'GitHub', href: 'https://github.com/kantho202' },
        { name: 'Facebook', href: 'https://www.facebook.com/share/17dSnWFaEs/' },
        { name: 'Instagram', href: 'https://www.instagram.com/dikshitchakma?igsh=MThxbTQ3Y2Vma2Ztbg==' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' }
      ]
    }
  ];

  return (
    <footer className="scroll-mt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-12 lg:py-16 shadow-lg border border-gray-100 dark:border-gray-800/30 mb-6 sm:mb-8 md:mb-12 rounded-lg">
          <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-20">
            <div className="lg:w-1/3 flex flex-col gap-3 sm:gap-4 md:gap-6">
              <Link href="#hero" className="block w-fit hover:opacity-80 transition-opacity">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-black uppercase tracking-tight text-gray-900 dark:text-white relative break-words">
                  DIKSHIT
                </h1>
              </Link>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed md:text-base md:leading-7 font-medium max-w-full lg:max-w-md">
                Building digital experiences that matter, one line of code at a time.
                Crafting interfaces that feel alive, solving problems that make a
                difference, and turning ideas into reality. Every pixel has a purpose.
                Every interaction tells a story.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-4 lg:pt-2">
              {footerSections.map((section) => (
                <div key={section.title} className="flex flex-col gap-2 sm:gap-3 md:gap-6 min-w-0">
                  <h3 className="text-muted-foreground font-bold text-xs sm:text-sm uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5 sm:gap-2 md:gap-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          {...(link.href.startsWith('http') ? { 
                            target: '_blank', 
                            rel: 'noopener noreferrer' 
                          } : {})}
                          className="text-gray-900 dark:text-gray-200 font-medium text-xs sm:text-sm md:text-base hover:text-blue-600 dark:hover:text-white transition-colors break-words leading-tight cursor-pointer"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col text-center justify-between items-center gap-3 sm:gap-4 md:gap-6 px-2 md:px-4 pb-3 sm:pb-4">
          <div className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide break-words text-center px-2">
            © 2026 DIKSHIT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}