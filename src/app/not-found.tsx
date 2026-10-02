import Link from "next/link";
import { CallBar, Footer } from "@/components/poster/footer";
import { Masthead } from "@/components/poster/masthead";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Masthead />
      <main id="main" className="page notfound">
        <h1 className="panel__title">This page isn&apos;t here.</h1>
        <p className="panel__text">
          Head back to the <Link href="/">front page</Link>, or call us on{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
