export default function VideoCard({ item }) {
    return (
        <>
            <div key={item.id}>
                <div className="video-card">
                <video
                    style={{
                        width: "100%",
                        height: "500px"
                    }}
                    autoPlay
                    muted
                >
                    <source src={item.acf.featuredVideo.mediaItemUrl} />
                </video>
                </div>
                <div className="card-info">
                    <h3>{item.title} ({item.acf.age})</h3>
                    <span>{item.acf.speciality}, {item.acf.arbeidsgiver}</span>
                </div>
            </div>
        </>
    );
}
