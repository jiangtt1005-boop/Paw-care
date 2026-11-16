/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Page, ServiceType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Read initial page from hash if present
  const getInitialPage = (): Page => {
    const hash = window.location.hash.replace('#', '') as Page;
    const validPages: Page[] = ['home', 'services', 'about', 'service-areas', 'faqs', 'blog', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [presetService, setPresetService] = useState<ServiceType>('dog-walking');
  const [presetSuburb, setPresetSuburb] = useState<string>('');

  // Synchronise hash with current page
  useEffect(() => {
    window.location.hash = currentPage;
    
    // Dynamic page title for SEO & clarity
    const pageTitles: Record<Page, string> = {
      home: 'Paw Care Adelaide | Local Dog Walking & Pet Sitting Adelaide',
      services: 'Pet Care Services | Dog Walking & In-Home Feeding Adelaide',
      about: 'About Paw Care Adelaide | Local Pet Sitting & Care Services',
      'service-areas': 'Adelaide Service Areas | Suburb Coverage | Paw Care Adelaide',
      faqs: 'Frequently Asked Questions | Paw Care Adelaide',
      blog: 'Pet Care Blog | Dog Walking & Pet Sitting Adelaide | Paw Care Adelaide',
      contact: 'Book a Pet Care Enquiry | Paw Care Adelaide',
    };

    document.title = pageTitles[currentPage] || 'Paw Care Adelaide';
  }, [currentPage]);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'services', 'about', 'service-areas', 'faqs', 'blog', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceId: ServiceType) => {
    setPresetService(serviceId);
  };

  const handleSetSuburbPreset = (suburb: string) => {
    setPresetSuburb(suburb);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2926]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'service-areas' && (
          <ServiceAreasPage
            onNavigate={handleNavigate}
            onSetSuburbPreset={handleSetSuburbPreset}
          />
        )}

        {currentPage === 'faqs' && <FaqPage onNavigate={handleNavigate} />}

        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            presetService={presetService}
            presetSuburb={presetSuburb}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
