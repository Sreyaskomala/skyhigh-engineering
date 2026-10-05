import type { Metadata } from "next";
import { SolutionCard, ProjectCTA } from "@/components/ui";
import { solutions } from "@/lib/solutions";
export const metadata: Metadata = {
  title: "Our solutions",
  description:
    "Explore eight families of prefab, modular, container and portable building solutions.",
};
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
      <ProjectCTA />
    </main>
  );
}
