import { useEffect, useMemo, useState } from 'react';
import InternalLink from '../components/InternalLink.jsx';
import {
    EVENT_START,
    EVENT_END,
    EVENT_TITLE,
    EVENT_LOCATION,
    EVENT_DESCRIPTION,
    ITINERARY,
    DRESS_CODE,
    PARENTS,
    VENUE
} from '../data/eventContent.js';

const EVENT_DATE = new Date(EVENT_START);
const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});

const initialMusicForm = {
    name: '',
    song: '',
    artist: '',
    dedication: ''
};

function formatDateForCalendar(dateInput) {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function createIcsContent() {
    const description = `${EVENT_DESCRIPTION} Formal attire requested; gold and white are reserved for Alondra.`;
    const escapedDescription = description.replace(/,/g, '\\,').replace(/\n/g, '\\n');
    const escapedLocation = EVENT_LOCATION.replace(/,/g, '\\,');

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//AlondraQuince//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `UID:${Date.now()}@alondraquinces.com`,
        `DTSTAMP:${formatDateForCalendar(new Date())}`,
        `DTSTART:${formatDateForCalendar(EVENT_START)}`,
        `DTEND:${formatDateForCalendar(EVENT_END)}`,
        `SUMMARY:${EVENT_TITLE}`,
        `DESCRIPTION:${escapedDescription}`,
        `LOCATION:${escapedLocation}`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');
}

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
    const minutes = Math.floor((total / (1000 * 60)) % 60);
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

function Home() {
    const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());
    const [musicForm, setMusicForm] = useState(initialMusicForm);
    const [musicSuggestions, setMusicSuggestions] = useState([]);
    const [musicFeedback, setMusicFeedback] = useState(null);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => {
            window.clearInterval(timer);
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

    const googleCalendarLink = useMemo(() => {
        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: EVENT_TITLE,
            details: `${EVENT_DESCRIPTION} Dress code: ${DRESS_CODE.overall}. ${DRESS_CODE.note}`,
            location: EVENT_LOCATION,
            dates: `${formatDateForCalendar(EVENT_START)}/${formatDateForCalendar(EVENT_END)}`
        });

        return `https://calendar.google.com/calendar/render?${params.toString()}`;
    }, []);

    const handleMusicChange = (event) => {
        const { name, value } = event.target;
        setMusicForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleMusicSubmit = (event) => {
        event.preventDefault();
        if (!musicForm.song.trim() || !musicForm.artist.trim()) {
            setMusicFeedback({ type: 'error', message: 'Please share both a song title and an artist.' });
            return;
        }

        const submission = {
            id: Date.now(),
            ...musicForm
        };

        setMusicSuggestions((prev) => [submission, ...prev]);
        setMusicForm(initialMusicForm);
        setMusicFeedback({
            type: 'success',
            message: 'Thank you! Your song has been added to the request list so the DJ can queue it up.'
        });

        window.setTimeout(() => {
            setMusicFeedback(null);
        }, 4000);
    };

    const handleIcsDownload = () => {
        const blob = new Blob([createIcsContent()], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'alondra-quinceanera.ics';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        window.setTimeout(() => URL.revokeObjectURL(url), 0);
    };

    return (
        <div className="flex flex-col gap-20">
            <section className="glass-panel rounded-3xl px-6 py-12 text-center shadow-xl sm:px-12">
                <div className="flex justify-center">
                    <span className="ribbon-tag">Mis XV • July 28, 2026</span>
                </div>
                <h1 className="font-display text-4xl text-rose-900 md:text-6xl lg:text-7xl">
                    Alondra&apos;s Quinceañera in Puerto Rico
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-rose-900/80 md:text-xl">
                    Celebrate with us at the gorgeous shores of Rincón of the Seas Grand Caribbean Hotel &amp; Villa.
                    Sunsets, salsa, and heartfelt traditions await as Alondra turns fifteen surrounded by loved ones.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border border-rose-200/80 bg-white/80 p-6 text-left shadow-lg">
                        <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Date</p>
                        <p className="mt-2 text-xl font-semibold text-rose-700">{dateFormatter.format(EVENT_DATE)}</p>
                        <p className="text-rose-900/70">Festivities begin at 6:00 PM Atlantic Standard Time.</p>
                    </div>
                    <div className="rounded-3xl border border-rose-200/80 bg-white/80 p-6 text-left shadow-lg">
                        <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Venue</p>
                        <p className="mt-2 text-xl font-semibold text-rose-700">{VENUE.name}</p>
                        <p className="text-rose-900/70">
                            {VENUE.addressLines[0]}
                            <br />
                            {VENUE.addressLines[1]}
                        </p>
                    </div>
                    <div className="rounded-3xl border border-rose-200/80 bg-white/80 p-6 text-left shadow-lg">
                        <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Dress Code</p>
                        <p className="mt-2 text-xl font-semibold text-rose-700">{DRESS_CODE.overall}</p>
                        <p className="text-rose-900/70">{DRESS_CODE.note}</p>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={handleIcsDownload}
                        className="rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:bg-rose-600"
                    >
                        Add to Apple/Outlook Calendar
                    </button>
                    <a
                        href={googleCalendarLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-rose-300/80 bg-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-rose-500 shadow-lg transition hover:border-rose-400 hover:text-rose-600"
                    >
                        Save to Google Calendar
                    </a>
                    <InternalLink
                        to="travel"
                        className="rounded-full border border-transparent bg-rose-100 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-rose-700 shadow-lg transition hover:bg-rose-200"
                    >
                        Plan Your Trip
                    </InternalLink>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl" id="countdown">
                <h2 className="font-display text-3xl md:text-4xl">Countdown to the Celebration</h2>
                <p className="mt-2 text-rose-900/70">
                    Every second brings us closer to dancing, laughing, and making memories together.
                </p>
                {timeLeft.completed ? (
                    <p className="mt-6 text-2xl font-semibold text-rose-500">It&apos;s party time in Rincón! 💃🏽</p>
                ) : (
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {countdownUnits.map(({ label, value }) => (
                            <div key={label} className="rounded-2xl border border-rose-200 bg-white/70 px-6 py-6 text-center shadow-md">
                                <p className="text-4xl font-bold text-rose-500 md:text-5xl">{String(value).padStart(2, '0')}</p>
                                <p className="mt-2 text-xs uppercase tracking-[0.4em] text-rose-400">{label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]" id="parents">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">From Marisol &amp; Jesús</h2>
                    <p className="mt-4 text-lg text-rose-900/80">{PARENTS.message}</p>
                    <p className="mt-6 text-rose-900/70">
                        Thank you for surrounding Alondra with so much love. Please feel welcome to share your blessings,
                        advice, and stories on the <InternalLink to="photos" className="font-semibold text-rose-600 underline">photo guestbook</InternalLink>.
                    </p>
                </div>
                <div className="glass-panel flex flex-col gap-6 rounded-3xl p-8 shadow-xl">
                    <h3 className="font-display text-2xl">Weekend Snapshot</h3>
                    <ul className="space-y-4 text-rose-900/80">
                        <li>
                            <span className="font-semibold text-rose-600">Friday:</span> Settle into the hotel, explore the
                            beach, and join us for a casual welcome on the terrace.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Saturday:</span> Ceremony and reception begin at 6:00 PM.
                            Arrive early for photos beneath the palms.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Sunday:</span> Enjoy brunch in town or a last swim before
                            heading home.
                        </li>
                    </ul>
                    <InternalLink
                        to="weekend-guide"
                        className="self-start rounded-full border border-rose-200/80 bg-white/80 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-rose-600 shadow-md transition hover:border-rose-400 hover:text-rose-700"
                    >
                        Explore the full weekend guide
                    </InternalLink>
                </div>
            </section>

            <section id="itinerary" className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl md:text-4xl">Evening Itinerary</h2>
                <p className="mt-3 text-rose-900/80">
                    Our celebration moves from heartfelt traditions to a lively dance floor. Here&apos;s what to expect as the
                    night unfolds.
                </p>
                <div className="mt-6 space-y-4">
                    {ITINERARY.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-rose-200/70 bg-white/70 p-5 shadow-md">
                            <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{item.time}</p>
                            <h3 className="mt-2 font-display text-2xl text-rose-700">{item.title}</h3>
                            <p className="mt-1 text-rose-900/75">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="music" className="grid gap-10 lg:grid-cols-[1fr_1fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Song Requests</h2>
                    <p className="mt-2 text-rose-900/80">
                        Help us build the perfect playlist! Share the songs that will get you on the dance floor or that remind
                        you of Alondra.
                    </p>
                    <form className="mt-6 space-y-4" onSubmit={handleMusicSubmit}>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="name">
                                Your Name (optional)
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={musicForm.name}
                                onChange={handleMusicChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/70 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Let us know who to thank!"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="song">
                                Song Title
                            </label>
                            <input
                                id="song"
                                name="song"
                                value={musicForm.song}
                                onChange={handleMusicChange}
                                required
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/70 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Song name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="artist">
                                Artist
                            </label>
                            <input
                                id="artist"
                                name="artist"
                                value={musicForm.artist}
                                onChange={handleMusicChange}
                                required
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/70 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Who performs it?"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400"
                                htmlFor="dedication"
                            >
                                Dedication or Story (optional)
                            </label>
                            <textarea
                                id="dedication"
                                name="dedication"
                                value={musicForm.dedication}
                                onChange={handleMusicChange}
                                rows={3}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/70 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Tell us why this song matters."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-rose-600"
                        >
                            Submit Song
                        </button>
                        {musicFeedback && (
                            <p
                                className={`text-sm font-medium ${
                                    musicFeedback.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
                                }`}
                            >
                                {musicFeedback.message}
                            </p>
                        )}
                    </form>
                </div>
                <div className="glass-panel flex h-fit flex-col gap-4 rounded-3xl p-8 shadow-xl">
                    <h3 className="font-display text-2xl">Requested Songs</h3>
                    {musicSuggestions.length === 0 ? (
                        <p className="text-rose-900/70">
                            Be the first to add your favorite track! We&apos;ll share this list with the DJ to keep the dance floor
                            lively.
                        </p>
                    ) : (
                        <ul className="space-y-4">
                            {musicSuggestions.map((suggestion) => (
                                <li key={suggestion.id} className="rounded-2xl border border-rose-200/80 bg-white/80 p-4 shadow-md">
                                    <p className="text-lg font-semibold text-rose-700">
                                        {suggestion.song} <span className="text-sm text-rose-400">by {suggestion.artist}</span>
                                    </p>
                                    {suggestion.dedication && (
                                        <p className="mt-2 text-sm text-rose-900/70">“{suggestion.dedication}”</p>
                                    )}
                                    {suggestion.name && (
                                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-rose-400">
                                            Suggested by {suggestion.name}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]" id="travel">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Need-to-Know Travel Details</h2>
                    <ul className="mt-4 space-y-4 text-rose-900/80">
                        <li>
                            <span className="font-semibold text-rose-600">Hotel Reservations:</span> Use code {VENUE.reservationCode}{' '}
                            and reference “{VENUE.reference}”. Book directly with {VENUE.contactName} at{' '}
                            <a className="text-rose-600 underline" href={`tel:${VENUE.contactPhone}`}>
                                {VENUE.contactPhone}
                            </a>{' '}
                            or <a className="text-rose-600 underline" href={`mailto:${VENUE.contactEmail}`}>email</a> her for
                            assistance.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Closest Airports:</span> Aguadilla (BQN) is about 40
                            minutes away; San Juan (SJU) is about 2 hours 20 minutes.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Transportation:</span> Taxi services and Uber are readily
                            available—check the travel page for recommendations.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Car Rentals:</span> Reserve early during summer to
                            guarantee availability.
                        </li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <InternalLink
                            to="travel"
                            className="rounded-full border border-rose-200/80 bg-white/80 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-rose-600 shadow-md transition hover:border-rose-400 hover:text-rose-700"
                        >
                            Full Travel Guide
                        </InternalLink>
                        <InternalLink
                            to="contact"
                            className="rounded-full border border-transparent bg-rose-100 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-rose-700 shadow-md transition hover:bg-rose-200"
                        >
                            Contact Support Team
                        </InternalLink>
                    </div>
                </div>
                <div className="overflow-hidden rounded-3xl shadow-xl">
                    <iframe
                        title="Map to Rincón of the Seas"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.746288342524!2d-67.25834202380531!3d18.33563628209344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02b0f3f5eb939d%3A0xa7a73ce6bf604adf!2sRincon%20of%20the%20Seas%20Grand%20Caribbean%20Hotel!5e0!3m2!1sen!2sus!4v1717189476003!5m2!1sen!2sus"
                        className="h-full min-h-[320px] w-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default Home;
