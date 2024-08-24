import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Link from "next/link";
import Head from "next/head";
import CodeProjectCards from "../components/CodeProjectCards";

function Design() {
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
                    {/* <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">An engineer at heart, <br /> front end dev in reality</h2>
                        <p className="text-center">
                            🌟 Build and break first, tutorials next<br />
                            😈 Not a big fan of DS and Algo, but hey, I'll get there!
                        </p>
                    </div> */}

                    <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

                    <div className="mb-24">
                        <h2 className="text-4xl text-center text-primary-700 mb-6">Current projects</h2>
                        <CodeProjectCards />
                        <p className="text-center"><a href="https://github.com/vivek-nexus" target="_blank" className="text-blue-500 font-bold">See more projects on Github ↗</a></p>
                    </div>

                    <div className="mb-24">
                        <div className="flex justify-between items-center">
                            <Link href="/design"><a className="mr-auto"><Button type="secondary">&lt;- Design</Button></a></Link>
                            <Link href="/"><a className="mx-auto"><Button type="secondary">
                                <span className="material-icons-round">home</span></Button></a>
                            </Link>
                            <Link href="/content"><a className="ml-auto break-none"><Button type="primary">Content -&gt;</Button></a></Link>
                        </div>
                    </div>



                </div>


                <Footer />
            </div >
        </>
    )
}

export default Design;