import './App.css';

const QUICK_LINKS = {
    en: [
        { label: '✧ Plan Your Trip', href: '#added-plan-your-trip' },
        { label: '✧ Explore Puerto Rico', href: '#explore-puerto-rico' },
        { label: '✧ Dining Guide', href: '#dining-guide' },
        { label: '✧ Travel Details', href: '#added-travel-details' }
    ],
    es: [
        { label: '✧ Planifica Tu Viaje', href: '#added-plan-your-trip' },
        { label: '✧ Explora Puerto Rico', href: '#explore-puerto-rico' },
        { label: '✧ Guía Gastronómica', href: '#dining-guide' },
        { label: '✧ Detalles de Viaje', href: '#added-travel-details' }
    ]
};

const AIRPORT_OPTIONS = {
    en: [
        { code: 'SJU', name: 'San Juan (SJU)', url: 'https://aeropuertosju.com', clickable: true },
        { code: 'BQN', name: 'Aguadilla (BQN) — Closest to Rincón' },
        { code: 'PSE', name: 'Ponce (PSE)' }
    ],
    es: [
        { code: 'SJU', name: 'San Juan (SJU)', url: 'https://aeropuertosju.com', clickable: true },
        { code: 'BQN', name: 'Aguadilla (BQN) — El más cercano a Rincón' },
        { code: 'PSE', name: 'Ponce (PSE)' }
    ]
};

const CAR_RENTALS = [
    { name: 'Enterprise', url: 'https://www.enterprise.com' },
    { name: 'Hertz', url: 'https://www.hertz.com' },
    { name: 'Alamo', url: 'https://www.alamo.com' },
    { name: 'Avis', url: 'https://www.avis.com' }
];

const STAY_RENTALS = [
    { name: 'Airbnb in Rincón', url: 'https://www.airbnb.com/s/Rincon--Puerto-Rico/homes' },
    { name: 'Guesthouses in Rincón', url: 'https://www.booking.com/searchresults.html?ss=Rincon%2C+Puerto+Rico&nflt=ht_id%3D216' }
];

const DINING_OPTIONS = [
    { name: 'The Beach House', url: 'https://www.beachhouserincon.com', clickable: true },
    { name: 'Tamboo Restaurant' },
    { name: 'La Copa Llena' },
    { name: 'La Cambija' },
    { name: 'Café 413' }
];

const MUST_TRY_DISHES = {
    en: [
        'Cornstarch Pudding',
        'Creamed Corn',
        'Mallorca Sweet Bread',
        'Pan Sobao',
        'Puerto Rican Coffee',
        'Mofongo',
        'Arroz con Gandules',
        'Arroz Mamposteao',
        'Roast Pork',
        'Pollo Guisado',
        'Sancocho',
        'Empanadillas',
        'Alcapurrias',
        'Bacalaitos',
        'Sorullitos de Maíz',
        'Rellenos de Papa',
        'Piononos',
        'Chicken Pinchos',
        'Quesitos',
        'Tembleque',
        'Arroz con Dulce',
        'Coquito',
        'Fresh Seafood',
        'Piña Colada'
    ],
    es: [
        'Maicena',
        'Crema de maíz',
        'Mallorca',
        'Pan sobao',
        'Café puertorriqueño',
        'Mofongo',
        'Arroz con gandules',
        'Arroz mamposteao',
        'Lechón asado',
        'Pollo guisado',
        'Sancocho',
        'Empanadillas',
        'Alcapurrias',
        'Bacalaitos',
        'Sorullitos de maíz',
        'Rellenos de papa',
        'Piononos',
        'Pinchos de pollo',
        'Quesitos',
        'Tembleque',
        'Arroz con dulce',
        'Coquito'
    ]
};

const ISLAND_EXPERIENCES = {
    en: [
        { title: 'El Yunque Rainforest', details: 'Waterfalls · Rivers · Lush Nature' },
        { title: 'Culebra · Flamenco Beach', details: 'Crystal-clear waters & white sand' },
        { title: 'Palomino Island', details: 'Exclusive coastal escape' },
        { title: 'Bioluminescent Bay', details: 'Glowing waters at night' },
        { title: 'Old San Juan', details: 'Colorful streets & historic beauty' }
    ],
    es: [
        { title: 'Bosque Lluvioso El Yunque', details: 'Cascadas · Ríos · Naturaleza exuberante' },
        { title: 'Culebra · Playa Flamenco', details: 'Aguas cristalinas y arena blanca' },
        { title: 'Isla Palomino', details: 'Escapada costera exclusiva' },
        { title: 'Bahía Bioluminiscente', details: 'Aguas brillantes por la noche' },
        { title: 'Viejo San Juan', details: 'Calles coloridas y belleza histórica' }
    ]
};

