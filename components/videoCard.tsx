import { useState } from 'react';
import QuestionModal from './questionModal';
import Video from './video';

type Props = {
    item: any;
};

export default function VideoCard({ item }: Props) {
    const [mute, setMute] = useState(true);
    const [playing, setPlaying] = useState(true);
    const [currentVid, setCurrentVid] = useState(
        item.acf.featuredVideo.mediaItemUrl
    );

    return (
        <>
            <div key={item.id} className={'video-card ' + item.slug}>
                <div className="video-box">
                    <Video
                        url={currentVid}
                        mute={mute}
                        setMute={setMute}
                        loop={
                            currentVid === item.acf.featuredVideo.mediaItemUrl
                        }
                        currentVid={currentVid}
                        setCurrentVid={setCurrentVid}
                        featured={item.acf.featuredVideo.mediaItemUrl}
                        playing={playing}
                        setPlaying={setPlaying}
                    />
                    <div className="hide-video-line"></div>
                </div>
                <QuestionModal
                    questions={item.videos.questions}
                    setCurrentVid={setCurrentVid}
                    setMute={setMute}
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
