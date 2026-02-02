import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Envelope from './Envelope.jsx';
import Travel from './Travel.jsx';
import { guestList } from './data/guestList.js';
import alondra1 from './alondra_images/alondra1.JPG';
import alondra1Blur from './alondra_images/alondra1_blur.png';
import alondra2 from './alondra_images/alondra2.JPG';
import alondra2Blur from './alondra_images/alondra2_blur.png';
import alondra3 from './alondra_images/alondra3.JPG';
import alondra3Blur from './alondra_images/alondra3_blur.png';
import alondra4 from './alondra_images/alondra4.JPG';
import alondra4Blur from './alondra_images/alondra4_blur.png';
import alondra5 from './alondra_images/alondra5.JPG';
import alondra5Blur from './alondra_images/alondra5_blur.png';
import alondra6 from './alondra_images/alondra6.JPG';
import alondra6Blur from './alondra_images/alondra6_blur.png';
import alondra7 from './alondra_images/alondra7.JPG';
import alondra7Blur from './alondra_images/alondra7_blur.png';
import alondra8 from './alondra_images/alondra8.JPG';
import alondra8Blur from './alondra_images/alondra8_blur.png';
import alondra9 from './alondra_images/alondra9.JPG';
import alondra9Blur from './alondra_images/alondra9_blur.png';
import alondra10 from './alondra_images/alondra10.JPG';
import alondra10Blur from './alondra_images/alondra10_blur.png';
import alondra11 from './alondra_images/alondra11.JPG';
import alondra11Blur from './alondra_images/alondra11_blur.png';
import alondra12 from './alondra_images/alondra12.JPG';
import alondra12Blur from './alondra_images/alondra12_blur.png';

const EVENT_DATE = new Date('2026-07-28T17:00:00-04:00');

const HERO_PHOTOS = [
    { src: alondra1, blurSrc: alondra1Blur, alt: 'Portrait of Alondra sharing a joyful smile in her quinceañera gown.' },
    { src: alondra2, blurSrc: alondra2Blur, alt: 'Alondra posing gracefully against a tropical backdrop.' },
    { src: alondra3, blurSrc: alondra3Blur, alt: 'Alondra taking in the coastal sunset before her celebration.' }
];

const MEMORY_PHOTOS = [
    { src: alondra4, blurSrc: alondra4Blur, alt: 'Alondra holding her bouquet during a quiet moment.' },
    { src: alondra5, blurSrc: alondra5Blur, alt: 'Alondra glancing over her shoulder with a playful grin.' },
    { src: alondra6, blurSrc: alondra6Blur, alt: 'Alondra adjusting her tiara before the festivities.' }
];

const GALLERY_PHOTOS = [
    { src: alondra7, blurSrc: alondra7Blur, alt: 'Alondra laughing with loved ones.' },
    { src: alondra8, blurSrc: alondra8Blur, alt: 'Alondra dancing beneath twinkling lights.' },
    { src: alondra9, blurSrc: alondra9Blur, alt: 'Alondra sharing a toast with her family.' },
    { src: alondra10, blurSrc: alondra10Blur, alt: 'Alondra posing along the shoreline in Puerto Rico.' },
    { src: alondra11, blurSrc: alondra11Blur, alt: 'Alondra celebrating with an elegant twirl.' },
    { src: alondra12, blurSrc: alondra12Blur, alt: 'Alondra framed by tropical greenery.' }
];

const ITINERARY = [
    {
        time: '4:00 PM',
        title: 'Guest Arrival & Welcome',
        description: 'Sip a sparkling agua fresca, drop off gifts, and settle in before the festivities begin.'
    },
    {
        time: '4:30 PM',
        title: 'Mass of Thanksgiving',
        description: 'Join us as we give thanks for Alondra\'s journey with a heartfelt ceremony led by Father Miguel.'
    },
    {
        time: '6:00 PM',
        title: 'Reception Grand Entrance',
        description: 'Alondra makes her debut! Enjoy a gourmet dinner, signature mocktails, and plenty of photo moments.'
    },
    {
        time: '8:00 PM',
        title: 'Traditional Dances & Fiesta',
        description: 'From the father-daughter dance to La Última Muñeca, dance the night away with DJ Solstice.'
    }
];

