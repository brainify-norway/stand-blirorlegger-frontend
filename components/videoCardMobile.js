import { useState, useEffect } from "react";
import QuestionModal from "./questionModal";

export default function VideoCardMobile({ item }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {});

    return (
        <>
                <div className="card-grid container">
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
                                <source
                                    src={item.acf.featuredVideo.mediaItemUrl}
                                />
                            </video>
                            <div
                                className="openModal"
                                onClick={() => setOpen(true)}
                            >
                                <span className="text">
                                    Still meg et spørsmål
                                </span>
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
                    </div>
                </div>
       
            {open && (
                <QuestionModal
                    waitingVid={item.acf.featuredVideo.mediaItemUrl}
                    open={open}
                    setOpen={setOpen}
                    questions={item.videos.questions}
                />
            )}
        </>
    );
}
