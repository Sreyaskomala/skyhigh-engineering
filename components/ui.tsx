import Link from "next/link";
import Image from "next/image";
import { Brand } from "./header";
import { solutions, type Solution, process } from "@/lib/solutions";
export function ConceptImage({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`image-wrap ${className}`}>
      <Image
        src={`/images/${name}.webp`}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 70vw, 1200px"
        priority={priority}
      />
    </div>
  );
}
export function SolutionCard({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) {
  return (
    <Link className="solution-card" href={`/solutions/${solution.slug}`}>
      <ConceptImage name={solution.image} alt={`${solution.name} concept`} />
      <div className="card-label">
        <span className="index">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{solution.name}</h3>
          <p>{solution.short}</p>
        </div>
        <span className="card-plus" aria-hidden="true">
          +
        </span>
      </div>
    </Link>
  );
}
export function Process() {
  return (
    <div className="process-grid">
      {process.map(([name, text], i) => (
        <article key={name}>
          <span className="process-number">0{i + 1}</span>
          <h3>{name}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div>
        <p className="eyebrow">LET’S BUILD SOMETHING THAT FITS</p>
        <h2>
          Your vision.
          <br />
          Our engineering.
        </h2>
      </div>
      <div>
        <p>
          Tell us what you have in mind.
          <br />
          We’ll start with the space you need.
        </p>
        <Link className="button button-light" href="/contact">
          Discuss your project
        </Link>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" aria-label="Skyhigh Engineering home">
            <Brand stacked={true} />
          </Link>
          <p>
            Built smart. Built strong.
            <br />
            Built by Skyhigh.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/solutions">Our solutions</Link>
          <Link href="/engineering">Our approach</Link>
          <Link href="/about">About Skyhigh</Link>
          <Link href="/contact">Project enquiries</Link>
        </div>
        <div>
          <h3>Spaces for every purpose</h3>
          {[solutions[0], solutions[4], solutions[3], solutions[7]].map((s) => (
            <Link key={s.slug} href={`/solutions/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h3>Contact & Works</h3>
          <a
            href="https://wa.me/+919491447943?text=Hi%20Skyhigh%20Engineering%2C%20I%20would%20like%20to%20enquire%20about%20your%20modular%20and%20container%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp-link"
          >
            WhatsApp: +919491447943
          </a>
          <a href="mailto:skyhighengineering.in@gmail.com">
            skyhighengineering.in@gmail.com
          </a>
          <address className="footer-address">
            <strong>Factory:</strong>
            <br />
            Survey No. 733, ORR Rd,
            <br />
            Near Sundara Chaitanya Ashram,
            <br />
            Dundigal, Hyderabad,
            <br />
            Telangana 500043
          </address>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Survey+No.+733,+ORR+Rd,+Near+Sundara+Chaitanya+Ashram,+Dundigal,+Hyderabad,+Telangana+500043"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            View on Map →
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Skyhigh Engineering</span>
        <span>Imagery illustrates design concepts.</span>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
