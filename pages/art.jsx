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
                <title>Code — Vivek</title>
                <meta name="description" content="I am a product designer because..." />
                <link rel="icon" href="/images/face-white-bg.png" />
            </Head>

            <div className="animate__animated animate__fadeIn scroll-auto">

                <NavBar />

                <div className="container px-4 md:px-0">


                    <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Mostly fine arts, trying digital art too</h2>
                        <p className="text-center">
                            <span className="text-2xl">🎨</span> Someone help me choose from a digital palette of 16 million colours!
                        </p>
                    </div>

                    <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Fine arts</h2>
                        <Tabs />
                    </div>

                    <div className="mb-24">
                        <div className="flex justify-between items-center">
                            <Link href="/content"><a><Button type="primary">&lt;- Content</Button></a></Link>
                            <Link href="/"><a><Button type="secondary"><span className="material-symbols-outlined mr-1">home</span></Button></a></Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Content;