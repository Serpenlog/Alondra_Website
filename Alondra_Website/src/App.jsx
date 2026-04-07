import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Envelope from './Envelope.jsx';
import OceanBackground from './OceanBackground.jsx';
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
import alondra13 from './alondra_images/alondra13.JPG';
import dressCodeImage from './alondra_images/alondra_dress_code.jpeg';

const EVENT_DATE = new Date('2026-07-18T18:00:00-04:00');

const BACKGROUND_TRACK = "/45 - Never Grow Up (Taylor's Version) [Originally Performed by Taylor Swift] [Karaoke Version].mp3";

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

const INTRO_MESSAGE = {
    en: [
        'In the depths of the sea, where light dances among the waves and pearls hold their secrets, God writes stories filled with love and purpose…',
        'Today, one of those stories blossoms into a young lady full of light, beauty, and dreams.',
        'With great joy, we invite you to be part of this special moment and celebrate the 15th birthday of Alondra Del Mar ',
        'A magical evening where the glow of the ocean, the delicacy of pearls, and God’s blessing will come together to create unforgettable memories.',
        'Your presence will be the most precious jewel of this celebration.',
        'With love,',
        'López Flores Family'
    ],
    es: [
        'En las profundidades del mar, donde la luz danza entre las olas y las perlas guardan sus secretos, Dios escribe historias llenas de amor y propósito…',
        'Hoy, una de esas historias florece en una joven llena de luz, belleza y sueños.',
        'Con gran alegría, te invitamos a ser parte de este momento tan especial y celebrar los 15 años de Alondra Del Mar.',
        'Una noche mágica donde el brillo del océano, la delicadeza de las perlas y la bendición de Dios se unirán para crear recuerdos inolvidables.',
        'Tu presencia será la joya más valiosa de esta celebración.',
        'Con amor,',
        'Familia López Flores'
    ]
};

const GIFT_MESSAGE = {
    en: [
        'Like the pearls hidden in the depths of the sea, every gift is a gesture filled with love and care.',
        'Your presence will always be the most precious gift to me, and simply having you by my side on this special day will fill my heart with joy.',
        'If you wish to give an additional gift, it will be received with deep gratitude and much love, as a beautiful memory of this meaningful moment in my life.',
        'For your convenience, we will have a money gift option (envelope gifts) and bank transfer available. ',
        'Thank you for being part of this dream come true.'
    ],
    es: [
        'Como las perlas escondidas en lo profundo del mar, cada regalo es un gesto lleno de amor y cariño.',
        'Tu presencia siempre será el regalo más valioso para mí, y tenerte a mi lado en este día especial llenará mi corazón de alegría.',
        'Si deseas dar un regalo adicional, lo recibiré con profunda gratitud y mucho amor, como un hermoso recuerdo de este momento tan importante en mi vida.',
        'Para tu conveniencia, tendremos opción de regalo en efectivo (sobre) y transferencia bancaria.',
        'Gracias por ser parte de este sueño hecho realidad.'
    ]
};


const PAYMENT_LINKS = {
    cashApp: 'https://cash.app/$alondradmar',
    zelle: 'https://cash.app/$alondradmar',
    venmo: 'https://cash.app/$alondradmar',
    athMovil: 'https://cash.app/$alondradmar'
};

const RSVP_FORM_ENDPOINT = 'https://formsubmit.co/xv@alondradelmar.com';
const SONG_REQUEST_FORM_ENDPOINT = 'https://formsubmit.co/xv@alondradelmar.com';
const BLESSING_FORM_ENDPOINT = 'https://formsubmit.co/xv@alondradelmar.com';
const BLESSING_EMAIL = 'xv@alondradelmar.com';
const FALLBACK_BLESSING_EMAIL = 'alondra.honey0629@gmail.com';

const CALENDAR_EVENT_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Alondra's Quinceañera")}&dates=20260718T220000Z/20260719T030000Z&ctz=America/Puerto_Rico&details=${encodeURIComponent("Join us to celebrate Alondra's Quinceañera!")}&location=${encodeURIComponent("Road 115, Km 12.2, 26 Sea Bch Dr, Rincón, 00677, Puerto Rico")}`;const FEATURE_PHOTO = {
    src: alondra13,
    blurSrc: alondra9Blur,
    alt: "alondra family pic"
};

