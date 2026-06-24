export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Classes", href: "#classes" },
  { name: "Schedule", href: "#schedule" },
  { name: "Trainers", href: "#trainers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faq" },
];

export const classesData = [
  {
    id: 1,
    slug: "powerlifting",
    title: "Powerlifting",
    description: "Build raw strength with heavy compound movements.",
    longDescription: "Our Powerlifting class is designed to help you build absolute strength through the three main lifts: Squat, Bench Press, and Deadlift. Whether you are preparing for a meet or just want to get dangerously strong, our coaches will guide your form and programming.",
    time: "6:00 AM - 7:30 AM",
    trainer: "Mark Titan",
    trainerSlug: "mark-titan"
  },
  {
    id: 2,
    slug: "hiit-inferno",
    title: "HIIT Inferno",
    description: "High intensity interval training to burn fat fast.",
    longDescription: "HIIT Inferno pushes your cardiovascular system to its absolute limits. Utilizing assault bikes, rowers, kettlebells, and bodyweight movements, this class is designed to torch calories and build an unbreakable engine.",
    time: "8:00 AM - 9:00 AM",
    trainer: "Sarah Blaze",
    trainerSlug: "sarah-blaze"
  },
  {
    id: 3,
    slug: "functional-combat",
    title: "Functional Combat",
    description: "MMA inspired conditioning for full body power.",
    longDescription: "Combining the conditioning of fighters with functional strength training, this class involves heavy bag work, battle ropes, medicine ball slams, and explosive movements to build agility and striking power.",
    time: "6:00 PM - 7:00 PM",
    trainer: "Leo Striker",
    trainerSlug: "leo-striker"
  },
];

export const trainersData = [
  {
    id: 1,
    slug: "mark-titan",
    name: "Mark Titan",
    role: "Head Strength Coach",
    image: "/templates/iron-gym/trainers/trainer1.jpg",
    bio: "Mark has over 15 years of experience in powerlifting and strength sports. He has coached multiple state champions and specializes in biomechanics and raw strength development."
  },
  {
    id: 2,
    slug: "sarah-blaze",
    name: "Sarah Blaze",
    role: "Conditioning Specialist",
    image: "/templates/iron-gym/trainers/trainer2.jpg",
    bio: "Sarah is a former track athlete turned conditioning expert. Her classes are infamous for their intensity. She believes in building mental toughness alongside physical endurance."
  },
  {
    id: 3,
    slug: "leo-striker",
    name: "Leo Striker",
    role: "Combat Trainer",
    image: "/templates/iron-gym/trainers/trainer3.jpg",
    bio: "A retired mixed martial artist, Leo brings the discipline and intensity of the ring into the gym. His sessions focus on explosive power, agility, and functional movement."
  },
];

export const pricingData = [
  {
    id: 1,
    tier: "Basic",
    price: "$49",
    features: ["Access to Gym Floor", "Locker Room", "Free Wi-Fi"],
    popular: false,
  },
  {
    id: 2,
    tier: "Pro",
    price: "$89",
    features: ["All Basic Features", "Unlimited Classes", "Sauna Access"],
    popular: true,
  },
  {
    id: 3,
    tier: "Elite",
    price: "$149",
    features: ["All Pro Features", "Personal Training (2x/mo)", "Nutrition Plan"],
    popular: false,
  },
];

// Configuraciones de Reserva
export const bookingConfig = {
  provider: "Mindbody", // o "Glofox", "Custom"
  baseUrl: "https://clients.mindbodyonline.com/classic/ws?studioid=YOUR_STUDIO_ID",
  useExternalLink: false, // Si es true, abre el enlace directamente. Si es false, abre el modal integrado.
};

// Datos del Calendario
export const scheduleData = [
  {
    day: "Mon",
    classes: [
      { id: 101, name: "Powerlifting", time: "06:00 AM", trainer: "Mark Titan", slots: 12 },
      { id: 102, name: "HIIT Inferno", time: "06:00 PM", trainer: "Sarah Blaze", slots: 20 },
    ]
  },
  {
    day: "Tue",
    classes: [
      { id: 103, name: "Functional Combat", time: "07:00 AM", trainer: "Leo Striker", slots: 15 },
      { id: 104, name: "Mobility & Core", time: "05:00 PM", trainer: "Sarah Blaze", slots: 25 },
    ]
  },
  {
    day: "Wed",
    classes: [
      { id: 105, name: "Powerlifting", time: "06:00 AM", trainer: "Mark Titan", slots: 12 },
      { id: 106, name: "HIIT Inferno", time: "06:00 PM", trainer: "Sarah Blaze", slots: 20 },
    ]
  },
  {
    day: "Thu",
    classes: [
      { id: 107, name: "Functional Combat", time: "07:00 AM", trainer: "Leo Striker", slots: 15 },
    ]
  },
  {
    day: "Fri",
    classes: [
      { id: 108, name: "Powerlifting", time: "06:00 AM", trainer: "Mark Titan", slots: 12 },
      { id: 109, name: "Open Gym", time: "05:00 PM", trainer: "Staff", slots: 50 },
    ]
  },
  {
    day: "Sat",
    classes: [
      { id: 110, name: "HIIT Inferno", time: "09:00 AM", trainer: "Sarah Blaze", slots: 25 },
      { id: 111, name: "Combat Sparring", time: "11:00 AM", trainer: "Leo Striker", slots: 10 },
    ]
  },
  {
    day: "Sun",
    classes: [
      { id: 112, name: "Active Recovery", time: "10:00 AM", trainer: "Staff", slots: 30 },
    ]
  }
];

// Testimonios
export const testimonialsData = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Powerlifter",
    rating: 5,
    quote: "IRON completely transformed how I train. The atmosphere is unmatched—just pure dedication and heavy weights. Coach Mark fixed my squat form in one session."
  },
  {
    id: 2,
    name: "Jessica Vance",
    role: "Marathon Runner",
    rating: 5,
    quote: "HIIT Inferno has given me an incredible engine. The trainers push you to your absolute limits, but they keep you safe. Highly recommend if you want results."
  },
  {
    id: 3,
    name: "Daniel Cho",
    role: "BJJ Practitioner",
    rating: 5,
    quote: "The Functional Combat class is exactly what I needed for explosive power and agility. Best facility in town, hands down."
  }
];

// FAQs
export const faqData = [
  {
    id: 1,
    question: "Do you have locker rooms and showers?",
    answer: "Yes, we have fully equipped premium locker rooms with secure digital lockers, private showers, fresh towel service, and vanity areas."
  },
  {
    id: 2,
    question: "Can I try a class before signing up?",
    answer: "Absolutely! We offer a free 1-day pass for local residents to experience our gym floor and join any class. Contact us to activate your pass."
  },
  {
    id: 3,
    question: "Is there a cancellation fee for memberships?",
    answer: "No. All our memberships are contract-free and run month-to-month. You can cancel or pause your membership anytime with a 7-day notice before your billing cycle."
  },
  {
    id: 4,
    question: "Do you offer personal training?",
    answer: "Yes, we offer 1-on-1 personal training packages. You can book custom sessions with Mark, Sarah, or Leo. Our Elite membership also includes 2 sessions per month."
  }
];

// Galería de Imágenes
export const galleryImages = [
  "/templates/iron-gym/gallery/gallery1.png",
  "/templates/iron-gym/gallery/gallery2.png",
  "/templates/iron-gym/gallery/gallery3.png",
  "/templates/iron-gym/gallery/gallery4.png",
  "/templates/iron-gym/gallery/gallery5.png",
  "/templates/iron-gym/gallery/gallery6.png"
];
