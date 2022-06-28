export default function Video({ url, mute }) {
    return (
        <video
            key={url}
            style={{
                width: "100%",
                height: "500px"
            }}
            autoPlay
            loop
            muted={mute}
        >
            <source src={url} />
        </video>
    );
}
