import type { Metadata } from "next";
import Link from "next/link";
import { SolutionCard, ProjectCTA, ConceptImage } from "@/components/ui";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Our solutions",
  description:
    "Explore eight families of prefab, modular, container and portable building solutions.",
};

const cabinShowcase = [
  {
    image: "prefab-villa-two-storey",
    title: "Two-Storey Prefab Luxury Villa",
    desc: "Fast-install steel structure modular residence with upper balcony & panoramic windows.",
  },
  {
    image: "prefab-office-skyline",
    title: "Skyline Prefab Corporate Facility",
    desc: "Turnkey commercial modular building with architectural branding & entry portal.",
  },
  {
    image: "teal-skyline-office",
    title: "Teal Skyline Modular Office",
    desc: "High-spec executive office with acoustic insulation and exterior dusk illumination.",
  },
  {
    image: "container-cabin-dusk",
    title: "Container Cabin at Dusk",
    desc: "All-weather insulated container home with custom architectural fenestration.",
  },
  {
    image: "modular-office-sunset",
    title: "Modular Site Office Complex",
    desc: "Scalable administrative facility with integrated conference rooms and workstations.",
  },
  {
    image: "container-home",
    title: "Golden-Hour Container Cabin",
    desc: "Luxury residential container living suite with exterior timber deck.",
  },
  {
    image: "container-retreat-lake",
    title: "Lakeside Container Cabin Retreat",
    desc: "Boutique hospitality suite engineered for resorts, farm stays and leisure.",
  },
  {
    image: "modular-retreat-cabin",
    title: "Sky High Modular Retreat",
    desc: "Architectural leisure cabin with warm timber cladding and wrap-around deck.",
  },
  {
    image: "container-pavilion",
    title: "Container Living & Dining Pavilion",
    desc: "Spacious open-concept container space with covered patio and dining veranda.",
  },
  {
    image: "prefab-guard-cabin",
    title: "Heavy-Duty Prefab Security Cabin",
    desc: "Heavy-gauge steel security post with 360-degree visibility and sliding window.",
  },
  {
    image: "prefab-guard-booth",
    title: "Perimeter Security & Guard Booth",
    desc: "Weatherproof site entry cabin engineered for rapid site placement.",
  },
  {
    image: "steel-modular-outdoor-container",
    title: "Steel Modular Transportable Unit",
    desc: "Compact 8.5-foot modular container unit engineered for quick deployment.",
  },
];

export default function Solutions() {
  return (
    <main id="main">
      <section className="page-intro section">
        <p className="eyebrow">OUR SOLUTIONS</p>
        <h1>
          Different possibilities.
          <br />
          <span>Same thoughtful engineering.</span>
        </h1>
        <p className="body-large">
          Spaces for living, working, gathering and moving forward.
          <br />
          Find the right starting point for your project.
        </p>
      </section>

      <section className="section catalogue">
        <div className="featured-grid">
          {solutions.map((s, i) => (
            <SolutionCard key={s.slug} solution={s} index={i} />
          ))}
        </div>
        <p className="image-disclaimer">
          Images illustrate design concepts. Final specifications and appearance
          depend on your agreed project requirements.
        </p>
      </section>

      <section className="section showcase-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CONTAINER CABINS &amp; CUSTOM MODELS</p>
            <h2>
              Engineered spaces.
              <br />
              Tailored to your site.
            </h2>
          </div>
          <div>
            <p className="body-large">
              Direct concepts from our fabrication lineup. Whether you need an
              executive container cabin, residential unit, or high-security
              guard booth, each structure is custom manufactured in Hyderabad.
            </p>
            <Link
              href="/contact?solution=shipping-container-solutions"
              className="button button-dark"
              style={{ marginTop: "16px" }}
            >
              Enquire about container cabins
            </Link>
          </div>
        </div>

        <div className="solution-gallery-grid">
          {cabinShowcase.map((item) => (
            <div key={item.image} className="gallery-item-card">
              <ConceptImage name={item.image} alt={item.title} />
              <div className="gallery-item-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectCTA />
    </main>
  );
}
