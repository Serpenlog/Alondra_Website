function OceanBackground() {
    return (
        <div className="ocean-background" aria-hidden="true">
            <div className="ocean-gradient"></div>
            <div className="ocean-light-ray ocean-light-ray-one"></div>
            <div className="ocean-light-ray ocean-light-ray-two"></div>

            <div className="ocean-wave ocean-wave-back" />
            <div className="ocean-wave ocean-wave-mid" />
            <div className="ocean-wave ocean-wave-front" />

            <div className="ocean-bubbles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <svg className="shell shell-left" viewBox="0 0 140 120" role="presentation">
                <path d="M16 98C16 57 46 20 77 20c31 0 47 32 47 63v23H16V98z" fill="rgba(253,212,188,0.9)" />
                <path d="M70 20v86M47 28l7 78M93 30l-7 76M31 46l7 60M108 46l-7 60" stroke="rgba(232,157,132,0.55)" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <svg className="shell shell-right" viewBox="0 0 150 140" role="presentation">
                <path d="M17 103c0-46 34-82 73-82 23 0 43 12 43 30 0 15-14 25-29 25 14 1 29 8 29 24 0 17-18 31-44 31H17v-28z" fill="rgba(255,228,201,0.9)" />
                <path d="M42 110c9-22 27-41 58-57M58 122c7-19 24-37 51-53M77 130c4-14 16-29 33-42" stroke="rgba(231,168,143,0.55)" strokeWidth="4" strokeLinecap="round" />
            </svg>

            <div className="ocean-starfish" />
        </div>
    );
}

export default OceanBackground;
