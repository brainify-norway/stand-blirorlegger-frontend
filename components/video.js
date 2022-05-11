export default function Video({ url }) {
    return (
        <video
            key={url}
            style={{
                width: "100%",
                height: "500px"
            }}
            autoPlay
        >
            <source src={url} />
        </video>
    );
}
