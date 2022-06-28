import { useState } from "react";
import Video from "./video";
import QuestionModal from "./questionModal";

export default function VideoCard({ item }) {
    const [open, setOpen] = useState(false);
    const [mute, setMute] = useState(false);
    const [currentVid, setCurrentVid] = useState(
        item.acf.featuredVideo.mediaItemUrl
    );

    return (
        <>
            <div key={item.id} className={"video-card " + item.slug}>
                <span
                    className={
                        currentVid !== item.acf.featuredVideo.mediaItemUrl
                            ? "button showBtn"
                            : "button hideBtn"
                    }
                >
                    <button
                        onClick={() => setMute(!mute)}
                        className={mute ? "muted " : "unmuted "}
                    ></button>
                </span>
                <div className="video-box">
                    <Video url={currentVid} mute={mute} />
                    <div className="hide-video-line"></div>
                </div>
                <QuestionModal
                    questions={item.videos.questions}
                    currentVid={currentVid}
                    setCurrentVid={setCurrentVid}
                />
            </div>
            <div className="card-info">
                <h3>
                    {item.title} ({item.acf.age})
                </h3>
                <span>
                    {item.acf.speciality}, {item.acf.arbeidsgiver}
                </span>
            </div>
        </>
    );
}
