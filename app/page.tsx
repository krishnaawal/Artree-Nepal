"use client";

import Image from "next/image";
import { CSSProperties, FormEvent, useEffect, useState } from "react";

const artists = [
  { slug: "lavkant-chaudhary", name: "Lavkant Chaudhary", origin: "Tharu", field: "Painting · Drawing · Installation", bio: "A Tharu artist bringing lived memory, community knowledge, and the politics of place into contemporary form.", image: "/images/artists/lavkant-chaudhary.jpg" },
  { slug: "hit-man-gurung", name: "Hit Man Gurung", origin: "Tamu", field: "Painting · Mixed Media", bio: "Working through abstraction and material, Hit Man explores identity, belonging, and the emotional landscapes of a changing Nepal.", image: "/images/site/about.jpg" },
  { slug: "mekh-limbu", name: "Mekh Limbu", origin: "Yakthung", field: "Moving Image · Research", bio: "Mekh’s research-based practice holds language, migration, ritual, and Indigenous memory in layered moving-image works.", image: "/images/artists/mekh-limbu.jpg" },
  { slug: "sheelasha-rajbhandari", name: "Sheelasha Rajbhandari", origin: "Newa", field: "Sculpture · Performance · Installation", bio: "A Newa artist working across sculpture and performance to question inherited histories and imagine more plural futures.", image: "/images/projects/not-less-expensive.jpg" },
  { slug: "subas-tamang", name: "Subas Tamang", origin: "Tamang", field: "Carving · Printmaking · Multimedia", bio: "A Tamang artist using inherited carving skills, printmaking, and new technologies to archive undocumented histories.", image: "/images/artists/subas-tamang.jpg" },
];

const galleryItems = [
  ["Samsama", "Mekh Limbu", "2025", "gallery-01.jpg"],
  ["Study of History II", "Subas Tamang", "2024", "gallery-02.jpg"],
  ["Archive fragment", "ArTree Nepal", "2024", "gallery-03.jpg"],
  ["Field note", "Lavkant Chaudhary", "2025", "gallery-04.jpg"],
  ["Living memory", "ArTree Nepal", "2024", "gallery-05.jpg"],
  ["Moving image still", "Mekh Limbu", "2022", "gallery-06.webp"],
  ["A language carried forward", "Lavkant Chaudhary", "2025", "gallery-07.jpg"],
  ["Ramkali Chaudhari", "ArTree Nepal", "2024", "gallery-08.jpg"],
  ["Document / gesture", "ArTree Nepal", "2024", "gallery-09.jpg"],
  ["Untitled study", "ArTree Nepal", "2024", "gallery-10.jpg"],
  ["Not Less Expensive Than Gold", "ArTree Nepal", "2016–20", "gallery-11.jpg"],
  ["Silent Portraits from Doha", "Mekh Limbu", "2017", "gallery-12.jpg"],
  ["Archive study", "ArTree Nepal", "2024", "gallery-13.jpg"],
  ["Sukaura Kot", "ArTree Nepal", "2024", "gallery-14.jpg"],
  ["Maoist archive", "ArTree Nepal", "2007", "gallery-15.jpg"],
  ["Mangdem’ma", "Mekh Limbu", "2022", "gallery-16.webp"],
  ["Study of History IV", "Subas Tamang", "2024", "gallery-17.jpg"],
  ["Study of History V", "Subas Tamang", "2024", "gallery-18.jpg"],
  ["Archive fragment", "ArTree Nepal", "2024", "gallery-19.jpg"],
  ["Not Less Expensive Than Gold II", "ArTree Nepal", "2016–20", "gallery-20.jpg"],
  ["Field recording", "ArTree Nepal", "2024", "gallery-21.webp"],
  ["Printed matter", "ArTree Nepal", "2024", "gallery-22.jpg"],
  ["Not Less Expensive Than Gold III", "ArTree Nepal", "2016–20", "gallery-23.jpg"],
  ["Bhukhali Devi Tharuni", "ArTree Nepal", "2024", "gallery-24.jpg"],
] as const;

