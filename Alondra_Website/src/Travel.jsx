import './App.css';
import alondra10 from './alondra_images/alondra10.JPG';
import alondra11 from './alondra_images/alondra11.JPG';
import alondra12 from './alondra_images/alondra12.JPG';
import alondra13 from './alondra_images/alondra13.JPG';
import alondra14 from './alondra_images/alondra14.JPG';

const VENUE_NAME = 'Rincón of the Seas Grand Caribbean Hotel & Villa';
const VENUE_ADDRESS = 'Road 115 KM 12.2, Rincón, Puerto Rico';

const HOTELS = [
    {
        name: VENUE_NAME,
        distance: 'On-site accommodations at the venue',
        description:
            'Stay where the celebration takes place and enjoy ocean views, resort amenities, and effortless access to every event.',
        perks: [
            'Reference reservation code 334 and “Quinceañera Alondra” when booking',
            'One-night deposit required to confirm your stay',
            'Book directly with the hotel team — online reservations are not yet available'
        ]
    }
];

const AIRPORTS = [
    {
        code: 'BQN',
        name: 'Aguadilla, PR (BQN)',
        details:
            'Closest airport to the venue with regional flights. Approximate travel time to Rincón of the Seas: ~40 minutes (subject to traffic).'
    },
    {
        code: 'SJU',
        name: 'San Juan, PR (SJU)',
        details:
            'Major international hub with plentiful flight options. Approximate travel time to the hotel: ~2 hours 20 minutes (subject to traffic).'
    }
];

const TAXI_SERVICES = {
    sju: [
        { name: 'Wilbert Taxis', phone: '787-479-9767' },
        { name: 'Puerto Rico Taxi', phone: '787-685-9666' },
        { name: 'Taxi PR Carolina', phone: '787-513-5916' }
    ],
    bqn: [
        { name: 'Aguadilla Taxi', phone: '787-318-9546' },
        { name: 'Aguadilla Borinquen Taxis', phone: '787-431-8179' },
        { name: "Manny's Taxis", phone: '939-366-2214' }
    ]
};

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

const TRAVEL_PHOTOS = [
    { src: alondra10, alt: 'Alondra walking the shoreline in Rincón, Puerto Rico.' },
    { src: alondra11, alt: 'Alondra smiling during a sunset stroll by the ocean.' },
    { src: alondra12, alt: 'Alondra posing beneath swaying palm trees.' },
    { src: alondra13, alt: 'Alondra sharing a laugh while exploring the resort grounds.' },
    { src: alondra14, alt: 'Alondra framed by tropical blooms near the venue.' }
];

