// Every fact on the site comes from here, and every fact here traces to a
// source. Business details: the original site.ts and the business's own
// flyers (public/images/flyer 1.png and flyer 3.png); the phone and email also
// appear on jkplumbingsolutions.com.au (checked 2 Oct 2026). Practical advice:
// Sydney Water, linked on each item that uses it.
//
// Not allowed without the client's written confirmation: 24/7, same-day,
// guarantees, reviews, ratings, insurance, years in business, prices. The
// business's ute and flyers carry some of these; they stay off the site.

export const site = {
  name: "JK Plumbing Solutions",
  legalName: "JK PLUMBING SOLUTIONS PTY LTD",
  director: "James Khouri",
  abn: "99 681 661 834",
  plumbingLicence: "477160C",
  location: "Campbelltown",
  serviceArea: "Campbelltown, servicing all Sydney",
  phone: {
    display: "0447 798 126",
    tel: "0447798126",
    international: "+61447798126",
    href: "tel:0447798126",
  },
  email: "info@jkplumbingsolutions.com.au",
  social: {
    facebook: "JK plumbing solutions pty Ltd",
    instagram: "jk_plumbingsolutionss",
    instagramUrl: "https://www.instagram.com/jk_plumbingsolutionss/",
  },
  nav: [
    { label: "What's wrong", href: "#problems" },
    { label: "What we do", href: "#services" },
    { label: "Our work", href: "#work" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ],
  // Flyer 1 services list, grouped. Flyer 3 for the camera-first method.
  services: [
    {
      id: "drains",
      title: "Blocked drains",
      detail:
        "Jet blasting, CCTV drain inspection and pipe locating. The camera goes down the line before the jetter does.",
    },
    {
      id: "hot-water",
      title: "Hot water",
      detail: "Fault finding, repairs and replacements.",
    },
    {
      id: "gas",
      title: "Gas fitting & LPG",
      detail: "Gas connections and appliance installs.",
    },
    {
      id: "leaks",
      title: "Leaks, taps & pipes",
      detail: "Leak detection, dripping taps, burst pipes and general maintenance.",
    },
    {
      id: "renovations",
      title: "Renovations & new builds",
      detail:
        "Bathrooms, kitchens and laundries. Rough-in, then fit-off once the tiling's done.",
    },
    {
      id: "commercial",
      title: "Commercial",
      detail: "Fit-outs, maintenance and repairs for shops, offices and sites.",
    },
  ],
  serviceAreas: {
    base: "Campbelltown",
    lines: ["Macarthur · Camden · Narellan", "Liverpool · South West Sydney"],
    beyond: "And further into Sydney, depending on the job.",
  },
} as const;

export type Situation = {
  id: string;
  tab: string;
  title: string;
  firstLabel: "Right now" | "Before you call";
  first: string;
  then: string;
  note?: {
    text: string;
    source: { label: string; href: string };
  };
};

const sydneyWaterFaults =
  "https://www.sydneywater.com.au/water-the-environment/what-you-can-do/report-fault.html";
const sydneyWaterBlockages =
  "https://www.sydneywater.com.au/plumbing-building-developing/plumbing/wastewater-blockages/guide-licensed-plumbers.html";

export const situations: Situation[] = [
  {
    id: "blocked",
    tab: "Blocked",
    title: "Toilet or drain backing up?",
    firstLabel: "Right now",
    first: "Stop flushing and turn the taps off. Anything you send down has nowhere to go.",
    then: "We put a camera down the line to see what's causing it, then clear it with the jetter.",
    note: {
      text: "If the gully outside keeps overflowing while nothing inside is running, the problem is probably in Sydney Water's sewer. Call them on 13 20 90.",
      source: { label: "Sydney Water", href: sydneyWaterBlockages },
    },
  },
  {
    id: "leaking",
    tab: "Leaking",
    title: "Water where it shouldn't be?",
    firstLabel: "Right now",
    first:
      "Turn off the meter tap. It's usually right next to your water meter. Turn it the way the arrow points until you feel resistance.",
    then: "We find where it's coming from and fix it, from a dripping tap to a burst pipe.",
    note: {
      text: "A leak between your water meter and your house is yours to fix, and Sydney Water says it needs a licensed plumber.",
      source: { label: "Sydney Water", href: sydneyWaterFaults },
    },
  },
  {
    id: "hot-water",
    tab: "No hot water",
    title: "Hot water gone cold?",
    firstLabel: "Right now",
    first: "Check whether the system is gas or electric, and take a photo of the label on the unit.",
    then: "We work out whether it needs a repair or a replacement, and talk you through it before any work starts.",
  },
  {
    id: "gas",
    tab: "Gas",
    title: "Gas cooktop, heater or hot water connection?",
    firstLabel: "Before you call",
    first: "Know the appliance and where it's going. A photo of the spot helps.",
    then: "Gas fitting and LPG installation: new connections and appliance installs.",
  },
  {
    id: "renovating",
    tab: "Renovating",
    title: "Renovation or new build?",
    firstLabel: "Before you call",
    first: "Have the stage you're at, the suburb and your builder's timing handy.",
    then: "We do the rough-in, then come back for the fit-off once the tiling's done, around your builder's schedule.",
  },
  {
    id: "commercial",
    tab: "Commercial",
    title: "Shop, office or site?",
    firstLabel: "Before you call",
    first: "Tell us the premises, what's not working and when we can get access.",
    then: "Fit-outs, maintenance and repairs for commercial premises.",
  },
];

export type WorkPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  ink: "ink" | "blue";
  position?: string;
};

