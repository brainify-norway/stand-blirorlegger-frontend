import { useEffect, useRef, useState } from "react";

export default function Video({ url, src, isMuted }) {
    const refVideo = useRef(null);

    useEffect(() => {
        if (!refVideo.current) {
            return;
        }

        if (isMuted) {
            refVideo.current.muted = true;
        }

        refVideo.current.srcObject = src;
    }, [src]);

    return (
        <video
            className="soundVideo"
            key={url}
            style={{
                width: "100%",
                height: "500px"
            }}
            ref={refVideo}
            autoPlay
            loop
        >
            <source src={url} />
        </video>
    );
}
