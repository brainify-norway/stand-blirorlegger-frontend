import { useEffect, useRef, useState } from "react";
import Video from "./video";
import { CloseIcon } from "./icons";
import { GoMute } from "react-icons/go";
import { Button } from "react-bootstrap";

export default function QuestionModal({
    questions,
    open,
    setOpen,
    waitingVid
}) {
    const [currentVid, setCurrentVid] = useState(waitingVid);
    function handleClick(url) {
        setCurrentVid(url);
    }

    const editRef = useRef();
    const [mute, setMute] = useState("");
    const muteVideo = document.getElementsByClassName("soundVideo");

    function handleMute() {
        editRef.current = muteVideo.muted;
        console.log(editRef);

        muteVideo.muted = true;

        console.log("testing click");
    }

    return (
        <>
            <div key={questions.id} className="questionModal">
                <div className="modalGrid">
                    <div className="modal-video">
                        <Button onClick={() => handleMute()}>
                            <GoMute className="mute-button" />
                        </Button>
                        <Video
                            ref={editRef}
                            url={currentVid}
                            onChange={(e) => setMute(muteVideo.muted)}
                        />
                    </div>
                    <div className="questions">
                        {questions.map((question) => {
                            return (
                                <div key={question.question}>
                                    <span
                                        onClick={() =>
                                            handleClick(question.videoUrl)
                                        }
                                    >
                                        {question.question}
                                    </span>
                                </div>
                            );
                        })}
                        <div className="closeButton">
                            <CloseIcon
                                size="30px"
                                color="#4F00C5"
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