// Captions describe only what the photo shows; most come from the original
// site's alt text. The ute crop leaves out the "24/7" badge on its canopy.
export const workPhotos: WorkPhoto[] = [
  {
    src: "/images/ute-canopy.jpg",
    alt: "The JK Plumbing ute: black canopy signwritten with 0447 798 126, with green jetter hose reels on the tray",
    caption: "Our ute, with the jetter hose reels on the tray",
    width: 1700,
    height: 765,
    ink: "blue",
    position: "40% 30%",
  },
  {
    src: "/images/tech.JPEG",
    alt: "Drain inspection camera unit open on site, its screen showing the inside of a pipe",
    caption: "The drain camera on site",
    width: 1536,
    height: 2048,
    ink: "ink",
    position: "50% 35%",
  },
  {
    src: "/images/process%20toilet.JPEG",
    alt: "Toilet job under way, with a hose reel and green hose beside the pan",
    caption: "Toilet job under way",
    width: 1536,
    height: 2048,
    ink: "ink",
  },
  {
    src: "/images/bathroom.jpg",
    alt: "Finished bathroom with a back-to-wall toilet, timber vanity, bath and green feature tiles",
    caption: "Finished bathroom",
    width: 1200,
    height: 1600,
    ink: "blue",
  },
  {
    src: "/images/bathtub.jpg",
    alt: "Freestanding bath with a brushed brass floor-mounted mixer",
    caption: "Freestanding bath and floor mixer",
    width: 1200,
    height: 1600,
    ink: "ink",
  },
  {
    src: "/images/shower%20head.JPEG",
    alt: "Brushed copper rail shower installed against large-format tiles",
    caption: "Rail shower in brushed copper",
    width: 1536,
    height: 2048,
    ink: "blue",
  },
  {
    src: "/images/sink%20and%20tap.jpg",
    alt: "Kitchen sink and mixer under a window",
    caption: "Kitchen sink and mixer",
    width: 1200,
    height: 1600,
    ink: "ink",
  },
  {
    src: "/images/urinal.PNG",
    alt: "Commercial urinals installed between partition panels",
    caption: "Commercial urinals",
    width: 1320,
    height: 2868,
    ink: "blue",
    position: "50% 45%",
  },
];