export default function Travel() {
    const featurePhotos = TRAVEL_PHOTOS.slice(0, 3);

    return (
        <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-14">
            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <span className="ribbon-tag">Travel Guide</span>
                <h1 className="mt-4 font-display text-4xl">Plan Your Stay in Rincón, Puerto Rico</h1>
                <p className="mt-3 max-w-3xl text-[rgba(162,126,172,0.75)]">
                    The celebration takes place at <strong>{VENUE_NAME}</strong>, located at {VENUE_ADDRESS}. Please arrive with enough
                    time to soak in the coastal views, enjoy a welcome refreshment, and prepare for the ceremony to begin at 4:30 PM.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {featurePhotos.map((photo) => (
                        <figure
                            key={photo.src}
                            className="group overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.6)] shadow-lg"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </figure>
                    ))}
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.75)] p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-[rgba(162,126,172,0.9)]">Venue Details</h2>
                        <p className="mt-2 text-[rgba(162,126,172,0.75)]">{VENUE_NAME}</p>
                        <p className="text-[rgba(162,126,172,0.6)]">{VENUE_ADDRESS}</p>
                        <ul className="mt-4 space-y-2 text-sm text-[rgba(162,126,172,0.6)]">
                            <li>
                                <strong>Reservation Code:</strong> 334 (reference “Quinceañera Alondra”)
                            </li>
                            <li>
                                <strong>Front Desk:</strong>{' '}
                                <a className="font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline" href="tel:7878237500">
                                    (787) 823-7500
                                </a>
                            </li>
                            <li>
                                <strong>Contact:</strong>{' '}
                                <a className="font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline" href="tel:7878238114">
                                    Lisandra Ayala (787) 823-8114
                                </a>
                            </li>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a className="font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline" href="mailto:LA@RINCONOFTHESEAS.COM">
                                    LA@RINCONOFTHESEAS.COM
                                </a>
                            </li>
                            <li>Online reservations are not yet available; please book directly. A one-night deposit is required.</li>
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.75)] p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-[rgba(162,126,172,0.9)]">Celebration Week Snapshot</h2>
                        <ul className="mt-3 space-y-2 text-sm text-[rgba(162,126,172,0.7)]">
                            <li>
                                <strong>Sunday:</strong> Early arrivals and relaxed beach afternoon with family
                            </li>
                            <li>
                                <strong>Monday:</strong> Sunset rehearsal walk-through and dessert tasting (6:30 PM)
                            </li>
                            <li>
                                <strong>Tuesday:</strong> Ceremony & reception at {VENUE_NAME} (doors open 3:45 PM)
                            </li>
                            <li>
                                <strong>Wednesday:</strong> Farewell brunch overlooking the Caribbean (10:30 AM)
                            </li>
                        </ul>
                        <p className="mt-4 text-sm text-[rgba(162,126,172,0.6)]">
                            Need assistance during the week? Email
                            <a
                                className="ml-1 font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline"
                                href="mailto:LA@RINCONOFTHESEAS.COM"
                            >
                                LA@RINCONOFTHESEAS.COM
                            </a>
                            or call the hotel team directly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Where to Stay</h2>
                    <p className="mt-3 text-[rgba(162,126,172,0.75)]">
                        Stay right on property to enjoy the ocean breeze and effortless access to every event. Mention “Quinceañera
                        Alondra” and reservation code 334 to be added to our welcome list and receive the group rate.
                    </p>
                    <div className="mt-6 space-y-6">
                        {HOTELS.map((hotel) => (
                            <div key={hotel.name} className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.8)] p-6 shadow-md">
                                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold text-[rgba(162,126,172,0.9)]">{hotel.name}</h3>
                                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">{hotel.distance}</p>
                                    </div>
                                    <a
                                        href="https://www.google.com/travel/hotels"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-[rgba(211,214,247,0.8)] bg-[rgba(251,208,235,0.75)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(201,148,158,1)] transition hover:border-[rgba(82,191,232,0.55)] hover:text-[rgba(162,126,172,0.9)]"
                                    >
                                        Check Availability
                                    </a>
                                </div>
                                <p className="mt-4 text-[rgba(162,126,172,0.7)]">{hotel.description}</p>
                                <ul className="mt-4 grid gap-2 text-sm text-[rgba(162,126,172,0.6)] sm:grid-cols-2">
                                    {hotel.perks.map((perk) => (
                                        <li key={perk} className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[rgba(201,148,158,0.95)]"></span>
                                            <span>{perk}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="glass-panel flex flex-col gap-6 rounded-3xl p-8 shadow-xl">
                    <figure className="overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] shadow-md">
                        <img
                            src={TRAVEL_PHOTOS[3].src}
                            alt={TRAVEL_PHOTOS[3].alt}
                            className="h-48 w-full object-cover"
                        />
                    </figure>
                    <div>
                        <h2 className="font-display text-3xl">Flying In</h2>
                        <p className="mt-3 text-[rgba(162,126,172,0.75)]">
                            Choose between Aguadilla (BQN) about 40 minutes away or San Juan (SJU) at roughly 2 hours 20 minutes. Both
                            offer reliable ground transportation to Rincón.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {AIRPORTS.map((airport) => (
                            <div key={airport.code} className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.8)] p-5 shadow">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">{airport.code}</p>
                                <h3 className="mt-1 text-lg font-semibold text-[rgba(162,126,172,0.9)]">{airport.name}</h3>
                                <p className="mt-2 text-sm text-[rgba(162,126,172,0.7)]">{airport.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.8)] p-5 shadow">
                        <h3 className="text-lg font-semibold text-[rgba(162,126,172,0.9)]">Ground Transportation</h3>
                        <p className="mt-2 text-sm text-[rgba(162,126,172,0.7)]">Uber operates throughout Puerto Rico, and the following taxi teams are happy to help:</p>
                        <div className="mt-4 space-y-4 text-sm text-[rgba(162,126,172,0.7)]">
                            <div>
                                <p className="font-semibold text-[rgba(162,126,172,0.9)]">From San Juan Airport (SJU)</p>
                                <ul className="mt-2 space-y-1">
                                    {TAXI_SERVICES.sju.map((service) => (
                                        <li key={service.name}>
                                            {service.name}{' '}
                                            <a
                                                href={`tel:${service.phone.replace(/[^0-9]/g, '')}`}
                                                className="font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline"
                                            >
                                                {service.phone}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[rgba(162,126,172,0.9)]">From Aguadilla Airport (BQN)</p>
                                <ul className="mt-2 space-y-1">
                                    {TAXI_SERVICES.bqn.map((service) => (
                                        <li key={service.name}>
                                            {service.name}{' '}
                                            <a
                                                href={`tel:${service.phone.replace(/[^0-9]/g, '')}`}
                                                className="font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline"
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
                    <h2 className="font-display text-3xl">Rincón Highlights</h2>
                    <p className="mt-3 text-[rgba(162,126,172,0.75)]">
                        Make the most of your time in Rincón. These moments capture the relaxed coastal vibe Alondra loves sharing with
                        family and friends.
                    </p>
                    <ul className="mt-6 space-y-4 text-[rgba(162,126,172,0.7)]">
                        {LOCAL_TIPS.map((tip) => (
                            <li key={tip.title} className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.8)] p-6 shadow">
                                <h3 className="text-lg font-semibold text-[rgba(162,126,172,0.9)]">{tip.title}</h3>
                                <p className="mt-2 text-sm">{tip.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass-panel rounded-3xl p-0 shadow-xl">
                    <iframe
                        title="Rincón of the Seas Grand Caribbean Hotel &amp; Villa Directions"
                        src="https://maps.google.com/maps?q=Rinc%C3%B3n%20of%20the%20Seas%20Grand%20Caribbean%20Hotel%20%26%20Villa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="h-full min-h-[360px] w-full rounded-3xl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl text-center">Alondra&apos;s Travel Postcards</h2>
                <p className="mt-3 text-center text-[rgba(162,126,172,0.75)]">
                    Picture yourself celebrating alongside Alondra—these snapshots showcase the vibrant energy of her Puerto Rico adventure.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {TRAVEL_PHOTOS.map((photo) => (
                        <figure
                            key={photo.src}
                            className="group overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.6)] shadow-lg"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
}
