import DesignProjectCard from "../components/DesignProjectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Design() {
    return (
        <>
            <NavBar />

            <div className="container pt-16 px-4 md:px-0">
                <div className="mb-24" id="contact">
                    <h2 className="text-4xl text-center text-primary-700 mb-6">Product designer, but mostly UXer 🧩</h2>
                    <p className="text-center">I work at <a className="underline underline-offset-4" href="https://setu.co">Setu</a>, off Bengaluru in India.</p>
                </div>

                <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                <div className="mb-24" id="contact">
                    <h2 className="text-4xl text-center text-primary-700 mb-6">Recent projects</h2>
                    <div className="flex flex-col gap-12">
                        <DesignProjectCard cardNumber={1} />
                        <DesignProjectCard cardNumber={2} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Design;