const REAL_TAXI_SERVICES = {
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

const DEMO_TAXI_SERVICES = {
    sju: [
        { name: 'Harborline Rides', phone: '415-555-0129' },
        { name: 'Coastal City Taxi', phone: '415-555-0184' },
        { name: 'Sunset Shuttle', phone: '415-555-0146' }
    ],
    bqn: [
        { name: 'Laguna Cab Co.', phone: '415-555-0192' },
        { name: 'Vista Taxi Group', phone: '415-555-0163' },
        { name: 'Boardwalk Cars', phone: '415-555-0171' }
    ]
};

const REAL_DETAILS = {
    venueName: 'Rincón of the Seas Grand Caribbean Hotel & Villa',
    venueAddress: 'Road 115 KM 12.2 • Rincón, Puerto Rico',
    venueAddressLong: 'Road 115 KM 12.2, Rincón, Puerto Rico',
    hostNames: 'Marisol Flores & Jesus Lopez',
    hostFamily: 'the Lopez family',
    contactEmail: 'celebrate@alondrasxv.com',
    hotelBlockName: 'Quinceañera Alondra',
    reservationCode: '334',
    hotelPhone: { display: '(787) 823-7500', raw: '7878237500' },
    hotelContact: { name: 'Lisandra Ayala', display: '(787) 823-8114', raw: '7878238114' },
    hotelEmail: 'LA@RINCONOFTHESEAS.COM',
    taxiServices: REAL_TAXI_SERVICES,
    airports: [
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
    ],
    travelTip:
        'Aguadilla Airport (BQN) is roughly 40 minutes from the hotel, while San Juan Airport (SJU) averages about 2 hours and 20 minutes, subject to traffic.',
    rideshareNote: 'Uber operates throughout Puerto Rico',
    mapTitle: 'Rincón of the Seas Grand Caribbean Hotel & Villa Map',
    mapUrl:
        'https://maps.google.com/maps?q=Rinc%C3%B3n%20of%20the%20Seas%20Grand%20Caribbean%20Hotel%20%26%20Villa&t=&z=15&ie=UTF8&iwloc=&output=embed'
};

const DEMO_DETAILS = {
    venueName: 'Seaside Palms Event Hall',
    venueAddress: 'Oceanview Blvd 12 • Vista del Mar, CA',
    venueAddressLong: 'Oceanview Blvd 12, Vista del Mar, CA',
    hostNames: 'Lucia Perez & Mateo Rivera',
    hostFamily: 'the Rivera family',
    contactEmail: 'hello@democelebration.com',
    hotelBlockName: 'Demo Celebration',
    reservationCode: '781',
    hotelPhone: { display: '(415) 555-0198', raw: '4155550198' },
    hotelContact: { name: 'Jordan Lee', display: '(415) 555-0175', raw: '4155550175' },
    hotelEmail: 'EVENTS@SEASIDEPALMS.COM',
    taxiServices: DEMO_TAXI_SERVICES,
    airports: [
        {
            code: 'HPX',
            name: 'Harbor Point, CA (HPX)',
            details:
                'Closest regional airport to Vista del Mar with direct coastal shuttle service. Approximate travel time: ~35 minutes.'
        },
        {
            code: 'CWT',
            name: 'Cedarwood, CA (CWT)',
            details:
                'Major coastal hub with daily arrivals. Approximate travel time to Seaside Palms: ~1 hour 50 minutes, depending on traffic.'
        }
    ],
    travelTip:
        'Harbor Point Airport (HPX) is about 35 minutes away, while Cedarwood Airport (CWT) is roughly 1 hour and 50 minutes, depending on traffic.',
    rideshareNote: 'Rideshare apps operate throughout Vista del Mar',
    mapTitle: 'Seaside Palms Event Hall Map',
    mapUrl:
        'https://maps.google.com/maps?q=Seaside%20Palms%20Event%20Hall%20Vista%20del%20Mar&t=&z=14&ie=UTF8&iwloc=&output=embed'
};

const formatTaxiList = (services) =>
    services.map((service) => `${service.name} (${service.phone})`).join(', ');

function getTimeRemaining() {
    const total = EVENT_DATE.getTime() - Date.now();

    if (total <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            completed: true
        };
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        days,
        hours,
        minutes,
        seconds,
        completed: false
    };
}

