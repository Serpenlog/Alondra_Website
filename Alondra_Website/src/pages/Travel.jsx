import { Link } from 'react-router-dom';
import { AIRPORTS, CAR_RENTALS, TAXI_SERVICES, VENUE } from '../data/eventContent.js';

function Travel() {
    return (
        <div className="flex flex-col gap-16">
            <section className="glass-panel rounded-3xl px-6 py-10 shadow-xl sm:px-12">
                <h1 className="font-display text-4xl text-rose-900 md:text-5xl">Travel &amp; Stay</h1>
                <p className="mt-3 max-w-3xl text-rose-900/80">
                    From booking your room to catching a ride along Puerto Rico&apos;s west coast, here&apos;s everything you need to
                    arrive relaxed and ready for Alondra&apos;s big night.
                </p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 shadow-inner">
                        <h2 className="font-display text-2xl text-rose-700">Host Hotel</h2>
                        <p className="mt-2 text-rose-900/75">{VENUE.name}</p>
                        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-rose-400">Address</p>
                        <p className="text-rose-900/70">
                            {VENUE.addressLines[0]}
                            <br />
                            {VENUE.addressLines[1]}
                        </p>
                        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-rose-400">Reservations</p>
                        <p className="text-rose-900/75">
                            Use reservation code <span className="font-semibold text-rose-600">{VENUE.reservationCode}</span>{' '}
                            and reference “{VENUE.reference}”.
                        </p>
                        <p className="mt-3 text-rose-900/70">
                            Call <a className="font-semibold text-rose-600 underline" href={`tel:${VENUE.mainPhone}`}>{VENUE.mainPhone}</a>{' '}
                            or contact {VENUE.contactName} at{' '}
                            <a className="font-semibold text-rose-600 underline" href={`tel:${VENUE.contactPhone}`}>
                                {VENUE.contactPhone}
                            </a>{' '}
                            /{' '}
                            <a className="font-semibold text-rose-600 underline" href={`mailto:${VENUE.contactEmail}`}>
                                {VENUE.contactEmail}
                            </a>
                            .
                        </p>
                        <p className="mt-3 text-rose-900/70">{VENUE.bookingNote}</p>
                    </div>
                    <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 shadow-inner">
                        <h2 className="font-display text-2xl text-rose-700">Arrival Snapshot</h2>
                        <ul className="mt-3 space-y-3 text-rose-900/75">
                            {AIRPORTS.map((airport) => (
                                <li key={airport.code} className="rounded-2xl border border-rose-100 bg-white/70 p-4 shadow-md">
                                    <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{airport.city}</p>
                                    <p className="mt-1 text-rose-900/80">{airport.description}</p>
                                </li>
                            ))}
                            <li className="rounded-2xl border border-rose-100 bg-white/70 p-4 shadow-md">
                                <p className="text-sm uppercase tracking-[0.3em] text-rose-400">Rideshare</p>
                                <p className="mt-1 text-rose-900/80">{TAXI_SERVICES.rideshare}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Taxi &amp; Shuttle Directory</h2>
                <p className="mt-2 text-rose-900/75">
                    Reserve transportation in advance—drivers are happy to coordinate airport pickups and late-night returns to the hotel.
                </p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 shadow-md">
                        <h3 className="font-display text-2xl text-rose-700">San Juan Airport (SJU)</h3>
                        <ul className="mt-4 space-y-3 text-rose-900/75">
                            {TAXI_SERVICES.SJU.map((service) => (
                                <li key={service.name} className="flex flex-col rounded-2xl border border-rose-100 bg-white/70 p-4">
                                    <span className="font-semibold text-rose-600">{service.name}</span>
                                    <a className="text-rose-500 underline" href={`tel:${service.phone}`}>
                                        {service.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 shadow-md">
                        <h3 className="font-display text-2xl text-rose-700">Aguadilla Airport (BQN)</h3>
                        <ul className="mt-4 space-y-3 text-rose-900/75">
                            {TAXI_SERVICES.BQN.map((service) => (
                                <li key={service.name} className="flex flex-col rounded-2xl border border-rose-100 bg-white/70 p-4">
                                    <span className="font-semibold text-rose-600">{service.name}</span>
                                    <a className="text-rose-500 underline" href={`tel:${service.phone}`}>
                                        {service.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Car Rental Partners</h2>
                <p className="mt-2 text-rose-900/75">
                    Prefer to explore at your own pace? Reach out to these agencies to secure a set of wheels for the weekend.
                </p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 shadow-md">
                        <h3 className="font-display text-2xl text-rose-700">From Aguadilla (BQN)</h3>
                        <ul className="mt-4 space-y-3 text-rose-900/75">
                            {CAR_RENTALS.BQN.map((company) => (
                                <li key={company.name} className="flex flex-col rounded-2xl border border-rose-100 bg-white/70 p-4">
                                    <span className="font-semibold text-rose-600">{company.name}</span>
                                    <a className="text-rose-500 underline" href={`tel:${company.phone}`}>
                                        {company.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 shadow-md">
                        <h3 className="font-display text-2xl text-rose-700">From San Juan (SJU)</h3>
                        <ul className="mt-4 space-y-3 text-rose-900/75">
                            {CAR_RENTALS.SJU.map((company) => (
                                <li key={company.name} className="flex flex-col rounded-2xl border border-rose-100 bg-white/70 p-4">
                                    <span className="font-semibold text-rose-600">{company.name}</span>
                                    <a className="text-rose-500 underline" href={`tel:${company.phone}`}>
                                        {company.phone}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-rose-900/70">{CAR_RENTALS.note}</p>
                    </div>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Map &amp; Directions</h2>
                <div className="mt-4 overflow-hidden rounded-3xl shadow-xl">
                    <iframe
                        title="Directions to Rincón of the Seas"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.746288342524!2d-67.25834202380531!3d18.33563628209344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02b0f3f5eb939d%3A0xa7a73ce6bf604adf!2sRincon%20of%20the%20Seas%20Grand%20Caribbean%20Hotel!5e0!3m2!1sen!2sus!4v1717189476003!5m2!1sen!2sus"
                        className="h-[380px] w-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p className="mt-4 text-sm text-rose-900/70">
                    Need help coordinating flights or sharing arrival times? Reach out through the{' '}
                    <Link to="/contact" className="font-semibold text-rose-600 underline">
                        contact page
                    </Link>{' '}
                    so we can pair you with other guests arriving around the same time.
                </p>
            </section>
        </div>
    );
}

export default Travel;
