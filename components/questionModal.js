import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export default function QuestionModal({
    questions,
    currentVid,
    setCurrentVid
}) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function setVid(url) {
        setCurrentVid(url);
        setOpen(!open);
    }

    return (
        <>
            <div className="openModal" onClick={handleClick}>
                <span className="text">Still meg et spørsmål</span>
            </div>

            {open && (
                <div className="questionModal">
                    <span className="button-wrapper">
                        <button className="close">
                            <IoMdCloseCircle onClick={handleClick} />
                        </button>
                    </span>
                    {questions.map((question) => {
                        return (
                            <div
                                key={question.question}
                                className="question-wrapper"
                            >
                                <span
                                    onClick={() => setVid(question.videoUrl)}
                                    className="question"
                                >
                                    {question.question}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
