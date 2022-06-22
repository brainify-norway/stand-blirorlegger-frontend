import { useState } from "react";
import { Button } from "react-bootstrap";
import { GoMute, GoUnmute } from "react-icons/go";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url, muted, volume }) {
    const [muteBtn, setMutedBtn] = useState({
        muted: !muted
    });

    const [hasSound, setHasSound] = useState("false");

    const handleToggleMuted = (e) => {
        e.preventDefault();
        setMutedBtn({
            muted: !muteBtn
        });
    };

    const handleToggleSound = (e) => {
        setMutedBtn({
            muted: muteBtn
        });
        console.log("test this");
    };

    const changeSound = () => {
        setHasSound((hasSound) => !hasSound);
        setMutedBtn((MuteBtn) => !MuteBtn);
    };

    return (
        <>
            <Button
                id="muted"
                className={hasSound ? "mute" : "sound"}
                onClick={changeSound}
            >
                <GoMute className="mute-button" onClick={handleToggleMuted} />
                <GoUnmute
                    className="sound-button"
                    onClick={handleToggleSound}
                />
            </Button>

            <ReactPlayer
                className="soundVideo"
                key={url}
                style={{
                    width: "100%",
                    height: "500px"
                }}
                autoPlay
                loop
                url={url}
                playing={true}
                volume={volume}
                muted={() => {
                    changeSound;
                }}
            ></ReactPlayer>
        </>
    );
}
