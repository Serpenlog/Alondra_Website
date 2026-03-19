import beachVideo from './alondra_images/beach_video.mp4';

function OceanBackground() {
    return (
        <div className="ocean-background" aria-hidden="true">
            <video
                className="ocean-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={beachVideo} type="video/mp4" />
            </video>
            <div className="ocean-video-overlay" />
        </div>
    );
}

export default OceanBackground;
