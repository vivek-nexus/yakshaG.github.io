import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Link from "next/link";
import Head from "next/head";
import Tabs from "../components/Tabs";

function Content() {

    return (
        <>
            <Head>
                <title>Art — Vivek</title>
                <meta name="description" content="I am a product designer because..." />
                <link rel="icon" href="/images/face-white-bg.png" />
            </Head>

            <div className="animate__animated animate__fadeIn scroll-auto">

                <NavBar />

                <div className="container px-4 md:px-0">
                    <div className="mt-16 mb-24">
                        <img src="/images/art-grid.png" alt="a bento grid of 6 images" />
                    </div>

                    <div className="mb-24">
                        <div className="flex justify-between items-center">
                            <Link href="/content"><a><Button type="primary">&lt;- Content</Button></a></Link>
                            <Link href="/"><a><Button type="secondary"><span className="material-icons-round mr-1">home</span></Button></a></Link>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Content;