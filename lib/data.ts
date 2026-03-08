export interface Project {
  id: string
  title: string
  category: 'living-room' | 'bedroom' | 'kitchen' | 'office'
  location: string
  year: string
  style: string
  area: string
  description: string
  fullDescription: string
  client: string
  clientRequirements: string
  materials: string[]
  tags: string[]
  coverImage: string
  images: string[]
  featured: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  image: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
  image: string
  project: string
}

export const projects: Project[] = [
  {
    id: 'celestial-penthouse',
    title: 'Celestial Penthouse',
    category: 'living-room',
    location: 'Manhattan, New York',
    year: '2024',
    style: 'Contemporary Luxury',
    area: '3,200 sq ft',
    description: 'A soaring penthouse transformed into a sanctuary of light and form.',
    fullDescription: 'The Celestial Penthouse project was a study in restraint and grandeur. Our client — a prominent art collector — wanted a space that could serve as both a private retreat and an art gallery. We responded with sweeping open-plan living areas anchored by custom millwork and floor-to-ceiling glass that frames the Manhattan skyline. Every material was selected for its tactile quality: honed Calacatta marble, wire-brushed white oak, and hand-applied plaster walls create a layered warmth that photography rarely captures.',
    client: 'Private Art Collector',
    clientRequirements: 'The client requested a gallery-quality home that does not feel institutional. They wanted warmth, a connection to art, and spaces that flow effortlessly for both intimate evenings and large-scale entertaining.',
    materials: ['Calacatta Oro Marble', 'Wire-brushed White Oak', 'Venetian Plaster', 'Brushed Brass Fixtures', 'Boucle Upholstery', 'Aged Bronze Hardware'],
    tags: ['Luxury', 'Contemporary', 'Open Plan', 'Art Display'],
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'nordic-haven',
    title: 'Nordic Haven',
    category: 'bedroom',
    location: 'Stockholm, Sweden',
    year: '2024',
    style: 'Scandinavian Minimalism',
    area: '1,800 sq ft',
    description: 'Quiet luxury distilled into a Scandinavian master suite.',
    fullDescription: 'Nordic Haven was born from the desire to create a bedroom that operates as a true sanctuary. Inspired by the clean light of Swedish winters, we stripped every element back to its essential form. The palette is drawn from a Swedish forest at dawn — pale birch, morning fog, and the soft grey of lichen-covered stone. The result is a space of extraordinary calm, where every detail whispers rather than shouts.',
    client: 'Executive Couple',
    clientRequirements: 'Complete tranquility and a sense of escape from corporate life. Minimal clutter, natural materials, and a spa-like ensuite that feels connected to the bedroom.',
    materials: ['Pale Birch Veneer', 'Linen Bedding', 'Poured Concrete Floors', 'Wool Rugs', 'Matte Stone Tiles', 'Solid Brass Accents'],
    tags: ['Scandinavian', 'Minimal', 'Serene', 'Natural'],
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'atelier-kitchen',
    title: 'The Atelier Kitchen',
    category: 'kitchen',
    location: 'Paris, France',
    year: '2023',
    style: 'Modern French',
    area: '620 sq ft',
    description: 'A chef-inspired kitchen that marries haute cuisine with haute design.',
    fullDescription: 'The Atelier Kitchen was designed around the art of cooking. Our client — a Michelin-starred chef — required a kitchen that could perform at professional levels while remaining visually stunning for television appearances and private dinner parties. We conceived the space as a working atelier: black lacquered cabinetry, island clad in aged stone, and professional-grade appliances integrated seamlessly behind custom panel fronts.',
    client: 'Michelin-Starred Chef',
    clientRequirements: 'Professional kitchen performance with the aesthetic of a French atelier. Generous prep space, excellent lighting, and a statement island that photographs beautifully.',
    materials: ['Black Lacquered MDF', 'Pierre de Bourgogne Limestone', 'Polished Nickel Fixtures', 'Hand-glazed Tiles', 'Walnut Butcher Block', 'Integrated Miele Appliances'],
    tags: ['Chef Kitchen', 'French', 'Dark Palette', 'Professional'],
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'executive-suite',
    title: 'Executive Suite',
    category: 'office',
    location: 'London, UK',
    year: '2024',
    style: 'Modern British',
    area: '4,500 sq ft',
    description: 'A corporate headquarters reimagined as a place people want to be.',
    fullDescription: 'The Executive Suite brief was simple: create an office that attracts and retains world-class talent. We divided the floor into distinct zones — focused work, collaborative hubs, and restorative lounges — each with its own material palette that subtly shifts the mood. The boardroom anchors the space: clad in hand-stitched leather panels with a 12-metre table of solid smoked oak.',
    client: 'Global Investment Firm',
    clientRequirements: 'A headquarters that communicates authority and sophistication while feeling genuinely human. Spaces for focus, collaboration, and decompression — all at the highest design standard.',
    materials: ['Smoked Oak', 'Hand-stitched Leather', 'Bronze Mesh Partitions', 'Portland Stone', 'Wool Blend Carpets', 'Custom Brass Lighting'],
    tags: ['Corporate', 'Sophisticated', 'Biophilic', 'Premium'],
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'garden-living',
    title: 'Garden Living Room',
    category: 'living-room',
    location: 'Beverly Hills, CA',
    year: '2023',
    style: 'California Organic',
    area: '2,100 sq ft',
    description: 'Where the garden dissolves seamlessly into the living space.',
    fullDescription: 'Garden Living dissolves the boundary between inside and outside. The design extends the garden palette directly into the interior: terracotta zellige tiles continue from the terrace; rattan and raw linen echo the textures of the landscape. Pocket doors spanning the entire south wall allow the living room to open completely to the garden, creating one continuous living environment.',
    client: 'Film Producer Family',
    clientRequirements: 'A family home that embraces California living — outdoors in, relaxed but elegant, with room for children and adults to coexist comfortably.',
    materials: ['Terracotta Zellige Tiles', 'Raw Linen', 'Rattan & Cane', 'Vintage Persian Rugs', 'Patinated Steel', 'Carved Limestone'],
    tags: ['Organic', 'Indoor-Outdoor', 'Warm', 'California'],
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'zen-bedroom',
    title: 'Zen Retreat Bedroom',
    category: 'bedroom',
    location: 'Kyoto, Japan',
    year: '2023',
    style: 'Japanese Wabi-Sabi',
    area: '900 sq ft',
    description: 'An ode to imperfection and the beauty found in simplicity.',
    fullDescription: 'Zen Retreat is a meditation on the Japanese aesthetic philosophy of wabi-sabi — finding beauty in imperfection and transience. The materials are deliberately imperfect: irregular shoji screens, hand-thrown ceramic vessels, and a stone floor worn smooth over centuries. The room contains nothing that is not either useful or beautiful.',
    client: 'Technology Entrepreneur',
    clientRequirements: 'Complete digital detox. A bedroom that promotes deep sleep and mindfulness. No harsh lines, no reflective surfaces, no distractions.',
    materials: ['Shoji Rice Paper', 'Reclaimed Cedar', 'Tatami Mats', 'Washi Plaster', 'Hand-thrown Ceramics', 'River Stone'],
    tags: ['Wabi-Sabi', 'Japanese', 'Zen', 'Mindful'],
    coverImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&q=80',
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'brooklyn-loft',
    title: 'Brooklyn Loft Kitchen',
    category: 'kitchen',
    location: 'Brooklyn, New York',
    year: '2024',
    style: 'Industrial Modern',
    area: '450 sq ft',
    description: 'Raw industrial bones meet refined culinary craft.',
    fullDescription: 'Brooklyn Loft embraces its industrial heritage with exposed brick and steel, but elevates it with considered material pairings. The kitchen is the heart of a converted warehouse space — a generous island of solid concrete topped in honed black granite anchors the room, while open shelving in blackened steel displays carefully curated ceramics and glassware.',
    client: 'Young Tech Entrepreneur',
    clientRequirements: 'A kitchen that celebrates cooking as a social act. Open to the living space, room for guests to participate, and a strong visual identity that reflects a creative personality.',
    materials: ['Exposed Brick', 'Blackened Steel', 'Honed Black Granite', 'Reclaimed Oak', 'Concrete', 'Matte Black Fixtures'],
    tags: ['Industrial', 'Loft', 'Open Plan', 'Creative'],
    coverImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
    ],
    featured: true,
  },
  {
    id: 'riverside-office',
    title: 'Riverside Creative Studio',
    category: 'office',
    location: 'Amsterdam, Netherlands',
    year: '2023',
    style: 'Biophilic Contemporary',
    area: '2,800 sq ft',
    description: 'A creative studio that breathes with its occupants.',
    fullDescription: 'Riverside Creative Studio was built on the premise that creativity flourishes in environments that connect people to nature. Living moss walls, a central atrium filled with tropical plants, and abundant natural light through clerestory windows create an office that feels alive. The open-plan desking gives way to breakout pods nestled among planting — each one a micro-environment for focused thought.',
    client: 'Architecture & Design Firm',
    clientRequirements: 'An office that embodies the firm\'s values: creativity, sustainability, and wellbeing. A space that impresses clients and inspires staff in equal measure.',
    materials: ['Reclaimed Pine', 'Living Moss Panels', 'Recycled Glass Partitions', 'Cork Flooring', 'Linen Acoustic Panels', 'Copper Piping Details'],
    tags: ['Biophilic', 'Sustainable', 'Creative', 'Studio'],
    coverImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    ],
    featured: false,
  },
  {
    id: 'miami-penthouse-living',
    title: 'Miami Penthouse Living',
    category: 'living-room',
    location: 'Miami, Florida',
    year: '2024',
    style: 'Tropical Modernism',
    area: '2,600 sq ft',
    description: 'Luminous tropical modernism overlooking the Atlantic.',
    fullDescription: 'Miami Penthouse Living captures the electric energy of the city and tempers it with refined materials and a considered layout. The colour palette is drawn directly from the ocean and the sky — aquamarine, coral pink, and bleached sand. Custom furniture in rounded organic forms softens the hard architectural angles, while the terrazzo floor in sea glass tones anchors the entire composition.',
    client: 'Brazilian Entrepreneur',
    clientRequirements: 'Celebrate Miami\'s tropical character without resorting to cliché. A home for entertaining on a grand scale, with a strong point of view that feels genuinely luxurious.',
    materials: ['Sea Glass Terrazzo', 'Bouclé Curved Sofas', 'Travertine Side Tables', 'Woven Rattan Ceiling Features', 'Lacquered Coral Pink Joinery', 'Palm Bronze Fixtures'],
    tags: ['Tropical', 'Colorful', 'Modern', 'Entertaining'],
    coverImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    featured: false,
  },
]

