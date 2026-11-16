import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, PawPrint } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Service Areas', page: 'service-areas' },
    { label: 'About Us', page: 'about' },
    { label: 'FAQs', page: 'faqs' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single Brand Wordmark element */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-xl sm:text-2xl font-bold tracking-tight text-[#2B2621] hover:text-[#D96B27] transition-colors whitespace-nowrap shrink-0 group text-left cursor-pointer"
            aria-label="Paw Care Adelaide Homepage"
          >
            <span className="w-9 h-9 rounded-xl bg-[#F0E6D8] text-[#D96B27] flex items-center justify-center group-hover:scale-105 transition-transform">
              <PawPrint className="w-5 h-5 fill-current" />
            </span>
            <span>Paw Care Adelaide</span>
          </button>

          {/* Zone 2: Single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#5C534B]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#D96B27] font-semibold'
                      : 'hover:text-[#2B2621]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D96B27] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book an Enquiry
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#5C534B] hover:text-[#2B2621] hover:bg-[#EFE8DD] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EAE3D9] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F2EAE0] text-[#D96B27] font-semibold'
                      : 'text-[#4A423B] hover:bg-[#F5EFE7] hover:text-[#2B2621]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl shadow-xs transition-colors"
            >
              Book an Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
