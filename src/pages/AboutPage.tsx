import React from 'react';
import { Page } from '../types';
import { ArrowRight, MapPin, HeartHandshake, Eye, MessageCircle, Clock, ShieldCheck, Check } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A64B17] uppercase">
              <MapPin className="w-4 h-4 text-[#D96B27]" />
              <span>About Us</span>
              <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
              <span>Paw Care Adelaide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#28231E] tracking-tight">
              Local, Friendly Pet Care for Adelaide Cat & Dog Owners
            </h1>
            <p className="text-base sm:text-lg text-[#61574E] leading-relaxed">
              Paw Care Adelaide is a dedicated local service focused on helping Adelaide pet families arrange reliable, convenient care when work, study, travel, or everyday commitments keep them away from home.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose & Origin of the Service */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#476F53] block">
              The Purpose of Paw Care Adelaide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A241F] leading-snug">
              Providing Practical Support While Preserving Your Pet’s Home Comfort
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#61574E] leading-relaxed">
              <p>
                Pets are deeply attached to their daily routines, familiar sleeping nooks, and neighbourhood walking routes. When pet owners in Adelaide experience changes in their schedule—such as return-to-office days, university exam blocks, unexpected overtime, or weekend trips—arranging appropriate pet care can feel stressful.
              </p>
              <p>
                Paw Care Adelaide exists to bridge that gap with straightforward, compassionate assistance. By providing in-home feeding, dedicated dog walking, and short-term sitting right at home, we help pets maintain their natural comfort while giving owners peace of mind throughout the day.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center text-sm font-semibold text-[#D96B27] hover:text-[#C25C1C] transition-colors"
              >
                <span>Discover our service offerings</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-[#EAE3D9] shadow-xs space-y-6">
              <h3 className="font-bold text-[#2A241F] text-lg">
                Common Situations We Support:
              </h3>
              <ul className="space-y-3.5 text-sm text-[#5C534B]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Extended workdays and shifting workplace rosters across Adelaide</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>University classes, study sessions, and hospital commitments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Weekend getaways to the Barossa, Fleurieu Peninsula, or interstate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Dogs needing midday parkland exercise when owners are short on time</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Customer-Focused Approach & Clear Communication */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E5DDD2] space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A64B17] block mb-2">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A241F]">
              A Customer-Focused, Respectful Approach
            </h2>
            <p className="text-sm text-[#665D54] mt-2">
              We base our business on straightforward communication, reliable follow-through, and deep respect for pets and homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE3D9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF1EC] text-[#476F53] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#2A241F]">
                Individual Attention
              </h3>
              <p className="text-sm text-[#665D54] leading-relaxed">
                We believe in personalized care rather than rushed, mass visits. Each visit or walk is dedicated exclusively to your pets, respecting their temperament and individual speed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE3D9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBEFE7] text-[#D96B27] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#2A241F]">
                Commitment to Clear Communication
              </h3>
              <p className="text-sm text-[#665D54] leading-relaxed">
                Clear communication is the foundation of trust. We confirm all details before commencing care and send prompt check-ins with notes and photos so you are always kept in the loop.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE3D9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0EAE2] text-[#695746] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#2A241F]">
                Honest & Dependable Service
              </h3>
              <p className="text-sm text-[#665D54] leading-relaxed">
                We only accept booking enquiries where scheduling and location allow us to deliver focused, calm care. If a date is unavailable or an area requires review, we communicate openly right away.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D9] max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2A241F]">
            Let’s Discuss Your Pet’s Care Needs
          </h2>
          <p className="text-sm sm:text-base text-[#61574E] max-w-xl mx-auto">
            Tell us about your dog or cat, preferred dates, and Adelaide suburb. We will be happy to connect and explore arrangements with you.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer"
            >
              Submit an Enquiry
            </button>
            <button
              onClick={() => onNavigate('faqs')}
              className="px-6 py-3 text-sm font-medium text-[#4A423B] bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#DDD3C7] rounded-xl transition-colors cursor-pointer"
            >
              Read Common Questions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