const CULTURAL_SCENIC = {
    en: [
        { title: 'Las Salinas · Cabo Rojo', details: 'Pink salt flats' },
        { title: 'Castillo Serrallés · Ponce', details: 'Historic elegance' },
        { title: 'Parque de Bombas · Ponce', details: 'Iconic architecture' },
        { title: 'Cueva del Indio · Arecibo', details: 'Ocean caves & dramatic views' },
        { title: 'Waterfalls & Rivers', details: 'Hidden tropical escapes' }
    ],
    es: [
        { title: 'Las Salinas · Cabo Rojo', details: 'Salinas rosadas' },
        { title: 'Castillo Serrallés · Ponce', details: 'Elegancia histórica' },
        { title: 'Parque de Bombas · Ponce', details: 'Arquitectura icónica' },
        { title: 'Cueva del Indio · Arecibo', details: 'Cuevas marinas y vistas dramáticas' },
        { title: 'Cascadas y Ríos', details: 'Escapes tropicales escondidos' }
    ]
};

const RINCON_HIGHLIGHTS = {
    en: ['Sandy Beach', 'Steps Beach', 'Faro de Punta Higueras (Sunset)'],
    es: ['Sandy Beach', 'Steps Beach', 'Faro de Punta Higueras (Atardecer)']
};

const LOCAL_TIPS = {
    en: [
        {
            title: 'Free Time During Your Stay',
            body: 'Enjoy the charm of the sea during your free time. We recommend bringing comfortable beachwear to explore the beautiful coasts of Rincón and spend time at the pool.'
        },
        {
            title: 'Sunset Tradition',
            body: 'Gather with family at the hotel for a sunset photo session with a view of the Caribbean Sea.'
        }
    ],
    es: [
        {
            title: 'Tiempo Libre Durante tu Estadía',
            body: 'Disfruta del encanto del mar en tu tiempo libre. Te recomendamos llevar ropa de playa, cómoda para explorar las hermosas costas de Rincón y pasar tiempo en la piscina y la playa.'
        },
        {
            title: 'Tradición del Atardecer',
            body: 'Reúnete con la familia en el hotel para una sesión de fotos al atardecer con vista al Mar Caribe.'
        }
    ]
};

const getTravelHighlights = (lang) =>
    lang === 'es'
        ? [
              {
                  title: 'Horario de Llegada',
                  body: 'Planea llegar al lugar para las 5:40 PM para disfrutar del recibimiento y acomodarte antes de la ceremonia.'
              },
              {
                  title: 'Momentos de Golden Hour',
                  body: 'El atardecer es alrededor de las 7:00 PM en julio: perfecto para una sesión rápida de fotos familiares antes de la recepción.'
              }
          ]
        : [
              {
                  title: 'Arrival Window',
                  body: 'Plan to arrive at the venue by 5:40 PM to enjoy the welcome and get settled before the ceremony.'
              },
              {
                  title: 'Golden Hour Moments',
                  body: 'Sunset is around 7:00 PM in July: perfect for a quick family photo session before the reception.'
              }
          ];