const ITINERARY = {
    en: [
        {
            time: '6:00 PM',
            title: 'Guest Arrival & Welcome',
            description: 'PLACEHOLDER. FILL IN ONCE YOU HAVE THE INFORMATION.'
        }
    ],
    es: [
        {
            time: '6:00 PM',
            title: 'Bienvenida',
            description: 'Entre el susurro de las olas y la luz del atardecer, viviremos un momento lleno de bendición a las 6:00 PM. Te recomendamos llegar 20 minutos antes para no perder ningún detalle. Pronto compartiremos más información.'
        }
    ]
};

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
    hostFamilyEs: 'la familia López Flores',
    contactEmail: 'xv@alondradelmar.com',
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
    travelTipEs:
        'El aeropuerto de Aguadilla (BQN) está a unos 40 minutos del hotel, mientras que desde San Juan (SJU) el trayecto promedio es de 2 horas y 20 minutos, según el tránsito.',
    rideshareNote: 'Uber operates throughout Puerto Rico',
    rideshareNoteEs: 'Uber opera en todo Puerto Rico',
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
    hostFamilyEs: 'la familia Rivera',
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
    travelTipEs:
        'El aeropuerto Harbor Point (HPX) está a unos 35 minutos, mientras que Cedarwood (CWT) queda aproximadamente a 1 hora y 50 minutos, según el tránsito.',
    rideshareNote: 'Rideshare apps operate throughout Vista del Mar',
    rideshareNoteEs: 'Las aplicaciones de transporte operan en toda Vista del Mar',
    mapTitle: 'Seaside Palms Event Hall Map',
    mapUrl:
        'https://maps.google.com/maps?q=Seaside%20Palms%20Event%20Hall%20Vista%20del%20Mar&t=&z=14&ie=UTF8&iwloc=&output=embed'
};

const formatTaxiList = (services) =>
    services.map((service) => `${service.name} (${service.phone})`).join(', ');

