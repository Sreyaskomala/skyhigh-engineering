export type Solution = {
  slug: string;
  name: string;
  short: string;
  image: string;
  intro: string;
  offerings: string[];
  applications: string[];
  detail: string;
  gallery?: {
    image: string;
    title: string;
    subtitle: string;
  }[];
};
export const solutions: Solution[] = [
  {
    slug: "prefab-modular-buildings",
    name: "Prefab & modular buildings",
    short: "Purpose-built. Precision-made.",
    image: "prefab",
    intro:
      "Flexible structures, engineered around the way you want to use them.",
    detail:
      "From a standalone cabin to a connected modular building, bring together your space, layout and finish requirements in one considered design.",
    offerings: [
      "Prefabricated structures",
      "Container cabins",
      "Portable buildings",
      "Customized modular structures",
      "Temporary & permanent modular structures",
    ],
    applications: ["Site infrastructure", "Workspaces", "Custom buildings"],
    gallery: [
      {
        image: "prefab-office-sunset",
        title: "Modern Prefab Office",
        subtitle: "Rapid-assembly steel framed commercial workspace",
      },
      {
        image: "prefab-guard-cabin",
        title: "Heavy-Duty Prefab Guard Cabin",
        subtitle: "Durable insulated security cabin with weather sealing",
      },
      {
        image: "modular-office-sunset",
        title: "Modular Office Facility",
        subtitle: "Scalable modular construction for site administration",
      },
    ],
  },
  {
    slug: "accommodation-residential",
    name: "Accommodation & residential",
    short: "A better space to live.",
    image: "residential",
    intro:
      "Thoughtfully planned accommodation for everyday living and time away.",
    detail:
      "Plan practical workforce accommodation, a private farmhouse cabin or a modular guest house, with layouts developed around the people who use them.",
    offerings: [
      "Bunk-bed cabins",
      "Worker accommodation",
      "Farmhouse cabins",
      "Estate villas",
      "Residential modular units",
      "Modular guest houses",
      "Portable accommodation units",
    ],
    applications: ["Workforce housing", "Farmhouses", "Guest accommodation"],
  },
  {
    slug: "commercial-industrial",
    name: "Commercial & industrial",
    short: "Built around your operation.",
    image: "commercial",
    intro:
      "Practical workspaces for projects, people and day-to-day operations.",
    detail:
      "Create site offices, security spaces and industrial utility buildings with attention to access, internal layout and operational requirements.",
    offerings: [
      "Site offices",
      "Security cabins",
      "Industrial buildings",
      "Commercial spaces",
      "Construction site cabins",
      "Portable workspaces",
      "Industrial utility buildings",
    ],
    applications: [
      "Construction sites",
      "Industrial facilities",
      "Business premises",
    ],
    gallery: [
      {
        image: "modular-office-sunset",
        title: "Modular Site Office Complex",
        subtitle: "Multi-cabin commercial administration and meeting suites",
      },
      {
        image: "prefab-guard-booth",
        title: "Perimeter Security & Guard Booth",
        subtitle: "Compact site entry cabin with 360° visibility",
      },
      {
        image: "modular-office-golden",
        title: "Modular Workspace Unit",
        subtitle: "Executive portable cabin with pre-fitted electricals & AC provision",
      },
    ],
  },
  {
    slug: "restaurant-retail",
    name: "Restaurant & retail spaces",
    short: "Make room for your next idea.",
    image: "restaurant",
    intro:
      "Distinctive spaces for food, coffee, retail and everything that brings people together.",
    detail:
      "Develop a container café, a retail kiosk or a modular food court around your service flow, interior layout and brand.",
    offerings: [
      "Modular restaurants",
      "Container cafés",
      "Coffee shop units",
      "Food court structures",
      "Quick-service restaurant units",
      "Retail kiosks",
      "Customized restaurant interiors",
    ],
    applications: ["Food & beverage", "Retail", "Commercial hospitality"],
  },
  {
    slug: "shipping-container-solutions",
    name: "Container cabins & solutions",
    short: "Robust cabins. Precision engineered.",
    image: "container-cabin-dusk",
    intro:
      "Customized container cabins, portable site offices, and modular container spaces engineered for durable living and work.",
    detail:
      "Transform high-grade shipping containers and modular frames into fully finished container cabins, luxury retreat suites, site offices and multi-unit living spaces tailored to your exact layout, finish and site requirements.",
    offerings: [
      "Container cabins & site offices",
      "Customized container homes & retreats",
      "Security & guard container cabins",
      "Container cafés & pop-up commercial units",
      "Multi-container modular complexes",
      "Portable worker cabins & bunk-houses",
      "Turnkey container conversions",
    ],
    applications: [
      "Container cabins",
      "Workspaces & offices",
      "Living & retreats",
    ],
    gallery: [
      {
        image: "container-office",
        title: "Modular Container Office Cabin",
        subtitle: "Insulated site administration cabin with panoramic glass window",
      },
      {
        image: "container-home",
        title: "Golden-Hour Container Cabin Home",
        subtitle: "Luxury residential container living suite with exterior deck",
      },
      {
        image: "container-pavilion",
        title: "Container Living Pavilion",
        subtitle: "Spacious architectural container unit with integrated veranda",
      },
      {
        image: "container-retreat-lake",
        title: "Lakeside Container Cabin Retreat",
        subtitle: "Boutique leisure cabin engineered for resorts & farm stays",
      },
    ],
  },
  {
    slug: "portable-utility",
    name: "Portable & utility solutions",
    short: "Essential spaces, thoughtfully made.",
    image: "utility",
    intro: "Adaptable facilities that support the work happening around them.",
    detail:
      "Bring essential facilities to a site with utility cabins and portable spaces customized for their application. The illustration shows a portable office concept.",
    offerings: [
      "Mobile toilets",
      "Portable washrooms",
      "Portable healthcare units",
      "Portable classrooms",
      "Utility cabins",
      "Portable storage units",
      "Site utility structures",
    ],
    applications: ["Site support", "Education", "Healthcare", "Storage"],
  },
  {
    slug: "transport-mobile",
    name: "Transport & mobile solutions",
    short: "Spaces designed to move.",
    image: "mobile",
    intro: "Transportable spaces for work and services beyond a fixed address.",
    detail:
      "Explore mobile cabins, vehicle-mounted structures and transportable modular units designed around your intended application and movement requirements.",
    offerings: [
      "Carry van cabins",
      "Mobile cabins",
      "Transportable modular units",
      "Customized vehicle-mounted structures",
      "Mobile workspaces",
      "Mobile commercial units",
    ],
    applications: [
      "Mobile operations",
      "Transportable workspaces",
      "Mobile services",
    ],
  },
  {
    slug: "hospitality-leisure",
    name: "Hospitality & leisure",
    short: "Stay somewhere extraordinary.",
    image: "hospitality",
    intro: "Spaces that make a destination feel like a place to stay.",
    detail:
      "Shape a resort cabin, a farmhouse retreat or a glamping unit around its setting, guest experience and practical requirements.",
    offerings: [
      "Resort structures & cabins",
      "Estate accommodation",
      "Farmhouse retreats",
      "Modular villas",
      "Glamping units",
      "Tourism accommodation",
      "Leisure & recreation structures",
    ],
    applications: ["Resorts", "Tourism", "Farm stays", "Leisure"],
  },
];
export const process = [
  [
    "Understand",
    "Your application, site conditions and space requirements set the direction.",
  ],
  [
    "Design & engineer",
    "Layouts and 3D design bring structure, function and finishes together.",
  ],
  [
    "Fabricate & finish",
    "Precision fabrication and interior detailing turn the design into a space.",
  ],
  [
    "Deliver & install",
    "Transportation and installation complete the journey to your site.",
  ],
];
export const customization = [
  "Dimensions & layout",
  "Doors & windows",
  "Insulation",
  "Electrical provisions",
  "Plumbing",
  "Interior finishes",
  "Exterior finishes",
  "Furniture & branding",
];
