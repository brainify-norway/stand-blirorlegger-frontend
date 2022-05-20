import { Carousel, Container } from "react-bootstrap";
import VideoCard from "../components/videoCard";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { useState } from "react";

const Layout = ({ data, ambassadorer }) => {
    // function for mobile slider here
    const [current, setCurrent] = useState(0);
    const length = ambassadorer.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    // console.log(current);

    return (
        <>
            {/* Video carousel for mobile version */}
            <section className="slider">
                <div className="left-arrow">
                <CgChevronLeft className="left-icon" onClick={prevSlide} />
                </div>
                <div className="right-arrow">
                <CgChevronRight className="right-icon" onClick={nextSlide} />
                </div>

                <div className="card-grid container">
                    {ambassadorer.map(({ node }, index ) => {
                        return (
                            <div className={index === current ? 'slide active': 'slide'} key={index}>
                                {index === current && (<VideoCard key={node.id} item={node} />)}
                                
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className="__inner bg">
                <div className="card-grid container">
                    {ambassadorer.map(({ node }) => {
                        return <VideoCard key={node.id} item={node} />;
                    })}
                </div>
            </div>

            <Container className="info">
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
