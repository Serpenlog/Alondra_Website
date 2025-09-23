import { useState } from 'react';
import { IMPORTANT_CONTACTS, VENUE } from '../data/eventContent.js';
import InternalLink from '../components/InternalLink.jsx';

const initialFormState = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

function Contact() {
    const [formState, setFormState] = useState(initialFormState);
    const [feedback, setFeedback] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formState.email.trim() || !formState.message.trim()) {
            setFeedback({ type: 'error', message: 'Please include your email and a message so we can reply promptly.' });
            return;
        }

        const subject = `Quinceañera question from ${formState.name || 'guest'}`;
        const bodyLines = [
            `Name: ${formState.name || 'Guest'}`,
            `Email: ${formState.email}`,
            `Phone: ${formState.phone || 'Not provided'}`,
            '',
            formState.message
        ];
        const mailtoLink = `mailto:${VENUE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            bodyLines.join('\n')
        )}`;

        window.location.href = mailtoLink;
        setFeedback({
            type: 'success',
            message: 'We opened your email client with the details you provided. Send it to finalize the message!'
        });
        setFormState(initialFormState);

        window.setTimeout(() => setFeedback(null), 4000);
    };

    return (
        <div className="flex flex-col gap-16">
            <section className="glass-panel rounded-3xl px-6 py-10 shadow-xl sm:px-12">
                <h1 className="font-display text-4xl text-rose-900 md:text-5xl">Stay in Touch</h1>
                <p className="mt-3 max-w-3xl text-rose-900/80">
                    We&apos;re here to make your trip seamless. Reach out for travel help, special accommodations, or to send love to
                    Alondra and her family.
                </p>
            </section>

            <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Send Us a Note</h2>
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="phone">
                                Phone (optional)
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Add if you prefer a call back"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Let us know how we can help"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-rose-600"
                        >
                            Draft Email
                        </button>
                        {feedback && (
                            <p
                                className={`text-sm font-medium ${
                                    feedback.type === 'success' ? 'text-emerald-600' : 'text-rose-600'
                                }`}
                            >
                                {feedback.message}
                            </p>
                        )}
                    </form>
                </div>
                <div className="glass-panel rounded-3xl p-8 shadow-xl">
                    <h2 className="font-display text-3xl">Key Contacts</h2>
                    <div className="mt-6 space-y-4">
                        {IMPORTANT_CONTACTS.map((contact) => (
                            <div key={contact.title} className="rounded-3xl border border-rose-200/70 bg-white/75 p-6 shadow-md">
                                <p className="text-sm uppercase tracking-[0.3em] text-rose-400">{contact.title}</p>
                                <p className="mt-2 text-lg font-semibold text-rose-700">{contact.names}</p>
                                {contact.phone && (
                                    <p className="mt-2">
                                        <a className="text-rose-500 underline" href={`tel:${contact.phone}`}>
                                            {contact.phone}
                                        </a>
                                    </p>
                                )}
                                {contact.email && (
                                    <p className="mt-2">
                                        <a className="text-rose-500 underline" href={`mailto:${contact.email}`}>
                                            {contact.email}
                                        </a>
                                    </p>
                                )}
                                <p className="mt-2 text-sm text-rose-900/70">{contact.note}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-3xl border border-rose-200/70 bg-white/75 p-6 text-sm text-rose-900/75 shadow-inner">
                        <p className="font-semibold text-rose-600">Dress Code Reminder:</p>
                        <p className="mt-2">Formal attire requested. Please save gold and white for Alondra&apos;s spotlight look.</p>
                        <p className="mt-3">
                            Need travel logistics? Visit the{' '}
                            <InternalLink to="travel" className="font-semibold text-rose-600 underline">
                                travel guide
                            </InternalLink>{' '}
                            or explore the{' '}
                            <InternalLink to="weekend-guide" className="font-semibold text-rose-600 underline">
                                weekend schedule
                            </InternalLink>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
