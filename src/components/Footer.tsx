import React from 'react';
import { Page } from '../types';
import { PawPrint, MapPin, Heart, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#26211C] text-[#E5DED5] border-t border-[#3B342C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#3C342C] text-[#E08345] flex items-center justify-center">
                <PawPrint className="w-4 h-4 fill-current" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Paw Care Adelaide</span>
            </div>
            <p className="text-sm leading-relaxed text-[#BDB2A5]">
              Friendly, dependable, and convenient local pet care services across Adelaide, South Australia. Supporting busy owners with attentive dog walking, in-home feeding, and personalized pet sitting.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#9E9385]">
              <MapPin className="w-4 h-4 text-[#D96B27] shrink-0" />
              <span>Adelaide, South Australia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#BDB2A5]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('service-areas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Adelaide Service Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Paw Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Booking Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase mb-4">
              Pet Care Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#BDB2A5]">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dog Walking (Active Exercise)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  In-Home Pet Feeding (Cats & Dogs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Basic Pet Care & Routines
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Short-Term Pet Sitting
                </button>
              </li>
            </ul>
          </div>

          {/* Enquiry & Availability Notice */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
              Arrangement Information
            </h4>
            <p className="text-sm leading-relaxed text-[#BDB2A5]">
              All bookings are arranged through direct communication following your online enquiry. We verify pet routines, scheduling compatibility, and location access beforehand.
            </p>
            <div className="p-3.5 rounded-xl bg-[#322B24] border border-[#443B32] space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5DED5]">
                <Clock className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Enquiries Reviewed Daily (ACST)</span>
              </div>
              <p className="text-xs text-[#9E9385]">
                Prompt responses provided to discuss pet arrangements across Adelaide.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3B342C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9385]">
          <p>© {new Date().getFullYear()} Paw Care Adelaide. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#9E9385]">
            <span>Dedicated to happy dogs and cats across Adelaide</span>
            <Heart className="w-3.5 h-3.5 text-[#D96B27] inline fill-current ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
