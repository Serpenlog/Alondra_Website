import './App.css';

const LOCAL_TIPS = [
    {
        title: 'Check-In Details',
        body: 'Call the reservations team ahead of arrival to confirm your deposit and room assignment. Early check-in is based on availability.'
    },
    {
        title: 'Beach Time',
        body: 'Pack beachwear for downtime—Steps Beach and Balneario de Rincón are minutes from the hotel.'
    },
    {
        title: 'Sunset Tradition',
        body: 'Gather with family on the hotel grounds for a sunset photo session overlooking the Caribbean Sea.'
    }
];

const QUICK_LINKS = [
    { label: '✧ Plan Your Trip', href: '#added-plan-your-trip' },
    { label: '✧ Explore Puerto Rico', href: '#explore-puerto-rico' },
    { label: '✧ Dining Guide', href: '#dining-guide' },
    { label: '✧ Travel Details', href: '#added-travel-details' }
];

const AIRPORT_OPTIONS = [
    { code: 'SJU', name: 'San Juan (SJU)', url: 'https://aeropuertosju.com', clickable: true },
    { code: 'BQN', name: 'Aguadilla (BQN) — Closest to Rincón'},
    { code: 'PSE', name: 'Ponce (PSE)'}
];

const CAR_RENTALS = [
    { name: 'Enterprise', url: 'https://www.enterprise.com' },
    { name: 'Hertz', url: 'https://www.hertz.com' },
    { name: 'Alamo', url: 'https://www.alamo.com' },
    { name: 'Avis', url: 'https://www.avis.com' }
];

const DINING_OPTIONS = [
    { name: 'The Beach House', url: 'https://www.beachhouserincon.com', clickable: true },
    { name: 'Tamboo Restaurant'},
    { name: 'La Copa Llena'},
    { name: 'La Cambija' },
    { name: 'Café 413' }
];

const MUST_TRY_DISHES = ['Mofongo', 'Lechón', 'Arroz con Gandules', 'Fresh Seafood', 'Piña Colada'];

const ISLAND_EXPERIENCES = [
    { title: 'El Yunque Rainforest', details: 'Waterfalls · Rivers · Lush Nature' },
    { title: 'Culebra · Flamenco Beach', details: 'Crystal-clear waters & white sand' },
    { title: 'Palomino Island', details: 'Exclusive coastal escape' },
    { title: 'Bioluminescent Bay', details: 'Glowing waters at night' },
    { title: 'Old San Juan', details: 'Colorful streets & historic beauty' }
];

const CULTURAL_SCENIC = [
    { title: 'Las Salinas · Cabo Rojo', details: 'Pink salt flats' },
    { title: 'Castillo Serrallés · Ponce', details: 'Historic elegance' },
    { title: 'Parque de Bombas · Ponce', details: 'Iconic architecture' },
    { title: 'Cueva del Indio · Arecibo', details: 'Ocean caves & dramatic views' },
    { title: 'Waterfalls & Rivers', details: 'Hidden tropical escapes' }
];

const RINCON_HIGHLIGHTS = ['Sandy Beach', 'Steps Beach', 'Faro de Punta Higueras (Sunset)'];

const getTravelHighlights = (reservationCode) => [
    {
        title: 'Arrival Window',
        body: 'Plan to reach the venue by 3:45 PM to enjoy welcome refreshments and settle in before the ceremony.'
    },
    {
        title: 'Check-In Support',
        body: `Call ahead with reservation code ${reservationCode} so the team can confirm your room and greet you upon arrival.`
    },
    {
        title: 'Golden Hour Moments',
        body: 'Sunset is around 7:00 PM in July—perfect for a quick family photo session before the reception begins.'
    }
];

