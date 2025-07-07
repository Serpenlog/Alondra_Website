import { useState } from 'react';
import './App.css';
import Envelope from './Envelope.jsx';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {!open && <Envelope onOpen={() => setOpen(true)} />}
            <div
                className={`min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 flex flex-col items-center justify-center text-center p-6${open ? '' : ' opacity-0'}`}
            >
            <h1 className="text-5xl font-bold mb-4">🎉 You're Invited! 🎉</h1>
            <h1 className="text-5xl text-red-600 font-bold">Tailwind is working!</h1>

            <p className="text-lg mb-8">Join us for the ultimate party experience! 🥳</p>

            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-2">⏳ Countdown to the Party</h2>
                <p className="text-3xl font-bold text-purple-600">[Countdown goes here]</p>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-2">📋 RSVP</h2>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="p-2 border rounded-md" />
                    <input type="email" placeholder="Your Email" className="p-2 border rounded-md" />
                    <button className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                        Confirm Attendance
                    </button>
                </form>
            </div>
            </div>
        </>
    );
}

export default App;
