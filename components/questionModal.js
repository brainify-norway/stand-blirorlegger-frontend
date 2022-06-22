import { useEffect, useRef, useState } from "react";
import Video from "./video";
import { CloseIcon } from "./icons";
import { GoMute } from "react-icons/go";
import { Button } from "react-bootstrap";
import VideoPlayer from "./videoPlayer";

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

    return (
        <>
            <div key={questions.id} className="questionModal">
                <div className="modalGrid">
                    <div className="modal-video">
                        <VideoPlayer url={currentVid} />
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
