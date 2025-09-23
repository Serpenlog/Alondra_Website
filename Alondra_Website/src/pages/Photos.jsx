import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { VENUE } from '../data/eventContent.js';

const SAMPLE_GALLERY = [
    {
        id: 'sunset',
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        alt: 'Sunset at a tropical beach in Puerto Rico',
        caption: 'Golden hour on the shores of Rincón',
        contributor: 'The Rodriguez Family'
    },
    {
        id: 'dance',
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Teenagers dancing in formal attire',
        caption: 'Practice makes perfect for the quince court',
        contributor: 'Team Damas & Chambelanes'
    },
    {
        id: 'celebration',
        src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
        alt: 'Guests raising a toast at a festive reception',
        caption: 'Cheers to fifteen unforgettable years',
        contributor: 'Flores • López Family'
    }
];

const initialFormState = {
    name: '',
    caption: '',
    url: '',
    file: null
};

function Photos() {
    const [gallery, setGallery] = useState(SAMPLE_GALLERY);
    const [formState, setFormState] = useState(initialFormState);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isPreviewObject, setIsPreviewObject] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const objectUrls = useRef([]);

    useEffect(() => {
        return () => {
            objectUrls.current.forEach((url) => {
                URL.revokeObjectURL(url);
            });
        };
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'url') {
            if (formState.file && previewUrl && isPreviewObject) {
                URL.revokeObjectURL(previewUrl);
            }
            setFormState((prev) => ({ ...prev, url: value, file: null }));
            setPreviewUrl(value.trim() ? value.trim() : null);
            setIsPreviewObject(false);
        } else {
            setFormState((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) {
            if (formState.file && previewUrl && isPreviewObject) {
                URL.revokeObjectURL(previewUrl);
            }
            setFormState((prev) => ({ ...prev, file: null }));
            setPreviewUrl(null);
            setIsPreviewObject(false);
            return;
        }

        if (formState.file && previewUrl && isPreviewObject) {
            URL.revokeObjectURL(previewUrl);
        }

        const url = URL.createObjectURL(file);
        objectUrls.current.push(url);
        setFormState((prev) => ({ ...prev, file, url: '' }));
        setPreviewUrl(url);
        setIsPreviewObject(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const imageSource = formState.file ? previewUrl : formState.url.trim();

        if (!imageSource) {
            setFeedback({ type: 'error', message: 'Please upload an image or share a link so we can feature it.' });
            return;
        }

        const newPhoto = {
            id: `${Date.now()}`,
            src: imageSource,
            alt: formState.caption || 'Guest submitted photo for Alondra\'s quinceañera',
            caption: formState.caption || 'Shared with love for Alondra',
            contributor: formState.name || 'Anonymous guest'
        };

        setGallery((prev) => [newPhoto, ...prev]);
        setFormState(initialFormState);
        setPreviewUrl(null);
        setIsPreviewObject(false);
        setFeedback({ type: 'success', message: 'Gracias! Your photo has been added to the shared gallery preview.' });

        window.setTimeout(() => {
            setFeedback(null);
        }, 4000);
    };

    return (
        <div className="flex flex-col gap-16">
            <section className="glass-panel rounded-3xl px-6 py-10 shadow-xl sm:px-12">
                <h1 className="font-display text-4xl text-rose-900 md:text-5xl">Photo Guestbook</h1>
                <p className="mt-3 max-w-3xl text-rose-900/80">
                    Relive every smile and surprise from Alondra&apos;s quinceañera weekend. Browse the gallery below and share your
                    own photos so we can remember the celebration through your eyes.
                </p>
                <div className="mt-6 rounded-3xl border border-rose-200/70 bg-white/70 p-6 text-rose-900/75 shadow-inner">
                    <p className="font-semibold text-rose-600">How to contribute:</p>
                    <ul className="mt-3 list-disc space-y-2 pl-6">
                        <li>Upload a favorite shot directly from your device or paste a link from Google Photos, iCloud, etc.</li>
                        <li>Mention who captured the moment so we can thank you in our keepsake album.</li>
                        <li>Check back after the celebration for new uploads from family and friends.</li>
                    </ul>
                </div>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Share Your Photos</h2>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleInputChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Who do we credit?"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="caption">
                                Caption or Memory
                            </label>
                            <input
                                id="caption"
                                name="caption"
                                value={formState.caption}
                                onChange={handleInputChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="Tell us about the moment"
                            />
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="url">
                                Photo Link (optional)
                            </label>
                            <input
                                id="url"
                                name="url"
                                value={formState.url}
                                onChange={handleInputChange}
                                className="mt-1 w-full rounded-2xl border border-rose-200/70 bg-white/80 px-4 py-3 text-rose-900 shadow-inner focus:border-rose-400 focus:outline-none"
                                placeholder="https://photos.app.goo.gl/..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-rose-400" htmlFor="file">
                                Upload a Photo (optional)
                            </label>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-1 w-full rounded-2xl border border-dashed border-rose-200 bg-white/60 px-4 py-3 text-rose-900 focus:border-rose-400 focus:outline-none"
                            />
                            <p className="mt-2 text-xs text-rose-400">Files stay on this device only and show instantly in the preview gallery.</p>
                        </div>
                    </div>
                    {previewUrl && (
                        <div className="overflow-hidden rounded-3xl border border-rose-200/70 bg-white/70 shadow-inner">
                            <img src={previewUrl} alt="Preview of the photo being submitted" className="h-72 w-full object-cover" />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-rose-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:bg-rose-600"
                    >
                        Submit to Gallery
                    </button>
                    {feedback && (
                        <p
                            className={`text-sm font-medium ${feedback.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}
                        >
                            {feedback.message}
                        </p>
                    )}
                </form>
                <p className="mt-6 text-sm text-rose-900/70">
                    Want to upload a full album? Email links directly to{' '}
                    <a className="font-semibold text-rose-600 underline" href={`mailto:${VENUE.contactEmail}`}>
                        {VENUE.contactEmail}
                    </a>{' '}
                    with the subject “Photos for Alondra”.
                </p>
            </section>

            <section className="glass-panel rounded-3xl p-8 shadow-xl">
                <h2 className="font-display text-3xl">Celebration Gallery</h2>
                <p className="mt-2 text-rose-900/75">
                    New submissions appear at the top. Tap on a tile to open the image in a new tab and download a copy for your
                    keepsakes.
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((photo) => (
                        <a
                            key={photo.id}
                            href={photo.src}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden rounded-3xl border border-rose-200/80 bg-white/70 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img src={photo.src} alt={photo.alt} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rose-950/70 via-rose-900/30 to-transparent p-4 text-white">
                                <p className="text-sm font-semibold">{photo.caption}</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-rose-100/80">Shared by {photo.contributor}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <div className="text-center text-sm text-rose-900/70">
                <p>
                    Ready to relive the magic in person again? <Link to="/" className="font-semibold text-rose-600 underline">Return to the home page</Link> or keep planning your stay with the{' '}
                    <Link to="/travel" className="font-semibold text-rose-600 underline">travel guide</Link>.
                </p>
            </div>
        </div>
    );
}

export default Photos;
