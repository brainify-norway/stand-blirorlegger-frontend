import { Container } from "react-bootstrap";
import VideoCard from "../components/videoCard";

const Layout = ({data, ambassadorer}) => {
    return (
        <>
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
