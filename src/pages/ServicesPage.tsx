import React, { useState } from 'react';
import { Page, ServiceType } from '../types';
import { servicesData } from '../data/mockData';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onSelectServiceForBooking: (serviceId: ServiceType) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectServiceForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceType>('all');

  const filteredServices =
    activeFilter === 'all'
      ? servicesData
      : servicesData.filter((s) => s.id === activeFilter);

  const handleEnquire = (serviceId: ServiceType) => {
    onSelectServiceForBooking(serviceId);
    onNavigate('contact');
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A64B17] uppercase">
              <MapPin className="w-4 h-4 text-[#D96B27]" />
              <span>Adelaide Pet Services</span>
              <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
              <span>Cats & Dogs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#28231E] tracking-tight">
              Professional, Attentive Pet Care Services
            </h1>
            <p className="text-base sm:text-lg text-[#61574E] leading-relaxed">
              Every cat and dog is unique, with their own daily rhythms, food preferences, and exercise needs. We provide four core pet care services tailored to your instructions across metropolitan Adelaide.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-[#EFE9DF] rounded-2xl w-fit border border-[#E2D8CB]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-[#29231E] shadow-xs font-semibold'
                  : 'text-[#61574E] hover:text-[#29231E]'
              }`}
            >
              All Four Services
            </button>
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveFilter(s.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                  activeFilter === s.id
                    ? 'bg-white text-[#D96B27] shadow-xs font-semibold'
                    : 'text-[#61574E] hover:text-[#29231E]'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List with Detailed Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl border border-[#EAE3D9] overflow-hidden shadow-xs p-6 sm:p-10 lg:p-12 transition-all hover:border-[#DED5CA]"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-[#EFE9DF] aspect-[4/3] shadow-xs">
                    <img
                      src={service.image}
                      alt={service.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#2C2621]">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold tracking-wider uppercase text-[#476F53] block mb-1.5">
                      Tailored Adelaide Care
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#29231E]">
                      {service.title}
                    </h2>
                    <p className="text-base font-medium text-[#D96B27] mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#61574E] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#352F29]">
                      What Is Included in Each Visit:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#524941]">
                      {service.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#476F53] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for & timing notes */}
                  <div className="p-4 rounded-xl bg-[#F8F4EE] border border-[#EAE2D7] text-xs sm:text-sm text-[#5C534B] space-y-1">
                    <p>
                      <strong className="text-[#2C2621]">Ideal For:</strong> {service.idealFor}
                    </p>
                    <p>
                      <strong className="text-[#2C2621]">Availability:</strong> {service.frequency}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => handleEnquire(service.id)}
                      className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Enquire for {service.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button
                      onClick={() => onNavigate('service-areas')}
                      className="text-xs font-semibold text-[#665D54] hover:text-[#2A241F] transition-colors"
                    >
                      Check Service Coverage →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Commitment to Pet Welfare */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E5DDD2] space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A64B17] block mb-2">
              Our Core Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A241F]">
              What You Can Expect from Every Booking
            </h2>
            <p className="text-sm text-[#665D54] mt-1">
              Every arrangement is managed with high regard for your pet’s emotional well-being and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D8] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#EBF1EC] text-[#476F53] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2A241F] text-base">Safety First</h3>
              <p className="text-xs sm:text-sm text-[#665D54] leading-relaxed">
                All dog walks are conducted on-lead, and home gates, doors, and fences are verified secure after every visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D8] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#FBEFE7] text-[#D96B27] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2A241F] text-base">Gentle Approach</h3>
              <p className="text-xs sm:text-sm text-[#665D54] leading-relaxed">
                We handle shy cats and nervous dogs with patience, calm movements, and zero force. We never rush visits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D8] space-y-2">
              <div className="w-9 h-9 rounded-lg bg-[#EFE9DF] text-[#7A6451] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2A241F] text-base">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-[#665D54] leading-relaxed">
                Friendly confirmation notes and photo check-ins are sent so you always stay connected with your furry family member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Enquire Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE3D9] max-w-3xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2A241F]">
            Need a Custom Combination of Services?
          </h2>
          <p className="text-sm text-[#685E55]">
            Many Adelaide pet owners combine dog walking with afternoon feeding or weekend sitting visits. Submit an enquiry and describe your exact schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer"
            >
              <span>Submit General Enquiry</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
