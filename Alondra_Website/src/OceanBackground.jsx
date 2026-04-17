const beachVideoUrl = '/beach_video.mp4';
function OceanBackground({ isVideoEnabled = true }) {
    return (
        <div className="ocean-background" aria-hidden="true">
            {isVideoEnabled ? (
                <video
                    className="ocean-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={beachVideoUrl} type="video/mp4" />
                </video>
            ) : (
                <div className="ocean-video ocean-video-static" />
            )}
            <div className="ocean-video-overlay" />
        </div>
    );
}

export default OceanBackground;
