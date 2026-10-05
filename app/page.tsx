import Link from "next/link";
import {
  ConceptImage,
  SolutionCard,
  Process,
  ProjectCTA,
} from "@/components/ui";
import { solutions, customization } from "@/lib/solutions";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow">
            <span className="tiny-square" /> ENGINEERING POSSIBILITIES
          </p>
          <span className="hero-note">PREFABRICATED. MODULAR. CUSTOMIZED.</span>
        </div>
        <div className="hero-title">
          <h1>
            Great spaces.
            <br />
            <span>Built around you.</span>
          </h1>
          <div className="hero-description">
            <p>
              From a first idea to a space that works.
              <br />
              Prefab, modular and container solutions,
              <br className="desktop-break" /> shaped by engineering.
            </p>
            <Link href="/solutions" className="text-link">
              Explore our solutions
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <ConceptImage
            name="hero"
            alt="Concept of a two-storey modular building with glass frontage and an open terrace"
            priority
          />
          <div className="hero-image-footer">
            <span>MODULAR THINKING. EXTRAORDINARY POSSIBILITIES.</span>
            <span>Design concept / 01</span>
          </div>
          <div className="hero-image-caption">
            <span>
              Designed for life.
              <br />
              Engineered for possibility.
            </span>
          </div>
        </div>
      </section>
      <section className="intro-section section">
        <p className="eyebrow">A SMARTER WAY TO BUILD</p>
        <div>
          <h2>
            Big ideas.
            <br />
            Considered engineering.
          </h2>
          <p className="body-large">
            We bring design, engineering and precision fabrication together to
            create spaces that adapt to your needs.
          </p>
          <p>
            From commercial workspaces and container cafés to residential cabins
            and hospitality retreats, every solution begins with its purpose.
          </p>
          <Link className="text-link" href="/about">
            Meet Skyhigh Engineering
          </Link>
        </div>
        <div className="intro-aside">
          <span>
            Built smart.
            <br />
            Built strong.
            <br />
            Built by Skyhigh.
          </span>
          <div className="line-motif" aria-hidden="true" />
        </div>
      </section>
      <section className="solutions-section section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / OUR SOLUTIONS</p>
            <h2>
              A space for
              <br />
              every possibility.
            </h2>
          </div>
          <div>
            <p>
              Different needs. One considered approach.
              <br />
              Discover what we can build around you.
            </p>
            <Link href="/solutions" className="text-link">
              View all solutions
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {[solutions[0], solutions[3], solutions[1], solutions[7]].map((s) => (
            <SolutionCard
              solution={s}
              index={solutions.indexOf(s)}
              key={s.slug}
            />
          ))}
        </div>
        <p className="image-disclaimer">
          Architectural imagery shows illustrative design concepts.
        </p>
      </section>
      <section className="custom-section">
        <ConceptImage
          name="garden"
          alt="Concept of a glass-fronted modular garden office"
        />
        <div className="custom-content">
          <p className="eyebrow">02 / MADE FOR YOUR REQUIREMENTS</p>
          <h2>
            No two visions.
            <br />
            No one-size-fits-all.
          </h2>
          <p>
            Start with what you need your space to do. We consider the
            dimensions, site conditions, layout and finishes together.
          </p>
          <div className="custom-list">
            {customization.slice(0, 6).map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          <Link href="/engineering" className="button button-light">
            Explore our approach
          </Link>
        </div>
      </section>
      <section className="section process-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / FROM IDEA TO INSTALLATION</p>
            <h2>
              One vision.
              <br />A connected process.
            </h2>
          </div>
          <p>
            Design. Engineer. Customize.
            <br />
            Manufacture. Deliver. Install.
          </p>
        </div>
        <Process />
      </section>
      <section className="application-banner">
        <ConceptImage
          name="retreat"
          alt="Concept of a compact container retreat with a timber deck"
        />
        <div>
          <p className="eyebrow">ROOM TO THINK DIFFERENTLY</p>
          <h2>
            Your next chapter
            <br />
            can take a new shape.
          </h2>
          <Link
            href="/solutions/hospitality-leisure"
            className="button button-light"
          >
            Explore hospitality spaces
          </Link>
        </div>
      </section>
      <ProjectCTA />
    </main>
  );
}
