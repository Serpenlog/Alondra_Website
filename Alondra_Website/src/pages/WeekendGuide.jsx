import { DRESS_CODE, ITINERARY, VENUE, WEEKEND_TIPS } from '../data/eventContent.js';
import InternalLink from '../components/InternalLink.jsx';

function WeekendGuide() {
    return (
        <div className="flex flex-col gap-16">
            <section className="glass-panel rounded-3xl px-6 py-10 shadow-xl sm:px-12">
                <h1 className="font-display text-4xl text-rose-900 md:text-5xl">Weekend Guide</h1>
                <p className="mt-3 max-w-3xl text-rose-900/80">
                    Whether you&apos;re flying in on Friday or staying through Monday, this guide highlights the moments we&apos;ve planned and
                    the magic you can make in Rincón.
                </p>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Celebration Timeline</h2>
                <p className="mt-2 text-rose-900/75">
                    Saturday&apos;s quinceañera celebration unfolds with a blend of tradition and modern flair. Arrive early to sign the guestbook
                    and settle in before Alondra&apos;s grand entrance.
                </p>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {ITINERARY.map((item) => (
                        <div key={item.title} className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 shadow-md">
                            <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{item.time}</p>
                            <h3 className="mt-2 font-display text-2xl text-rose-700">{item.title}</h3>
                            <p className="mt-2 text-rose-900/75">{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-sm text-rose-900/70">
                    Tip: If you&apos;re part of the court, plan to meet in the Coral Ballroom at 3:00 PM for final touch-ups and rehearsal photos.
                </p>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Dress to Shine</h2>
                    <p className="mt-2 text-rose-900/75">
                        Embrace the evening&apos;s formal vibe with tropical flair. Think flowing fabrics, soft metallics, and dancing shoes you
                        can twirl in all night long.
                    </p>
                    <ul className="mt-4 space-y-3 text-rose-900/75">
                        <li>
                            <span className="font-semibold text-rose-600">Theme:</span> {DRESS_CODE.overall}. {DRESS_CODE.note}
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Bring:</span> A wrap or light jacket for the ocean breeze, and a comfortable pair of sandals for exploring the resort.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Beauty Bar:</span> A touch-up station with hairspray, pins, and blotting papers will be available near the ballroom entrance.
                        </li>
                    </ul>
                    <p className="mt-4 text-sm text-rose-900/70">
                        If you have questions about attire or need accessibility accommodations, contact the{' '}
                        <InternalLink to="contact" className="font-semibold text-rose-600 underline">
                            planning team
                        </InternalLink>
                        .
                    </p>
                </div>
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Resort Highlights</h2>
                    <p className="mt-2 text-rose-900/75">
                        {VENUE.name} offers lush gardens, beach access, and tranquil pools. Use downtime to recharge and connect with loved ones.
                    </p>
                    <ul className="mt-4 space-y-3 text-rose-900/75">
                        <li>
                            <span className="font-semibold text-rose-600">Sunset Terrace:</span> Meet here Friday at 7:00 PM for a casual welcome and pastelitos.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Poolside Brunch:</span> Sunday morning meet-up for anyone extending their stay—no RSVP needed.
                        </li>
                        <li>
                            <span className="font-semibold text-rose-600">Photo Spots:</span> The lobby staircase and the seaside gazebo make perfect backdrops. Stop by the{' '}
                            <InternalLink to="photos" className="font-semibold text-rose-600 underline">
                                photo page
                            </InternalLink>{' '}
                            to share your favorites.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Make the Most of Rincón</h2>
                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                    {WEEKEND_TIPS.map((tip) => (
                        <div key={tip} className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 text-rose-900/75 shadow-md">
                            {tip}
                        </div>
                    ))}
                    <div className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 text-rose-900/75 shadow-md">
                        Explore nearby attractions like the Punta Higuero Lighthouse, local art markets, and surf lessons for adventurous guests.
                    </div>
                    <div className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 text-rose-900/75 shadow-md">
                        Traveling with family? Coordinate shared rides on the{' '}
                        <InternalLink to="contact" className="font-semibold text-rose-600 underline">
                            contact page
                        </InternalLink>{' '}
                        to link up with other guests landing around the same time.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WeekendGuide;
