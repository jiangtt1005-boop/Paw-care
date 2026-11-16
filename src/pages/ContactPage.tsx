import React, { useState } from 'react';
import { Page, ServiceType, BookingFormData } from '../types';
import { servicesData } from '../data/mockData';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  RefreshCw,
  Info,
  ShieldCheck,
  PawPrint,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
  presetService?: ServiceType;
  presetSuburb?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  presetService = 'dog-walking',
  presetSuburb = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    suburbOrPostcode: presetSuburb || '',
    petType: 'dog',
    petCount: '1',
    service: presetService || 'dog-walking',
    preferredDate: '',
    preferredTime: 'Morning (7am – 11am)',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g., name@example.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid Australian contact number.';
    }

    if (!formData.suburbOrPostcode.trim()) {
      newErrors.suburbOrPostcode = 'Please enter your Adelaide suburb or postcode.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred service date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate natural processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      suburbOrPostcode: '',
      petType: 'dog',
      petCount: '1',
      service: 'dog-walking',
      preferredDate: '',
      preferredTime: 'Morning (7am – 11am)',
      additionalRequirements: '',
    });
    setErrors({});
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* Header */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#A64B17] uppercase">
              <Calendar className="w-4 h-4 text-[#D96B27]" />
              <span>Booking Enquiries</span>
              <span aria-hidden="true" className="text-[#C4B7A6]">·</span>
              <span>Adelaide, South Australia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#28231E] tracking-tight">
              Request a Pet Care Booking
            </h1>
            <p className="text-base sm:text-lg text-[#61574E] leading-relaxed">
              Submit your enquiry below to check availability for dog walking, in-home pet feeding, basic care, or short-term pet sitting across Adelaide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Form / Confirmation Column */}
          <div className="lg:col-span-8">
            {submittedData ? (
              /* Success Confirmation Card */
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D9] shadow-sm space-y-8 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF1EC] text-[#476F53] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#2A241F]">
                      Enquiry Received!
                    </h2>
                    <p className="text-sm text-[#476F53] font-medium">
                      Thank you, {submittedData.fullName}. Your enquiry details have been recorded.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FBF8F4] border border-[#ECE4D8] space-y-4 text-sm text-[#4B433B]">
                  <h3 className="font-bold text-[#2A241F] text-base border-b border-[#EAE1D4] pb-2">
                    Enquiry Summary
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                    <div>
                      <span className="text-[#877B6F] block">Service Requested:</span>
                      <strong className="text-[#2C2621]">
                        {submittedData.service === 'dog-walking' && 'Dog Walking'}
                        {submittedData.service === 'in-home-feeding' && 'In-Home Pet Feeding'}
                        {submittedData.service === 'basic-pet-care' && 'Basic Pet Care'}
                        {submittedData.service === 'short-term-sitting' && 'Short-Term Pet Sitting'}
                        {submittedData.service === 'combination-other' && 'Combination / Other Care'}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#877B6F] block">Location / Suburb:</span>
                      <strong className="text-[#2C2621]">{submittedData.suburbOrPostcode}</strong>
                    </div>
                    <div>
                      <span className="text-[#877B6F] block">Pet Details:</span>
                      <strong className="text-[#2C2621]">
                        {submittedData.petCount} {submittedData.petType === 'both' ? 'dog(s) & cat(s)' : `${submittedData.petType}(s)`}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#877B6F] block">Requested Date & Time:</span>
                      <strong className="text-[#2C2621]">
                        {submittedData.preferredDate} · {submittedData.preferredTime}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#877B6F] block">Contact Email:</span>
                      <strong className="text-[#2C2621]">{submittedData.email}</strong>
                    </div>
                    <div>
                      <span className="text-[#877B6F] block">Contact Phone:</span>
                      <strong className="text-[#2C2621]">{submittedData.phone}</strong>
                    </div>
                  </div>

                  {submittedData.additionalRequirements && (
                    <div className="pt-2 border-t border-[#EAE1D4]">
                      <span className="text-[#877B6F] block text-xs">Pet Care Notes Provided:</span>
                      <p className="mt-1 text-xs text-[#524A42] bg-white p-3 rounded-lg border border-[#E8DEC0]">
                        {submittedData.additionalRequirements}
                      </p>
                    </div>
                  )}
                </div>

                {/* Important Booking Disclaimer Notice */}
                <div className="p-4 rounded-xl bg-[#FFF8F2] border border-[#F5DFCF] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#7D4822] leading-relaxed">
                    <strong>Important Note:</strong> Submitting an enquiry does not automatically confirm a booking. We will review our schedule and contact you shortly to confirm arrangements and discuss your pet’s needs.
                  </div>
                </div>

                {/* Reset button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#3D352E] bg-[#FAF7F2] hover:bg-[#F2ECE4] border border-[#DDD3C7] rounded-xl transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 mr-2 text-[#D96B27]" />
                    <span>Submit Another Enquiry</span>
                  </button>
                  <button
                    onClick={() => onNavigate('home')}
                    className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-[#665D54] hover:text-[#2A241F] transition-colors text-center"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              /* The Booking Enquiry Form */
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3D9] shadow-xs space-y-6"
                noValidate
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#2A241F]">
                    Pet Care Booking Enquiry Form
                  </h2>
                  <p className="text-xs sm:text-sm text-[#665D54] mt-1">
                    Fields marked with an asterisk (<span className="text-[#D96B27] font-bold">*</span>) are required.
                  </p>
                </div>

                {/* Grid for Name, Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                      Full Name <span className="text-[#D96B27]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 bg-[#FAF7F2] border rounded-xl text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#DDD3C7] focus:border-[#D96B27]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                      Email Address <span className="text-[#D96B27]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com.au"
                      className={`w-full px-4 py-3 bg-[#FAF7F2] border rounded-xl text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DDD3C7] focus:border-[#D96B27]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                      Phone Number <span className="text-[#D96B27]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0412 345 678"
                      className={`w-full px-4 py-3 bg-[#FAF7F2] border rounded-xl text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DDD3C7] focus:border-[#D96B27]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Suburb or Postcode */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                      Adelaide Suburb or Postcode <span className="text-[#D96B27]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.suburbOrPostcode}
                      onChange={(e) => setFormData({ ...formData, suburbOrPostcode: e.target.value })}
                      placeholder="e.g. Norwood (5067) or Adelaide CBD (5000)"
                      className={`w-full px-4 py-3 bg-[#FAF7F2] border rounded-xl text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 ${
                        errors.suburbOrPostcode ? 'border-red-400 bg-red-50/20' : 'border-[#DDD3C7] focus:border-[#D96B27]'
                      }`}
                    />
                    {errors.suburbOrPostcode && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.suburbOrPostcode}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Pet Information */}
                <div className="pt-4 border-t border-[#F2ECE4] space-y-5">
                  <h3 className="font-bold text-[#2A241F] text-base">
                    Pet Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Pet Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                        Pet Type <span className="text-[#D96B27]">*</span>
                      </label>
                      <select
                        value={formData.petType}
                        onChange={(e) => setFormData({ ...formData, petType: e.target.value as any })}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27]"
                      >
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="both">Both Dogs & Cats</option>
                      </select>
                    </div>

                    {/* Number of Pets */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                        Number of Pets <span className="text-[#D96B27]">*</span>
                      </label>
                      <select
                        value={formData.petCount}
                        onChange={(e) => setFormData({ ...formData, petCount: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27]"
                      >
                        <option value="1">1 Pet</option>
                        <option value="2">2 Pets</option>
                        <option value="3">3 Pets</option>
                        <option value="4+">4 or More Pets</option>
                      </select>
                    </div>

                    {/* Required Service Dropdown */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                        Required Service <span className="text-[#D96B27]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceType })}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27]"
                      >
                        <option value="dog-walking">Dog Walking (Active outdoor exercise)</option>
                        <option value="in-home-feeding">In-Home Pet Feeding (Fresh food & water visits)</option>
                        <option value="basic-pet-care">Basic Pet Care (General daily support & routine)</option>
                        <option value="short-term-sitting">Short-Term Pet Sitting (Temporary in-home care)</option>
                        <option value="combination-other">Combination of Services / General Enquiry</option>
                      </select>
                    </div>

                    {/* Preferred Service Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                        Preferred Service Date <span className="text-[#D96B27]">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 bg-[#FAF7F2] border rounded-xl text-sm transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 ${
                          errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-[#DDD3C7] focus:border-[#D96B27]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Window */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                        Preferred Time of Day
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27]"
                      >
                        <option value="Morning (7am – 11am)">Morning (7:00 am – 11:00 am)</option>
                        <option value="Midday (11am – 2pm)">Midday (11:00 am – 2:00 pm)</option>
                        <option value="Afternoon (2pm – 6pm)">Afternoon (2:00 pm – 6:00 pm)</option>
                        <option value="Flexible / Multiple Visits">Flexible / Multiple Visits</option>
                      </select>
                    </div>

                    {/* Additional Pet Care Requirements */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#4A423B]">
                        Additional Pet Care Requirements & Instructions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.additionalRequirements}
                        onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                        placeholder="Please share details such as your pet’s name, breed, temperament, dietary routines, lead walking habits, or any access instructions for your Adelaide home..."
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D96B27]/30 focus:border-[#D96B27]"
                      />
                    </div>

                  </div>
                </div>

                {/* Important Booking Disclaimer Notice */}
                <div className="p-4 rounded-xl bg-[#FFF9F4] border border-[#F6E1D3] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#D96B27] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#7B4620] leading-relaxed">
                    <strong>Notice:</strong> Submitting an enquiry does not automatically confirm a booking. We will review your request, confirm schedule availability in your suburb, and contact you directly to finalize all details.
                  </div>
                </div>

                {/* Submit Enquiry Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-base font-semibold text-white bg-[#D96B27] hover:bg-[#C25C1C] disabled:bg-[#D96B27]/60 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Processing Your Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Booking Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Process & Live Integration Transparency */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Backend Connection / Demo Transparency Card */}
            <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E5DDD2] space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#476F53]">
                <ShieldCheck className="w-4 h-4" />
                <span>Integration Note</span>
              </div>
              <h3 className="font-bold text-[#2A241F] text-base">
                Functional Booking Demo Form
              </h3>
              <p className="text-xs sm:text-sm text-[#61574E] leading-relaxed">
                This booking enquiry form provides a complete, interactive client-side experience with validation and instant feedback.
              </p>
              <div className="p-3.5 bg-white rounded-xl border border-[#E8DEC0] space-y-2 text-xs text-[#665D54]">
                <p className="font-medium text-[#2C2621]">
                  To receive real customer enquiries into your business inbox:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Connect an email forwarding service (e.g. EmailJS, Formspree, Resend).</li>
                  <li>Or configure an Express backend webhook in <code className="bg-[#F2ECE3] px-1 py-0.5 rounded">server.ts</code>.</li>
                </ul>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EAE3D9] shadow-xs space-y-4">
              <h3 className="font-bold text-[#2A241F] text-base">
                What Happens Next?
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm text-[#61574E]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>We review your requested dates and suburb coverage.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>We contact you via email or phone to confirm visit times and pet habits.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#EBF1EC] text-[#476F53] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Key collection and care routines are finalized before the service begins.</span>
                </div>
              </div>
            </div>

            {/* Response Hours */}
            <div className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#E5DDD2] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A64B17]">
                <Clock className="w-4 h-4 text-[#D96B27]" />
                <span>Adelaide Working Hours</span>
              </div>
              <p className="text-xs text-[#665D54] leading-relaxed">
                Enquiries are reviewed throughout standard Adelaide hours (ACST). We aim to respond within 24 hours of receiving your request.
              </p>
              <div className="pt-2 text-xs font-medium text-[#2C2621] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Servicing Metropolitan Adelaide, SA</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
