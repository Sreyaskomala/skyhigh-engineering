import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions, customization } from "@/lib/solutions";
import { ConceptImage, SolutionCard } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  return { title: s?.name ?? "Solution not found", description: s?.intro };
}
export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  if (!s) notFound();
  const index = solutions.indexOf(s);
  return (
    <main id="main">
      <section className="section detail-intro">
        <Link className="breadcrumb" href="/solutions">
          All solutions / {String(index + 1).padStart(2, "0")}
        </Link>
        <div className="section-heading">
          <h1>{s.name}</h1>
          <div>
            <p className="body-large">{s.intro}</p>
            <Link
              href={`/contact?solution=${s.slug}`}
              className="button button-dark"
            >
              Discuss this solution
            </Link>
          </div>
        </div>
        <ConceptImage
          name={s.image}
          alt={`${s.name} architectural concept`}
          priority
        />
        <p className="image-disclaimer">
          Illustrative design concept. Your project is developed around your
          requirements.
        </p>
      </section>
      <section className="section offerings">
        <div>
          <p className="eyebrow">POSSIBILITIES, ENGINEERED</p>
          <h2>{s.short}</h2>
          <p className="body-large">{s.detail}</p>
          <div className="tags">
            {s.applications.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
        <div>
          <h3>Explore the possibilities</h3>
          <ul className="offering-list">
            {s.offerings.map((o, i) => (
              <li key={o}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section customization-band">
        <p className="eyebrow">MAKE IT YOURS</p>
        <h2>Designed around the details.</h2>
        <p>
          Discuss the features your space needs, from its overall footprint to
          the finishing touches.
        </p>
        <div className="tags">
          {customization.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <Link
          href={`/contact?solution=${s.slug}`}
          className="button button-dark"
        >
          Start your project brief
        </Link>
      </section>
      <section className="section">
        <div className="section-heading">
          <h2>More possibilities.</h2>
          <Link href="/solutions" className="text-link">
            All solutions
          </Link>
        </div>
        <div className="featured-grid">
          {[solutions[(index + 1) % 8], solutions[(index + 2) % 8]].map((t) => (
            <SolutionCard
              key={t.slug}
              solution={t}
              index={solutions.indexOf(t)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
