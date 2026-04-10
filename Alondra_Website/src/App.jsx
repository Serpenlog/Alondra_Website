import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Envelope from './Envelope.jsx';
import OceanBackground from './OceanBackground.jsx';
import Travel from './Travel.jsx';
import { guestList } from './data/guestList.js';
import alondra7 from './alondra_images/alondra7.JPG';
import alondra7Blur from './alondra_images/alondra7_blur.png';
import alondra8 from './alondra_images/alondra19.JPG';
import alondra8Blur from './alondra_images/alondra8_blur.png';
import alondra9 from './alondra_images/alondra9.JPG';
import alondra9Blur from './alondra_images/alondra9_blur.png';
import alondra10 from './alondra_images/alondra10.JPG';
import alondra10Blur from './alondra_images/alondra10_blur.png';
import alondra11 from './alondra_images/alondra11.JPG';
import alondra11Blur from './alondra_images/alondra11_blur.png';
import alondra12 from './alondra_images/alondra21.JPG';
import alondra12Blur from './alondra_images/alondra12_blur.png';
import alondra15 from './alondra_images/alondra15.JPG';
import alondra16 from './alondra_images/alondra16.JPG';
import alondra17 from './alondra_images/alondra17.JPG';
import alondra18 from './alondra_images/alondra18.JPG';
import dressCodeImage from './alondra_images/alondra_dress_code.jpeg';
import dressCodeSilhouette from './alondra_images/dress_code_silhouette.PNG';

const EVENT_DATE = new Date('2026-07-18T18:00:00-04:00');

const BACKGROUND_TRACK = "/45 - Never Grow Up (Taylor's Version) [Originally Performed by Taylor Swift] [Karaoke Version].mp3";

const GALLERY_PHOTOS = [
    { src: alondra7, blurSrc: alondra7Blur, alt: 'Alondra laughing with loved ones.' },
    { src: alondra8, blurSrc: alondra8Blur, alt: 'Alondra dancing beneath twinkling lights.' },
    { src: alondra9, blurSrc: alondra9Blur, alt: 'Alondra sharing a toast with her family.' },
    { src: alondra10, blurSrc: alondra10Blur, alt: 'Alondra posing along the shoreline in Puerto Rico.' },
    { src: alondra11, blurSrc: alondra11Blur, alt: 'Alondra celebrating with an elegant twirl.' },
    { src: alondra12, blurSrc: alondra12Blur, alt: 'Alondra framed by tropical greenery.' }
];

const TOP_FEATURE_PHOTOS = [
    { src: alondra16, alt: 'Alondra smiling during a sunset beach portrait.' }
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
        '',
        'Thank you for being part of this dream come true.'
    ],
    es: [
        'Como las perlas escondidas en lo profundo del mar, cada regalo es un gesto lleno de amor y cariño.',
        'Tu presencia siempre será el regalo más valioso para mí, y tenerte a mi lado en este día especial llenará mi corazón de alegría.',
        '',
        'Gracias por ser parte de este sueño hecho realidad.'
    ]
};


const PAYMENT_LINKS = {
    cashApp: 'https://cash.app/$alondradmar',
    zelle: 'https://enroll.zellepay.com/qr-codes?data=eyJ0b2tlbiI6ImNvcmFsaXRvZGVsbWFyMThAaG90bWFpbC5jb20iLCJhY3Rpb24iOiJwYXltZW50IiwibmFtZSI6Ik1hcmlzb2wgRmxvcmVzIn0=',
    venmo: 'https://cash.app/$alondradmar',
    athMovil: 'https://athmovil.blob.core.windows.net/athmovildeeplinking/Deep-Linking/deep.html?74ff061b98d7ab2708799bcd255ebef881db6d39cc702b4eee8a8babfb7b80e3'
};

