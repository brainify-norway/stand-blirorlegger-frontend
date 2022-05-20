import { Carousel, Container } from "react-bootstrap";
import VideoCard from "../components/videoCard";
import VideoCardMobile from "../components/videoCardMobile";

const Layout = ({ data, ambassadorer }) => {

    return (
        <>
        {/* Video carousel for mobile version */}
            <Carousel interval={null} >
                <Carousel.Item>
                    <div className="card-grid container">
                        <VideoCardMobile
                            key={ambassadorer[0].node.id}
                            item={ambassadorer[0].node}

                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-grid container">
                        <VideoCardMobile
                            key={ambassadorer[1].node.id}
                            item={ambassadorer[1].node}
                        />
                        
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card-grid container">
                        <VideoCardMobile
                            key={ambassadorer[2].node.id}
                            item={ambassadorer[2].node}
                        />
                    
                    </div>
                </Carousel.Item>
            </Carousel>



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