export const services: Service[] = [
  {
    id: 'home-interior',
    title: 'Home Interior Design',
    description: 'We transform residences into deeply personal sanctuaries. From initial concept to final styling, our residential design service is a bespoke journey that honours your lifestyle, tastes, and the way you truly live.',
    features: ['Full concept development', 'Space planning & layout', 'Material & finish selection', 'Custom furniture design', 'Art curation & styling', 'Project management'],
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 'office-interior',
    title: 'Office Interior Design',
    description: 'The best workplaces inspire performance. We design office environments that balance focus and collaboration, projecting your brand identity while nurturing the wellbeing of every person who works there.',
    features: ['Workplace strategy', 'Brand environment design', 'Acoustic planning', 'Ergonomic furniture specification', 'Technology integration', 'Wellness spaces'],
    icon: 'briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'commercial',
    title: 'Commercial Interior Design',
    description: 'Retail, hospitality, and cultural spaces that stop people in their tracks. We create commercial environments where design does the heavy lifting — attracting customers, communicating brand values, and driving commercial performance.',
    features: ['Retail & showroom design', 'Restaurant & bar design', 'Hotel & hospitality', 'Brand storytelling through space', 'Customer journey mapping', 'Wayfinding design'],
    icon: 'store',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into existing spaces. Our renovation service combines architectural thinking with interior design expertise to deliver transformations that respect the character of a building while taking it firmly into the present.',
    features: ['Architectural alteration coordination', 'Historical property sensitivity', 'Structural design guidance', 'Material restoration', 'Extension design', 'Period-appropriate detailing'],
    icon: 'wrench',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    description: 'See your future space in photorealistic detail before a single element is installed. Our 3D visualization service eliminates uncertainty, accelerates decision-making, and allows you to experience your project with confidence.',
    features: ['Photorealistic still renders', 'Animated walkthroughs', 'VR experience creation', 'Material & lighting studies', 'Multiple design options', 'Real-time rendering'],
    icon: 'cube',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  },
]

