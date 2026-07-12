export type PortfolioImage = { src: string; title: string; caption: string; year: string; medium: string };
export type ArtistProject = { title: string; year: string; type: string; role: string; description: string; cover: string; images: PortfolioImage[] };
export type Artist = { slug: string; name: string; community: string; field: string; shortBio: string; biography: string; statement: string; portrait: string; images: PortfolioImage[]; projects: ArtistProject[] };

const image = (src: string, title: string, caption: string, year: string, medium: string): PortfolioImage => ({ src, title, caption, year, medium });

export const artists: Artist[] = [
  {
    slug: "lavkant-chaudhary", name: "Lavkant Chaudhary", community: "Tharu", field: "Painting · Drawing · Installation",
    shortBio: "A Tharu artist whose practice brings lived memory, community knowledge, and the politics of place into contemporary form.",
    biography: "Lavkant Chaudhary’s practice is rooted in the lived histories of Tharu communities. Through painting, drawing, installation, and research, he brings vernacular knowledge and the politics of land into conversation with contemporary art.",
    statement: "I work with fragments of memory and the everyday marks that survive official histories. They become a way to look again at who gets to name a place, a people, and a future.",
    portrait: "/images/artists/lavkant-chaudhary.jpg",
    images: [image("/images/portfolio/lavkant/work-01.png", "Untitled study", "A study in line, texture, and the memory held by material.", "2025", "Mixed media"), image("/images/portfolio/lavkant/work-02.png", "Field notes", "Marks gathered from the artist’s ongoing engagement with Tharu visual culture.", "2025", "Drawing"), image("/images/portfolio/lavkant/work-03.jpg", "Material memory", "An image from the artist’s 2025 portfolio.", "2025", "Installation"), image("/images/portfolio/lavkant/work-04.jpg", "Untitled", "A layered work considering land and belonging.", "2025", "Painting"), image("/images/portfolio/lavkant/work-05.jpg", "Archive / living", "A visual conversation between inherited form and present experience.", "2025", "Mixed media")],
    projects: [{ title: "Tharu visual memory", year: "2025", type: "Research · Installation", role: "Artist and researcher", description: "An ongoing body of work tracing the relationship between community memory, land, and the visual language of Tharu life.", cover: "/images/portfolio/lavkant/work-03.jpg", images: [] }],
  },
  {
    slug: "hit-man-gurung", name: "Hit Man Gurung", community: "Tamu", field: "Painting · Mixed Media",
    shortBio: "Working through abstraction and material, Hit Man explores identity, belonging, and the emotional landscapes of a changing Nepal.",
    biography: "Hit Man Gurung is a Tamu artist working across painting and mixed media. His practice moves between personal sensation and collective questions of belonging, using abstraction as a way to hold what cannot be easily spoken.",
    statement: "The image is never fixed. I am interested in the moment it becomes uncertain — where memory, landscape, and feeling begin to overlap.",
    portrait: "/images/site/about.jpg",
    images: [image("/images/portfolio/hit-man/archive-01.jpg", "Archive landscape", "A working image from the ArTree Nepal archive.", "2024", "Mixed media"), image("/images/portfolio/hit-man/archive-02.jpg", "Herbs drawings", "Studies of botanical forms and the knowledge carried by plants.", "2024", "Drawing"), image("/images/artworks/lavkant-work.jpg", "Material / atmosphere", "An abstract composition held between surface and gesture.", "2024", "Painting")],
    projects: [{ title: "Material / atmosphere", year: "2024", type: "Painting series", role: "Artist", description: "A series of paintings that treat surface as a place where emotional and geographic landscapes can meet.", cover: "/images/portfolio/hit-man/archive-02.jpg", images: [] }],
  },
  {
    slug: "mekh-limbu", name: "Mekh Limbu", community: "Yakthung", field: "Moving Image · Research",
    shortBio: "Mekh’s research-based practice holds language, migration, ritual, and Indigenous memory in layered moving-image works.",
    biography: "Mekh Limbu (b. 1985, Dhankuta) is an artist based in Kathmandu. Belonging to the Yakthung community, his work addresses the geopolitical fractures that shape contemporary Indigeneity. His use of archival matter is grounded in the intergenerational transfer of language, ritual, and memory.",
    statement: "I work with archives as living materials. Sound, image, textile, and testimony can keep a memory moving — not as nostalgia, but as a form of reclamation.",
    portrait: "/images/artists/mekh-limbu.jpg",
    images: [image("/images/portfolio/mekh/chotlung-01.jpg", "Chotlung", "Traversing spirits, redemptive songs — a textile and moving-image installation.", "2025", "Video · Textile"), image("/images/portfolio/mekh/chotlung-02.jpg", "Chotlung, installation view", "A view of the installation’s woven and spatial language.", "2025", "Installation"), image("/images/portfolio/mekh/chotlung-03.jpg", "Chotlung, detail", "Weaving as memory, revolt, and an invocation of Yuma.", "2025", "Textile"), image("/images/portfolio/mekh/mangdemma-01.jpg", "Mangdem’ma", "An invocation for the healing of Adivasi spirits and lands.", "2022", "Video"), image("/images/portfolio/mekh/mangdemma-02.jpg", "Mangdem’ma, still", "Ancestral voices meeting family interviews, ritual chant, and archival matter.", "2022", "Video · Documents"), image("/images/portfolio/mekh/silent-01.jpg", "Silent Portraits", "From Doha, Qatar and Kathmandu time lapse.", "2017–2023", "Three-channel video")],
    projects: [{ title: "Chotlung: traversing spirits, redemptive songs", year: "2025", type: "Single-channel video · Textile installation", role: "Artist", description: "In the Yakthung language, Chotlung describes sites of profound sanctity. The work asks whether ancestral wisdom can offer grounds for reclaiming sovereignty when sacred geographies are fractured by force. Weaving, practised by generations of Yakthung women, becomes a language of memory and revolt.", cover: "/images/portfolio/mekh/chotlung-01.jpg", images: [] }, { title: "Silent Portraits from Doha, Qatar & Kathmandu Time Lapse", year: "2017–2023", type: "Three-channel video", role: "Artist", description: "A poignant video project following the journeys of Nepali migrant workers and the intertwined movement from rural homes to the Gulf and back through memory.", cover: "/images/portfolio/mekh/silent-01.jpg", images: [] }],
  },
  {
    slug: "sheelasha-rajbhandari", name: "Sheelasha Rajbhandari", community: "Newa", field: "Sculpture · Performance · Installation",
    shortBio: "A Newa artist working across sculpture and performance to question inherited histories and imagine more plural futures.",
    biography: "Sheelasha Rajbhandari works across sculpture, performance, and installation. Her practice looks closely at the way histories are built, repeated, and embodied, making room for other forms of remembering.",
    statement: "I am interested in the body as an archive — what it carries, what it refuses, and what it can reassemble when it comes together with others.",
    portrait: "/images/projects/not-less-expensive.jpg",
    images: [image("/images/portfolio/sheelasha/archive-01.jpg", "Not Less Expensive Than Gold", "A collective installation that asks what forms of knowledge are valued and preserved.", "2024", "Installation"), image("/images/portfolio/sheelasha/archive-02.jpg", "Communal archive", "Objects and images held in a shared field of attention.", "2024", "Mixed media"), image("/images/artworks/mekh-mangdemma.jpg", "Fragment / gesture", "A study in object, gesture, and inherited history.", "2024", "Installation")],
    projects: [{ title: "Not Less Expensive Than Gold", year: "2024", type: "Collective installation", role: "Artist · ArTree Nepal", description: "A collaborative project that gathers drawing, object, and image to reflect on medicinal knowledge, value, and the living archives held by communities.", cover: "/images/portfolio/sheelasha/archive-01.jpg", images: [] }],
  },
  {
    slug: "subas-tamang", name: "Subas Tamang", community: "Tamang", field: "Carving · Printmaking · Multimedia",
    shortBio: "A Tamang artist who uses inherited carving skills, printmaking, and new technologies to archive histories that have gone undocumented.",
    biography: "Subas Tamang (born 1990, Kathmandu) comes from a family of traditional stone carvers and belongs to the Indigenous Tamsaling community. His practice incorporates carving, engraving, printmaking, and multimedia to archive the cultural and social fabrics of his and other communities.",
    statement: "I draw from inherited skills while experimenting with new technologies and collaborative practices. I want the work to bridge tradition and contemporary expression without flattening either.",
    portrait: "/images/artists/subas-tamang.jpg",
    images: [image("/images/portfolio/subas/work-01.jpg", "Untitled", "A work from Subas Tamang’s image archive.", "2024", "Mixed media"), image("/images/portfolio/subas/work-02.jpg", "Carved memory", "Inherited technique carried into a contemporary visual language.", "2024", "Carving"), image("/images/portfolio/subas/work-03.jpg", "Archive of a community", "A study of the social fabrics that shape the artist’s practice.", "2024", "Printmaking"), image("/images/portfolio/subas/history-01.jpg", "Study of History I", "A fragment from the Study of History series.", "2024", "Printmaking"), image("/images/portfolio/subas/history-02.jpg", "Study of History II", "A record of history as lived, inherited, and reassembled.", "2024", "Printmaking")],
    projects: [{ title: "Study of History", year: "2024", type: "Printmaking series", role: "Artist", description: "A series responding to gaps in documented histories. Subas draws on inherited skills and experiments with printmaking to create an archive that is both personal and communal.", cover: "/images/portfolio/subas/history-01.jpg", images: [] }, { title: "I Want To Die In My Own House", year: "2018", type: "Monumental sculpture", role: "Artist", description: "An autobiographical monumental work commissioned by Samdani Art Foundation, bridging family knowledge, stone carving, and contemporary sculptural practice.", cover: "/images/portfolio/subas/work-02.jpg", images: [] }],
  },
];

export function getArtist(slug: string) { return artists.find((artist) => artist.slug === slug); }
