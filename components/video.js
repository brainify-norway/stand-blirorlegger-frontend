export default function Video({ url }) {
    return (
        <video
            className="soundVideo"
            key={url}
            style={{
                width: "100%",
                height: "500px"
            }}
            autoPlay
            loop
        >
            <source src={url} />
        </video>
    );
}
