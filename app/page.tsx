"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const artists = [
  {
    name: "Lavkant Chaudhary",
    origin: "Tharu",
    field: "Painting · Drawing · Installation",
    bio: "A Tharu artist whose practice brings lived memory, community knowledge, and the politics of place into contemporary form.",
    image: "/images/artists/lavkant-chaudhary.jpg",
    work: "/images/artworks/lavkant-work.jpg",
  },
  {
    name: "Hit Man Gurung",
    origin: "Tamu",
    field: "Painting · Mixed Media",
    bio: "Working through abstraction and material, Hit Man explores identity, belonging, and the emotional landscapes of a changing Nepal.",
    image: "/images/site/about.jpg",
    work: "/images/artworks/herbs-drawings.jpg",
  },
  {
    name: "Mekh Limbu",
    origin: "Yakthung",
    field: "Moving Image · Research",
    bio: "Mekh’s research-based practice holds language, migration, ritual, and Indigenous memory in layered moving-image works.",
    image: "/images/artists/mekh-limbu.jpg",
    work: "/images/artworks/mekh-mangdemma.jpg",
  },
  {
    name: "Sheelasha Rajbhandari",
    origin: "Newa",
    field: "Sculpture · Performance · Installation",
    bio: "A Newa artist working across sculpture and performance to question inherited histories and imagine more plural futures.",
    image: "/images/projects/not-less-expensive.jpg",
    work: "/images/artworks/ramkali-chaudhari.jpg",
  },
];

