import { useState } from "react";
import QuestionModal from "../components/questionModal";

export default function VideoCard({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div key={item.id} className="video-card">
                <div className="video-box">
                    <video
                        style={{
                            width: "100%",
                            height: "500px"
                        }}
                        autoPlay
                        loop
                        muted
                    >
                        {item.acf.featuredVideo && (
                            <source src={item.acf.featuredVideo.mediaItemUrl} />
                        )}
                    </video>
                    <div className="hide-video-line"></div>
                </div>
                <div className="openModal" onClick={() => setOpen(true)}>
                    <span className="text">Still meg et spørsmål</span>
                </div>
            </div>
            <div className="card-info">
                <h3>
                    {item.title} ({item.acf.age})
                </h3>
                <span>
                    {item.acf.speciality}, {item.acf.arbeidsgiver}
                </span>
            </div>

            {open && (
                <>
                    <QuestionModal
                        waitingVid={item.acf.featuredVideo.mediaItemUrl}
                        open={open}
                        setOpen={setOpen}
                        questions={item.videos.questions}
                    />
                </>
            )}
        </>
    );
}
