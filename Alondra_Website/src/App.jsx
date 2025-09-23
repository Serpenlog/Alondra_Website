import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Envelope from './Envelope.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Photos from './pages/Photos.jsx';
import Travel from './pages/Travel.jsx';
import WeekendGuide from './pages/WeekendGuide.jsx';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/photos', label: 'Photos' },
    { to: '/travel', label: 'Travel' },
    { to: '/weekend-guide', label: 'Weekend Guide' },
    { to: '/contact', label: 'Contact' }
];

function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {!open && <Envelope onOpen={() => setOpen(true)} />}
            <div
                className={`min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 px-4 text-rose-900 transition-opacity duration-500 ease-out md:px-8 ${
                    open ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
            >
                <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 py-12 md:py-16">
                    <header className="rounded-full border border-rose-200/70 bg-white/70 px-6 py-4 shadow-xl backdrop-blur">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <NavLink to="/" className="font-script text-3xl text-rose-600 transition hover:text-rose-700" end>
                                Alondra&apos;s XV
                            </NavLink>
                            <nav aria-label="Primary">
                                <ul className="flex flex-wrap justify-center gap-3">
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.to}>
                                            <NavLink
                                                to={link.to}
                                                end={link.to === '/'}
                                                className={({ isActive }) =>
                                                    `nav-link ${isActive ? 'nav-link-active' : ''}`
                                                }
                                            >
                                                {link.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <main className="flex flex-1 flex-col gap-16 px-1 md:px-0">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/photos" element={<Photos />} />
                            <Route path="/travel" element={<Travel />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/weekend-guide" element={<WeekendGuide />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </main>

                    <footer className="rounded-3xl border border-rose-200/70 bg-white/60 px-6 py-6 text-center text-sm text-rose-900/70 shadow-inner">
                        <p>
                            © {new Date().getFullYear()} Flores • López Family. Celebrating Alondra with love from Rincón of the
                            Seas.
                        </p>
                        <p className="mt-2">
                            Need help? Visit the{' '}
                            <NavLink to="/contact" className="font-semibold text-rose-600 underline">
                                contact page
                            </NavLink>{' '}
                            or explore the{' '}
                            <NavLink to="/travel" className="font-semibold text-rose-600 underline">
                                travel guide
                            </NavLink>
                            .
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default App;
