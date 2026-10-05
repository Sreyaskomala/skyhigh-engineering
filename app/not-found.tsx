import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section page-intro">
      <p className="eyebrow">404 / SPACE NOT FOUND</p>
      <h1>
        Let’s find
        <br />
        the right place.
      </h1>
      <p>
        This page is not available. Explore our solutions to find what you need.
      </p>
      <Link href="/solutions" className="button button-dark">
        Explore solutions
      </Link>
    </main>
  );
}
