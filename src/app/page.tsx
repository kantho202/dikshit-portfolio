'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Navigation from '@/components/Navigation';
import JourneySection from '@/components/JourneySection';
import WorkSection from '@/components/WorkSection';
import LifeSection from '@/components/LifeSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import CustomCursor from '@/components/CustomCursor';
import PageLoader from '@/components/PageLoader';
import { SectionProvider } from '@/contexts/SectionContext';

export default function Home() {
  return (
    <div className="scroll-smooth overflow-x-hidden w-full max-w-full">
      <PageLoader />
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <Navigation />
      
      <SectionProvider>
        <div className="layout-content-container flex flex-col max-w-[1080px] w-full px-4 md:px-10 pt-32 sm:pt-36 md:pt-40 pb-20 gap-16 sm:gap-20 md:gap-24 lg:gap-32 mx-auto overflow-x-hidden">
          <JourneySection />
          <WorkSection />
          <LifeSection />
        </div>
      </SectionProvider>
      
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ThemeToggle />
    </div>
  );
}