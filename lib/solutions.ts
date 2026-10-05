export type Solution = {
  slug: string;
  name: string;
  short: string;
  image: string;
  intro: string;
  offerings: string[];
  applications: string[];
  detail: string;
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
    name: "Shipping container solutions",
    short: "A new purpose. A new possibility.",
    image: "containers",
    intro:
      "Transform shipping containers into spaces with a purpose of their own.",
    detail:
      "Adapt a single container or combine multiple units into a larger space. Each conversion starts with its intended use, dimensions and site conditions.",
    offerings: [
      "Container offices & shops",
      "Container restaurants & cafés",
      "Container accommodation",
      "Container workshops",
      "Container stores & warehouses",
      "Multi-container modular buildings",
      "Customized container conversions",
    ],
    applications: ["Container conversions", "Storage", "Multi-unit spaces"],
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
