import Image from "next/image";

const pdfArchiveImages = Array.from({ length: 72 }, (_, index) => `/images/about/pdf/page-${String(index).padStart(3, "0")}.jpg`);
const fieldImages = [
  ["Lati Chaudhari", "/images/about/field/Lati Chaudhari_Sukhaura Kot, Dang.jpg"],
  ["Ramkali Chaudhari", "/images/about/field/Ramkali Chaudhari_Harihar gaun, Dang.jpg"],
  ["Arsi Chaudhari", "/images/about/field/Arsi Chaudhari_Dang__Sukhaura Kot, Dang.jpg"],
  ["Samaniya Rana", "/images/about/field/Samaniya Rana (Nandakali_s mom)_Kanchanpur.jpg"],
  ["Sukaura Kot", "/images/about/field/Sukaura Kot, Dang_)2.jpg"],
  ["Bhukhali Devi Tharuni", "/images/about/field/Bhukhali Devi Tharuni_Kharraeti Kailali.jpg"],
];

const members = [
  ["Lavkant Chaudhary", "Tharu", "Painting, drawing, installation"],
  ["Hit Man Gurung", "Tamu", "Painting, mixed media"],
  ["Mekh Limbu", "Yakthung", "Moving image, research"],
  ["Sheelasha Rajbhandari", "Newa", "Sculpture, performance, installation"],
  ["Subas Tamang", "Tamang", "Carving, printmaking, multimedia"],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header about-header">
        <a href="/" className="brand" aria-label="ArTree Nepal home"><Image unoptimized className="logo logo-small" src="/images/site/artree-logo.png" alt="ArTree Nepal" width={42} height={42} /><span>ArTree<br /><em>Nepal</em></span></a>
        <nav className="nav about-nav"><a href="/">Archive</a><a href="/#artists">Artists</a><a className="active" href="/about">About</a><a href="/#contact">Contact</a></nav>
      </header>

      <section className="about-hero"><Image unoptimized src="/images/about/pdf/page-001.jpg" alt="An image from the ArTree Nepal archive" fill priority sizes="100vw" /><div className="about-hero-overlay" /><div className="about-hero-copy"><p className="eyebrow">About ArTree Nepal · Kathmandu</p><h1>A collective for<br /><i>living histories.</i></h1><p>Five artists. Many Indigenous worlds. One shared space for memory, reclamation, and new ways of making.</p></div><span className="about-hero-index">01 / ABOUT</span></section>

      <section className="about-story"><div className="section-label">01 — The collective</div><div className="about-story-grid"><h2>Making room for<br /><i>many identities.</i></h2><div className="about-prose"><p>ArTree Nepal was formed between 2012 and 2013, at the turn of the millennium and during a pivotal moment in Nepal’s history. Emerging in the aftermath of the decade-long People’s War and the mass protests that sought to dismantle monarchical power, the collective took shape amid a political climate that had long upheld a singular national identity centered on the monarchy, Hinduism, and the Nepali language.</p><p>That identity erased and delegitimized diverse histories. In this political cauldron, and amid the formative years of the Federalism movement, five artists from different Indigenous backgrounds came together to voice shared anxieties and feelings of non-belonging.</p></div></div><div className="about-pullquote">“A space to make sense of our Indigeneity and interrogate codified histories.”</div></section>

      <section className="member-section"><div className="section-label">02 — Five practices</div><h2>Artists in <i>common.</i></h2><div className="member-grid">{members.map(([name, community, practice], index) => <a className="member-card" href={`/artists/${name.toLowerCase().replaceAll(" ", "-")}`} key={name}><span>0{index + 1}</span><h3>{name}</h3><strong>{community}</strong><p>{practice}</p><b>View practice ↗</b></a>)}</div></section>

      <section className="values-section"><div className="values-image"><Image unoptimized src="/images/about/field/Samaniya Rana (Nandakali_s mom)_Kanchanpur.jpg" alt="Indigenous tattoo documentation from Kanchanpur" fill loading="lazy" sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="values-copy"><div className="section-label">03 — What guides us</div><h2>Reclamation.<br />Acceptance.<br /><i>Celebration.</i></h2><p>ArTree questions dominant narratives and imagines alternative ways of being and creating. The collective shares finances, space, resources, and decisions equally among all members.</p><p>Through this practice, the artists reflect on what it means to engage with Indigeneity, define art outside imposed frameworks, and move beyond categories that exoticize or diminish lived knowledge.</p></div></section>

      <section className="fieldwork-section"><div className="section-top"><div><div className="section-label">04 — Field notes</div><h2>Images from<br /><i>the ground.</i></h2></div><p className="section-note">Photographs and documents gathered through the collective’s research, collaborations, and lived archives.</p></div><div className="fieldwork-grid">{fieldImages.map(([caption, src]) => <figure key={src}><Image unoptimized src={src} alt={caption} fill loading="lazy" sizes="(max-width: 800px) 50vw, 20vw" /><figcaption>{caption}</figcaption></figure>)}</div></section>

      <section className="pdf-archive-section"><div className="section-top"><div><div className="section-label">05 — PDF archive</div><h2>The archive<br /><i>in full.</i></h2></div></div><div className="pdf-grid">{pdfArchiveImages.map((src, index) => <figure key={src}><Image unoptimized src={src} alt={`ArTree Nepal PDF archive image ${index + 1}`} fill loading="lazy" sizes="(max-width: 700px) 50vw, 16vw" /><figcaption>{String(index + 1).padStart(2, "0")}</figcaption></figure>)}</div></section>

      <section className="about-contact"><div><div className="section-label">06 — Stay connected</div><h2>Keep the<br /><i>conversation</i><br />moving.</h2></div><div><p>For exhibitions, collaborations, research, or simply to learn more about ArTree Nepal, we would love to hear from you.</p><a className="button button-light" href="mailto:artreenepal@gmail.com">artreenepal@gmail.com ↗</a><p className="about-address">Samarpan Marg<br />Kathmandu 44600, Nepal</p></div></section>
    </main>
  );
}
