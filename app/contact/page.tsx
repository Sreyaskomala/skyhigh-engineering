import type { Metadata } from "next";
import EnquiryForm from "@/components/enquiry-form";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Discuss your project",
  description:
    "Start your project brief for a customized prefab, modular or container building.",
};

export const dynamic = "force-dynamic";

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ solution?: string }>;
}) {
  const { solution } = await searchParams;
  const initialSolution = solutions.some((s) => s.slug === solution)
    ? solution
    : "";

  return (
    <main id="main">
      <section className="section contact-layout">
        <div>
          <p className="eyebrow">YOUR NEXT SPACE STARTS HERE</p>
          <h1>
            Let’s make
            <br />
            <span>room for it.</span>
          </h1>
          <p className="body-large">
            A new workspace. A place to stay.
            <br />A business idea ready to take shape.
          </p>
          <p>
            Tell us what you’re imagining and what your space needs to do. Start
            with what you know; the details can develop from there.
          </p>
          <div className="contact-guide">
            <h2>A useful starting point</h2>
            <ul>
              <li>What you’ll use the space for</li>
              <li>Your location and approximate dimensions</li>
              <li>Any layout, finish or timeline requirements</li>
            </ul>
          </div>
        </div>
        <div className="form-panel">
          <h2>Your project brief</h2>
          <p>Fields marked * are required.</p>
          <EnquiryForm initialSolution={initialSolution} />
        </div>
      </section>
    </main>
  );
}
