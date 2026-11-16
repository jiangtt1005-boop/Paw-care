import React, { useState } from 'react';
import { Page } from '../types';
import { adelaideServiceAreas } from '../data/mockData';
import { MapPin, Search, CheckCircle2, AlertCircle, ArrowRight, Info, Compass } from 'lucide-react';

interface ServiceAreasPageProps {
  onNavigate: (page: Page) => void;
  onSetSuburbPreset: (suburb: string) => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onNavigate, onSetSuburbPreset }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRegions = adelaideServiceAreas
    .map((region) => {
      if (!searchTerm.trim()) return { ...region, isMatch: true };
      const term = searchTerm.toLowerCase();
      const matchesRegion = region.region.toLowerCase().includes(term);
      const matchedSuburbs = region.suburbs.filter((s) => s.toLowerCase().includes(term));
      return {
        ...region,
        suburbs: matchesRegion ? region.suburbs : matchedSuburbs,
        isMatch: matchesRegion || matchedSuburbs.length > 0,
      };
    })
    .filter((r) => r.isMatch);

  const handleConfirmSuburb = (suburbName?: string) => {
    if (suburbName) {
      onSetSuburbPreset(suburbName);
    } else if (searchTerm.trim()) {
      onSetSuburbPreset(searchTerm.trim());
    }
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
              <span>Coverage & Locations</span>
              <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
              <span>Adelaide, South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#28231E] tracking-tight">
              Adelaide Service Coverage Areas
            </h1>
            <p className="text-base sm:text-lg text-[#61574E] leading-relaxed">
              Paw Care Adelaide operates across metropolitan Adelaide, South Australia. Service coverage boundaries are adaptable and confirmed upon receiving your booking enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Suburb Search & Confirmation Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3D9] shadow-xs">
          <div className="max-w-2xl space-y-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2A241F]">
              Check Your Adelaide Suburb or Postcode
            </h2>
            <p className="text-sm text-[#61574E]">
              Type your suburb name or 4-digit South Australian postcode below to see placeholder coverage regions or send an enquiry to confirm availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#8A7E73] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Norwood, Adelaide CBD, Unley, 5000..."
                className="w-full pl-11 pr-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27] transition-all"
              />
            </div>
            <button
              onClick={() => handleConfirmSuburb()}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Confirm My Suburb
            </button>
          </div>

          {/* Placeholder Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-[#F6F1EA] border border-[#E5DDD2] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#8F5528] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#61574E] leading-relaxed">
              <strong className="text-[#2C2621]">Coverage Policy & Editable Placeholders:</strong>{' '}
              Specific service boundaries and suburb lists are editable placeholders to be confirmed individually. If your suburb is not shown or is situated in outer metropolitan Adelaide, please send an enquiry so we can review route feasibility for your pet’s dates.
            </div>
          </div>
        </div>
      </section>

      {/* Regional Service Areas List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#2A241F] mb-1.5">
            Metropolitan Adelaide Coverage Overview
          </h2>
          <p className="text-sm text-[#61574E]">
            Indicative regions and common reference suburbs across the Adelaide area:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegions.map((region, idx) => {
            const isStandard = region.status === 'Covered';

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#EAE3D9] shadow-xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-[#2A241F]">
                      {region.region}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        isStandard
                          ? 'bg-[#EBF1EC] text-[#34593F]'
                          : 'bg-[#FDF4EB] text-[#A64B17]'
                      }`}
                    >
                      {region.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B6157] leading-relaxed">
                    {region.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#93877A] block mb-2">
                      Reference Suburbs (Sample):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {region.suburbs.map((suburb, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleConfirmSuburb(suburb)}
                          title="Click to enquiry for this suburb"
                          className="text-xs px-2.5 py-1 rounded-md bg-[#FAF7F2] hover:bg-[#F2EAE0] text-[#4F463E] border border-[#E8DEC0] transition-colors cursor-pointer text-left"
                        >
                          {suburb}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2ECE4]">
                  <button
                    onClick={() => handleConfirmSuburb(region.region)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-[#D96B27] hover:text-[#B85419] bg-[#FDF9F5] hover:bg-[#F9EFE6] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Enquire for {region.region}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Confirmation & Outside Area Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E5DDD2] space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A64B17] block">
              Flexible Scheduling
            </span>
            <h2 className="text-2xl font-bold text-[#2A241F]">
              Don’t See Your Suburb Listed?
            </h2>
            <p className="text-sm text-[#61574E] leading-relaxed">
              We frequently accommodate nearby suburbs and outer metropolitan locations depending on the care schedule for that day. Simply submit an enquiry with your suburb or postcode, and we will let you know whether we can assist on your preferred dates.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer"
            >
              <span>Submit Suburb Enquiry</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