function App() {
    const [accessStage, setAccessStage] = useState('sealed');
    const [currentPage, setCurrentPage] = useState('home');
    const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [guestInfo, setGuestInfo] = useState(null);

    const isOpen = accessStage === 'open';
    const isDemo = guestInfo?.isDemo ?? false;
    const eventDetails = isDemo ? DEMO_DETAILS : REAL_DETAILS;
    const [regionalAirport, majorAirport] = eventDetails.airports;

    const normalizePhone = (value) => value.replace(/\D/g, '');

    const handlePasswordSubmit = (event) => {
        event.preventDefault();
        const normalized = normalizePhone(phoneInput);
        const match = guestList.find((entry) => entry.phone === normalized);

        if (match) {
            const isDemoAccess = Boolean(match.demo);
            const demoTickets = Math.floor(Math.random() * 4) + 1;
            setGuestInfo({
                ...match,
                tickets: isDemoAccess ? demoTickets : match.tickets,
                isDemo: isDemoAccess
            });
            setPasswordError('');
            setAccessStage('open');
            setCurrentPage('home');
            return;
        }

        setPasswordError('That phone number is not on the guest list. Please try again.');
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const countdownUnits = useMemo(
        () => [
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
        ],
        [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
    );

    return (
        <>
            {accessStage === 'sealed' && (
                <Envelope onStampClick={() => setAccessStage('password')} />
            )}
            {accessStage === 'password' && (
                <div className="password-overlay">
                    <form className="password-card" onSubmit={handlePasswordSubmit}>
                        <p className="password-title">Enter your phone number to continue</p>
                        <label className="password-label" htmlFor="phone-number">
                            Phone number
                        </label>
                        <input
                            id="phone-number"
                            name="phone-number"
                            type="tel"
                            autoComplete="tel"
                            placeholder="(555) 123-4567"
                            value={phoneInput}
                            onChange={(event) => {
                                setPhoneInput(event.target.value);
                                if (passwordError) {
                                    setPasswordError('');
                                }
                            }}
                            className="password-input"
                        />
                        {passwordError && <p className="password-error">{passwordError}</p>}
                        <button type="submit" className="password-button">
                            Unlock Invitation
                        </button>
                    </form>
                </div>
            )}
            <div
                className={`min-h-screen w-full bg-gradient-to-br from-[rgba(185,245,255,0.85)] via-[rgba(251,208,235,0.85)] to-[rgba(211,214,247,0.9)] px-6 py-12 text-[rgba(162,126,172,0.95)] transition-opacity duration-500 ease-out md:px-10 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.5em] text-[rgba(82,191,232,0.75)]">Alondra Lopez Flores</p>
                        <p className="font-display text-2xl text-[rgba(162,126,172,0.95)]">Mis XV Celebration</p>
                    </div>
                    <nav className="mx-auto flex w-full max-w-sm justify-center gap-2 rounded-full border border-[rgba(211,214,247,0.6)] bg-[rgba(185,245,255,0.4)] p-1 shadow-lg sm:mx-0">
                        {[
                            { key: 'home', label: 'Home' },
                            { key: 'travel', label: 'Travel Info' }
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setCurrentPage(key)}
                                className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(82,191,232,0.6)] ${
                                    currentPage === key
                                        ? 'bg-[rgba(162,126,172,0.95)] text-white shadow'
                                        : 'text-[rgba(162,126,172,0.9)] hover:bg-[rgba(251,208,235,0.5)]'
                                }`}
                                aria-pressed={currentPage === key}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                </header>
                {currentPage === 'home' ? (
                    <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-20">
                        {guestInfo && (
                            <section className="glass-panel rounded-3xl p-6 text-center shadow-lg">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">
                                    Invitation Access Confirmed
                                </p>
                                <p className="mt-2 text-xl font-semibold">
                                    Phone: {guestInfo.phone}
                                    {isDemo && (
                                        <span className="ml-3 rounded-full bg-[rgba(201,148,158,0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(201,148,158,0.95)]">
                                            Demo
                                        </span>
                                    )}
                                </p>
                                <p className="text-[rgba(162,126,172,0.75)]">
                                    Tickets reserved: {guestInfo.tickets}
                                    {isDemo && (
                                        <span className="ml-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(201,148,158,0.85)]">
                                            Demo
                                        </span>
                                    )}
                                </p>
                            </section>
                        )}
                        <section className="text-center" id="home">
                            <div className="flex justify-center">
                                <span className="ribbon-tag">Mis XV • July 28, 2026</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl">
                                Alondra&apos;s Quinceañera
                            </h1>
                            <p className="mt-4 text-lg text-[rgba(162,126,172,0.8)] md:text-xl">
                                Join us in celebrating fifteen beautiful years of faith, family, and dreams come true.
                                Expect joyful traditions, delicious food, and a night of dancing beneath the stars.
                            </p>
                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                {HERO_PHOTOS.map((photo) => (
                                    <figure
                                        key={photo.src}
                                        className="group relative overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.6)] shadow-xl"
                                    >
                                        <img
                                            src={isDemo ? photo.blurSrc : photo.src}
                                            alt={photo.alt}
                                            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </figure>
                                ))}
                            </div>
                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">Date</p>
                                    <p className="mt-2 text-xl font-semibold">Tuesday • July 28, 2026</p>
                                    <p className="text-[rgba(162,126,172,0.7)]">Ceremony begins promptly at 4:30 PM</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">Venue</p>
                                    <p className="mt-2 text-xl font-semibold">{eventDetails.venueName}</p>
                                    <p className="text-[rgba(162,126,172,0.7)]">{eventDetails.venueAddress}</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">Attire</p>
                                    <p className="mt-2 text-xl font-semibold">Formal Attire</p>
                                    <p className="text-[rgba(162,126,172,0.7)]">
                                        Elegant evening wear, please. Gold and white ensembles are reserved exclusively for
                                        Alondra.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="#rsvp"
                                    className="rounded-full bg-[rgba(162,126,172,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(162,126,172,0.85)]"
                                >
                                    RSVP Now
                                </a>
                                <a
                                    href="#itinerary"
                                    className="rounded-full border border-[rgba(211,214,247,0.8)] bg-[rgba(251,208,235,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(201,148,158,1)] shadow-lg transition hover:border-[rgba(82,191,232,0.55)] hover:text-[rgba(162,126,172,0.9)]"
                                >
                                    View Itinerary
                                </a>
                            </div>
                        </section>

                        <section className="glass-panel rounded-3xl p-8 text-center shadow-xl" id="countdown">
                            <h2 className="font-display text-3xl md:text-4xl">Countdown to the Celebration</h2>
                            <p className="mt-2 text-[rgba(162,126,172,0.7)]">We can&apos;t wait to celebrate with you!</p>
                            <p className="mt-1 text-sm uppercase tracking-[0.4em] text-[rgba(82,191,232,0.75)]">
                                July 28, 2026 • 4:30 PM Atlantic Time
                            </p>
                            {timeLeft.completed ? (
                                <p className="mt-6 text-2xl font-semibold text-[rgba(201,148,158,1)]">It&apos;s party time! 💃🏽</p>
                            ) : (
                                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                    {countdownUnits.map(({ label, value }) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-[rgba(211,214,247,0.6)] bg-[rgba(211,214,247,0.6)] px-6 py-6 shadow-md"
                                        >
                                            <p className="text-4xl font-bold text-[rgba(201,148,158,1)] md:text-5xl">{String(value).padStart(2, '0')}</p>
                                            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-[rgba(82,191,232,0.75)]">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <section id="details" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="glass-panel rounded-3xl p-8 shadow-xl">
                                <h2 className="font-display text-3xl">Event Highlights</h2>
                                <p className="mt-3 text-[rgba(162,126,172,0.8)]">
                                    From the traditional mass to a sparkling reception, every detail has been planned with
                                    family and friends in mind. Take a peek at the evening&apos;s highlights and make sure you
                                    arrive in time for the ceremonies that matter most to Alondra and her parents.
                                </p>
                                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                    {MEMORY_PHOTOS.map((photo) => (
                                        <figure
                                            key={photo.src}
                                            className="group overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] bg-[rgba(211,214,247,0.35)] shadow-md"
                                        >
                                            <img
                                                src={isDemo ? photo.blurSrc : photo.src}
                                                alt={photo.alt}
                                                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </figure>
                                    ))}
                                </div>
                                <ul className="mt-6 space-y-4 text-left">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-[rgba(201,148,158,0.95)]"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">Courtside Moments</h3>
                                            <p className="text-[rgba(162,126,172,0.7)]">
                                                Celebrate with Alondra&apos;s court of damas and chambelanes during the surprise dance and
                                                a special toast from her padrinos.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-[rgba(201,148,158,0.95)]"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">Sweet Indulgences</h3>
                                            <p className="text-[rgba(162,126,172,0.7)]">
                                                Enjoy a dessert bar inspired by Alondra&apos;s favorite flavors plus a late-night churro cart for
                                                guests who stay on the dance floor.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-[rgba(201,148,158,0.95)]"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">Music & Memories</h3>
                                            <p className="text-[rgba(162,126,172,0.7)]">
                                                Our curated Spotify playlist sets the mood—be sure to hit play when you arrive and share your
                                                song requests with the DJ booth.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <aside className="glass-panel flex flex-col gap-6 rounded-3xl p-8 text-center shadow-xl">
                                <figure className="overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] shadow-md">
                                    <img
                                        src={isDemo ? GALLERY_PHOTOS[1].blurSrc : GALLERY_PHOTOS[1].src}
                                        alt={GALLERY_PHOTOS[1].alt}
                                        className="h-48 w-full object-cover"
                                    />
                                </figure>
                                <div>
                                    <p className="font-script text-3xl text-[rgba(201,148,158,1)]">Con mucho amor</p>
                                    <p className="mt-2 text-[rgba(162,126,172,0.7)]">
                                        Hosted with love by her parents, {eventDetails.hostNames}, for {eventDetails.hostFamily}.
                                    </p>
                                </div>
                                <div className="space-y-3 text-[rgba(162,126,172,0.7)]">
                                    <p>Need to update your RSVP or have dietary restrictions?</p>
                                    <a
                                        href={`mailto:${eventDetails.contactEmail}`}
                                        className="font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline"
                                    >
                                        {eventDetails.contactEmail}
                                    </a>
                                    <p className="text-sm">We&apos;re happy to help you plan your perfect evening.</p>
                                </div>
                            </aside>
                        </section>

                        <section id="itinerary" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                                <div>
                                    <h2 className="font-display text-3xl">Evening Schedule</h2>
                                    <p className="mt-2 max-w-2xl text-[rgba(162,126,172,0.75)]">
                                        We&apos;ve curated the night so you won&apos;t miss a single tradition. Arrive a little early to snap
                                        photos by the floral wall and sign Alondra&apos;s guestbook.
                                    </p>
                                </div>
                                <a
                                    href="https://calendar.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(211,214,247,0.7)] bg-[rgba(251,208,235,0.75)] px-6 py-2 text-sm font-semibold uppercase tracking-widest text-[rgba(201,148,158,1)] shadow transition hover:border-[rgba(82,191,232,0.55)] hover:text-[rgba(162,126,172,0.9)]"
                                >
                                    Save to Calendar
                                </a>
                            </div>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                {ITINERARY.map((event) => (
                                    <div key={event.title} className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.75)] p-6 shadow-md">
                                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(82,191,232,0.75)]">{event.time}</p>
                                        <h3 className="mt-2 text-xl font-semibold text-[rgba(162,126,172,0.9)]">{event.title}</h3>
                                        <p className="mt-2 text-[rgba(162,126,172,0.7)]">{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="gallery" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <h2 className="font-display text-3xl text-center">Moments with Alondra</h2>
                            <p className="mt-3 text-center text-[rgba(162,126,172,0.75)]">
                                From rehearsals to sun-kissed adventures, enjoy a glimpse of Alondra&apos;s journey leading up to the big day.
                            </p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {GALLERY_PHOTOS.map((photo) => (
                                        <figure
                                            key={photo.src}
                                            className="group overflow-hidden rounded-3xl border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.6)] shadow-lg"
                                        >
                                            <img
                                                src={isDemo ? photo.blurSrc : photo.src}
                                                alt={photo.alt}
                                                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </figure>
                                    ))}
                            </div>
                        </section>

                        <section id="location" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="glass-panel rounded-3xl p-8 shadow-xl">
                                <h2 className="font-display text-3xl">Getting There</h2>
                                    <p className="mt-2 text-[rgba(162,126,172,0.75)]">
                                    {eventDetails.venueName} is nestled along a stunning coastline. Guests
                                    staying on-site can coordinate with the reservation team ahead of the celebration to secure their stay
                                    just steps from the oceanfront ballroom.
                                    </p>
                                    <ul className="mt-6 space-y-3 text-[rgba(162,126,172,0.7)]">
                                    <li>
                                        <span className="font-semibold text-[rgba(162,126,172,0.9)]">Hotel Block:</span> Reference &ldquo;{eventDetails.hotelBlockName}&rdquo;
                                        with reservation code {eventDetails.reservationCode} when booking directly with the hotel. Call
                                        <a
                                            href={`tel:${eventDetails.hotelPhone.raw}`}
                                            className="ml-1 font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline"
                                        >
                                            {eventDetails.hotelPhone.display}
                                        </a>
                                        or contact {eventDetails.hotelContact.name} at
                                        <a
                                            href={`tel:${eventDetails.hotelContact.raw}`}
                                            className="ml-1 font-semibold text-[rgba(201,148,158,1)] underline-offset-4 hover:underline"
                                        >
                                            {eventDetails.hotelContact.display}
                                        </a>
                                        for assistance. A one-night deposit is required.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-[rgba(162,126,172,0.9)]">Travel Tip:</span> {eventDetails.travelTip}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-[rgba(162,126,172,0.9)]">Need a ride?</span> From {majorAirport.code} call{' '}
                                        {formatTaxiList(eventDetails.taxiServices.sju)}. From {regionalAirport.code} reach{' '}
                                        {formatTaxiList(eventDetails.taxiServices.bqn)}. Uber is also available throughout Puerto Rico.
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage('travel')}
                                        className="rounded-full border border-[rgba(211,214,247,0.7)] bg-[rgba(251,208,235,0.75)] px-6 py-2 text-sm font-semibold uppercase tracking-widest text-[rgba(201,148,158,1)] shadow transition hover:border-[rgba(82,191,232,0.55)] hover:text-[rgba(162,126,172,0.9)]"
                                    >
                                        View Full Travel Guide
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-3xl shadow-xl">
                                <iframe
                                    title={eventDetails.mapTitle}
                                    src={eventDetails.mapUrl}
                                    className="h-full min-h-[320px] w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>

                        <section id="registry" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <h2 className="font-display text-3xl text-center">Gifts & Blessings</h2>
                            <p className="mt-3 text-center text-[rgba(162,126,172,0.75)]">
                                Your presence is the greatest gift! If you&apos;d like to contribute to Alondra&apos;s college dreams or
                                share a keepsake, explore the options below.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://www.paypal.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-[rgba(162,126,172,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(162,126,172,0.85)]"
                                >
                                    Contribute via PayPal
                                </a>
                                <a
                                    href="https://www.amazon.com/wedding"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(211,214,247,0.8)] bg-[rgba(251,208,235,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(201,148,158,1)] shadow-lg transition hover:border-[rgba(82,191,232,0.55)] hover:text-[rgba(162,126,172,0.9)]"
                                >
                                    View Amazon Registry
                                </a>
                                <a
                                    href="https://www.honeyfund.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(211,214,247,0.8)] bg-[rgba(251,208,235,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(201,148,158,1)] shadow-lg transition hover:border-[rgba(82,191,232,0.55)] hover:text-[rgba(162,126,172,0.9)]"
                                >
                                    Honeyfund Experiences
                                </a>
                            </div>
                        </section>

                        <section id="rsvp" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h2 className="font-display text-3xl">RSVP by July 1, 2026</h2>
                                    <p className="mt-3 text-[rgba(162,126,172,0.75)]">
                                        We can&apos;t wait to celebrate with you! Let us know who&apos;s coming so we can reserve your seats,
                                        accommodate special requests, and prepare your welcome favors.
                                    </p>
                                    <ul className="mt-4 space-y-2 text-[rgba(162,126,172,0.7)]">
                                        <li>✨ Kindly respond for each guest in your party.</li>
                                        <li>🎶 Add your favorite song—our DJ is taking requests!</li>
                                    </ul>
                                </div>
                                <form
                                    className="rounded-3xl border border-[rgba(251,208,235,0.6)] bg-[rgba(251,208,235,0.75)] p-6 shadow-md"
                                    action="https://forms.gle/"
                                    method="post"
                                    target="_blank"
                                >
                                    <div className="grid gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Full Name"
                                            required
                                            className="rounded-full border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.85)] px-4 py-3 text-sm focus:border-[rgba(82,191,232,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(211,214,247,0.7)]"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            className="rounded-full border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.85)] px-4 py-3 text-sm focus:border-[rgba(82,191,232,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(211,214,247,0.7)]"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="rounded-full border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.85)] px-4 py-3 text-sm focus:border-[rgba(82,191,232,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(211,214,247,0.7)]"
                                        />
                                        <select
                                            name="attendance"
                                            required
                                            className="rounded-full border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.85)] px-4 py-3 text-sm text-[rgba(162,126,172,0.95)] focus:border-[rgba(82,191,232,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(211,214,247,0.7)]"
                                        >
                                            <option value="">Will you celebrate with us?</option>
                                            <option value="yes">Sí, can&apos;t wait!</option>
                                            <option value="no">Sadly, unable to attend</option>
                                        </select>
                                        <textarea
                                            name="message"
                                            rows="3"
                                            placeholder="Share a note or song request"
                                            className="rounded-3xl border border-[rgba(211,214,247,0.6)] bg-[rgba(251,208,235,0.85)] px-4 py-3 text-sm focus:border-[rgba(82,191,232,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(211,214,247,0.7)]"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="rounded-full bg-[rgba(162,126,172,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(162,126,172,0.85)]"
                                        >
                                            Submit RSVP
                                        </button>
                                    </div>
                                    <p className="mt-4 text-xs text-[rgba(82,191,232,0.75)]">
                                        This form opens a secure RSVP in a new tab so you can attach additional guests or messages.
                                    </p>
                                </form>
                            </div>
                        </section>
                </main>
                ) : (
                    <Travel details={eventDetails} />
                )}

                <footer className="mx-auto mt-20 w-full max-w-6xl border-t border-[rgba(211,214,247,0.6)] pt-6 text-center text-sm text-[rgba(162,126,172,0.6)]">
                    <p>Made with ♥ for Alondra&apos;s quinceañera. See you on the dance floor!</p>
                </footer>
            </div>
        </>
    );
}

export default App;
