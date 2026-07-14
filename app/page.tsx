"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const artists = [
  { slug: "lavkant-chaudhary", name: "Lavkant Chaudhary", origin: "Tharu", field: "Painting · Drawing · Installation", bio: "A Tharu artist bringing lived memory, community knowledge, and the politics of place into contemporary form.", image: "/images/artists/lavkant-chaudhary.jpg" },
  { slug: "hit-man-gurung", name: "Hit Man Gurung", origin: "Tamu", field: "Painting · Mixed Media", bio: "Working through abstraction and material, Hit Man explores identity, belonging, and the emotional landscapes of a changing Nepal.", image: "/images/site/about.jpg" },
  { slug: "mekh-limbu", name: "Mekh Limbu", origin: "Yakthung", field: "Moving Image · Research", bio: "Mekh’s research-based practice holds language, migration, ritual, and Indigenous memory in layered moving-image works.", image: "/images/artists/mekh-limbu.jpg" },
  { slug: "sheelasha-rajbhandari", name: "Sheelasha Rajbhandari", origin: "Newa", field: "Sculpture · Performance · Installation", bio: "A Newa artist working across sculpture and performance to question inherited histories and imagine more plural futures.", image: "/images/projects/not-less-expensive.jpg" },
  { slug: "subas-tamang", name: "Subas Tamang", origin: "Tamang", field: "Carving · Printmaking · Multimedia", bio: "A Tamang artist using inherited carving skills, printmaking, and new technologies to archive undocumented histories.", image: "/images/artists/subas-tamang.jpg" },
];