export default function Travel({ details }) {
    const travelHighlights = getTravelHighlights(details.reservationCode);
    const locationLabel = details.venueAddressLong.split(',').slice(1).join(',').trim() || 'the area';
    const [regionalAirport, majorAirport] = details.airports;
    const hotels = [
        {
            name: details.venueName,
            distance: 'On-site accommodations at the venue',
            description:
                'Stay where the celebration takes place and enjoy ocean views, resort amenities, and effortless access to every event.',
            perks: [
                `Reference reservation code ${details.reservationCode} and “${details.hotelBlockName}” when booking`,
                'One-night deposit required to confirm your stay',
                'Book directly with the hotel team — online reservations are not yet available'
            ]
        }
    ];

    return (
        <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-14">
            <section className="glass-panel rounded-3xl p-8 shadow-xl" id="added-travel-details">
                <span className="ribbon-tag">Travel Guide</span>
                <h1 className="mt-4 font-display text-4xl">Plan Your Stay in {locationLabel}</h1>
                <p className="mt-3 max-w-3xl text-[rgba(44,96,130,0.75)]">
                    The celebration takes place at <strong>{details.venueName}</strong>, located at {details.venueAddressLong}. Please arrive with enough
                    time to soak in the coastal views, enjoy a welcome refreshment, and prepare for the ceremony to begin at 4:30 PM.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {QUICK_LINKS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(240,132,112,1)] shadow transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">Venue Details</h2>
                        <p className="mt-2 text-[rgba(44,96,130,0.75)]">{details.venueName}</p>
                        <p className="text-[rgba(44,96,130,0.6)]">{details.venueAddressLong}</p>
                        <ul className="mt-4 space-y-2 text-sm text-[rgba(44,96,130,0.6)]">
                            <li>
                                <strong>Reservation Code:</strong> {details.reservationCode} (reference “{details.hotelBlockName}”)
                            </li>
                            <li>
                                <strong>Front Desk:</strong>{' '}
                                <a
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    href={`tel:${details.hotelPhone.raw}`}
                                >
                                    {details.hotelPhone.display}
                                </a>
                            </li>
                            <li>
                                <strong>Contact:</strong>{' '}
                                <a
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    href={`tel:${details.hotelContact.raw}`}
                                >
                                    {details.hotelContact.name} {details.hotelContact.display}
                                </a>
                            </li>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a
                                    className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    href={`mailto:${details.hotelEmail}`}
                                >
                                    {details.hotelEmail}
                                </a>
                            </li>
                            <li>Online reservations are not yet available; please book directly. A one-night deposit is required.</li>
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">Celebration Week Snapshot</h2>
                        <ul className="mt-3 space-y-2 text-sm text-[rgba(44,96,130,0.7)]">
                            <li>
                                <strong>Sunday:</strong> Early arrivals and relaxed beach afternoon with family
                            </li>
                            <li>
                                <strong>Monday:</strong> Sunset rehearsal walk-through and dessert tasting (6:30 PM)
                            </li>
                            <li>
                                <strong>Tuesday:</strong> Ceremony & reception at {details.venueName} (doors open 3:45 PM)
                            </li>
                            <li>
                                <strong>Wednesday:</strong> Farewell brunch overlooking the Caribbean (10:30 AM)
                            </li>
                        </ul>
                        <p className="mt-4 text-sm text-[rgba(44,96,130,0.6)]">
                            Need assistance during the week? Email
                            <a
                                className="ml-1 font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                href={`mailto:${details.hotelEmail}`}
                            >
                                {details.hotelEmail}
                            </a>
                            or call the hotel team directly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Where to Stay</h2>
                    <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                        Stay right on property to enjoy the ocean breeze and effortless access to every event. Mention “{details.hotelBlockName}” and
                        reservation code {details.reservationCode} to be added to our welcome list and receive the group rate.
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
                                        href="https://www.google.com/travel/hotels"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(240,132,112,1)] transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                    >
                                        Check Availability
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
                        <h2 className="font-display text-3xl">Flying In</h2>
                        <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                            Choose between {regionalAirport.name} or {majorAirport.name}. Both offer reliable ground transportation to {locationLabel}.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {details.airports.map((airport) => (
                            <div key={airport.code} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-5 shadow">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{airport.code}</p>
                                <h3 className="mt-1 text-lg font-semibold text-[rgba(44,96,130,0.9)]">{airport.name}</h3>
                                <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">{airport.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-5 shadow">
                        <h3 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">Ground Transportation</h3>
                        <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">
                            {details.rideshareNote}, and the following taxi teams are happy to help:
                        </p>
                        <div className="mt-4 space-y-4 text-sm text-[rgba(44,96,130,0.7)]">
                            <div>
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">From {majorAirport.name}</p>
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
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">From {regionalAirport.name}</p>
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
                    <h2 className="font-display text-3xl">{locationLabel} Highlights</h2>
                    <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                        Make the most of your time in {locationLabel}. These moments capture the relaxed coastal vibe Alondra loves sharing with
                        family and friends.
                    </p>
                    <ul className="mt-6 space-y-4 text-[rgba(44,96,130,0.7)]">
                        {LOCAL_TIPS.map((tip) => (
                            <li key={tip.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-6 shadow">
                                <h3 className="text-lg font-semibold text-[rgba(44,96,130,0.9)]">{tip.title}</h3>
                                <p className="mt-2 text-sm">{tip.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass-panel rounded-3xl p-0 shadow-xl">
                    <iframe
                        title={`${details.venueName} Directions`}
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
                    <h2 className="font-display text-3xl">Arrival & Transportation</h2>
                    <div className="mt-6 space-y-4">
                        {AIRPORT_OPTIONS.map((airport) => (
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
                    <p className="mt-6 text-sm text-[rgba(44,96,130,0.7)]">✨ Renting a car is highly recommended for a seamless experience.</p>
                </div>
                <aside className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Car Rentals</h2>
                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.8)]">
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
                </aside>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl" id="climate">
                <h2 className="font-display text-3xl">Puerto Rico in July</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">Warm · Tropical · Radiant</p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.65)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">Average Temperature</p>
                        <p className="mt-2 text-2xl font-semibold text-[rgba(44,96,130,0.9)]">80°F – 88°F</p>
                    </div>
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.65)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">Weather Feel</p>
                        <p className="mt-2 text-[rgba(44,96,130,0.8)]">Light ocean breeze · Occasional refreshing rain</p>
                    </div>
                    <div className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.65)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">Dress Code Inspiration</p>
                        <p className="mt-2 text-[rgba(44,96,130,0.8)]">Elegant Resort · Coastal Chic · Light Fabrics</p>
                    </div>
                </div>
            </section>

            <section id="dining-guide" className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Curated Dining</h2>
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
                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">Must Try</p>
                    <p className="mt-2 text-[rgba(44,96,130,0.85)]">{MUST_TRY_DISHES.join(' · ')}</p>
                    <p className="mt-2 text-sm text-[rgba(44,96,130,0.7)]">✨ A taste of Puerto Rico&apos;s soul</p>
                </div>
            </section>

            <section id="explore-puerto-rico" className="grid gap-6 lg:grid-cols-2">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Island Experiences</h2>
                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.8)]">
                        {ISLAND_EXPERIENCES.map((item) => (
                            <li key={item.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-4 shadow">
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">{item.title}</p>
                                <p className="text-sm">{item.details}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Cultural & Scenic</h2>
                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.8)]">
                        {CULTURAL_SCENIC.map((item) => (
                            <li key={item.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.8)] p-4 shadow">
                                <p className="font-semibold text-[rgba(44,96,130,0.9)]">{item.title}</p>
                                <p className="text-sm">{item.details}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.45)] p-5 shadow">
                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">Rincón Highlights</p>
                        <p className="mt-2 text-[rgba(44,96,130,0.85)]">{RINCON_HIGHLIGHTS.join(' · ')}</p>
                    </div>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 text-center shadow-xl">
                <p className="text-lg text-[rgba(44,96,130,0.75)]">We are honored to celebrate this unforgettable moment</p>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[rgba(47,156,194,0.75)]">In honor of</p>
                <h2 className="mt-2 font-display text-4xl">Alondra del Mar</h2>
                <p className="mt-6 mx-auto max-w-2xl text-[rgba(44,96,130,0.8)]">
                    ✨ A night inspired by the ocean, where elegance flows like waves and memories shine like pearls.
                </p>
            </section>
        </main>
    );
}
