import React from 'react';
import { Page } from '../types';
import { blogArticles } from '../data/blogData';
import { ArrowRight, BookOpen, CheckCircle2, PawPrint, ListOrdered } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: Page) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const article = blogArticles[0];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Page Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A64B17] uppercase">
              <BookOpen className="w-4 h-4 text-[#D96B27]" />
              <span>Blog &amp; Pet Care Guides</span>
              <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
              <span>Adelaide, South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#28231E] tracking-tight leading-[1.15]">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#6B6157]">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-[#C7BCB0]">·</span>
              <span>{article.location}</span>
              <span aria-hidden="true" className="text-[#C7BCB0]">·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article & Sidebar Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Article Body */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-[#EAE3D9] shadow-xs overflow-hidden">
            {/* Featured Image */}
            <div className="relative aspect-[16/9] bg-[#EFE9DF] overflow-hidden">
              <img
                src={article.image}
                alt={article.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26211C]/35 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-6 sm:p-10 lg:p-12 space-y-10">
              {/* Article Introduction */}
              <div className="space-y-4 text-base sm:text-[17px] text-[#4B433B] leading-relaxed">
                {article.introParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Numbered Sections 1–6 */}
              <div className="space-y-10 pt-4 border-t border-[#F0E9DF]">
                {article.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 space-y-4"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-[#28231E] flex items-baseline gap-2.5">
                      <span className="text-[#D96B27] font-extrabold tabular-nums">
                        {section.number}.
                      </span>
                      <span>{section.title}</span>
                    </h2>

                    <div className="space-y-3.5 text-sm sm:text-base text-[#554C44] leading-relaxed">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Bullet highlights */}
                    {section.bullets && (
                      <ul className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-6 border border-[#EAE2D7] space-y-3">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#4A423B]">
                            <CheckCircle2 className="w-4 h-4 text-[#476F53] shrink-0 mt-1" />
                            <span>
                              <strong className="text-[#28231E]">{bullet.lead}:</strong>{' '}
                              {bullet.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Structured Sub-items (Section 3) */}
                    {section.subItems && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        {section.subItems.map((item, sIdx) => (
                          <div
                            key={sIdx}
                            className={`p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D7] space-y-1.5 ${
                              section.subItems && section.subItems.length % 2 === 1 && sIdx === section.subItems.length - 1
                                ? 'sm:col-span-2'
                                : ''
                            }`}
                          >
                            <h3 className="text-sm sm:text-base font-bold text-[#28231E]">
                              {item.heading}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#5C534B] leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.closingParagraph && (
                      <p className="text-sm sm:text-base text-[#554C44] leading-relaxed pt-1">
                        {section.closingParagraph}
                      </p>
                    )}
                  </section>
                ))}
              </div>

              {/* Final Call to Action Linked to Existing Paw Care Adelaide */}
              <div className="pt-6 border-t border-[#F0E9DF]">
                <div className="rounded-3xl bg-[#2E2822] text-[#F3EFE9] p-7 sm:p-10 border border-[#443B33] space-y-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8A57A]">
                    <PawPrint className="w-4 h-4 fill-current" />
                    <span>Paw Care Adelaide</span>
                  </div>

                  <p className="text-base sm:text-lg text-[#EAE3D9] leading-relaxed">
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('home');
                      }}
                      className="underline decoration-[#D96B27] underline-offset-4 font-semibold text-white hover:text-[#F4B48C] transition-colors"
                    >
                      Visit our website to learn more about Paw Care Adelaide
                    </a>{' '}
                    and discover how we can help you with your pet care needs.
                  </p>

                  <p className="text-lg sm:text-xl font-bold text-white">
                    {article.ctaSignOff}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('home');
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Visit Paw Care Adelaide</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('services');
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#E5DED5] bg-[#3E362F] hover:bg-[#4E443B] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      Explore Our Services
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('contact');
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#E5DED5] border border-[#5A4F45] hover:bg-[#3E362F] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      Book an Enquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Right Sidebar: Table of Contents & Quick Links */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE3D9] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A64B17]">
                <ListOrdered className="w-4 h-4 text-[#D96B27]" />
                <span>In This Article</span>
              </div>
              <nav aria-label="Article sections" className="space-y-1.5">
                {article.sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm text-[#5C534B] hover:text-[#D96B27] hover:bg-[#FAF7F2] transition-colors flex items-start gap-2 cursor-pointer"
                  >
                    <span className="font-bold text-[#D96B27] tabular-nums shrink-0">
                      {section.number}.
                    </span>
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-[#F3ECE3] rounded-3xl p-6 sm:p-7 border border-[#E5DDD2] space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#476F53] block">
                Adelaide Pet Care Support
              </span>
              <h3 className="text-lg font-bold text-[#2A241F]">
                Looking for Dog Walking or Pet Sitting?
              </h3>
              <p className="text-xs sm:text-sm text-[#61574E] leading-relaxed">
                Explore our dog walking, in-home pet feeding, basic care, and short-term sitting services across Adelaide.
              </p>
              <div className="pt-1 flex flex-col gap-2.5">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book an Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('service-areas')}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-[#4A423B] bg-[#FAF7F2] hover:bg-white border border-[#DDD3C7] rounded-xl transition-colors cursor-pointer"
                >
                  Check Adelaide Service Areas
                </button>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
};
