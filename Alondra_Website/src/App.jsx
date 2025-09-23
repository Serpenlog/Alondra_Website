import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Envelope from './Envelope.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Photos from './pages/Photos.jsx';
import Travel from './pages/Travel.jsx';
import WeekendGuide from './pages/WeekendGuide.jsx';
import InternalLink from './components/InternalLink.jsx';
import { NavigationContext } from './navigationContext.js';

const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'photos', label: 'Photos' },
    { id: 'travel', label: 'Travel' },
    { id: 'weekend-guide', label: 'Weekend Guide' },
    { id: 'contact', label: 'Contact' }
];

function App() {
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined;
        }

        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            const isValid = NAV_LINKS.some((link) => link.id === hash);
            if (isValid) {
                setCurrentPage(hash);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const newHash = `#${currentPage}`;
        if (window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash);
        }
    }, [currentPage]);

    const ActivePage = useMemo(() => {
        switch (currentPage) {
            case 'photos':
                return Photos;
            case 'travel':
                return Travel;
            case 'contact':
                return Contact;
            case 'weekend-guide':
                return WeekendGuide;
            case 'home':
            default:
                return Home;
        }
    }, [currentPage]);

    return (
        <NavigationContext.Provider value={{ currentPage, navigate: setCurrentPage }}>
            {!open && <Envelope onOpen={() => setOpen(true)} />}
            <div
                className={`min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-4 text-rose-900 transition-opacity duration-500 ease-out md:px-8 ${
                    open ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
            >
                <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 py-12 md:py-16">
                    <header className="rounded-full border border-rose-200/70 bg-white/70 px-6 py-4 shadow-xl backdrop-blur">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <button
                                type="button"
                                onClick={() => setCurrentPage('home')}
                                className="font-script text-3xl text-rose-600 transition hover:text-rose-700"
                            >
                                Alondra&apos;s XV
                            </button>
                            <nav aria-label="Primary">
                                <ul className="flex flex-wrap justify-center gap-3">
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.id}>
                                            <button
                                                type="button"
                                                onClick={() => setCurrentPage(link.id)}
                                                className={`nav-link ${currentPage === link.id ? 'nav-link-active' : ''}`}
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <main className="flex flex-1 flex-col gap-16 px-1 md:px-0">
                        <ActivePage />
                    </main>

                    <footer className="rounded-3xl border border-rose-200/70 bg-white/60 px-6 py-6 text-center text-sm text-rose-900/70 shadow-inner">
                        <p>
                            © {new Date().getFullYear()} Flores • López Family. Celebrating Alondra with love from Rincón of the
                            Seas.
                        </p>
                        <p className="mt-2">
                            Need help? Visit the{' '}
                            <InternalLink to="contact" className="font-semibold text-rose-600 underline">
                                contact page
                            </InternalLink>{' '}
                            or explore the{' '}
                            <InternalLink to="travel" className="font-semibold text-rose-600 underline">
                                travel guide
                            </InternalLink>
                            .
                        </p>
                    </footer>
                </div>
            </div>
        </NavigationContext.Provider>
    );
}

export default App;
