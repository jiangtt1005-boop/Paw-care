import { siteImages } from '../assets';
import { ServiceItem, FaqItem, AdelaideArea } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'dog-walking',
    title: 'Dog Walking',
    tagline: 'Walking services to help dogs stay active, stimulated, and happy when owners are busy.',
    description:
      'Our dog walking service provides purposeful, energetic outdoor exercise tailored to your dog’s age, pace, and temperament. Whether you are at work, managing study commitments, or running errands across Adelaide, we ensure your dog enjoys fresh air, healthy movement, and friendly human companionship.',
    image: siteImages.dogWalking,
    alt: 'Happy dog walking on a lead through a sunlit Adelaide parkland trail with handler',
    keyPoints: [
      'Tailored walking pace suited to your dog’s breed, size, and fitness level',
      'Fresh water bowl refresh upon return to your home',
      'Gentle paw wipe-down on wet or dusty Adelaide days',
      'Individual on-lead walking for safety and undivided attention',
      'Friendly post-walk update note after each session',
    ],
    idealFor: 'Dogs that need midday exercise, energy release, or regular outdoor sniffing routines while owners are away.',
    frequency: 'Available for regular weekly schedules or casual individual bookings.',
  },
  {
    id: 'in-home-feeding',
    title: 'In-Home Pet Feeding',
    tagline: 'Home visits to provide food and fresh water for cats and dogs in their familiar setting.',
    description:
      'Home visits allow your cats and dogs to maintain their usual dining habits without the stress of unfamiliar boarding environments. We visit your Adelaide residence to dispense precise food portions, wash and refill water bowls, and spend calm quality time ensuring your pet feels secure and comfortable.',
    image: siteImages.homeFeeding,
    alt: 'Domestic cat eating happily from a clean food dish in a bright Adelaide kitchen',
    keyPoints: [
      'Accurate portioning according to your specific feeding instructions',
      'Thorough water bowl washing and cold fresh water replacement',
      'Litter box scoop and tidy for indoor cats, or garden check for dogs',
      'Gentle affection, head scratches, and reassurance in familiar surroundings',
      'Prompt check-in update confirming your pet has eaten well',
    ],
    idealFor: 'Cats who prefer resting in their own home territory, and dogs requiring reliable mealtime support.',
    frequency: 'Morning, midday, or afternoon visits depending on your pet’s routine.',
  },
  {
    id: 'basic-pet-care',
    title: 'Basic Pet Care',
    tagline: 'General pet care support based on the pet’s daily needs and agreed arrangements.',
    description:
      'Every pet has unique daily rhythms. Our basic pet care service encompasses general daily support—ranging from interactive indoor playtime and gentle coat brushing to administering simple dietary supplements and checking home pet comfort. We work strictly according to your written guidelines.',
    image: siteImages.basicCare,
    alt: 'Friendly dog resting beside pet care basket and toys in a calm living room',
    keyPoints: [
      'Engaging indoor or backyard play sessions to alleviate boredom',
      'Light coat brushing and basic grooming maintenance',
      'Adherence to your pet’s unique dietary or supplement instructions',
      'Checking that outdoor gates, doors, and resting areas remain secure',
      'Peace-of-mind updates with pet photos and summary of the visit',
    ],
    idealFor: 'Pets needing company, sensory enrichment, or extra attention during extended workdays.',
    frequency: 'Customisable duration and visit intervals based on your personal care plan.',
  },
  {
    id: 'short-term-sitting',
    title: 'Short-Term Pet Sitting',
    tagline: 'Temporary pet care assistance when owners are unavailable or away from home.',
    description:
      'When you need to travel for a weekend, attend an all-day conference, or handle family commitments outside Adelaide, short-term pet sitting offers attentive, consistent care. Your pets remain in their comfortable environment with preserved sleeping and feeding routines.',
    image: siteImages.petSitting,
    alt: 'Relaxed dog comfortably resting on a plush bed during a short-term sitting arrangement',
    keyPoints: [
      'Preservation of your pet’s familiar sleeping, playing, and resting spaces',
      'Reduced stress compared to noisy commercial kennels or catteries',
      'Routine feeding, clean water refills, and regular toilet breaks',
      'Regular photo updates so you can travel with complete peace of mind',
      'Careful respect for your home, privacy, and property security',
    ],
    idealFor: 'Pet owners travelling for work, holidays, hospital appointments, or busy personal commitments.',
    frequency: 'Short-term single day, overnight, or multi-day arrangements by agreement.',
  },
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Booking & Process',
    question: 'How can I request a booking?',
    answer:
      'You can request a booking by submitting our online Booking Enquiry form. Simply select your required service (such as dog walking or home feeding), enter your preferred dates and times, provide basic details about your pet, and let us know your Adelaide suburb. Once received, we will review our schedule and contact you directly to confirm availability and discuss arrangements.',
  },
  {
    id: 'faq-2',
    category: 'Pet Care & Routines',
    question: 'What information should I provide about my pet?',
    answer:
      'To provide the best possible care, please share your pet’s name, breed, age, and general temperament. It is also helpful to include feeding routines, favorite toys or calming habits, any mobility or health considerations, and whether your dog walks well on a lead. The more details you provide, the better we can accommodate your pet’s natural rhythm.',
  },
  {
    id: 'faq-3',
    category: 'Booking & Process',
    question: 'How are pet care arrangements confirmed?',
    answer:
      'Submitting an enquiry does not automatically create an immediate booking. We carefully review every request to ensure scheduling availability and pet suitability. After receiving your enquiry, we will reach out via email or phone to confirm the exact dates, discuss access arrangements, and answer any questions you may have before finalizing the service.',
  },
  {
    id: 'faq-4',
    category: 'Pet Care & Routines',
    question: 'Can I request short-term pet care?',
    answer:
      'Yes, we provide short-term pet care assistance for situations such as weekend getaways, long workdays, study periods, or unexpected personal events. Whether you need a single visit or care over several days, please submit an enquiry with your requested dates so we can discuss availability.',
  },
  {
    id: 'faq-5',
    category: 'Service Areas',
    question: 'How can I check whether my suburb is covered?',
    answer:
      'You can visit our dedicated Service Areas page to see our coverage across metropolitan Adelaide and test your suburb in our interactive postcode checker. If your suburb is not explicitly listed, you are warmly encouraged to send an enquiry with your suburb or postcode, as coverage boundaries can often be arranged depending on daily scheduling.',
  },
  {
    id: 'faq-6',
    category: 'Changes & Assistance',
    question: 'How do I change or cancel a booking enquiry?',
    answer:
      'If your schedule changes or you need to adjust dates, simply reply to your enquiry email or contact us directly with your updated requirements. Because bookings are finalized through mutual communication rather than automated lock-ins, adjustments can be discussed and coordinated smoothly.',
  },
];