const archiveCardTilts = [-7, 4, -3, 8, -5, 6, -8, 3, 7, -4, 5, -6, 2, -9, 4, -3, 8, -5, 6, -7, 3, -4, 7, -2];
const archiveCardOffsets = [6, -8, 3, -11, 5, -4, 9, -6, 2, -10, 7, -3, 11, -5, 4, -9, 6, -2, 8, -7, 3, -4, 10, -6];
const archiveCardRatios = ["4 / 3", "3 / 4", "1 / 1", "5 / 4", "4 / 3", "3 / 4", "16 / 10", "1 / 1", "4 / 3", "3 / 4", "5 / 4", "4 / 3", "1 / 1", "3 / 4", "4 / 3", "16 / 10", "5 / 4", "3 / 4", "1 / 1", "4 / 3", "3 / 4", "5 / 4", "4 / 3", "1 / 1"];
const archiveCardPositions = [
  ["8%", "5%"], ["24%", "5%"], ["40%", "5%"], ["56%", "5%"], ["72%", "5%"], ["88%", "5%"],
  ["95%", "18%"], ["95%", "32%"], ["95%", "46%"], ["95%", "60%"], ["95%", "74%"], ["95%", "88%"],
  ["88%", "95%"], ["72%", "95%"], ["56%", "95%"], ["40%", "95%"], ["24%", "95%"], ["8%", "95%"],
  ["5%", "88%"], ["5%", "74%"], ["5%", "60%"], ["5%", "46%"], ["5%", "32%"], ["5%", "18%"],
] as const;

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Logo({ small = false }: { small?: boolean }) {
  return <Image className={small ? "logo logo-small" : "logo"} src="/images/site/artree-logo.png" alt="ArTree Nepal" width={small ? 42 : 62} height={small ? 42 : 62} />;
}

function ArchiveOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const active = galleryItems[activeIndex];

  useEffect(() => {
    if (!previewOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setPreviewOpen(false); };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = ""; };
  }, [previewOpen]);

  useEffect(() => {
    const slideshow = window.setInterval(() => { if (window.innerWidth <= 800) setActiveIndex((current) => (current + 1) % galleryItems.length); }, 2000);
    return () => window.clearInterval(slideshow);
  }, []);

  return (
    <div className="archive-gallery" aria-label="Rotating gallery of works from the ArTree Nepal archive">
      <div className="archive-orbit">
        <div className="archive-orbit-ring" aria-hidden="true" />
        <div className="archive-orbit-track">
          {galleryItems.map(([title, artist, year, image], index) => (
            <button
              className={`archive-orbit-item ${activeIndex === index ? "is-active" : ""}`}
              key={image}
              type="button"
              style={{ left: archiveCardPositions[index][0], top: archiveCardPositions[index][1], "--angle": `${(index / galleryItems.length) * 360}deg`, "--tilt": `${archiveCardTilts[index]}deg`, "--offset": `${archiveCardOffsets[index]}px`, "--ratio": archiveCardRatios[index], "--delay": `${-(index * (78 / galleryItems.length))}s`, zIndex: 2 + (index % 5) } as CSSProperties}
              aria-label={`Preview ${title} by ${artist}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => { setActiveIndex(index); setPreviewOpen(true); }}
            >
              <span className="archive-orbit-image"><Image src={`/images/gallery/${image}`} alt="" fill loading="lazy" sizes="(max-width: 800px) 90px, 120px" /></span>
            </button>
          ))}
        </div>
      </div>
      <div className="archive-preview" aria-live="polite">
        <div className="archive-preview-image"><Image src={`/images/gallery/${active[3]}`} alt={`${active[0]} by ${active[1]}`} fill priority sizes="(max-width: 800px) 64vw, 420px" /></div>
        <div className="archive-preview-copy"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(galleryItems.length).padStart(2, "0")}</span><strong>{active[0]}</strong><small>{active[1]} · {active[2]}</small></div>
      </div>
      <div className="archive-gallery-note"><span>Move through the archive</span><small>Hover to enlarge · click to open full view</small></div>
      {previewOpen && <div className="archive-lightbox" role="dialog" aria-modal="true" aria-label={`Full preview of ${active[0]}`} onClick={() => setPreviewOpen(false)}><div className="archive-lightbox-panel" onClick={(event) => event.stopPropagation()}><button className="archive-lightbox-close" type="button" aria-label="Close preview" onClick={() => setPreviewOpen(false)}>×</button><div className="archive-lightbox-image"><Image src={`/images/gallery/${active[3]}`} alt={`${active[0]} by ${active[1]}`} fill priority sizes="90vw" /></div><div className="archive-lightbox-meta"><span>{active[1]} · {active[2]}</span><strong>{active[0]}</strong></div></div></div>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function submitForm(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="ArTree Nepal home"><Logo small /></a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Archive</a>
          <a href="#artists" onClick={() => setMenuOpen(false)}>Artists</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-paper" />
        <div className="hero-collage" aria-label="A collage of works from the ArTree Nepal archive">
          <div className="collage-piece collage-main"><video autoPlay muted loop playsInline preload="metadata" poster="/images/site/bhasha-andolan-poster.jpg" aria-label="Bhasha Andolan animated banner from the ArTree Nepal archive"><source src="/images/site/bhasha-andolan.webm" type="video/webm" /><img src="/images/site/bhasha-andolan-poster.jpg" alt="Bhasha Andolan banner from the ArTree Nepal archive" /></video></div>
          <div className="collage-piece collage-sub"><Image src="/images/site/screenshot-20250224-164040.jpg" alt="Archived performance image from ArTree Nepal" fill loading="lazy" sizes="(max-width: 800px) 48vw, 22vw" /></div>
          <div className="collage-piece collage-side"><Image src="/images/site/silam-sakma.webp" alt="Silam Sakma textile work from the ArTree Nepal archive" fill loading="lazy" sizes="(max-width: 800px) 30vw, 16vw" /></div>
          <div className="collage-note">From the archive<br /><span>Kathmandu · Nepal</span></div>
          <div className="collage-stamp">14<br /><small>years<br />of making</small></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Artist collective · Kathmandu, Nepal</p>
          <h1>Many voices.<br /><i>One living archive.</i></h1>
          <p className="hero-intro">ArTree Nepal is a collective of Indigenous artists making space for memory, resistance, and new ways of seeing.</p>
          <div className="hero-actions"><a className="button button-light" href="#work">Enter the archive <Arrow /></a><a className="text-link light-link" href="#artists">Meet the artists <Arrow /></a></div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="section-label">01 — About ArTree</div>
        <div className="manifesto-grid"><h2>Art is a way of <i>remembering</i> together.</h2><div className="manifesto-copy"><p>Formed between 2012 and 2013, ArTree Nepal brings five artists from different Indigenous backgrounds together to voice shared anxieties and feelings of non-belonging.</p><p>Rooted in reclamation, acceptance, and celebration, the collective questions dominant narratives and shares resources, decisions, and care equally.</p><a className="text-link" href="#contact">Start a conversation <Arrow /></a></div></div>
        <div className="marquee"><span>INDIGENEITY</span><span>MEMORY</span><span>RECLAMATION</span><span>COLLECTIVE CARE</span></div>
      </section>

      <section className="work-section archive-section" id="work">
        <div className="archive-section-heading"><div className="section-label">02 — From the archive</div><p>Twenty-four fragments from the collective’s living archive.</p></div>
        <ArchiveOrbit />
      </section>

      <section className="artists-section" id="artists">
        <div className="section-top"><div><div className="section-label">03 — The collective</div><h2>Meet the <i>artists</i></h2></div><p className="section-note">Five distinct practices, connected by a shared commitment to Indigenous knowledge and collective action.</p></div>
        <div className="artists-grid">{artists.map((artist, index) => <article className="artist-card" key={artist.name}><a href={`/artists/${artist.slug}`}><div className="artist-image"><Image src={artist.image} alt={artist.name} fill loading="lazy" sizes="(max-width: 700px) 92vw, 25vw" /></div><div className="artist-index">0{index + 1}</div><div className="artist-info"><h3>{artist.name}</h3><p className="artist-field">{artist.origin} · {artist.field}</p><p>{artist.bio}</p><span className="card-link">Explore practice <Arrow /></span></div></a></article>)}</div>
      </section>

      <section className="feature" id="focus"><div className="feature-image"><Image src="/images/projects/silent-portraits.jpg" alt="Silent Portraits by Mekh Limbu" fill loading="lazy" sizes="(max-width: 800px) 100vw, 52vw" /></div><div className="feature-copy"><div className="section-label">04 — Current focus</div><p className="feature-kicker">A work by Mekh Limbu</p><h2>Silent Portraits<br />from <i>Doha</i></h2><p>A three-channel video project tracing the intertwined journeys of Nepali migrant workers, from rural homes to the Gulf and back through memory.</p><a className="button button-outline" href="/artists/mekh-limbu">Read about the project <Arrow /></a></div></section>

      <section className="contact-section" id="contact"><div className="contact-heading"><div className="section-label">05 — Say hello</div><h2>Let’s make room<br />for a <i>new story.</i></h2><p>For exhibitions, collaborations, research, or simply to learn more about ArTree Nepal, we’d love to hear from you.</p><div className="contact-details"><a href="mailto:artreenepal@gmail.com">artreenepal@gmail.com</a><a href="tel:+9779861626549">+977 986 162 6549</a><span>Samarpan Marg<br />Tripureshwor, Kathmandu</span></div></div><form className="contact-form" onSubmit={submitForm}><label>Your name<input name="name" required placeholder="Full name" /></label><label>Email address<input type="email" name="email" required placeholder="you@example.com" /></label><label>How can we help?<textarea name="message" required placeholder="Tell us a little about your project…" rows={4} /></label><button className="button button-dark" type="submit">{submitted ? "Message ready to send ✓" : "Send an enquiry"} <Arrow /></button>{submitted && <p className="success">Thank you — we’ll be in touch soon.</p>}</form></section>

      <footer className="site-footer"><a href="#top" className="footer-brand" aria-label="ArTree Nepal home"><Logo /><span>ArTree Nepal<br /><small>Artists in common.</small></span></a><div className="footer-nav"><a href="#work">Archive</a><a href="#artists">Artists</a><a href="/about">About</a><a href="#contact">Contact</a></div><div className="footer-social"><span>Follow the collective</span><div><a href="#contact">Instagram</a><a href="#contact">Facebook</a><a href="#contact">YouTube</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ArTree Nepal</span><span>Made with care in Kathmandu</span></div></footer>
    </main>
  );
}
