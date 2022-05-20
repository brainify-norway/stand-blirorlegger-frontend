import { Carousel, Container } from "react-bootstrap";
import VideoCard from "../components/videoCard";
import VideoCardMobile from "../components/videoCardMobile";
import {CgChevronLeft, CgChevronRight} from "react-icons/cg";
import { useState } from "react";

const Layout = ({ data, ambassadorer }) => {

    // function for mobile slider here
    const [current, setCurrent] = useState(0);
    const length = ambassadorer.length;

    const nextSlide =() => {
        setCurrent(current === lenght - 1 ? 0 : current + 1);
    };

    const prevSlide =() => {
        setCurrent(current === lenght - 1 ? 0 : current - 1);
    }


    return (
        <>
        {/* Video carousel for mobile version */}
            <section className="slider">
                <CgChevronLeft className="left-arrow" onClick={prevSlide}/>
                <CgChevronRight className="right-arrow" onClick={nextSlide}/>

                <div className="card-slider">
                    <div className="card-grid container">
                        <VideoCardMobile
                            key={ambassadorer[0].node.id}
                            item={ambassadorer[0].node}

                        />
                    </div>
                </div>
                <div className="card-slider">
                    <div className="card-grid container">
                        <VideoCardMobile
                            key={ambassadorer[1].node.id}
                            item={ambassadorer[1].node}
                        />
                        
                    </div>
                </div>
                <div className="card-slider">
                    <div className="card-grid container">
                        <VideoCardMobile
                            key={ambassadorer[2].node.id}
                            item={ambassadorer[2].node}
                        />
                    
                    </div>
                </div>
            </section>



            <div className="__inner bg">
                <div className="card-grid container">
                    {ambassadorer.map(({ node }) => {
                        return <VideoCard key={node.id} item={node} />;
                    })}
                </div>
            </div>

            <Container>
                <h2>{data.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.content
                    }}
                />
                <p>{data.eventTitle}</p>
                {data.events.map((i) => {
                    return (
                        <p key={i.event} className="eventItem">
                            {i.event}
                        </p>
                    );
                })}
            </Container>
        </>
    );
};

export default Layout;
