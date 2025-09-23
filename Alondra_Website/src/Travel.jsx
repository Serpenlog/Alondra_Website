import './App.css';

const VENUE_ADDRESS = '307 Pearl Pkwy, San Antonio, TX 78215';

const HOTELS = [
    {
        name: 'Hotel Emma',
        distance: 'On-site at Pearl District',
        description:
            'Luxury accommodations with historic charm. Request the “Alondra Mis XV” rate for welcome bag delivery and late checkout.',
        perks: ['Complimentary welcome paletas', 'Access to rooftop pool', '2-minute walk to The Pearl Stable']
    },
    {
        name: 'Canopy by Hilton San Antonio Riverwalk',
        distance: '0.6 miles from venue',
        description:
            'Trendy riverside stay with easy access to the River Walk. Mention the quinceañera room block for discounted valet parking.',
        perks: ['Breakfast vouchers included', 'River Walk views', 'Shuttle to the venue at 3:45 PM']
    }
];

const AIRPORTS = [
    {
        code: 'SAT',
        name: 'San Antonio International Airport',
        details: 'Closest airport with nonstop flights nationwide. 15-minute rideshare to the Pearl District.'
    },
    {
        code: 'AUS',
        name: 'Austin-Bergstrom International Airport',
        details: 'A scenic 75-minute drive south. Perfect for guests extending their Texas getaway.'
    }
];

const LOCAL_TIPS = [
    {
        title: 'Parking & Arrival',
        body: 'Complimentary valet begins at 3:45 PM at The Pearl Stable porte-cochère. Self-parking is available in the Koehler Garage (map pins provided below).'
    },
    {
        title: 'Welcome Gatherings',
        body: 'Join us Friday evening at Larder inside Hotel Emma for cafecito and conchas from 7:00 – 9:00 PM.'
    },
    {
        title: 'Sunday Brunch',
        body: 'Meet the family at Bakery Lorraine Pearl for a casual send-off brunch beginning at 10:30 AM.'
    }
];

export default function Travel() {
    return (
        <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-14">
            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <span className="ribbon-tag">Travel Guide</span>
                <h1 className="mt-4 font-display text-4xl">Plan Your Stay in San Antonio</h1>
                <p className="mt-3 max-w-3xl text-rose-900/75">
                    The celebration takes place at <strong>The Pearl Stable</strong>, located at {VENUE_ADDRESS}. Arrive by 4:00 PM to
                    enjoy welcome refreshments and snap photos around the iconic Pearl grounds before the mass begins.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-rose-600">Venue Address</h2>
                        <p className="mt-2 text-rose-900/75">The Pearl Stable</p>
                        <p className="text-rose-900/60">{VENUE_ADDRESS}</p>
                        <p className="mt-4 text-sm text-rose-900/60">
                            Doors open at 3:45 PM for guest seating. Ceremony begins promptly at 4:30 PM with reception to follow.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-md">
                        <h2 className="text-lg font-semibold text-rose-600">Weekend Snapshot</h2>
                        <ul className="mt-3 space-y-2 text-sm text-rose-900/70">
                            <li><strong>Friday:</strong> Welcome cafecito at Larder (7:00 PM)</li>
                            <li><strong>Saturday:</strong> Ceremony & reception at The Pearl Stable (4:30 PM)</li>
                            <li><strong>Sunday:</strong> Farewell brunch at Bakery Lorraine (10:30 AM)</li>
                        </ul>
                        <p className="mt-4 text-sm text-rose-900/60">
                            Need assistance during the weekend? Text our hostess team at <a className="font-semibold text-rose-500 underline-offset-4 hover:underline" href="tel:2105550199">(210) 555-0199</a>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Where to Stay</h2>
                    <p className="mt-3 text-rose-900/75">
                        We have secured special rates at our favorite Pearl District hotels. Mention “Alondra Mis XV” when booking to
                        be added to the welcome list.
                    </p>
                    <div className="mt-6 space-y-6">
                        {HOTELS.map((hotel) => (
                            <div key={hotel.name} className="rounded-3xl border border-rose-100 bg-white/85 p-6 shadow-md">
                                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold text-rose-600">{hotel.name}</h3>
                                        <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{hotel.distance}</p>
                                    </div>
                                    <a
                                        href="https://www.google.com/travel/hotels"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full border border-rose-300/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 transition hover:border-rose-400 hover:text-rose-600"
                                    >
                                        Check Availability
                                    </a>
                                </div>
                                <p className="mt-4 text-rose-900/70">{hotel.description}</p>
                                <ul className="mt-4 grid gap-2 text-sm text-rose-900/60 sm:grid-cols-2">
                                    {hotel.perks.map((perk) => (
                                        <li key={perk} className="flex items-start gap-2">
                                            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-rose-400"></span>
                                            <span>{perk}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="glass-panel flex flex-col gap-6 rounded-3xl p-8 shadow-xl">
                    <div>
                        <h2 className="font-display text-3xl">Flying In</h2>
                        <p className="mt-3 text-rose-900/75">
                            Both airports offer nonstop routes and easy transportation options. Rideshare pick-up zones are well marked.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {AIRPORTS.map((airport) => (
                            <div key={airport.code} className="rounded-3xl border border-rose-100 bg-white/85 p-5 shadow">
                                <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{airport.code}</p>
                                <h3 className="mt-1 text-lg font-semibold text-rose-600">{airport.name}</h3>
                                <p className="mt-2 text-sm text-rose-900/70">{airport.details}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-3xl border border-rose-100 bg-white/85 p-5 shadow">
                        <h3 className="text-lg font-semibold text-rose-600">Ground Transportation</h3>
                        <ul className="mt-3 space-y-2 text-sm text-rose-900/70">
                            <li><strong>Rideshare:</strong> Use “Pearl Stable” as your drop-off pin.</li>
                            <li><strong>Shuttle:</strong> Hotel Emma & Canopy shuttles depart at 3:45 PM and 4:00 PM.</li>
                            <li><strong>Parking:</strong> Validation provided for the Koehler Garage (levels 2–4).</li>
                        </ul>
                    </div>
                </aside>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Weekend Highlights</h2>
                    <p className="mt-3 text-rose-900/75">
                        Make the most of your time in San Antonio. Here are a few of Alondra’s favorite spots within walking distance of
                        the Pearl.
                    </p>
                    <ul className="mt-6 space-y-4 text-rose-900/70">
                        {LOCAL_TIPS.map((tip) => (
                            <li key={tip.title} className="rounded-3xl border border-rose-100 bg-white/85 p-6 shadow">
                                <h3 className="text-lg font-semibold text-rose-600">{tip.title}</h3>
                                <p className="mt-2 text-sm">{tip.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glass-panel rounded-3xl p-0 shadow-xl">
                    <iframe
                        title="The Pearl Stable Directions"
                        src="https://maps.google.com/maps?q=307%20Pearl%20Pkwy%2C%20San%20Antonio%2C%20TX%2078215&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="h-full min-h-[360px] w-full rounded-3xl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