const UI_TEXT = {
    en: {
        navHome: 'Home',
        navTravel: 'Travel Info',
        langButton: 'Español',
        unlockTitle: 'Enter your phone number to continue',
        phoneLabel: 'Phone number',
        unlockButton: 'Unlock Invitation',
        invalidPhone: 'That phone number is not on the guest list. Please try again.'
    },
    es: {
        navHome: 'Inicio',
        navTravel: 'Viaje',
        langButton: 'English',
        unlockTitle: 'Ingresa tu número de teléfono para continuar',
        phoneLabel: 'Número de teléfono',
        unlockButton: 'Abrir invitación',
        invalidPhone: 'Ese número no está en la lista de invitados. Inténtalo nuevamente.'
    }
};

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
    const [lang, setLang] = useState('en');
    const [accessStage, setAccessStage] = useState('sealed');
    const [currentPage, setCurrentPage] = useState('home');
    const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [guestInfo, setGuestInfo] = useState(null);
    const audioRef = useRef(null);

    const isOpen = accessStage === 'open';
    const isDemo = guestInfo?.isDemo ?? false;
    const t = UI_TEXT[lang];
    const eventDetails = isDemo ? DEMO_DETAILS : REAL_DETAILS;
    const [regionalAirport, majorAirport] = eventDetails.airports;

    const normalizePhone = (value) => value.replace(/\D/g, '');

    const playBackgroundTrack = () => {
        if (!audioRef.current) {
            const audio = new Audio(BACKGROUND_TRACK);
            audio.loop = true;
            audio.volume = 0.6;
            audioRef.current = audio;
        }

        void audioRef.current.play().catch(() => {});
    };

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
            playBackgroundTrack();
            setCurrentPage('home');
            return;
        }

        setPasswordError(t.invalidPhone);
    };

    useEffect(() => () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    }, []);

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
            { label: lang === 'es' ? 'Días' : 'Days', value: timeLeft.days },
            { label: lang === 'es' ? 'Horas' : 'Hours', value: timeLeft.hours },
            { label: lang === 'es' ? 'Minutos' : 'Minutes', value: timeLeft.minutes },
            { label: lang === 'es' ? 'Segundos' : 'Seconds', value: timeLeft.seconds }
        ],
        [lang, timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
    );

    return (
        <>
            <button
                type="button"
                onClick={() => setLang((prev) => (prev === 'en' ? 'es' : 'en'))}
                className="fixed right-5 top-5 z-[80] rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.88)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(44,96,130,0.9)] shadow-md transition hover:bg-[rgba(203,244,250,0.85)]"
            >
                {t.langButton}
            </button>
            {accessStage === 'sealed' && (
                <Envelope
                    onStampClick={() => {
                        setAccessStage('password');
                        playBackgroundTrack();
                    }}
                    openInvitationLabel={lang === 'es' ? 'Abrir invitación' : 'Open invitation'}
                />
            )}
            {accessStage === 'password' && (
                <div className="password-overlay">
                    <form className="password-card" onSubmit={handlePasswordSubmit}>
                        <p className="password-title">{t.unlockTitle}</p>
                        <label className="password-label" htmlFor="phone-number">
                            {t.phoneLabel}
                        </label>
                        <input
                            id="phone-number"
                            name="phone-number"
                            type="tel"
                            autoComplete="tel"
                            placeholder={lang === 'es' ? '(555) 123-4567' : '(555) 123-4567'}
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
                            {t.unlockButton}
                        </button>
                    </form>
                </div>
            )}
            <div
                className={`ocean-page min-h-screen w-full px-6 py-12 text-[rgba(44,96,130,0.95)] transition-opacity duration-500 ease-out md:px-10 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <OceanBackground />
                <div className="ocean-content">
                <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.5em] text-[rgba(47,156,194,0.75)]">Alondra Lopez Flores</p>
                        <p className="font-display text-2xl text-[rgba(44,96,130,0.95)]">{lang === 'es' ? 'Celebración de Mis XV' : 'Mis XV Celebration'}</p>
                    </div>
                    <nav className="mx-auto flex w-full max-w-sm justify-center gap-2 rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(203,244,250,0.4)] p-1 shadow-lg sm:mx-0">
                        {[
                            { key: 'home', label: t.navHome },
                            { key: 'travel', label: t.navTravel }
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setCurrentPage(key)}
                                className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(47,156,194,0.6)] ${
                                    currentPage === key
                                        ? 'bg-[rgba(44,96,130,0.95)] text-white shadow'
                                        : 'text-[rgba(44,96,130,0.9)] hover:bg-[rgba(255,214,201,0.5)]'
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
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">
                                    {lang === 'es' ? 'Acceso a la invitación confirmado' : 'Invitation Access Confirmed'}
                                </p>
                                <p className="mt-2 text-xl font-semibold">
                                    {lang === 'es' ? 'Teléfono' : 'Phone'}: {guestInfo.phone}
                                    {isDemo && (
                                        <span className="ml-3 rounded-full bg-[rgba(240,132,112,0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(240,132,112,0.95)]">
                                            Demo
                                        </span>
                                    )}
                                </p>
                                <p className="text-[rgba(44,96,130,0.75)]">
                                    {lang === 'es'
                                        ? `Hemos reservado para ti ${guestInfo.tickets} asientos, con mucho amor`
                                        : `We have reserved for you ${guestInfo.tickets} seats, with love`}
                                    {isDemo && (
                                        <span className="ml-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(240,132,112,0.85)]">
                                            Demo
                                        </span>
                                    )}
                                </p>
                            </section>
                        )}
                        <section className="text-center" id="home">
                            <div className="flex justify-center">
                                <span className="ribbon-tag">{lang === 'es' ? 'Mis XV • 18 de julio de 2026' : 'Mis XV • July 18, 2026'}</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl">
                                {lang === 'es' ? 'La celebración de los XV años de Alondra Del Mar' : 'The celebration of Alondra Del Mar\'s Quinceañera'}
                            </h1>
                            <p className="mt-4 text-lg text-[rgba(44,96,130,0.8)] md:text-xl">
                                {lang === 'es'
                                    ? 'Entre el susurro de las olas y la luz de las estrellas y con la bendición de Dios, te invitamos a celebrar los XV años de Alondra de Mar.'
                                    : 'Join us in celebrating fifteen beautiful years of faith, family, and dreams come true. Expect joyful traditions, delicious food, and a night of dancing beneath the stars.'}
                            </p>
                            <div className="glass-panel mt-8 rounded-3xl p-6 text-left shadow-lg">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Introducción' : 'Introduction'}</p>
                                <div className="mt-4 space-y-3 text-[rgba(44,96,130,0.8)]">
                                    {(INTRO_MESSAGE[lang] ?? INTRO_MESSAGE.en).map((line) => (
                                        <p key={line} className="font-script text-2xl leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                {HERO_PHOTOS.map((photo) => (
                                    <figure
                                        key={photo.src}
                                        className="group relative overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] shadow-xl"
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
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Fecha' : 'Date'}</p>
                                    <p className="mt-2 text-xl font-semibold">{lang === 'es' ? 'Sábado • 18 de julio de 2026' : 'Saturday • July 18, 2026'}</p>
                                    <p className="text-[rgba(44,96,130,0.7)]">{lang === 'es' ? 'La ceremonia comienza puntualmente a las 6:00 PM' : 'Ceremony begins promptly at 6:00 PM'}</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Lugar' : 'Venue'}</p>
                                    <p className="mt-2 text-xl font-semibold">{eventDetails.venueName}</p>
                                    <p className="text-[rgba(44,96,130,0.7)]">{eventDetails.venueAddress}</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Vestimenta' : 'Attire'}</p>
                                    <p className="mt-2 text-xl font-semibold">{lang === 'es' ? 'Vestimenta formal' : 'Formal Attire'}</p>
                                    <p className="text-[rgba(44,96,130,0.7)]">
                                        {lang === 'es' ? 'Código de vestimenta: ' : 'Please come in'}{' '}
                                        <a
                                            href={dressCodeImage}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-semibold text-[rgba(240,132,112,1)] underline underline-offset-4 hover:text-[rgba(44,96,130,0.9)]"
                                        >
                                            {lang === 'es' ? 'Elegante en armonía con la celebración, sugerimos vestir en tonos nude y crema.' : 'beige or nude colored formal wear.'}
                                        </a>{' '}
                                        {lang === 'es'
                                            ? 'Los tonos blanco, dorado y azul están reservados para la quinceañera.'
                                            : 'Ocean blue, gold and white ensembles are reserved exclusively for Alondra.'}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="#rsvp"
                                    className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                >
                                    {lang === 'es' ? 'Confirmar asistencia' : 'RSVP Now'}
                                </a>
                                <a
                                    href="#itinerary"
                                    className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow-lg transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                >
                                    {lang === 'es' ? 'Ver itinerario' : 'View Itinerary'}
                                </a>
                            </div>
                        </section>

                        <section className="glass-panel rounded-3xl p-8 text-center shadow-xl" id="countdown">
                            <h2 className="font-display text-3xl md:text-4xl">{lang === 'es' ? 'Cuenta regresiva para la celebración' : 'Countdown to the Celebration'}</h2>
                            <p className="mt-2 text-[rgba(44,96,130,0.7)]">{lang === 'es' ? '¡Ya queremos celebrar contigo!' : 'We can\'t wait to celebrate with you!'}</p>
                            <p className="mt-1 text-sm uppercase tracking-[0.4em] text-[rgba(47,156,194,0.75)]">
                                {lang === 'es' ? '18 de julio de 2026 • 6:00 PM hora del Atlántico' : 'July 18, 2026 • 6:00 PM Atlantic Time'}
                            </p>
                            {timeLeft.completed ? (
                                <p className="mt-6 text-2xl font-semibold text-[rgba(240,132,112,1)]">{lang === 'es' ? '¡Es hora de la fiesta! 💃🏽' : 'It\'s party time! 💃🏽'}</p>
                            ) : (
                                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                    {countdownUnits.map(({ label, value }) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.6)] px-6 py-6 shadow-md"
                                        >
                                            <p className="text-4xl font-bold text-[rgba(240,132,112,1)] md:text-5xl">{String(value).padStart(2, '0')}</p>
                                            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-[rgba(47,156,194,0.75)]">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <section id="details" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="glass-panel rounded-3xl p-8 shadow-xl">
                                    <h2 className="font-display text-3xl">{lang === 'es' ? 'Momentos destacados del evento' : 'Event Highlights'}</h2>
                                <p className="mt-3 text-[rgba(44,96,130,0.8)]">
                                        {lang === 'es'
                                            ? 'Desde la misa tradicional hasta una recepción brillante, cada detalle se planificó pensando en la familia y amistades. Mira los momentos destacados de la noche y llega a tiempo para las ceremonias más importantes para Alondra y sus padres.'
                                            : 'From the traditional mass to a sparkling reception, every detail has been planned with family and friends in mind. Take a peek at the evening\'s highlights and make sure you arrive in time for the ceremonies that matter most to Alondra and her parents.'}
                                </p>
                                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                    {MEMORY_PHOTOS.map((photo) => (
                                        <figure
                                            key={photo.src}
                                            className="group overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.35)] shadow-md"
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
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-[rgba(240,132,112,0.95)]"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">{lang === 'es' ? 'Momentos de la corte' : 'Courtside Moments'}</h3>
                                            <p className="text-[rgba(44,96,130,0.7)]">
                                                {lang === 'es'
                                                    ? 'Celebra con la corte de damas y chambelanes de Alondra durante el baile sorpresa y un brindis especial de sus padrinos.'
                                                    : 'Celebrate with Alondra\'s court of damas and chambelanes during the surprise dance and a special toast from her padrinos.'}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <aside className="glass-panel flex flex-col gap-6 rounded-3xl p-8 text-center shadow-xl">
                                <figure className="overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] shadow-md">
                                    <img
                                        src={isDemo ? FEATURE_PHOTO.blurSrc : FEATURE_PHOTO.src}
                                        alt={FEATURE_PHOTO.alt}
                                        className="h-180 w-full object-cover"
                                    />
                                </figure>
                                <div>
                                    <p className="font-script text-3xl text-[rgba(240,132,112,1)]">{lang === 'es' ? 'Con mucho amor' : 'With much love'}</p>
                                    <p className="mt-2 text-[rgba(44,96,130,0.7)]">
                                        {lang === 'es'
                                            ? `Celebrado con amor por sus padres, ${eventDetails.hostNames}, para ${eventDetails.hostFamilyEs ?? eventDetails.hostFamily}.`
                                            : `Hosted with love by her parents, ${eventDetails.hostNames}, for ${eventDetails.hostFamily}.`}
                                    </p>
                                </div>
                                <div className="space-y-3 text-[rgba(44,96,130,0.7)]">
                                    <p>{lang === 'es' ? '¿Necesitas actualizar tu RSVP o tienes restricciones alimentarias?' : 'Need to update your RSVP or have dietary restrictions?'}</p>
                                    <a
                                        href={`mailto:${eventDetails.contactEmail}`}
                                        className="font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                    >
                                        {eventDetails.contactEmail}
                                    </a>
                                    <p className="text-sm">{lang === 'es' ? 'Con gusto te ayudamos a planificar una noche perfecta.' : 'We\'re happy to help you plan your perfect evening.'}</p>
                                </div>
                            </aside>
                        </section>

                        <section id="itinerary" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                                <div>
                                    <h2 className="font-display text-3xl">{lang === 'es' ? 'Programa de la noche' : 'Evening Schedule'}</h2>
                                    <p className="mt-2 max-w-2xl text-[rgba(44,96,130,0.75)]">
                                        {lang === 'es'
                                            ? 'Hemos preparado esta noche con especial cuidado para que no te pierdas ninguna tradición. Te invitamos a llegar un poco antes para dejar un mensaje en el libro de recuerdos de Alondra.'
                                            : 'We\'ve curated the night so you won\'t miss a single tradition. Arrive a little early to snap photos by the floral wall and sign Alondra\'s guestbook.'}
                                    </p>
                                </div>
                                <a
                                    href={CALENDAR_EVENT_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(178,226,236,0.7)] bg-[rgba(255,214,201,0.75)] px-6 py-2 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                >
                                    {lang === 'es' ? 'Reserva este momento especial en tu calendario' : 'Reserve this wonderful moment in your calendar'}
                                </a>
                            </div>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                {(ITINERARY[lang] ?? ITINERARY.en).map((event) => (
                                    <div key={event.title} className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-6 shadow-md">
                                        <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{event.time}</p>
                                        <h3 className="mt-2 text-xl font-semibold text-[rgba(44,96,130,0.9)]">{event.title}</h3>
                                        <p className="mt-2 text-[rgba(44,96,130,0.7)]">{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="gallery" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <h2 className="font-display text-3xl text-center">{lang === 'es' ? 'Momentos con Alondra' : 'Moments with Alondra'}</h2>
                            <p className="mt-3 text-center text-[rgba(44,96,130,0.75)]">
                                {lang === 'es'
                                    ? 'Desde sus primeros sueños hasta los momentos que la han hecho brillar, descubre un vistazo al camino de Alondra Del Mar antes de su gran día.'
                                    : 'From rehearsals to sun-kissed adventures, enjoy a glimpse of Alondra\'s journey leading up to the big day.'}
                            </p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {GALLERY_PHOTOS.map((photo) => (
                                        <figure
                                            key={photo.src}
                                            className="group overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] shadow-lg"
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
                                <h2 className="font-display text-3xl">{lang === 'es' ? 'Cómo llegar' : 'Getting There'}</h2>
                                    <p className="mt-2 text-[rgba(44,96,130,0.75)]">
                                    {lang === 'es'
                                        ? `La celebración de los XV años de Alondra del Mar tendrá lugar en el hermoso ${eventDetails.venueName}, ubicado frente a una costa espectacular en Rincón, Puerto Rico. Para una experiencia aún más especial, los invitados que deseen hospedarse en la propiedad pueden coordinar su estadía a pasos del salón frente al mar.`
                                        : `${eventDetails.venueName} is nestled along a stunning coastline. Guests staying on-site can coordinate with the reservation team ahead of the celebration to secure their stay just steps from the oceanfront ballroom.`}
                                    </p>
                                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.7)]">
                                    <li>
                                        <span className="font-semibold text-[rgba(44,96,130,0.9)]">{lang === 'es' ? 'Hospedaje:' : 'Hotel Block:'}</span> {lang === 'es' ? 'Al realizard tu reservación, menciona' : 'Reference'} &ldquo;{eventDetails.hotelBlockName}&rdquo;
                                        {lang === 'es' ? ' y el código de reservación ' : ' with reservation code '}{eventDetails.reservationCode} {lang === 'es' ? '. Para asistencia, puedes comunicarte con el hotel al' : 'when booking directly with the hotel. Call'}
                                        <a
                                            href={`tel:${eventDetails.hotelPhone.raw}`}
                                            className="ml-1 font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                        >
                                            {eventDetails.hotelPhone.display}
                                        </a>
                                        {' '}{lang === 'es' ? 'o con Lisandra Ayala al ' : 'or contact'} {eventDetails.hotelContact.name} {lang === 'es' ? 'al' : 'at'}
                                        <a
                                            href={`tel:${eventDetails.hotelContact.raw}`}
                                            className="ml-1 font-semibold text-[rgba(240,132,112,1)] underline-offset-4 hover:underline"
                                        >
                                            {eventDetails.hotelContact.display}
                                        </a>
                                        {' '}{lang === 'es' ? 'para asistencia.' : 'for assistance.'}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-[rgba(44,96,130,0.9)]">{lang === 'es' ? 'Consejo de viaje:' : 'Travel Tip:'}</span> {lang === 'es' ? (eventDetails.travelTipEs ?? eventDetails.travelTip) : eventDetails.travelTip}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-[rgba(44,96,130,0.9)]">{lang === 'es' ? '¿Necesitas transporte?' : 'Need a ride?'}</span> {lang === 'es' ? `Desde ${majorAirport.code} llama a ` : `From ${majorAirport.code} call `}{' '}
                                        {formatTaxiList(eventDetails.taxiServices.sju)}. {lang === 'es' ? `Desde ${regionalAirport.code} comunícate con ` : `From ${regionalAirport.code} reach `}{' '}
                                        {formatTaxiList(eventDetails.taxiServices.bqn)}. {lang === 'es' ? 'Uber también está disponible en todo Puerto Rico.' : 'Uber is also available throughout Puerto Rico.'}
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage('travel')}
                                        className="rounded-full border border-[rgba(178,226,236,0.7)] bg-[rgba(255,214,201,0.75)] px-6 py-2 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                    >
                                        {lang === 'es' ? 'Ver guía completa de viaje' : 'View Full Travel Guide'}
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
                            <h2 className="font-display text-3xl text-center">{lang === 'es' ? 'Regalos y bendiciones' : 'Gifts & Blessings'}</h2>
                            <p className="mt-3 text-center text-[rgba(44,96,130,0.75)]">
                                {lang === 'es'
                                    ? '¡Tu presencia es el mejor regalo! Si deseas apoyar los sueños universitarios de Alondra o compartir un detalle, explora las opciones de abajo o déjanos un sobre.'
                                    : 'Your presence is the greatest gift! If you\'d like to contribute to Alondra\'s college dreams or share a keepsake, explore the options below or leave us an envelope.'}
                            </p>
                            <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.35)] p-6 text-left shadow-md">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Mensaje' : 'Message'}</p>
                                <div className="mt-4 space-y-3 text-[rgba(44,96,130,0.8)]">
                                    {(GIFT_MESSAGE[lang] ?? GIFT_MESSAGE.en).map((line) => (
                                        <p key={line} className="font-script text-2xl leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href={PAYMENT_LINKS.cashApp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                >
                                    {lang === 'es' ? 'Enviar con Cash App' : 'Send with Cash App'}
                                </a>
                                <a
                                    href={PAYMENT_LINKS.zelle}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow-lg transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                >
                                    {lang === 'es' ? 'Enviar con Zelle' : 'Send with Zelle'}
                                </a>
                                <a
                                    href={PAYMENT_LINKS.venmo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow-lg transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                >
                                    {lang === 'es' ? 'Enviar con Venmo' : 'Send with Venmo'}
                                </a>
                                <a
                                    href={PAYMENT_LINKS.athMovil}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                >
                                    {lang === 'es' ? 'Enviar con ATH Móvil' : 'Send with ATH Móvil'}
                                </a>
                            </div>
                        </section>

                        <section id="rsvp" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h2 className="font-display text-3xl">{lang === 'es' ? 'Confirma antes del 1 de julio de 2026' : 'RSVP by July 1, 2026'}</h2>
                                    <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                                        {lang === 'es'
                                            ? '¡Estamos emocionados de celebrar contigo! Avísanos quiénes asistirán para reservar sus asientos, atender solicitudes especiales y preparar sus detalles de bienvenida.'
                                            : 'We can\'t wait to celebrate with you! Let us know who\'s coming so we can reserve your seats, accommodate special requests, and prepare your welcome favors.'}
                                    </p>
                                    <ul className="mt-4 space-y-2 text-[rgba(44,96,130,0.7)]">
                                    </ul>
                                </div>
                                <form
                                    className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-6 shadow-md"
                                    action={RSVP_FORM_ENDPOINT}
                                    method="post"
                                    target="_blank"
                                >
                                    <input type="hidden" name="_subject" value="New RSVP - Alondra's Quinceañera" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <div className="grid gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={lang === 'es' ? 'Tu nombre completo' : 'Your Full Name'}
                                            required
                                            className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder={lang === 'es' ? 'Correo electrónico' : 'Email Address'}
                                            required
                                            className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder={lang === 'es' ? 'Número de teléfono' : 'Phone Number'}
                                            className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                        />
                                        <select
                                            name="attendance"
                                            required
                                            className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm text-[rgba(44,96,130,0.95)] focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                        >
                                            <option value="">{lang === 'es' ? '¿Celebras con nosotros?' : 'Will you celebrate with us?'}</option>
                                            <option value="yes">{lang === 'es' ? 'Sí, ¡con mucha ilusión!' : 'Yes, can\'t wait!'}</option>
                                            <option value="no">{lang === 'es' ? 'Lamentablemente no podré asistir' : 'Sadly, unable to attend'}</option>
                                        </select>
                                        <textarea
                                            name="message"
                                            rows="3"
                                            placeholder={lang === 'es' ? 'Comparte una nota o petición de canción' : 'Share a note or song request'}
                                            className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                        >
                                            {lang === 'es' ? 'Enviar confirmación' : 'Submit RSVP'}
                                        </button>
                                    </div>
                                    <p className="mt-4 text-xs text-[rgba(47,156,194,0.75)]">
                                        {lang === 'es'
                                            ? 'Este formulario abre una confirmación segura en una nueva pestaña para que puedas añadir invitados adicionales o mensajes.'
                                            : 'This form opens a secure RSVP in a new tab so you can attach additional guests or messages.'}
                                    </p>
                                </form>
                            </div>
                        </section>

                        <section id="song-requests" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div>
                                    <h2 className="font-display text-3xl">{lang === 'es' ? 'Peticiones de canciones y bendiciones' : 'Song Requests & Blessings'}</h2>
                                    <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                                        {lang === 'es'
                                            ? `Comparte tus canciones favoritas y envía tus bendiciones para Alondra. Ambos formularios están configurados para enviarse a ${BLESSING_EMAIL}.`
                                            : `Share your favorite songs and send Alondra your heartfelt blessings below. Both forms are configured to deliver to ${BLESSING_EMAIL}.`}
                                    </p>
                                </div>
                                <div className="grid gap-6">
                                    <form
                                        className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.35)] p-6 shadow-md"
                                        action={SONG_REQUEST_FORM_ENDPOINT}
                                        method="post"
                                        target="_blank"
                                    >
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(44,96,130,0.8)]">
                                            {lang === 'es' ? 'Formulario de canciones' : 'Song Request Form'}
                                        </p>
                                        <input type="hidden" name="_subject" value="Song Request - Alondra's Quinceañera" />
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_template" value="table" />
                                        <div className="grid gap-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder={lang === 'es' ? 'Tu nombre' : 'Your Name'}
                                                required
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-white/70 px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder={lang === 'es' ? 'Correo electrónico' : 'Email Address'}
                                                required
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-white/70 px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder={lang === 'es' ? 'Número de teléfono' : 'Phone Number'}
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-white/70 px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <input
                                                type="text"
                                                name="song"
                                                placeholder={lang === 'es' ? 'Título de canción + artista' : 'Song title + artist'}
                                                required
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-white/70 px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <textarea
                                                name="note"
                                                rows="3"
                                                placeholder={lang === 'es' ? 'Mensaje opcional para el DJ o para Alondra' : 'Optional message for the DJ or Alondra'}
                                                className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-white/70 px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            ></textarea>
                                            <button
                                                type="submit"
                                                className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                            >
                                                {lang === 'es' ? 'Enviar canción' : 'Submit Song Request'}
                                            </button>
                                        </div>
                                    </form>

                                    <form
                                        className="rounded-3xl border border-[rgba(255,214,201,0.6)] bg-[rgba(255,214,201,0.75)] p-6 shadow-md"
                                        action={BLESSING_FORM_ENDPOINT}
                                        method="post"
                                        target="_blank"
                                    >
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[rgba(44,96,130,0.8)]">
                                            {lang === 'es' ? 'Formulario de bendiciones' : 'Blessings Form'}
                                        </p>
                                        <input type="hidden" name="_subject" value="Blessing Message - Alondra's Quinceañera" />
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_template" value="table" />
                                        <div className="grid gap-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder={lang === 'es' ? 'Tu nombre' : 'Your Name'}
                                                required
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder={lang === 'es' ? 'Correo electrónico' : 'Email Address'}
                                                required
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder={lang === 'es' ? 'Número de teléfono' : 'Phone Number'}
                                                className="rounded-full border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            />
                                            <textarea
                                                name="message"
                                                rows="4"
                                                placeholder={lang === 'es' ? 'Escribe tu bendición para Alondra' : 'Write your blessing for Alondra'}
                                                required
                                                className="rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.85)] px-4 py-3 text-sm focus:border-[rgba(47,156,194,0.6)] focus:outline-none focus:ring-2 focus:ring-[rgba(178,226,236,0.7)]"
                                            ></textarea>
                                            <button
                                                type="submit"
                                                className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow-lg transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                            >
                                                {lang === 'es' ? 'Enviar bendición' : 'Send Your Blessing'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>

                </main>
                ) : (
                    <Travel details={eventDetails} lang={lang} />
                )}

                <footer className="mx-auto mt-20 w-full max-w-6xl border-t border-[rgba(178,226,236,0.6)] pt-6 text-center text-sm text-[rgba(44,96,130,0.6)]">
                    <p>{lang === 'es' ? 'Hecho con ♥ para los quince de Alondra. ¡Nos vemos en la pista de baile!' : 'Made with ♥ for Alondra\'s quinceañera. See you on the dance floor!'}</p>
                </footer>
                </div>
            </div>
        </>
    );
}

export default App;
