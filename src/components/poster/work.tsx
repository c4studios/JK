import { PrintedPhoto } from "@/components/poster/printed-photo";
import { workPhotos } from "@/lib/site";

export function Work() {
  const [ute, camera, ...jobs] = workPhotos;

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <h2 id="work-title" className="section-head">
        Our work
      </h2>
      <p className="section-note">
        Photos from the business: the ute, the gear and finished jobs, printed in one ink.
        <span className="hover-note"> Hover a photo to see it in colour.</span>
      </p>
      <div className="work-grid">
        <PrintedPhoto photo={ute} sizes="(min-width: 52rem) 60vw, 100vw" className="print--feature" />
        <PrintedPhoto photo={camera} sizes="(min-width: 52rem) 30vw, 50vw" className="print--tall-pair" />
        {jobs.map((photo) => (
          <PrintedPhoto key={photo.src} photo={photo} sizes="(min-width: 52rem) 30vw, 50vw" />
        ))}
      </div>
    </section>
  );
}