const getText = (lang) =>
    lang === 'es'
        ? {
              travelGuide: 'Guía de Viaje',
              planStay: 'Planifica Tu Estadía en',
              intro: 'La celebración será en',
              locatedAt: 'ubicado en',
              introTail:
                  'Por favor llega con suficiente tiempo para disfrutar la vista costera, tomar un refrigerio de bienvenida y prepararte para que la ceremonia comience a las 6:00 PM.',
              venueDetails: 'Detalles del Lugar',
              reservationCode: 'Código de Reservación:',
              frontDesk: 'Recepción:',
              contact: 'Contacto:',
              email: 'Correo:',
              whereToStay: 'Dónde Hospedarte',
              whereStayTextStart: 'Hospédate en la propiedad para disfrutar la brisa del océano y acceso fácil a cada evento. Menciona',
              whereStayTextMid: 'y el código de reservación',
              whereStayTextEnd: 'para agregarte a nuestra lista de bienvenida y recibir la tarifa grupal.',
              checkAvailability: 'Ver Disponibilidad',
              flyingIn: 'Llegando en Avión',
              flyingText: 'Elige entre',
              flyingTextTail: 'Ambos ofrecen transporte terrestre confiable hacia',
              groundTransportation: 'Transporte Terrestre',
              groundText: 'entre las muchas líneas de taxis aquí te brindamos algunas que con gusto te ayudarán:',
              referenceLabel: 'menciona',
              from: 'Desde',
              highlights: 'Destacados',
              highlightsTextStart: '',
              highlightsTextEnd: '. . un lugar donde el mar susurra calma y los atardeceres pintan el cielo con tonos inolvidables. Este rincón del Caribe, uno de los lugares preferidos de Alondra Del Mar se distingue por sus playas doradas, su ambiente relajado y la belleza natural que lo envuelve. Frente a este escenario único, el Rincón of the Seas Grand Caribbean Hotel & Villas, ubicado justo a orillas del mar, será el lugar donde celebraremos este momento especial. Entre brisas suaves, olas y cielos de ensueño, te invitamos a disfrutar de la magia de Rincón y ser parte de una celebración inolvidable.',
              arrivalTransportation: 'Llegada y Transporte',
              rentals: 'Rentas',
              carRentals: 'Alquiler de Autos',
              placesToStay: 'Lugares Adicionales donde puedes Hospedarte',
              carTip: '✨ Rentar auto es altamente recomendado para una experiencia sin contratiempos.',
              weather: 'Puerto Rico en Julio',
              climateTags: 'Cálido · Tropical · Radiante',
              avgTemp: 'Temperatura Promedio',
              weatherFeel: 'Sensación del Clima',
              weatherFeelBody: 'Brisa ligera del océano · Lluvias refrescantes ocasionales',
              dressInspo: 'Inspiración de Vestimenta',
              dressInspoBody: 'Resort elegante · Estilo costero chic · Telas livianas',
              curatedDining: 'Gastronomía Recomendada',
              mustTry: 'Imperdibles',
              tasteSoul: '✨ Un sabor al alma de Puerto Rico',
              islandExperiences: 'Experiencias en la Isla',
              culturalScenic: 'Cultural y Escénico',
              rinconHighlights: 'Destacados de Rincón',
              honor: 'Nos honra celebrar este momento inolvidable',
              inHonor: 'En honor de',
              closing: '✨ Una noche inspirada en el océano, donde la elegancia fluye como olas y los recuerdos brillan como perlas.'
          }
        : {
              travelGuide: 'Travel Guide',
              planStay: 'Plan Your Stay in',
              intro: 'The celebration takes place at',
              locatedAt: 'located at',
              introTail:
                  'Please arrive with enough time to soak in the coastal views, enjoy a welcome refreshment, and prepare for the ceremony to begin at 6:00 PM.',
              venueDetails: 'Venue Details',
              reservationCode: 'Reservation Code:',
              frontDesk: 'Front Desk:',
              contact: 'Contact:',
              email: 'Email:',
              whereToStay: 'Where to Stay',
              whereStayTextStart: 'Stay right on property to enjoy the ocean breeze and effortless access to every event. Mention',
              whereStayTextMid: 'and reservation code',
              whereStayTextEnd: 'to be added to our welcome list and receive the group rate.',
              checkAvailability: 'Check Availability',
              flyingIn: 'Flying In',
              flyingText: 'Choose between',
              flyingTextTail: 'Both offer reliable ground transportation to',
              groundTransportation: 'Ground Transportation',
              groundText: 'among the many taxi services, here are a few that will gladly help you:',
              referenceLabel: 'reference',
              from: 'From',
              highlights: 'Highlights',
              highlightsTextStart: '',
              highlightsTextEnd: 'a place where the sea whispers calm and sunsets paint the sky with unforgettable tones. This corner of the Caribbean—one of Alondra Del Mar’s favorite places—stands out for its golden beaches, relaxed atmosphere, and the natural beauty that surrounds it. In front of this unique setting, the Rincón of the Seas Grand Caribbean Hotel & Villas, located right by the sea, will be where we celebrate this special moment. Between soft breezes, waves, and dreamy skies, we invite you to enjoy the magic of Rincón and be part of an unforgettable celebration.',
              arrivalTransportation: 'Arrival & Transportation',
              rentals: 'Rentals',
              carRentals: 'Car Rentals',
              placesToStay: 'Places to Stay',
              carTip: '✨ Renting a car is highly recommended for a seamless experience.',
              weather: 'Puerto Rico in July',
              climateTags: 'Warm · Tropical · Radiant',
              avgTemp: 'Average Temperature',
              weatherFeel: 'Weather Feel',
              weatherFeelBody: 'Light ocean breeze · Occasional refreshing rain',
              dressInspo: 'Dress Code Inspiration',
              dressInspoBody: 'Elegant Resort · Coastal Chic · Light Fabrics',
              curatedDining: 'Curated Dining',
              mustTry: 'Must Try',
              tasteSoul: '✨ A taste of Puerto Rico\'s soul',
              islandExperiences: 'Island Experiences',
              culturalScenic: 'Cultural & Scenic',
              rinconHighlights: 'Rincón Highlights',
              honor: 'We are honored to celebrate this unforgettable moment',
              inHonor: 'In honor of',
              closing: '✨ A night inspired by the ocean, where elegance flows like waves and memories shine like pearls.'
          };

