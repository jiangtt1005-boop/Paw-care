import React, { useState } from 'react';
import { Page } from '../types';
import { faqsData } from '../data/mockData';
import { ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight, MessageSquareQuote } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: Page) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Booking & Process', 'Pet Care & Routines', 'Service Areas', 'Changes & Assistance'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A64B17] uppercase">
              <HelpCircle className="w-4 h-4 text-[#D96B27]" />
              <span>Help & Answers</span>
              <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
              <span>Paw Care Adelaide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#28231E] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#61574E] leading-relaxed">
              Find clear and practical information about booking an enquiry, what details to share about your dog or cat, suburb coverage in Adelaide, and how care visits are arranged.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE3D9] shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8C8074] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. booking, suburb, food)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27]"
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#F2ECE3] rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-[#29231E] shadow-xs font-semibold'
                      : 'text-[#665D54] hover:text-[#29231E]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQ Items */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#EAE3D9] space-y-3">
            <p className="text-base font-semibold text-[#29231E]">No questions match your query.</p>
            <p className="text-sm text-[#665D54]">
              Try searching with different keywords, or clear your search to see all questions.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-[#D96B27] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EAE3D9] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#918578] block">
                      {faq.category}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-[#2A241F]">
                      {faq.question}
                    </h2>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F5EFE7] text-[#695E54] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D96B27]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#5C534A] leading-relaxed border-t border-[#F2ECE3]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Still have questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#E5DDD2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-[#2A241F]">
              Have a Specific Question About Your Pet?
            </h3>
            <p className="text-sm text-[#665D54]">
              We are pleased to answer queries about your dog or cat’s routines, feeding, or Adelaide locations.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <span>Ask via Booking Enquiry</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

    </div>
  );
};