const works = [
  { title: "Not Less Expensive Than Gold", artist: "ArTree Nepal", year: "2016–20", type: "Collective project · Moving image", image: "/images/projects/not-less-expensive.jpg", slug: "sheelasha-rajbhandari" },
  { title: "Study of History", artist: "Subas Tamang", year: "2024", type: "Printmaking", image: "/images/portfolio/subas/study-history.jpg", slug: "subas-tamang" },
  { title: "Mangdem’ma", artist: "Mekh Limbu", year: "2022", type: "Video & textile", image: "/images/artworks/mekh-mangdemma.jpg", slug: "mekh-limbu" },
  { title: "A language carried forward", artist: "Lavkant Chaudhary", year: "2025", type: "Mixed media", image: "/images/artworks/lavkant-work.jpg", slug: "lavkant-chaudhary" },
  { title: "Herbs Drawings", artist: "ArTree Nepal", year: "2024", type: "Drawing & installation", image: "/images/artworks/herbs-drawings.jpg", slug: "sheelasha-rajbhandari" },
  { title: "Chotlung: traversing spirits", artist: "Mekh Limbu", year: "2025", type: "Moving image", image: "/images/portfolio/mekh/chotlung-01.jpg", slug: "mekh-limbu" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Logo({ small = false }: { small?: boolean }) {
  return <Image unoptimized className={small ? "logo logo-small" : "logo"} src="/images/site/artree-logo.png" alt="ArTree Nepal" width={small ? 42 : 62} height={small ? 42 : 62} />;
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
          <div className="collage-piece collage-main"><Image unoptimized src="/images/site/silam-sakma.webp" alt="Silam Sakma textile artwork from the ArTree Nepal archive" fill priority sizes="(max-width: 800px) 84vw, 48vw" /></div>
          <div className="collage-piece collage-sub"><Image unoptimized src="/images/portfolio/subas/study-history.jpg" alt="Study of History by Subas Tamang" fill sizes="(max-width: 800px) 48vw, 22vw" /></div>
          <div className="collage-piece collage-side"><Image unoptimized src="/images/site/samaniya-rana.jpg" alt="Samaniya Rana from the ArTree Nepal archive" fill sizes="(max-width: 800px) 30vw, 16vw" /></div>
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

      <section className="work-section" id="work">
        <div className="section-top"><div><div className="section-label">02 — From the archive</div><h2>Works that <i>remember.</i></h2></div><p className="section-note">Paintings, prints, moving images, and installations held together by lived histories.</p></div>
        <div className="work-grid">{works.map((work, index) => <article className={`work-card work-${index + 1}`} key={work.title}><a href={`/artists/${work.slug}`} aria-label={`Open ${work.title} by ${work.artist}`}><div className="work-image"><Image unoptimized src={work.image} alt={`${work.title} by ${work.artist}`} fill loading={index > 1 ? "lazy" : undefined} sizes="(max-width: 700px) 100vw, 33vw" /><span className="work-hover">View artist <Arrow /></span></div><div className="work-meta"><span>{work.artist}</span><span>{work.year}</span></div><h3>{work.title}</h3><p>{work.type}</p></a></article>)}</div>
      </section>

      <section className="artists-section" id="artists">
        <div className="section-top"><div><div className="section-label">03 — The collective</div><h2>Meet the <i>artists</i></h2></div><p className="section-note">Five distinct practices, connected by a shared commitment to Indigenous knowledge and collective action.</p></div>
        <div className="artists-grid">{artists.map((artist, index) => <article className="artist-card" key={artist.name}><a href={`/artists/${artist.slug}`}><div className="artist-image"><Image unoptimized src={artist.image} alt={artist.name} fill loading="lazy" sizes="(max-width: 700px) 92vw, 25vw" /></div><div className="artist-index">0{index + 1}</div><div className="artist-info"><h3>{artist.name}</h3><p className="artist-field">{artist.origin} · {artist.field}</p><p>{artist.bio}</p><span className="card-link">Explore practice <Arrow /></span></div></a></article>)}</div>
      </section>

      <section className="feature" id="focus"><div className="feature-image"><Image unoptimized src="/images/projects/silent-portraits.jpg" alt="Silent Portraits by Mekh Limbu" fill loading="lazy" sizes="(max-width: 800px) 100vw, 52vw" /></div><div className="feature-copy"><div className="section-label">04 — Current focus</div><p className="feature-kicker">A work by Mekh Limbu</p><h2>Silent Portraits<br />from <i>Doha</i></h2><p>A three-channel video project tracing the intertwined journeys of Nepali migrant workers, from rural homes to the Gulf and back through memory.</p><a className="button button-outline" href="/artists/mekh-limbu">Read about the project <Arrow /></a></div></section>

      <section className="contact-section" id="contact"><div className="contact-heading"><div className="section-label">05 — Say hello</div><h2>Let’s make room<br />for a <i>new story.</i></h2><p>For exhibitions, collaborations, research, or simply to learn more about ArTree Nepal, we’d love to hear from you.</p><div className="contact-details"><a href="mailto:artreenepal@gmail.com">artreenepal@gmail.com</a><a href="tel:+9779861626549">+977 986 162 6549</a><span>Samarpan Marg<br />Tripureshwor, Kathmandu</span></div></div><form className="contact-form" onSubmit={submitForm}><label>Your name<input name="name" required placeholder="Full name" /></label><label>Email address<input type="email" name="email" required placeholder="you@example.com" /></label><label>How can we help?<textarea name="message" required placeholder="Tell us a little about your project…" rows={4} /></label><button className="button button-dark" type="submit">{submitted ? "Message ready to send ✓" : "Send an enquiry"} <Arrow /></button>{submitted && <p className="success">Thank you — we’ll be in touch soon.</p>}</form></section>

      <footer className="site-footer"><a href="#top" className="footer-brand" aria-label="ArTree Nepal home"><Logo /></a><div className="footer-nav"><a href="#work">Archive</a><a href="#artists">Artists</a><a href="/about">About</a><a href="#contact">Contact</a></div><div className="footer-social"><span>Follow the collective</span><div><a href="#contact">Instagram</a><a href="#contact">Facebook</a><a href="#contact">YouTube</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ArTree Nepal</span><span>Made with care in Kathmandu</span></div></footer>
    </main>
  );
}
