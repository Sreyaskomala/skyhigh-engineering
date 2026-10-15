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
      <section className="section showcase-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STRUCTURAL SYSTEMS &amp; DETAILING</p>
            <h2>
              Engineered for durability.
              <br />
              Fabricated to specification.
            </h2>
          </div>
          <div>
            <p className="body-large">
              From heavy-gauge steel framing and insulated sandwich panel walls
              to custom architectural fenestration and pre-tested MEP services,
              each module is built to rigorous industrial standards.
            </p>
          </div>
        </div>
        <div className="solution-gallery-grid">
          <div className="gallery-item-card">
            <ConceptImage
              name="prefab-office-skyline"
              alt="Structural framing and architectural fascia"
            />
            <div className="gallery-item-info">
              <h3>Integrated Framing &amp; Fascia</h3>
              <p>Heavy-duty structural steel skeleton with architectural branding parapet.</p>
            </div>
          </div>
          <div className="gallery-item-card">
            <ConceptImage
              name="teal-skyline-office"
              alt="Architectural glazing and climate sealing"
            />
            <div className="gallery-item-info">
              <h3>Glazing &amp; Thermal Envelopes</h3>
              <p>Double-pane acoustic fenestration, PIR/Rockwool insulation, and weatherproofing.</p>
            </div>
          </div>
          <div className="gallery-item-card">
            <ConceptImage
              name="shipping-container-villas-offices"
              alt="Multi-module container structural engineering"
            />
            <div className="gallery-item-info">
              <h3>Multi-Module Container Complexes</h3>
              <p>Interlocking corner castings and load-bearing framing for multi-storey expansion.</p>
            </div>
          </div>
          <div className="gallery-item-card">
            <ConceptImage
              name="steel-modular-outdoor-container"
              alt="Transportable structural container modules"
            />
            <div className="gallery-item-info">
              <h3>Rapid-Deployment Utility Units</h3>
              <p>Rigid monocoque steel construction with integrated lifting points for crane transport.</p>
            </div>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </main>
  );
}
