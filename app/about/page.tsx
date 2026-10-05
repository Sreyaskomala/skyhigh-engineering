import type { Metadata } from "next";
import { ConceptImage, ProjectCTA } from "@/components/ui";
export const metadata: Metadata = {
  title: "About Skyhigh",
  description:
    "Meet Skyhigh Engineering, a technology-driven prefab and modular construction company.",
};
export default function About() {
  return (
    <main id="main">
      <section className="section page-intro">
        <p className="eyebrow">ABOUT SKYHIGH ENGINEERING</p>
        <h1>
          Built smart.
          <br />
          Built strong.
          <br />
          <span>Built by Skyhigh.</span>
        </h1>
        <div className="about-story">
          <p className="body-large">
            We are a technology-driven prefabricated and modular construction
            company, focused on designing, engineering, manufacturing and
            delivering customized building solutions.
          </p>
          <p>
            Our work brings advanced design technologies and precision
            fabrication together with practical construction methods. From
            container cabins to modular infrastructure, we design around how a
            space needs to function.
          </p>
        </div>
        <ConceptImage
          name="hero"
          alt="Architectural concept of a modular glass-front building"
          priority
        />
      </section>
      <section className="section mission-grid">
        <article>
          <p className="eyebrow">OUR VISION</p>
          <h2>
            Possibility,
            <br />
            without standing still.
          </h2>
          <p>
            To become a trusted technology-driven engineering and modular
            construction company, delivering innovative, sustainable, reliable
            and highly customized building solutions across India and global
            markets.
          </p>
        </article>
        <article>
          <p className="eyebrow">OUR MISSION</p>
          <h2>
            Make construction
            <br />
            work smarter.
          </h2>
          <p>
            To make construction faster, smarter, more flexible and more
            efficient through advanced engineering, prefabrication, modular
            construction and technology-driven customization, without
            compromising quality, safety, durability or functionality.
          </p>
        </article>
      </section>
      <ProjectCTA />
    </main>
  );
}
