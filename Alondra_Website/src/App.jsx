import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Envelope from './Envelope.jsx';
import Travel from './Travel.jsx';

const EVENT_DATE = new Date('2025-06-14T17:00:00-05:00');

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
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());

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
            {!open && (
                <Envelope
                    onOpen={() => {
                        setOpen(true);
                        setCurrentPage('home');
                    }}
                />
            )}
            <div
                className={`min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-6 py-12 text-rose-900 transition-opacity duration-500 ease-out md:px-10 ${open ? 'opacity-100' : 'opacity-0'}`}
            >
                <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.5em] text-rose-400">Alondra Hernandez</p>
                        <p className="font-display text-2xl text-rose-700">Mis XV Celebration</p>
                    </div>
                    <nav className="mx-auto flex w-full max-w-sm justify-center gap-2 rounded-full border border-rose-200/60 bg-white/70 p-1 shadow-lg sm:mx-0">
                        {[
                            { key: 'home', label: 'Home' },
                            { key: 'travel', label: 'Travel Info' }
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setCurrentPage(key)}
                                className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 ${
                                    currentPage === key
                                        ? 'bg-rose-500 text-white shadow'
                                        : 'text-rose-500 hover:bg-rose-50'
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
                        <section className="text-center" id="home">
                            <div className="flex justify-center">
                                <span className="ribbon-tag">Mis XV • June 14, 2025</span>
                            </div>
                            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl">
                                Alondra&apos;s Quinceañera
                            </h1>
                            <p className="mt-4 text-lg text-rose-900/80 md:text-xl">
                                Join us in celebrating fifteen beautiful years of faith, family, and dreams come true.
                                Expect joyful traditions, delicious food, and a night of dancing beneath the stars.
                            </p>
                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-rose-400">Date</p>
                                    <p className="mt-2 text-xl font-semibold">Saturday • June 14, 2025</p>
                                    <p className="text-rose-900/70">Ceremony begins promptly at 4:30 PM</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-rose-400">Venue</p>
                                    <p className="mt-2 text-xl font-semibold">The Pearl Stable</p>
                                    <p className="text-rose-900/70">307 Pearl Pkwy • San Antonio, TX 78215</p>
                                </div>
                                <div className="glass-panel rounded-3xl p-6 text-left shadow-lg">
                                    <p className="text-sm uppercase tracking-[0.3em] text-rose-400">Attire</p>
                                    <p className="mt-2 text-xl font-semibold">Evening Chic</p>
                                    <p className="text-rose-900/70">Dress in soft blush, champagne, or ivory accents.</p>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="#rsvp"
                                    className="rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-rose-600"
                                >
                                    RSVP Now
                                </a>
                                <a
                                    href="#itinerary"
                                    className="rounded-full border border-rose-300/80 bg-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-rose-500 shadow-lg transition hover:border-rose-400 hover:text-rose-600"
                                >
                                    View Itinerary
                                </a>
                            </div>
                        </section>

                        <section className="glass-panel rounded-3xl p-8 text-center shadow-xl" id="countdown">
                            <h2 className="font-display text-3xl md:text-4xl">Countdown to the Celebration</h2>
                            <p className="mt-2 text-rose-900/70">We can&apos;t wait to celebrate with you!</p>
                            {timeLeft.completed ? (
                                <p className="mt-6 text-2xl font-semibold text-rose-500">It&apos;s party time! 💃🏽</p>
                            ) : (
                                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                    {countdownUnits.map(({ label, value }) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-rose-200 bg-white/70 px-6 py-6 shadow-md"
                                        >
                                            <p className="text-4xl font-bold text-rose-500 md:text-5xl">{String(value).padStart(2, '0')}</p>
                                            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-rose-400">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <section id="details" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="glass-panel rounded-3xl p-8 shadow-xl">
                                <h2 className="font-display text-3xl">Event Highlights</h2>
                                <p className="mt-3 text-rose-900/80">
                                    From the traditional mass to a sparkling reception, every detail has been planned with
                                    family and friends in mind. Take a peek at the evening&apos;s highlights and make sure you
                                    arrive in time for the ceremonies that matter most to Alondra and her parents.
                                </p>
                                <ul className="mt-6 space-y-4 text-left">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-rose-400"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">Courtside Moments</h3>
                                            <p className="text-rose-900/70">
                                                Celebrate with Alondra&apos;s court of damas and chambelanes during the surprise dance and
                                                a special toast from her padrinos.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-rose-400"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">Sweet Indulgences</h3>
                                            <p className="text-rose-900/70">
                                                Enjoy a dessert bar inspired by Alondra&apos;s favorite flavors plus a late-night churro cart for
                                                guests who stay on the dance floor.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 flex-none rounded-full bg-rose-400"></span>
                                        <div>
                                            <h3 className="text-lg font-semibold">Music & Memories</h3>
                                            <p className="text-rose-900/70">
                                                Our curated Spotify playlist sets the mood—be sure to hit play when you arrive and share your
                                                song requests with the DJ booth.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <aside className="glass-panel flex flex-col justify-between rounded-3xl p-8 text-center shadow-xl">
                                <div>
                                    <p className="font-script text-3xl text-rose-500">Con mucho amor</p>
                                    <p className="mt-2 text-rose-900/70">
                                        Hosted by the Hernandez family • Madrina: Sofia Ruiz • Padrino: Alejandro Torres
                                    </p>
                                </div>
                                <div className="mt-8 space-y-3 text-rose-900/70">
                                    <p>Need to update your RSVP or have dietary restrictions?</p>
                                    <a
                                        href="mailto:celebrate@alondrasxv.com"
                                        className="font-semibold text-rose-500 underline-offset-4 hover:underline"
                                    >
                                        celebrate@alondrasxv.com
                                    </a>
                                    <p className="text-sm">We&apos;re happy to help you plan your perfect evening.</p>
                                </div>
                            </aside>
                        </section>

                        <section id="itinerary" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                                <div>
                                    <h2 className="font-display text-3xl">Evening Schedule</h2>
                                    <p className="mt-2 max-w-2xl text-rose-900/75">
                                        We&apos;ve curated the night so you won&apos;t miss a single tradition. Arrive a little early to snap
                                        photos by the floral wall and sign Alondra&apos;s guestbook.
                                    </p>
                                </div>
                                <a
                                    href="https://calendar.google.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-rose-300 bg-white/80 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-rose-500 shadow transition hover:border-rose-400 hover:text-rose-600"
                                >
                                    Save to Calendar
                                </a>
                            </div>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                {ITINERARY.map((event) => (
                                    <div key={event.title} className="rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-md">
                                        <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{event.time}</p>
                                        <h3 className="mt-2 text-xl font-semibold text-rose-600">{event.title}</h3>
                                        <p className="mt-2 text-rose-900/70">{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="location" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="glass-panel rounded-3xl p-8 shadow-xl">
                                <h2 className="font-display text-3xl">Getting There</h2>
                                <p className="mt-2 text-rose-900/75">
                                    The Pearl Stable sits in the heart of San Antonio&apos;s Pearl District. Complimentary valet begins at
                                    3:45 PM, and self-parking is available in the Koehler Garage across the street.
                                </p>
                                <ul className="mt-6 space-y-3 text-rose-900/70">
                                    <li>
                                        <span className="font-semibold text-rose-600">Hotel Block:</span> Reserve under &ldquo;Alondra&apos;s
                                        Mis XV&rdquo; at Hotel Emma or the Pearl Canopy by May 20.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-rose-600">Travel Tip:</span> Fly into SAT (15 minutes away) or
                                        Austin-Bergstrom (75 minutes) and head straight to the Pearl for welcome cafecito.
                                    </li>
                                    <li>
                                        <span className="font-semibold text-rose-600">Need a ride?</span> Contact our transportation team at
                                        <a
                                            href="tel:2105550199"
                                            className="ml-1 font-semibold text-rose-500 underline-offset-4 hover:underline"
                                        >
                                            (210) 555-0199
                                        </a>
                                        .
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage('travel')}
                                        className="rounded-full border border-rose-300 bg-white/80 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-rose-500 shadow transition hover:border-rose-400 hover:text-rose-600"
                                    >
                                        View Full Travel Guide
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-3xl shadow-xl">
                                <iframe
                                    title="The Pearl Stable Map"
                                    src="https://maps.google.com/maps?q=307%20Pearl%20Pkwy%2C%20San%20Antonio%2C%20TX%2078215&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="h-full min-h-[320px] w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </section>

                        <section id="registry" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <h2 className="font-display text-3xl text-center">Gifts & Blessings</h2>
                            <p className="mt-3 text-center text-rose-900/75">
                                Your presence is the greatest gift! If you&apos;d like to contribute to Alondra&apos;s college dreams or
                                share a keepsake, explore the options below.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://www.paypal.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-rose-600"
                                >
                                    Contribute via PayPal
                                </a>
                                <a
                                    href="https://www.amazon.com/wedding"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-rose-300/80 bg-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-rose-500 shadow-lg transition hover:border-rose-400 hover:text-rose-600"
                                >
                                    View Amazon Registry
                                </a>
                                <a
                                    href="https://www.honeyfund.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-rose-300/80 bg-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-rose-500 shadow-lg transition hover:border-rose-400 hover:text-rose-600"
                                >
                                    Honeyfund Experiences
                                </a>
                            </div>
                        </section>

                        <section id="rsvp" className="glass-panel rounded-3xl p-8 shadow-xl">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h2 className="font-display text-3xl">RSVP by May 20</h2>
                                    <p className="mt-3 text-rose-900/75">
                                        We can&apos;t wait to celebrate with you! Let us know who&apos;s coming so we can reserve your seats,
                                        accommodate special requests, and prepare your welcome favors.
                                    </p>
                                    <ul className="mt-4 space-y-2 text-rose-900/70">
                                        <li>✨ Kindly respond for each guest in your party.</li>
                                        <li>🥗 Vegetarian or gluten-free meals available upon request.</li>
                                        <li>🎶 Add your favorite song—our DJ is taking requests!</li>
                                    </ul>
                                </div>
                                <form
                                    className="rounded-3xl border border-rose-100 bg-white/80 p-6 shadow-md"
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
                                            className="rounded-full border border-rose-200 bg-white/90 px-4 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            className="rounded-full border border-rose-200 bg-white/90 px-4 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="rounded-full border border-rose-200 bg-white/90 px-4 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                                        />
                                        <select
                                            name="attendance"
                                            required
                                            className="rounded-full border border-rose-200 bg-white/90 px-4 py-3 text-sm text-rose-900 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                                        >
                                            <option value="">Will you celebrate with us?</option>
                                            <option value="yes">Sí, can&apos;t wait!</option>
                                            <option value="no">Sadly, unable to attend</option>
                                        </select>
                                        <textarea
                                            name="message"
                                            rows="3"
                                            placeholder="Share a note or song request"
                                            className="rounded-3xl border border-rose-200 bg-white/90 px-4 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-rose-600"
                                        >
                                            Submit RSVP
                                        </button>
                                    </div>
                                    <p className="mt-4 text-xs text-rose-400">
                                        This form opens a secure RSVP in a new tab so you can attach additional guests or messages.
                                    </p>
                                </form>
                            </div>
                        </section>
                </main>
                ) : (
                    <Travel />
                )}

                <footer className="mx-auto mt-20 w-full max-w-6xl border-t border-rose-200/60 pt-6 text-center text-sm text-rose-900/60">
                    <p>Made with ♥ for Alondra&apos;s quinceañera. See you on the dance floor!</p>
                </footer>
            </div>
        </>
    );
}

export default App;