const works = [
  ["Chotlung: traversing spirits, redemptive songs", "Mekh Limbu", "2025", "/images/artists/mekh-limbu.jpg", "Moving image"],
  ["Study of History", "Subas Tamang", "2024", "/images/artworks/subas-study.jpg", "Printmaking"],
  ["Not Less Expensive Than Gold", "ArTree Nepal", "2024", "/images/projects/not-less-expensive.jpg", "Collective project"],
  ["A language carried forward", "Lavkant Chaudhary", "2025", "/images/artworks/lavkant-work.jpg", "Mixed media"],
  ["Mangdem’ma", "Mekh Limbu", "2022", "/images/artworks/mekh-mangdemma.jpg", "Video & textile"],
  ["Herbs Drawings", "ArTree Nepal", "2024", "/images/artworks/herbs-drawings.jpg", "Drawing"],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Logo({ small = false }: { small?: boolean }) {
  return <Image unoptimized className={small ? "logo logo-small" : "logo"} src="/images/site/artree-logo.png" alt="ArTree Nepal" width={small ? 44 : 72} height={small ? 44 : 72} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="ArTree Nepal home"><Logo small /><span>ArTree<br /><em>Nepal</em></span></a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#artists" onClick={() => setMenuOpen(false)}>Artists</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a conversation <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Artist collective · Kathmandu, Nepal</p>
          <h1>Many voices.<br /><span>One living</span><br />archive.</h1>
          <p className="hero-intro">ArTree Nepal is a collective of Indigenous artists making space for memory, resistance, and new ways of seeing.</p>
          <div className="hero-actions"><a className="button button-dark" href="#artists">Meet the artists <Arrow /></a><a className="text-link" href="#about">Discover our story <Arrow /></a></div>
        </div>
        <div className="hero-image-wrap"><Image unoptimized className="hero-image" src="/images/site/hero.webp" alt="Silam Sakma, an artwork from the ArTree Nepal archive" fill priority sizes="(max-width: 800px) 100vw, 52vw" /><div className="hero-caption"><span>01 / 04</span><span>Silam Sakma · archive view</span></div></div>
        <div className="hero-mark">14<br /><small>years<br />of making</small></div>
      </section>

      <section className="manifesto" id="about">
        <div className="section-label">01 — About ArTree</div>
        <div className="manifesto-grid"><h2>Art is a way of <i>remembering</i> together.</h2><div className="manifesto-copy"><p>ArTree Nepal was formed between 2012 and 2013, at a pivotal moment in Nepal’s history. Five artists from different Indigenous backgrounds came together to voice shared anxieties and feelings of non-belonging.</p><p>Rooted in reclamation, acceptance, and celebration, ArTree questions dominant narratives and imagines alternative ways of being and creating. Finances, space, resources, and decisions are shared equally among all members.</p><a className="text-link" href="#contact">Learn more about ArTree <Arrow /></a></div></div>
        <div className="marquee"><span>INDIGENEITY</span><span>MEMORY</span><span>RECLAMATION</span><span>COLLECTIVE CARE</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-top"><div><div className="section-label">02 — From the archive</div><h2>Selected <i>work</i></h2></div><a className="text-link" href="#contact">View all projects <Arrow /></a></div>
        <div className="work-grid">{works.map(([title, artist, year, image, type], index) => <article className={`work-card work-${index + 1}`} key={title}><a href="#contact" aria-label={`Enquire about ${title}`}><div className="work-image"><Image unoptimized src={image} alt={`${title} by ${artist}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="work-meta"><span>{artist}</span><span>{year}</span></div><h3>{title}</h3><p>{type}</p></a></article>)}</div>
      </section>

      <section className="artists-section" id="artists">
        <div className="section-top"><div><div className="section-label">03 — The collective</div><h2>Meet the <i>artists</i></h2></div><p className="section-note">Five distinct practices, connected by a shared commitment to Indigenous knowledge and collective action.</p></div>
        <div className="artists-grid">{artists.map((artist, index) => <article className="artist-card" key={artist.name}><a href="#contact"><div className="artist-image"><Image unoptimized src={artist.image} alt={artist.name} fill sizes="(max-width: 700px) 92vw, 25vw" /></div><div className="artist-index">0{index + 1}</div><div className="artist-info"><h3>{artist.name}</h3><p className="artist-field">{artist.origin} · {artist.field}</p><p>{artist.bio}</p><span className="card-link">Explore practice <Arrow /></span></div></a></article>)}</div>
      </section>

      <section className="feature"><div className="feature-image"><Image unoptimized src="/images/projects/silent-portraits.jpg" alt="Silent Portraits from Doha, Qatar and Kathmandu Time Lapse" fill sizes="(max-width: 800px) 100vw, 52vw" /></div><div className="feature-copy"><div className="section-label">04 — Current focus</div><p className="feature-kicker">A work by Mekh Limbu</p><h2>Silent Portraits<br />from <i>Doha</i></h2><p>A three-channel video project tracing the intertwined journeys of Nepali migrant workers, from rural homes to the Gulf and back through memory.</p><a className="button button-outline" href="#contact">Read about the project <Arrow /></a></div></section>

      <section className="contact-section" id="contact"><div className="contact-heading"><div className="section-label">05 — Say hello</div><h2>Let’s make room<br />for a <i>new story.</i></h2><p>For exhibitions, collaborations, research, or simply to learn more about ArTree Nepal, we’d love to hear from you.</p><div className="contact-details"><a href="mailto:artreenepal@gmail.com">artreenepal@gmail.com</a><a href="tel:+9779861626549">+977 986 162 6549</a><span>Samarpan Marg<br />Tripureshwor, Kathmandu</span></div></div><form className="contact-form" onSubmit={submitForm}><label>Your name<input name="name" required placeholder="Full name" /></label><label>Email address<input type="email" name="email" required placeholder="you@example.com" /></label><label>How can we help?<textarea name="message" required placeholder="Tell us a little about your project…" rows={4} /></label><button className="button button-dark" type="submit">{submitted ? "Message ready to send ✓" : "Send an enquiry"} <Arrow /></button>{submitted && <p className="success">Thank you — we’ll be in touch soon.</p>}</form></section>

      <footer className="site-footer"><a href="#top" className="footer-brand"><Logo /><span>ArTree Nepal<br /><small>Artists in common.</small></span></a><div className="footer-nav"><a href="#artists">Artists</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><div className="footer-social"><span>Follow the collective</span><div><a href="#contact">Instagram</a><a href="#contact">Facebook</a><a href="#contact">YouTube</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ArTree Nepal</span><span>Made with care in Kathmandu</span></div></footer>
    </main>
  );
}
