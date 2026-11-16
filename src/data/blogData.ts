import { siteImages } from '../assets';

export interface BlogSectionItem {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: {
    lead: string;
    detail: string;
  }[];
  subItems?: {
    heading: string;
    text: string;
  }[];
  closingParagraph?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  location: string;
  readTime: string;
  image: string;
  imageAlt: string;
  introParagraphs: string[];
  sections: BlogSectionItem[];
  ctaText: string;
  ctaSignOff: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'loving-and-reliable-dog-walking-and-pet-sitting-services',
    title: 'Paw Care Adelaide: Loving and Reliable Dog Walking and Pet Sitting Services',
    category: 'Dog Walking & Pet Sitting',
    location: 'Adelaide, SA',
    readTime: '5 min read',
    image: siteImages.dogWalking,
    imageAlt: 'Happy dog walking on a lead along a sunlit Adelaide parkland trail',
    introParagraphs: [
      'Dogs are more than just pets; they are beloved members of our families. They bring happiness, companionship, and unconditional love into our lives. As responsible pet owners, making sure our furry friends receive enough exercise, attention, and care is an important part of keeping them healthy and happy.',
      'However, busy work schedules, family commitments, and everyday responsibilities can sometimes make it difficult to give dogs all the attention they need. This is where Paw Care Adelaide can make a difference.',
      'At Paw Care Adelaide, our goal is to make pet care easier for dog owners while helping their furry companions enjoy a happy, comfortable, and active lifestyle.',
    ],
    sections: [
      {
        id: 'section-1',
        number: '1',
        title: 'Why Is Regular Dog Walking Important?',
        paragraphs: [
          "Regular exercise plays an important role in maintaining a dog's physical and mental health.",
          'Daily walks allow dogs to explore their surroundings, experience new smells, and enjoy time outdoors. Walking can also help maintain a healthy weight, improve fitness, and reduce boredom.',
          'Some important benefits of regular dog walking include:',
        ],
        bullets: [
          {
            lead: 'Better physical health',
            detail: 'Walking helps dogs stay active and maintain a healthy body weight.',
          },
          {
            lead: 'Mental stimulation',
            detail: 'Exploring different environments and smells keeps dogs mentally engaged.',
          },
          {
            lead: 'Reduced boredom',
            detail: 'Regular outdoor activities provide entertainment and stimulation.',
          },
          {
            lead: 'Positive behaviour',
            detail: 'Appropriate exercise can help dogs feel more relaxed and settled.',
          },
          {
            lead: 'Social experiences',
            detail:
              'Walks provide opportunities to experience different environments and meet other people and dogs when appropriate.',
          },
        ],
        closingParagraph:
          'Every dog has different exercise requirements depending on its age, breed, personality, and health. Choosing an appropriate walking routine is essential for their well-being.',
      },
      {
        id: 'section-2',
        number: '2',
        title: 'The Importance of Professional Pet Sitting',
        paragraphs: [
          'Sometimes, pet owners need to spend time away from home because of work, travel, or other commitments.',
          'Leaving a beloved pet alone for extended periods can be stressful for both the owner and the animal.',
          'Pet sitting provides an opportunity for dogs to receive attention, companionship, and everyday care while their owners are away.',
          'A caring pet sitter can help maintain familiar routines, including feeding times, exercise, fresh water, and companionship.',
          'Having someone look after your dog can also provide peace of mind, knowing that your furry friend is receiving attention while you are busy.',
        ],
      },
      {
        id: 'section-3',
        number: '3',
        title: 'Keeping Your Dog Happy and Healthy Every Day',
        paragraphs: [
          'Good dog care involves much more than providing food and shelter. Dogs need physical activity, mental stimulation, affection, and a comfortable environment.',
          "Here are some simple ways to support your dog's daily well-being:",
        ],
        subItems: [
          {
            heading: 'Provide Regular Exercise',
            text: "Make time for daily walks and activities that suit your dog's energy level and physical condition.",
          },
          {
            heading: 'Maintain a Healthy Diet',
            text: 'Provide balanced, appropriate food and ensure your dog always has access to fresh drinking water.',
          },
          {
            heading: 'Give Them Attention and Companionship',
            text: 'Dogs are social animals and benefit from spending quality time with their families and trusted caregivers.',
          },
          {
            heading: 'Maintain a Consistent Routine',
            text: 'Regular feeding, walking, and resting schedules can help dogs feel more comfortable and secure.',
          },
          {
            heading: 'Monitor Their Health',
            text: 'Pay attention to changes in appetite, behaviour, energy levels, and physical condition. Contact a veterinarian if you notice anything concerning.',
          },
        ],
      },
      {
        id: 'section-4',
        number: '4',
        title: 'Choosing the Right Dog Walking and Pet Sitting Service in Adelaide',
        paragraphs: [
          'Choosing someone to care for your dog is an important decision. Every dog has its own personality, habits, and individual needs.',
          'When looking for a dog walking or pet sitting service in Adelaide, consider the following:',
        ],
        bullets: [
          {
            lead: 'Experience with dogs',
            detail: 'Choose someone who understands different dog personalities and behaviours.',
          },
          {
            lead: 'Reliability',
            detail: "Consistent care and punctuality are important for maintaining your dog's routine.",
          },
          {
            lead: 'Safety',
            detail: "Your dog's comfort and safety should always come first.",
          },
          {
            lead: 'Communication',
            detail: 'Regular updates can help owners feel more comfortable while they are away.',
          },
          {
            lead: 'Individual attention',
            detail: "Your dog's age, temperament, and specific requirements should be considered.",
          },
        ],
        closingParagraph:
          'Finding the right pet care support can make everyday life easier for both dogs and their owners.',
      },
      {
        id: 'section-5',
        number: '5',
        title: 'Why Choose Paw Care Adelaide?',
        paragraphs: [
          'At Paw Care Adelaide, we understand how important your furry companions are to your family.',
          'We believe every dog deserves kindness, attention, and responsible care. Our focus is on supporting Adelaide dog owners with dog walking and pet sitting solutions that help their pets enjoy their daily lives.',
          'Whether you need support with regular walks or someone to provide care and companionship while you are away, Paw Care Adelaide is here to help make pet ownership a little easier.',
          'We believe that happy pets start with thoughtful care, patience, and understanding.',
        ],
      },
      {
        id: 'section-6',
        number: '6',
        title: 'Give Your Furry Friend the Care They Deserve',
        paragraphs: [
          'Your dog depends on you for love, protection, exercise, and companionship. Providing consistent care helps create a stronger bond and supports a healthier, happier life.',
          'With the right support, you can balance your everyday responsibilities while making sure your furry friend continues to receive the attention they deserve.',
          'Paw Care Adelaide is here to support you and your four-legged family members.',
        ],
      },
    ],
    ctaText:
      'Visit our website to learn more about Paw Care Adelaide and discover how we can help you with your pet care needs.',
    ctaSignOff: 'Paw Care Adelaide – Caring for Your Best Friend, One Paw at a Time!',
  },
];
