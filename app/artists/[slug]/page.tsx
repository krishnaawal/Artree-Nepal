import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { artists, getArtist } from "../../../data/artists";

export function generateStaticParams() { return artists.map((artist) => ({ slug: artist.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  return artist ? { title: `${artist.name} — ArTree Nepal`, description: artist.shortBio } : { title: "Artist — ArTree Nepal" };
}

export default async function ArtistPortfolio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  return (
    <main className="portfolio-page">
      <header className="portfolio-header"><a href="/" className="portfolio-brand" aria-label="ArTree Nepal home"><Image unoptimized src="/images/site/artree-logo.png" alt="ArTree Nepal" width={68} height={68} /><span>ArTree<br /><em>Nepal</em></span></a><a className="portfolio-back" href="/">← Back to collective</a></header>
      <section className="portfolio-hero"><div className="portfolio-hero-copy"><p className="eyebrow">Artist archive · {artist.community}</p><h1>{artist.name}</h1><p className="portfolio-field">{artist.field}</p><p className="portfolio-lede">{artist.shortBio}</p><div className="portfolio-meta"><span>Based in Kathmandu, Nepal</span><span>ArTree Nepal · member</span></div></div><div className="portfolio-portrait"><Image unoptimized src={artist.portrait} alt={artist.name} fill priority sizes="(max-width: 800px) 100vw, 43vw" /></div></section>
      <section className="portfolio-intro"><div className="section-label">01 — Practice</div><div className="portfolio-intro-grid"><div><h2>An archive in <i>motion.</i></h2><p className="statement">“{artist.statement}”</p></div><div className="bio-copy"><p>{artist.biography}</p><a className="button button-dark" href="mailto:artreenepal@gmail.com?subject=Enquiry about {artist.name}">Enquire about this artist ↗</a></div></div></section>
      <section className="portfolio-gallery"><div className="portfolio-section-top"><div><div className="section-label">02 — Selected works</div><h2>Gallery</h2></div><p>{artist.images.length} works from the archive</p></div><div className="portfolio-image-grid">{artist.images.map((work, index) => <figure className={`portfolio-image-card portfolio-image-${index + 1}`} key={work.title}><div className="portfolio-image"><Image unoptimized src={work.src} alt={work.title} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><figcaption><div><strong>{work.title}</strong><span>{work.caption}</span></div><div className="caption-meta"><span>{work.medium}</span><span>{work.year}</span></div></figcaption></figure>)}</div></section>
      <section className="portfolio-projects"><div className="section-label">03 — Projects</div><h2>Selected <i>projects</i></h2><div className="project-list">{artist.projects.map((project, index) => <article className="portfolio-project" key={project.title}><div className="project-cover"><Image unoptimized src={project.cover} alt={project.title} fill sizes="(max-width: 800px) 100vw, 42vw" /></div><div className="project-copy"><div className="project-number">0{index + 1}</div><div className="project-topline"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div></dl></div></article>)}</div></section>
      <footer className="portfolio-footer"><div><div className="section-label">04 — Continue the conversation</div><h2>Bring a new<br /><i>question.</i></h2></div><div><p>For exhibitions, collaborations, research, or more information about {artist.name}.</p><a className="button button-dark" href="mailto:artreenepal@gmail.com">Contact ArTree Nepal ↗</a></div></footer>
    </main>
  );
}