const RSVP_FORM_ENDPOINT = 'https://formsubmit.co/xv@alondradelmar.com';
const SONG_REQUEST_FORM_ENDPOINT = 'https://formsubmit.co/xv@alondradelmar.com';
const BLESSING_FORM_ENDPOINT = 'https://formsubmit.co/xv@alondradelmar.com';
const CALENDAR_EVENT_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Alondra's Quinceañera")}&dates=20260718T220000Z/20260719T030000Z&ctz=America/Puerto_Rico&details=${encodeURIComponent("Join us to celebrate Alondra's Quinceañera!")}&location=${encodeURIComponent("Road 115, Km 12.2, 26 Sea Bch Dr, Rincón, 00677, Puerto Rico")}`;

const ITINERARY = {
    en: [
        {
            time: '6:00 PM',
            title: 'Blessing',
            description: 'Between the whisper of the waves and the light of sunset, we will experience a moment full of blessing at 6:00 PM. We recommend arriving 20 minutes early so you do not miss any details.'
        },
        {
            time: '6:30 PM',
            title: 'Cocktail',
            description: 'After the blessing, we invite you to enjoy a welcome cocktail by the sea. It will be an ideal moment to spend time together before the celebration begins.'
        },
        {
            time: '7:00 PM',
            title: 'Presentation, Dinner, and Dance',
            description: 'We will begin the celebration with a special presentation, followed by a delicious dinner. Then the dance floor opens so we can celebrate together with a night full of music, dancing, and unforgettable moments.'
        }
    ],
    es: [
        {
            time: '6:00 PM',
            title: 'Bendición',
            description: 'Entre el susurro de las olas y la luz del atardecer, viviremos un momento lleno de bendición a las 6:00 PM. Te recomendamos llegar 20 minutos antes para no perder ningún detalle.'
        },
        {
            time: '6:30 PM',
            title: 'Cocktail',
            description: 'Después de la bendición, los invitamos a disfrutar de un cocktail de bienvenida frente al mar. Será un momento ideal para convivir juntos antes de comenzar la celebración.'
        },
        {
            time: '7:00 PM',
            title: 'Presentación, Cena y Baile',
            description: 'Daremos inicio a la celebración con una recepción especial, seguida de una deliciosa cena. Después la pista se abre para festejar juntos una noche llena de música, baile y momentos inolvidables.'
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
    hostNames: 'Marisol & Jesus',
    hostFamily: 'family',
    hostFamilyEs: 'la familia',
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
            nameEs: 'Aguadilla, PR (BQN)',
            details:
                'Closest airport to the venue with regional flights. Approximate travel time to Rincón of the Seas: ~40 minutes (subject to traffic).',
            detailsEs:
                'Aeropuerto más cercano al lugar con vuelos regionales. Tiempo aproximado de viaje a Rincón of the Seas: ~40 minutos (sujeto al tránsito).'
        },
        {
            code: 'SJU',
            name: 'San Juan, PR (SJU)',
            nameEs: 'San Juan, PR (SJU)',
            details:
                'Major international hub with plentiful flight options. Approximate travel time to the hotel: ~2 hours 20 minutes (subject to traffic).',
            detailsEs:
                'Principal centro internacional con abundantes opciones de vuelos. Tiempo aproximado de viaje al hotel: ~2 horas y 20 minutos (sujeto al tránsito).'
        },
        {
            code: 'PSE',
            name: 'Ponce, PR (PSE)',
            details:
                'Alternative regional airport south of Rincón. Approximate travel time to the hotel: ~1 hour 35 minutes (subject to traffic).',
            nameEs: 'Ponce, PR (PSE)',
            detailsEs:
                'Aeropuerto regional alternativo al sur de Rincón. Tiempo aproximado de viaje al hotel: ~1 hora y 35 minutos (sujeto al tránsito).'
        }
    ],
    travelTip:
        'Aguadilla Airport (BQN) is roughly 40 minutes from the hotel, while San Juan Airport (SJU) averages about 2 hours and 20 minutes, subject to traffic.',
    travelTipEs:
        'El aeropuerto de Aguadilla (BQN) se encuentra a aproximadamente 40 minutos del hotel. Desde el aeropuerto de San Juan (SJU) el trayecto es de alrededor es de 2 horas y 20 minutos, dependiendo del tránsito.',
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
    const [activeForm, setActiveForm] = useState(null);
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

    const closeActiveForm = () => setActiveForm(null);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            closeActiveForm();
        }
    };

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
                <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-center">
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
                            <>
                                <div className="space-y-1 text-center">
                                    <p className="text-3xl text-[rgba(44,96,130,0.95)] md:text-4xl">Alondra Del Mar</p>
                                    <p className="font-display text-3xl text-[rgba(44,96,130,0.95)] md:text-4xl">
                                        {lang === 'es' ? 'Celebración de Mis XV' : 'Mis XV Celebration'}
                                    </p>
                                </div>
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
                            </>
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
                                    : 'Between the whisper of the waves, the light of the stars, and God’s blessing, we invite you to celebrate Alondra Del Mar’s fifteenth birthday.'}
                            </p>
                            <div className="mt-8 grid gap-4">
                                {TOP_FEATURE_PHOTOS.map((photo) => (
                                    <figure
                                        key={photo.src}
                                        className="group relative aspect-[2048/2103] overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] shadow-xl"
                                    >
                                        <img
                                            src={isDemo ? alondra12Blur : photo.src}
                                            alt={photo.alt}
                                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </figure>
                                ))}
                            </div>
                            <div className="glass-panel mt-8 rounded-3xl p-6 text-left shadow-lg">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? '' : ''}</p>
                                <div className="mt-4 space-y-3 text-[rgba(44,96,130,0.8)]">
                                    {(INTRO_MESSAGE[lang] ?? INTRO_MESSAGE.en).map((line) => (
                                        <p key={line} className="font-script text-2xl leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <figure className="mt-10 group relative aspect-[2048/2456] overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] shadow-xl">
                                <img
                                    src={isDemo ? alondra12Blur : alondra17}
                                    alt="Alondra in a graceful oceanfront quinceañera photo."
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                            </figure>
                            <div className="mt-8 grid gap-4 md:grid-cols-2">
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Fecha' : 'Date'}</p>
                                    <p className="mt-2 text-xl font-semibold">{lang === 'es' ? 'Sábado • 18 de julio de 2026 • 6:00 PM' : 'Saturday • July 18, 2026 • 6:00 PM'}</p>
                                    <p className="text-[rgba(44,96,130,0.7)]">{lang === 'es' ? '' : ''}</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Lugar' : 'Venue'}</p>
                                    <p className="mt-2 text-xl font-semibold">{eventDetails.venueName}</p>
                                    <p className="text-[rgba(44,96,130,0.7)]">{eventDetails.venueAddress}</p>
                                </div>
                            </div>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? 'Vestimenta' : 'Attire'}</p>
                                    <p className="mt-2 text-xl font-semibold">{lang === 'es' ? 'Vestimenta formal' : 'Formal Attire'}</p>
                                    <p className="text-[rgba(44,96,130,0.7)]">
                                        {lang === 'es'
                                            ? 'Código de vestimenta: Elegante. En armonía con la celebración, sugerimos vestir en tonos nude y crema. Los colores dorado, blanco y azul están especialmente reservados para quinceañera. Gracias.'
                                            : 'Dress code: Elegant. In harmony with the celebration, we suggest wearing nude and cream tones. Gold, white, and blue are specially reserved for the quinceañera. Thank you.'}
                                    </p>
                                    <img
                                        src={dressCodeSilhouette}
                                        alt={lang === 'es' ? 'Silueta de referencia para código de vestimenta formal.' : 'Reference silhouette for formal dress code.'}
                                        className="mt-4 w-full rounded-2xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.5)] object-cover shadow-md"
                                    />
                                    <a
                                        href={dressCodeImage}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-4 inline-flex items-center justify-center rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(240,132,112,1)] transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                    >
                                        {lang === 'es' ? 'Ver foto de vestimenta' : 'View attire photo'}
                                    </a>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-center shadow-lg">
                                    <div className="mx-auto max-w-sm">
                                        <div className="overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] shadow-xl">
                                            <img
                                                src={isDemo ? alondra12Blur : alondra15}
                                                alt={
                                                    lang === 'es'
                                                        ? 'Alondra junto al mar en un retrato elegante.'
                                                        : 'Alondra by the sea in an elegant portrait.'
                                                }
                                                className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <p className="font-script text-4xl leading-tight text-[rgba(44,96,130,0.9)]">
                                                {lang === 'es' ? 'Con mucho amor' : 'With much love'}
                                            </p>
                                            <p className="mt-3 text-[rgba(44,96,130,0.78)]">
                                                {lang === 'es'
                                                    ? 'Y con mucha alegría, ofrecido por sus padres, Marisol y Jesús.'
                                                    : 'Joyfully hosted by her parents, Marisol & Jesus.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                <button
                                    type="button"
                                    onClick={() => setActiveForm('rsvp')}
                                    className="min-w-[19rem] rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                >
                                    {lang === 'es' ? 'Confirmar asistencia' : 'RSVP Now'}
                                </button>
                                <a
                                    href={CALENDAR_EVENT_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-[rgba(178,226,236,0.7)] bg-[rgba(255,214,201,0.75)] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]"
                                >
                                    {lang === 'es' ? 'Reserva este momento especial en tu calendario' : 'Reserve this wonderful moment in your calendar'}
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
                        <figure className="group relative aspect-[2048/3071] overflow-hidden rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(255,214,201,0.6)] shadow-xl">
                            <img
                                src={isDemo ? alondra12Blur : alondra18}
                                alt="Alondra posing with tropical scenery for her quinceañera."
                                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                        </figure>

                        <section id="itinerary" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                                <div>
                                    <h2 className="font-display text-3xl">{lang === 'es' ? 'Programa de la noche' : 'Evening Schedule'}</h2>
                                    <p className="mt-2 max-w-2xl text-[rgba(44,96,130,0.75)]">
                                        {lang === 'es'
                                            ? 'Hemos preparado esta noche con especial carino para que juntos disfrutemos cada momento lleno de amor y alegria! Los esperamos con los brazos abiertos!'
                                            : 'We have prepared this evening with special care so that together we can enjoy every moment filled with love and joy! We are waiting for you with open arms!'}
                                    </p>
                                </div>
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
                            <p className="mt-6 text-lg text-[rgba(44,96,130,0.75)]">
                                {lang === 'es' ? 'Compartiremos más información pronto. Esta invitación se actualizará automaticamente segun se acerque la fecha.' : 'We will share more information soon. This page will update automatically as we get closer to the date.'}
                            </p>
                        </section>

                        <section id="gallery" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <h2 className="font-display text-3xl text-center">{lang === 'es' ? 'Momentos con Alondra' : 'Moments with Alondra'}</h2>
                            <p className="mt-3 text-center text-[rgba(44,96,130,0.75)]">
                                {lang === 'es'
                                    ? 'Desde sus primeros sueños hasta los momentos que la han hecho brillar, descubre un vistazo al camino de Alondra Del Mar antes de su gran día.'
                                    : 'From her earliest dreams to the moments that have made her shine, discover a glimpse of Alondra Del Mar’s journey before her big day.'}
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
                                        : `Alondra Del Mar’s quinceañera celebration will take place at the beautiful ${eventDetails.venueName}, located along a spectacular coastline in Rincón, Puerto Rico. For an even more special experience, guests who wish to stay on the property can coordinate their stay just steps from the oceanfront ballroom.`}
                                    </p>
                                    <ul className="mt-6 space-y-3 text-[rgba(44,96,130,0.7)]">
                                        <li>
                                            <span className="font-semibold text-[rgba(44,96,130,0.9)]">{lang === 'es' ? 'Hospedaje:' : 'Hotel Block:'}</span>{' '}
                                            {lang === 'es'
                                                ? 'Consulta la guía completa de viaje para ver el código de reservación, teléfonos directos y asistencia personalizada del hotel.'
                                                : 'See the full travel guide for reservation code, direct phone numbers, and personalized hotel booking support.'}
                                        </li>
                                        <li>
                                            <span className="font-semibold text-[rgba(44,96,130,0.9)]">{lang === 'es' ? 'Recomendaciones de viaje:' : 'Travel Tip:'}</span>{' '}
                                            {lang === 'es' ? (eventDetails.travelTipEs ?? eventDetails.travelTip) : eventDetails.travelTip}
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
                            <h2 className="font-display text-3xl text-center">{lang === 'es' ? 'Obsequios y Bendiciones' : 'Gifts and Blessings'}</h2>
                            <p className="mt-3 text-center text-[rgba(44,96,130,0.75)]">
                                {lang === 'es'
                                    ? '¡Tu presencia es el mejor regalo! Si deseas apoyar los sueños universitarios de Alondra Del Mar o compartir un detalle, agradecería fuera en efectivo.'
                                    : 'Your presence is the best gift! If you would like to support Alondra Del Mar’s college dreams or share a gift, cash would be deeply appreciated.'}
                            </p>
                            <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-[rgba(178,226,236,0.6)] bg-[rgba(178,226,236,0.35)] p-6 text-left shadow-md">
                                <p className="text-sm uppercase tracking-[0.3em] text-[rgba(47,156,194,0.75)]">{lang === 'es' ? '' : ''}</p>
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
                                    href={PAYMENT_LINKS.athMovil}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]"
                                >
                                    {lang === 'es' ? 'Enviar con ATH Móvil' : 'Send with ATH Móvil'}
                                </a>
                            </div>
                        </section>

                        <section className="glass-panel rounded-3xl p-8 text-center shadow-xl">
                            <h2 className="font-display text-3xl">{lang === 'es' ? 'Envíanos tu formulario' : 'Send Us Your Form'}</h2>
                            <p className="mt-3 text-[rgba(44,96,130,0.75)]">
                                {lang === 'es'
                                    ? ''
                                    : ''}
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <button type="button" onClick={() => setActiveForm('rsvp')} className="rounded-full bg-[rgba(44,96,130,0.95)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-[rgba(44,96,130,0.85)]">
                                    {lang === 'es' ? 'Confirmar asistencia' : 'RSVP'}
                                </button>
                                <button type="button" onClick={() => setActiveForm('song')} className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow-lg transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]">
                                    {lang === 'es' ? 'Sugerir canción' : 'Song Suggestion'}
                                </button>
                                <button type="button" onClick={() => setActiveForm('blessing')} className="rounded-full border border-[rgba(178,226,236,0.8)] bg-[rgba(255,214,201,0.75)] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[rgba(240,132,112,1)] shadow-lg transition hover:border-[rgba(47,156,194,0.55)] hover:text-[rgba(44,96,130,0.9)]">
                                    {lang === 'es' ? 'Enviar bendición' : 'Blessings'}
                                </button>
                            </div>
                        </section>

                </main>
                ) : (
                    <Travel details={eventDetails} lang={lang} />
                )}
                {activeForm && (
                    <div className="form-overlay" onClick={handleOverlayClick}>
                        <div className="form-modal">
                            <h3 className="font-display text-3xl text-[rgba(44,96,130,0.95)]">
                                {activeForm === 'rsvp'
                                    ? (lang === 'es' ? 'Confirma antes del 10 de mayo de 2026' : 'RSVP by May 10, 2026')
                                    : activeForm === 'song'
                                        ? (lang === 'es' ? 'Sugerencia de canción' : 'Song Suggestion')
                                        : (lang === 'es' ? 'Bendiciones' : 'Blessings')}
                            </h3>
                            <iframe title="form-submit-target" name="form-submit-target" className="hidden" />
                            {activeForm === 'rsvp' && (
                                <form className="mt-4 grid gap-4" action={RSVP_FORM_ENDPOINT} method="post" target="form-submit-target" onSubmit={closeActiveForm}>
                                    <input type="hidden" name="_subject" value="New RSVP - Alondra's Quinceañera" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="text" name="name" placeholder={lang === 'es' ? 'Tu nombre completo' : 'Your Full Name'} required className="form-input" />
                                    <input type="email" name="email" placeholder={lang === 'es' ? 'Correo electrónico (opcional)' : 'Email Address (Optional)'} className="form-input" />
                                    <input type="tel" name="phone" placeholder={lang === 'es' ? 'Número de teléfono' : 'Phone Number'} className="form-input" />
                                    <select name="attendance" required className="form-input">
                                        <option value="">{lang === 'es' ? '¿Celebras con nosotros?' : 'Will you celebrate with us?'}</option>
                                        <option value="yes">{lang === 'es' ? 'Sí, ¡con mucha ilusión!' : 'Yes, can\'t wait!'}</option>
                                        <option value="no">{lang === 'es' ? 'Lamentablemente no podré asistir' : 'Sadly, unable to attend'}</option>
                                    </select>
                                    <input type="number" name="guest_count" min="0" max={guestInfo?.tickets ?? 0} step="1" inputMode="numeric" required placeholder={lang === 'es' ? `Número de asientos (0 a ${guestInfo?.tickets ?? 0})` : `Number of seats (0 to ${guestInfo?.tickets ?? 0})`} className="form-input" />
                                    <textarea name="message" rows="3" placeholder={lang === 'es' ? 'Comparte una nota' : 'Share a note'} className="form-input form-textarea"></textarea>
                                    <div className="form-actions">
                                        <button type="submit" className="form-submit">{lang === 'es' ? 'Enviar' : 'Send'}</button>
                                        <button type="button" onClick={closeActiveForm} className="form-cancel">{lang === 'es' ? 'Cancelar' : 'Cancel'}</button>
                                    </div>
                                </form>
                            )}
                            {activeForm === 'song' && (
                                <form className="mt-4 grid gap-4" action={SONG_REQUEST_FORM_ENDPOINT} method="post" target="form-submit-target" onSubmit={closeActiveForm}>
                                    <input type="hidden" name="_subject" value="Song Request - Alondra's Quinceañera" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="text" name="name" placeholder={lang === 'es' ? 'Tu nombre' : 'Your Name'} required className="form-input" />
                                    <input type="text" name="song" placeholder={lang === 'es' ? 'Escribe tu sugerencia de canción' : 'Write your song suggestion'} required className="form-input" />
                                    <div className="form-actions">
                                        <button type="submit" className="form-submit">{lang === 'es' ? 'Enviar' : 'Send'}</button>
                                        <button type="button" onClick={closeActiveForm} className="form-cancel">{lang === 'es' ? 'Cancelar' : 'Cancel'}</button>
                                    </div>
                                </form>
                            )}
                            {activeForm === 'blessing' && (
                                <form className="mt-4 grid gap-4" action={BLESSING_FORM_ENDPOINT} method="post" target="form-submit-target" onSubmit={closeActiveForm}>
                                    <input type="hidden" name="_subject" value="Blessing Message - Alondra's Quinceañera" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="text" name="name" placeholder={lang === 'es' ? 'Tu nombre' : 'Your Name'} required className="form-input" />
                                    <input type="text" name="message" placeholder={lang === 'es' ? 'Escribe tu bendición' : 'Write your blessing'} required className="form-input" />
                                    <div className="form-actions">
                                        <button type="submit" className="form-submit">{lang === 'es' ? 'Enviar' : 'Send'}</button>
                                        <button type="button" onClick={closeActiveForm} className="form-cancel">{lang === 'es' ? 'Cancelar' : 'Cancel'}</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
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
