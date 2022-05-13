export default function VideoCard({ item }) {
    return (
        <>
            <div key={item.id}>
                <div className="video-card">
<<<<<<< Updated upstream
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
=======
                    <video
                        style={{
                            width: "100%",
                            height: "500px"
                        }}
                        autoPlay
                        loop
                        muted
                    >
                        <source src={item.acf.featuredVideo.mediaItemUrl} />

                        {/* <source src="/BrittSynove.mp4"/> */}
                    </video>
                    <div className="openModal" onClick={() => setOpen(true)}><span>Still meg et spm</span></div>
>>>>>>> Stashed changes
                </div>
                <div className="card-info">
                    <h3>{item.title} ({item.acf.age})</h3>
                    <span>{item.acf.speciality}, {item.acf.arbeidsgiver}</span>
                </div>
            </div>
        </>
    );
}