export const team: TeamMember[] = [
  {
    name: 'Elara Voss',
    role: 'Founder & Creative Director',
    bio: 'With 18 years shaping interiors across four continents, Elara founded the studio on the belief that exceptional design is not a luxury — it is a necessity. Trained at the Architectural Association in London, her work has been featured in Architectural Digest, Elle Decoration, and Wallpaper*.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Interior Designer',
    bio: 'Marcus brings a meticulous eye for detail and a deep knowledge of materials to every project. Formerly of Zaha Hadid Architects, he leads the studio\'s commercial and hospitality practice with a portfolio spanning five-star hotels across Asia and Europe.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'Isabelle Moreau',
    role: 'Design Director, Residential',
    bio: 'Isabelle specialises in private residences for discerning clients who demand both beauty and functionality. Her French upbringing gives her work an effortless refinement, while a decade in New York sharpened her instinct for the theatrical and the bold.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  },
  {
    name: 'James Okafor',
    role: 'Head of 3D & Visualization',
    bio: 'James is the studio\'s technical visionary, leading all visualization, digital prototyping, and emerging technology. His photorealistic renders have been mistaken for photography in every major design publication, and his VR walkthroughs have become an indispensable part of the client experience.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Victoria Hartmann',
    role: 'CEO, Hartmann & Partners',
    text: 'Elara Studio did not just design our office — they transformed how we work. The space has become our most powerful recruitment tool. Three of our last four hires specifically mentioned the office as a factor in accepting our offer.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
    project: 'Executive Suite, London',
  },
  {
    name: 'David & Sarah Kimura',
    role: 'Private Clients',
    text: 'We interviewed six studios before choosing Elara. A year on, it is the best decision we made during the entire renovation. The team listened — truly listened — and created a home that feels completely us. We have never loved where we live more.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=200&q=80',
    project: 'Celestial Penthouse, New York',
  },
  {
    name: 'Pierre Leconte',
    role: 'Chef & Restaurateur',
    text: 'Working with Elara Studio on my kitchen was a masterclass in collaboration. They understood my needs as a professional cook better than any contractor I had worked with before. The kitchen is extraordinary — and it looks even better than it performs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80',
    project: 'The Atelier Kitchen, Paris',
  },
]

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Modern living room', category: 'Living Room' },
  { id: 2, src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', alt: 'Serene bedroom', category: 'Bedroom' },
  { id: 3, src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Chef kitchen', category: 'Kitchen' },
  { id: 4, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Executive office', category: 'Office' },
  { id: 5, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', alt: 'Garden living room', category: 'Living Room' },
  { id: 6, src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80', alt: 'Zen bedroom', category: 'Bedroom' },
  { id: 7, src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', alt: 'Brooklyn kitchen', category: 'Kitchen' },
  { id: 8, src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80', alt: 'Creative studio', category: 'Office' },
  { id: 9, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', alt: 'Miami penthouse', category: 'Living Room' },
  { id: 10, src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Modern dining', category: 'Dining' },
  { id: 11, src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', alt: 'Elegant sofa', category: 'Living Room' },
  { id: 12, src: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80', alt: 'Luxury bathroom', category: 'Bathroom' },
]
