import type { Metadata } from "next";
import { ConceptImage, Process, ProjectCTA } from "@/components/ui";
import { customization } from "@/lib/solutions";
export const metadata: Metadata = {
  title: "Our engineering approach",
  description:
    "From digital design and customization to precision fabrication, delivery and installation.",
};
export default function Engineering() {
  return (
    <main id="main">
      <section className="section page-intro">
        <p className="eyebrow">THE SKYHIGH APPROACH</p>
        <h1>
          Engineered with technology.
          <br />
          <span>Built for you.</span>
        </h1>
        <p className="body-large">
          Good spaces begin with understanding.
          <br />
          Your requirements guide every stage of the process.
        </p>
        <ConceptImage
          name="commercial"
          alt="Concept of a modular office complex at a construction site"
          priority
        />
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>
            From your first idea
            <br />
            to your finished space.
          </h2>
          <p>
            Engineering, design and fabrication,
            <br />
            working toward the same outcome.
          </p>
        </div>
        <Process />
      </section>
      <section className="section engineering-detail">
        <div>
          <p className="eyebrow">DIGITAL DESIGN. PRACTICAL THINKING.</p>
          <h2>
            See the possibility.
            <br />
            Consider the details.
          </h2>
          <p className="body-large">
            3D CAD, structural design and visualization help bring your
            requirements into focus before fabrication.
          </p>
          <p>
            Our approach considers dimensions, applications, site conditions,
            functionality, aesthetics and operational needs together.
          </p>
        </div>
        <div className="capability-list">
          {[
            "3D CAD & digital product design",
            "Structural design & layout development",
            "3D modeling & visualization",
            "Space and design optimization",
            "Fabrication planning & documentation",
            "Container conversion design",
          ].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              <h3>{x}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="section customization-band">
        <p className="eyebrow">YOUR REQUIREMENTS, IN EVERY DETAIL</p>
        <h2>Customization is part of the process.</h2>
        <div className="tags">
          {customization.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <p>
          Project-specific specifications, materials and delivery arrangements
          are defined around the agreed scope.
        </p>
      </section>
      <ProjectCTA />
    </main>
  );
}
