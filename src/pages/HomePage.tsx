import React from 'react';
import { Page, ServiceType } from '../types';
import { siteImages } from '../assets';
import { servicesData } from '../data/mockData';
import { ArrowRight, CheckCircle2, MapPin, Compass, FileText, MessagesSquare, PawPrint } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectServiceForBooking: (serviceId: ServiceType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectServiceForBooking }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Unboxed editorial kicker */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A64B17] uppercase">
                <MapPin className="w-4 h-4 text-[#D96B27]" />
                <span>Adelaide, South Australia</span>
                <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
                <span>Local Pet Care</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#28231E] leading-[1.12] tracking-tight">
                Caring for Your Pets When You Can’t Be There.
              </h1>

              <p className="text-base sm:text-lg text-[#5E554D] leading-relaxed max-w-xl">
                Friendly and convenient local pet care services in Adelaide, including dog walking, home feeding, and short-term pet sitting.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer"
                >
                  <span>Book an Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[#38312B] bg-white hover:bg-[#F5EFE8] border border-[#DDD3C7] rounded-xl transition-colors cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Unboxed trust separators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-[#73685E]">
                <span>Cats & Dogs Welcome</span>
                <span aria-hidden="true" className="text-[#C7BCB0]">·</span>
                <span>Tailored Routines</span>
                <span aria-hidden="true" className="text-[#C7BCB0]">·</span>
                <span>Metropolitan Adelaide</span>
              </div>
            </div>

            {/* Right Hero Visual Asset */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8DEC0]/60 bg-[#EFE9DF]">
                <img
                  src={siteImages.hero}
                  alt="Friendly golden retriever dog and domestic cat resting together comfortably in a bright Adelaide home"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[16/10] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26211C]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-xs sm:text-sm flex items-center justify-between">
                  <span className="font-medium drop-shadow-sm">Dedicated in-home comfort for Adelaide pets</span>
                  <span className="bg-[#FAF7F2]/90 text-[#2B2520] px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs">
                    Local & Caring
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D9] shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#476F53]">
              <PawPrint className="w-4 h-4 fill-current text-[#476F53]" />
              <span>Welcome to Paw Care Adelaide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#29241F]">
              Thoughtful, Stress-Free Pet Care for Adelaide Pet Families
            </h2>
            <p className="text-base text-[#61574E] leading-relaxed">
              We understand that pet owners lead active lives with university courses, demanding work hours, family duties, and weekend trips. Paw Care Adelaide was created to offer dependable, friendly pet care in your local neighbourhood so your animals can remain happy, relaxed, and secure in their familiar environment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#F2ECE4]">
            <div className="space-y-2">
              <h3 className="font-semibold text-[#2B2520] text-base">In-Home Familiarity</h3>
              <p className="text-sm text-[#6C635A] leading-relaxed">
                Pets stay where they feel safest. Avoid the disruption of unfamiliar commercial facilities by keeping normal routines intact.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#2B2520] text-base">Clear Communication</h3>
              <p className="text-sm text-[#6C635A] leading-relaxed">
                Direct, transparent messaging with visit updates so you know how your furry companion is going while you are away.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#2B2520] text-base">Personalized Arrangements</h3>
              <p className="text-sm text-[#6C635A] leading-relaxed">
                From walking paces to preferred meal bowls and feeding times, we respect your pet’s exact lifestyle and instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Service Preview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#A64B17] mb-2">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A241F]">
              Our Pet Care Services in Adelaide
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center text-sm font-semibold text-[#D96B27] hover:text-[#B85419] transition-colors cursor-pointer group"
          >
            <span>View All Service Details</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-[#EAE3D9] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE9DF]">
                <img
                  src={service.image}
                  alt={service.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#2C2621]">
                  Service 0{index + 1}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#2A241F] mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#476F53] mb-2.5">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#665D54] leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F3ECE4] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#665D54] hover:text-[#2A241F] transition-colors cursor-pointer"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => {
                      onSelectServiceForBooking(service.id);
                      onNavigate('contact');
                    }}
                    className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Three-Step Booking Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3ECE3] rounded-3xl p-8 sm:p-12 border border-[#E5DDD2]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A64B17] block mb-2">
              Simple & Transparent
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A241F]">
              How Paw Care Adelaide Works
            </h2>
            <p className="text-sm sm:text-base text-[#685E55] mt-2">
              Getting started is straightforward. We prioritize open discussion to make sure your pet feels completely safe and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E5DCD0] space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8DDD0] text-[#D96B27] font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#2A241F] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D96B27]" />
                <span>Explore Services</span>
              </h3>
              <p className="text-sm text-[#665D54] leading-relaxed">
                Review our dog walking, feeding, basic care, and short-term sitting options to find the ideal match for your pet’s routine.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E5DCD0] space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8DDD0] text-[#D96B27] font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#2A241F] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#D96B27]" />
                <span>Submit an Enquiry</span>
              </h3>
              <p className="text-sm text-[#665D54] leading-relaxed">
                Fill in our quick enquiry form with your preferred dates, Adelaide suburb, pet details, and specific care requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E5DCD0] space-y-3 relative">
              <div className="w-10 h-10 rounded-xl bg-[#E8DDD0] text-[#D96B27] font-bold flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#2A241F] flex items-center gap-2">
                <MessagesSquare className="w-4 h-4 text-[#D96B27]" />
                <span>Discuss Arrangements</span>
              </h3>
              <p className="text-sm text-[#665D54] leading-relaxed">
                We get in touch directly to verify schedule compatibility, pet temperament, access details, and confirm all arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#2E2822] text-[#F3EFE9] overflow-hidden p-8 sm:p-14 shadow-lg border border-[#443B33]">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8A57A] block">
              Local Pet Care in Adelaide
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ready to Arrange Caring Support for Your Dog or Cat?
            </h2>
            <p className="text-base text-[#C7BCB0] leading-relaxed">
              Whether you are planning a busy week at work, travelling over the weekend, or need someone to take your dog out for active exercise, we are here to help Adelaide pet owners.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer"
              >
                <span>Submit a Booking Enquiry</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => onNavigate('service-areas')}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[#E5DED5] bg-[#3E362F] hover:bg-[#4E443B] rounded-xl transition-colors cursor-pointer"
              >
                Check Adelaide Service Areas
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
