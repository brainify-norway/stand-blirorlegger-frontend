import { useState, useEffect } from "react";
import QuestionModal from "../components/questionModal";

export default function VideoCard({ item }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.querySelector("body").classList.add("modal-open");
            window.scrollTo({ top: 0 });
        } else {
            document.querySelector("body").classList.remove("modal-open");
        }
    });

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
                        loop
                        muted
                    >
                        <source src={item.acf.featuredVideo.mediaItemUrl} />
                    </video>
                    <div className="openModal" onClick={() => setOpen(true)}><span>Still meg et spm</span></div>
                </div>
                <div className="card-info">
                    <h3>{item.title} ({item.acf.age})</h3>
                    <span>{item.acf.speciality}, {item.acf.arbeidsgiver}</span>
                </div>
            </div>
            
            {open && <QuestionModal waitingVid={item.acf.featuredVideo.mediaItemUrl} open={open} setOpen={setOpen} questions={item.videos.questions} />}
        </>
    );
}