export default function Travel({ details, lang = 'en' }) {
    const t = getText(lang);
    const travelHighlights = getTravelHighlights(lang);
    const locationLabel = details.venueAddressLong.split(',').slice(1).join(',').trim() || (lang === 'es' ? 'el área' : 'the area');
    const [regionalAirport, majorAirport] = details.airports;
    const getAirportName = (airport) => (lang === 'es' ? (airport.nameEs ?? airport.name) : airport.name);
    const getAirportDetails = (airport) => (lang === 'es' ? (airport.detailsEs ?? airport.details) : airport.details);
    const airportNameList = details.airports.map((airport) => getAirportName(airport)).join(', ');
    const hotels = [
        {
            name: details.venueName,
            distance: lang === 'es' ? 'Hospedaje en el mismo lugar del evento' : 'On-site accommodations at the venue',
            description:
                lang === 'es'
                    ? 'Hospédate donde ocurre la celebración de los XV años de Alondra Del Mar y disfruta de la belleza y comodidad del resort, el hermoso atardecer frente al mar.'
                    : 'Stay where the celebration takes place and enjoy ocean views, resort amenities, and effortless access to every event.',
            perks:
                lang === 'es'
                    ? [
                          `Menciona el código de reservación ${details.reservationCode} y “${details.hotelBlockName}” al reservar`,
                          'Reserva directamente con el equipo del hotel — las reservaciones en línea aún no están disponibles'
                      ]
                    : [
                          `Reference reservation code ${details.reservationCode} and “${details.hotelBlockName}” when booking`,
                          'Book directly with the hotel team — online reservations are not yet available'
                      ]
        }
    ];

    return (
        <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-14">
            <section className="glass-panel rounded-3xl p-8 shadow-xl" id="added-travel-details">
                <span className="ribbon-tag">{t.travelGuide}</span>
                <h1 className="mt-4 font-display text-4xl">{t.planStay} {locationLabel}</h1>
                <p className="mt-3 max-w-3xl text-[rgba(44,96,130,0.75)]">
                    {t.intro} <strong>{details.venueName}</strong>, {t.locatedAt} {details.venueAddressLong}. {t.introTail}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {(QUICK_LINKS[lang] ?? QUICK_LINKS.en).map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(240,132,112,1)] shadow transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {travelHighlights.map((highlight) => (
                        <div
                            key={highlight.title}
                            className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] p-6 shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">{highlight.title}</h3>
                            <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">{highlight.body}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <div className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">{t.venueDetails}</h2>
                        <p className="mt-2 text-[rgba(44,96,130,0.75)]">{details.venueName}</p>
                        <p className="text-[rgba(44,96,130,0.6)]">{details.venueAddressLong}</p>
                        <ul className="mt-4 space-y-2 text-sm text-[rgba(44,96,130,0.6)]">
                            <li>
                                <strong>{t.reservationCode}</strong> {details.reservationCode} ({t.referenceLabel} “{details.hotelBlockName}”)
                            </li>
                            <li>
                                <strong>{t.frontDesk}</strong>{' '}
                                <a
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    href={`tel:${details.hotelPhone.raw}`}
                                >
                                    {details.hotelPhone.display}
                                </a>
                            </li>
                            <li>
                                <strong>{t.contact}</strong>{' '}
                                <a
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    href={`tel:${details.hotelContact.raw}`}
                                >
                                    {details.hotelContact.name} {details.hotelContact.display}
                                </a>
                            </li>
                            <li>
                                <strong>{t.email}</strong>{' '}
                                <a
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    href={`mailto:${details.hotelEmail}`}
                                >
                                    {details.hotelEmail}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">{t.whereToStay}</h2>
                    <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                        {t.whereStayTextStart} “{details.hotelBlockName}” {t.whereStayTextMid} {details.reservationCode} {t.whereStayTextEnd}
                    </p>
                    <div className="mt-6 space-y-6">
                        {hotels.map((hotel) => (
                            <div key={hotel.name} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-6 shadow-md">
                                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold text-[rgba(44,96,130,0.9)]">{hotel.name}</h3>
                                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{hotel.distance}</p>
                                    </div>
                                    <a
                                        href="https://www.rinconoftheseas.com/en/hotel.html?clock-pms-wbe="
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(240,132,112,1)] transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                    >
                                        {t.checkAvailability}
                                    </a>
                                </div>
                                <p className="mt-4 text-[rgba(44,96,130,0.7)]">{hotel.description}</p>
                                <ul className="mt-4 grid gap-2 text-sm text-[rgba(44,96,130,0.6)] sm:grid-cols-2">
                                    {hotel.perks.map((perk) => (
                                        <li key={perk} className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[rgba(240,132,112,0.95)]"></span>
                                            <span>{perk}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="glass-panel flex flex-col gap-6 rounded-3xl p-8 shadow-xl">
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] p-6 shadow-md">
                        <h2 className="font-display text-3xl">{t.flyingIn}</h2>
                        <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                            {t.flyingText} {airportNameList}.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {details.airports.map((airport) => (
                            <div key={airport.code} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-5 shadow">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{airport.code}</p>
                                <h3 className="mt-1 text-lg font-semibold text-[rgba(44,96,130,0.9)]">{getAirportName(airport)}</h3>
                                <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">{getAirportDetails(airport)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-5 shadow">
                        <h3 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">{t.groundTransportation}</h3>
                        <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">
                            {(lang === 'es' ? (details.rideshareNoteEs ?? details.rideshareNote) : details.rideshareNote)}, {t.groundText}
                        </p>
                        <div className="mt-4 space-y-4 text-sm text-[rgba(44,96,130,0.7)]">
                            <div>
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">{t.from} {getAirportName(majorAirport)}</p>
                                <ul className="mt-2 space-y-1">
                                    {details.taxiServices.sju.map((service) => (
                                        <li key={service.name}>
                                            {service.name}{' '}
                                            <a
                                                href={`tel:${service.phone.replace(/[^0-9]/g, '')}`}
                                                className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                            >
                                                {service.phone}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">{t.from} {getAirportName(regionalAirport)}</p>
                                <ul className="mt-2 space-y-1">
                                    {details.taxiServices.bqn.map((service) => (
                                        <li key={service.name}>
                                            {service.name}{' '}
                                            <a
                                                href={`tel:${service.phone.replace(/[^0-9]/g, '')}`}
                                                className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                            >
                                                {service.phone}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">{locationLabel} {t.highlights}</h2>
                    <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                        {t.highlightsTextStart} {locationLabel}. {t.highlightsTextEnd}
                    </p>
                    <ul className="mt-6 space-y-4 text-[rgba(44,96,130,0.7)]">
                        {(LOCAL_TIPS[lang] ?? LOCAL_TIPS.en).map((tip) => (
                            <li key={tip.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-6 shadow">
                                <h3 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">{tip.title}</h3>
                                <p className="mt-2 text-sm">{tip.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass-panel rounded-3xl p-0 shadow-xl">
                    <iframe
                        title={lang === 'es' ? `Direcciones a ${details.venueName}` : `${details.venueName} Directions`}
                        src={details.mapUrl}
                        className="h-full min-h-[360px] w-full rounded-3xl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section id="added-plan-your-trip" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">{t.arrivalTransportation}</h2>
                    <div className="mt-6 space-y-4">
                        {(AIRPORT_OPTIONS[lang] ?? AIRPORT_OPTIONS.en).map((airport) => (
                            <div key={airport.code} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-5 shadow">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{airport.code}</p>
                                <h3 className="mt-1 text-lg font-semibold text-[rgba(44,96,130,0.9)]">{airport.name}</h3>
                                {airport.clickable ? (
                                    <a
                                        href={airport.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 inline-block text-sm font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    >
                                        {airport.url}
                                    </a>
                                ) : (
                                    <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">{airport.url}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-[rgba(44,96,130,0.7)]">{t.carTip}</p>
                </div>
                <aside className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">{t.rentals}</h2>
                    <h3 className="mt-6 text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.carRentals}</h3>
                    <ul className="mt-3 space-y-3 text-[rgba(44,96,130,0.8)]">
                        {CAR_RENTALS.map((rental) => (
                            <li key={rental.name}>
                                <a
                                    href={rental.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                >
                                    {rental.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-8 text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.placesToStay}</h3>
                    <ul className="mt-3 space-y-3 text-[rgba(44,96,130,0.8)]">
                        {STAY_RENTALS.map((rental) => (
                            <li key={rental.name}>
                                <a
                                    href={rental.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                >
                                    {rental.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl" id="climate">
                <h2 className="font-display text-3xl">{t.weather}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.climateTags}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.65)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.avgTemp}</p>
                        <p className="mt-2 text-2xl font-semibold text-[rgba(44,96,130,0.9)]">80°F – 88°F</p>
                    </div>
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.65)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.weatherFeel}</p>
                        <p className="mt-2 text-[rgba(44,96,130,0.8)]">{t.weatherFeelBody}</p>
                    </div>
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.65)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.dressInspo}</p>
                        <p className="mt-2 text-[rgba(44,96,130,0.8)]">{t.dressInspoBody}</p>
                    </div>
                </div>
            </section>

            <section id="dining-guide" className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">{t.curatedDining}</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {DINING_OPTIONS.map((spot) => (
                        <div key={spot.name} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-5 shadow">
                            <h3 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">{spot.name}</h3>
                            {spot.clickable ? (
                                <a
                                    href={spot.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 inline-block text-sm font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                >
                                    {spot.url}
                                </a>
                            ) : (
                                <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">{spot.url}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-6 rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.45)] p-5 shadow">
                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.mustTry}</p>
                    <p className="mt-2 text-[rgba(44,96,130,0.85)]">{(MUST_TRY_DISHES[lang] ?? MUST_TRY_DISHES.en).join(' · ')}</p>
                    <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">{t.tasteSoul}</p>
                </div>
            </section>

            <section id="explore-puerto-rico" className="grid gap-6 lg:grid-cols-2">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">{t.islandExperiences}</h2>
                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.8)]">
                        {(ISLAND_EXPERIENCES[lang] ?? ISLAND_EXPERIENCES.en).map((item) => (
                            <li key={item.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-4 shadow">
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">{item.title}</p>
                                <p className="text-sm">{item.details}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">{t.culturalScenic}</h2>
                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.8)]">
                        {(CULTURAL_SCENIC[lang] ?? CULTURAL_SCENIC.en).map((item) => (
                            <li key={item.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-4 shadow">
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">{item.title}</p>
                                <p className="text-sm">{item.details}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.45)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{t.rinconHighlights}</p>
                        <p className="mt-2 text-[rgba(44,96,130,0.85)]">{(RINCON_HIGHLIGHTS[lang] ?? RINCON_HIGHLIGHTS.en).join(' · ')}</p>
                    </div>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 text-center shadow-xl">
                <p className="text-lg text-[rgba(44,96,130,0.75)]">{t.honor}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[rgba(47,156,194,0.75)]">{t.inHonor}</p>
                <h2 className="mt-2 font-display text-4xl">Alondra del Mar</h2>
                <p className="mt-6 mx-auto max-w-2xl text-[rgba(44,96,130,0.8)]">
                    {t.closing}
                </p>
            </section>
        </main>
    );
}
