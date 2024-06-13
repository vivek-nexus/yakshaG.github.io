import DesignProjectCard from "../components/DesignProjectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import projectCardData from "../constants/project-cards";
import Button from "../components/Button";
import Link from "next/link";
import Head from "next/head";

function Design() {
    return (
        <>
            <Head>
                <title>Design — Vivek</title>
                <meta name="description" content="I am a product designer because..." />
                <link rel="icon" href="/images/face-white-bg.png" />
            </Head>

            <div className="animate__animated animate__fadeIn">

                <NavBar />

                <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                <div className="container px-4 md:px-0">
                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Design generalist consciously, <br />UXer sub-consciously</h2>
                        <p className="text-center">
                            🤥 "I am the user's saviour" is mostly a lie that designers tell themselves<br />
                            🎭 Design intentionally. Then test, test, test.
                        </p>
                    </div>

                    <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Recent work</h2>
                        <div className="flex flex-col gap-12 mb-4">
                            {/* {projectCardData.map((item, i) => (<DesignProjectCard key={i} cardNumber={item.cardNumber} />))} */}
                            <DesignProjectCard cardNumber={1} />
                            <DesignProjectCard cardNumber={2} />
                            {/* <DesignProjectCard cardNumber={3} /> */}
                        </div>
                        <p className="text-center"><a href="https://vivek-nexus.medium.com/" target="_blank" className="text-blue-500 font-bold">See more ↗</a></p>
                    </div>

                    <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Community and open source</h2>
                        <div className="flex flex-col gap-12">
                            <DesignProjectCard cardNumber={3} />
                            <DesignProjectCard cardNumber={4} />
                        </div>
                    </div>

                    <div className="mb-24">
                        <div className="flex justify-between items-center">
                            <Link href="/"><a><Button type="secondary"><span className="material-symbols-outlined mr-1">home</span></Button></a></Link>
                            <Link href="/code"><a><Button type="primary">Code -&gt;</Button></a></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default Design;