import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { Areas } from "@/components/poster/areas";
import { Contact } from "@/components/poster/contact";
import { CallBar, Footer } from "@/components/poster/footer";
import { Hero } from "@/components/poster/hero";
import { Masthead } from "@/components/poster/masthead";
import { PrintFilters } from "@/components/poster/ornaments";
import { ProblemBoard } from "@/components/poster/problem-board";
import { Services } from "@/components/poster/services";
import { Work } from "@/components/poster/work";
import { site, situations } from "@/lib/site";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <PrintFilters />
      <Masthead />
      <main id="main" className="page">
        <Hero />
        <section id="problems" className="section" aria-labelledby="problems-title">
          <h2 id="problems-title" className="section-head">
            What&apos;s playing up?
          </h2>
          <ProblemBoard situations={situations} phone={{ display: site.phone.display, href: site.phone.href }} />
        </section>
        <Services />
        <Work />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
