function OceanBackground({ mode = 'art' }) {
    if (mode === 'video') {
        return (
            <div className="ocean-video-background" aria-hidden="true">
                <video
                    className="ocean-video ocean-video-mobile"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/videos/beach-mobile-poster.jpg"
                >
                    <source src="/videos/beach-mobile.mp4" type="video/mp4" />
                </video>
                <video
                    className="ocean-video ocean-video-desktop"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/videos/beach-desktop-poster.jpg"
                >
                    <source src="/videos/beach-desktop.mp4" type="video/mp4" />
                </video>
                <div className="ocean-video-overlay" />
            </div>
        );
    }

    return (
        <div className="ocean-background" aria-hidden="true">
            <div className="ocean-depth" />
            <div className="ocean-current ocean-current-one" />
            <div className="ocean-current ocean-current-two" />
            <div className="ocean-current ocean-current-three" />

            <div className="shoreline-strip">
                <div className="shoreline-foam shoreline-foam-one" />
                <div className="shoreline-foam shoreline-foam-two" />
                <div className="shoreline-foam shoreline-foam-three" />
                <div className="shoreline-shell shoreline-shell-one" />
                <div className="shoreline-shell shoreline-shell-two" />
            </div>
        </div>
    );
}

export default OceanBackground;
