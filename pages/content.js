import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Link from "next/link";
import Head from "next/head";
import contentCardData from "../constants/content-cards";
import ContentCard from "../components/ContentCard";

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
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Read to understand, write to clarify</h2>
                        <p className="text-center">
                            <span className="text-2xl">📜</span> I love to write in English and translate most of them to Kannada
                        </p>
                    </div>


                    <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Technical writing</h2>
                        <p className="text-center">
                            I contribute to <a href="https://docs.setu.co" target="_blank" className="text-blue-500 font-bold">docs.setu.co</a> by writing integration guides and API documentation for various Setu products.
                        </p>
                    </div>

                    <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Free form writing</h2>
                        <div className="grid gap-4 grid-cols-4 md:grid-cols-3 sm-grid-cols-2">
                            {contentCardData.map((item) => (
                                <ContentCard key={item} cardNumber={item.cardNumber} />
                            ))}
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


            </div>
        </>
    )
}

export default Content;