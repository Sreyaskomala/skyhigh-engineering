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
    image: "container-cabin-dusk",
    title: "Container Home at Dusk",
    desc: "Luxury residential container living cabin with multi-room layout.",
  },
  {
    image: "container-office",
    title: "Modular Container Office",
    desc: "Turnkey site executive office with insulated panels & glass front.",
  },
  {
    image: "container-home",
    title: "Golden-Hour Container Cabin",
    desc: "Private retreat cabin engineered for farmhouses and estates.",
  },
  {
    image: "container-pavilion",
    title: "Container Living Pavilion",
    desc: "Spacious architectural container unit with integrated veranda.",
  },
  {
    image: "container-retreat-lake",
    title: "Lakeside Container Cabin",
    desc: "Compact modular hospitality suite built for destination stays.",
  },
  {
    image: "prefab-guard-booth",
    title: "Perimeter Security Guard Booth",
    desc: "Heavy-duty entry security cabin with 360-degree glass view.",
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
