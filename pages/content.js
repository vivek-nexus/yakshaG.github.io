import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Link from "next/link";
import Head from "next/head";
import ContentCard from "../components/ContentCard";
import { useState } from "react";

function Content() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <Head>
                <title>Content — Vivek</title>
                <meta name="description" content="I am a product designer because..." />
                <link rel="icon" href="/images/face-white-bg.png" />
            </Head>

            <div className="animate__animated animate__fadeIn scroll-auto">

                <NavBar />

                <div className="container px-4 md:px-0">
                    {/* <div className="mx-auto mb-6 p-2 mt-16 bg-secondary-300 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Read to understand, write to clarify</h2>
                        <p className="text-center">
                            <span className="text-2xl">📜</span> I love to write in English and translate as much as possible to Kannada
                        </p>
                    </div> */}


                    <div className="mx-auto mb-6 p-2 mt-16 bg-secondary-300 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Technical writing</h2>
                        <p className="text-center">
                            I contribute to <a href="https://docs.setu.co" target="_blank" className="text-blue-500 font-bold">docs.setu.co</a> by writing integration guides and API documentation for various Setu products.
                        </p>
                    </div>

                    <div className="mx-auto mb-6 p-2 mt-16 bg-secondary-300 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Free form writing</h2>
                        {/* <Tabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        /> */}
                        <h4 className="text-2xl text-center text-primary-700 mb-6">In and around design</h4>
                        <div className="mb-12 mx-4 md:mx-32 grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <ContentCard cardNumber={4} />
                            <ContentCard cardNumber={5} />
                            <ContentCard cardNumber={6} />
                            <ContentCard cardNumber={7} />
                        </div>

                        <h4 className="text-2xl text-center text-primary-700 mb-6">Everything else</h4>
                        <div className="mb-12 mx-4 md:mx-32 grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <ContentCard cardNumber={1} />
                            <ContentCard cardNumber={2} />
                            <ContentCard cardNumber={3} />
                        </div>
                    </div>

                    <div className="mb-24">
                        <div className="flex justify-between items-center">
                            <Link href="/code"><a className="mr-auto"><Button type="secondary">&lt;- Code</Button></a></Link>
                            <Link href="/"><a className="mx-auto"><Button type="secondary">
                                <span className="material-symbols-outlined">home</span></Button></a>
                            </Link>
                            <Link href="/art"><a className="ml-auto break-none"><Button type="primary">Art -&gt;</Button></a></Link>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Content;