export const adelaideServiceAreas: AdelaideArea[] = [
  {
    region: 'Central & Inner Adelaide',
    description: 'Central business district and immediate surrounding parkland suburbs.',
    suburbs: ['Adelaide CBD (5000)', 'North Adelaide (5006)', 'Bowden (5007)', 'Brompton (5007)', 'Medindie (5081)'],
    status: 'Covered',
  },
  {
    region: 'Eastern Suburbs',
    description: 'Leafy residential neighbourhoods and foothills communities east of the parklands.',
    suburbs: ['Norwood (5067)', 'Kensington (5068)', 'Burnside (5066)', 'Rose Park (5067)', 'St Peters (5069)', 'Magill (5072)', 'Dulwich (5065)'],
    status: 'Covered',
  },
  {
    region: 'Inner Southern Suburbs',
    description: 'Established south-side communities with active local walking reserves.',
    suburbs: ['Unley (5061)', 'Goodwood (5034)', 'Parkside (5063)', 'Hyde Park (5061)', 'Wayville (5034)', 'Millswood (5034)', 'Mitcham (5062)'],
    status: 'Covered',
  },
  {
    region: 'Western & Coastal Suburbs',
    description: 'Suburbs extending from the inner west towards Adelaide coastal areas.',
    suburbs: ['Mile End (5031)', 'Torrensville (5031)', 'Thebarton (5031)', 'Glenelg (5045)', 'West Lakes (5021)', 'Henley Beach (5022)', 'Fulham (5024)'],
    status: 'Covered',
  },
  {
    region: 'Inner Northern Suburbs',
    description: 'Family residential pockets and northern parkland corridors.',
    suburbs: ['Prospect (5082)', 'Walkerville (5081)', 'Ovingham (5082)', 'Fitzroy (5082)', 'Mawson Lakes (5095)', 'Enfield (5085)'],
    status: 'Covered',
  },
  {
    region: 'Outer Metro & Adelaide Hills Foothills',
    description: 'Surrounding communities across greater Adelaide and foothills locations.',
    suburbs: ['Marion (5043)', 'Campbelltown (5074)', 'Tea Tree Gully (5091)', 'Blackwood (5051)', 'Belair (5052)'],
    status: 'Subject to confirmation',
  },
];
