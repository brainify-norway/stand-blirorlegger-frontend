import { useState } from "react";
import { Button } from "react-bootstrap";
import { GoMute, GoUnmute } from "react-icons/go";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url, muted, volume }) {
    const [muteBtn, setMutedBtn] = useState({
        muted: false
    });

    const [hasSound, setHasSound] = useState("false");

    const handleToggleMuted = (e) => {
        e.preventDefault();
        setHasSound(!hasSound);

        setMutedBtn({
            muted: !muteBtn
        });
    };

    const handleToggleSound = (e) => {
        e.preventDefault();
        setHasSound(hasSound);

        setMutedBtn({
            muted: muteBtn
        });
        console.log("test this");
    };

    const changeSound = () => {};

    return (
        <>
            <Button id="muted" className={hasSound ? "mute" : "sound"}>
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
                muted={() => (false ? handleToggleMuted : handleToggleSound)}
            ></ReactPlayer>
        </>
    );
}
