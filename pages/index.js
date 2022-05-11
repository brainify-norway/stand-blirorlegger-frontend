import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import Layout from "../components/Layout";
import { getAmbassadorer } from "../lib/api";
import VideoCard from "../components/videoCard";
import { Container } from "react-bootstrap";

export default function Home({ ambassadorer }) {
    console.log(ambassadorer);
    return (
        <>
            <div>
                <Head>
                    <title>Stand Bli rørlegger</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <NavMenu />

            <div className="__inner bg">
                <div className="card-grid container">
                    {ambassadorer.map(({ node }) => {
                        return <VideoCard key={node.id} item={node} />;
                    })}
                </div>
                <div>my text here again</div>
            </div>

            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const ambassadorer = await getAmbassadorer();

    return {
        props: {
            ambassadorer
        }
    };
}
