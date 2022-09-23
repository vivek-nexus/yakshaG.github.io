import DesignProjectCard from "../components/DesignProjectCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import projectCardData from "../constants/project-cards";

function Design() {
    return (
        <div className="animate__animated animate__fadeIn">
            <NavBar />

            <div className="mx-auto mb-6 p-2 mt-16 bg-primary-700 w-2 rounded"></div>

            <div className="container px-4 md:px-0">
                <div className="mb-24">
                    <h2 className="text-4xl text-center text-primary-700 mb-6">Design generalist consciously, <br />UXer sub-consciously</h2>
                    <p className="text-center">
                        <span className="text-2xl">🎭</span> Design intentionally<br />
                        <span className="text-2xl">⚡️</span> UX of UX matters — advocate your designs<br />
                        <span className="text-2xl">👀</span> Test, test, test</p>
                </div>

                <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                <div className="mb-24">
                    <h2 className="text-4xl text-center text-primary-700 mb-6">Recent projects</h2>
                    <div className="flex flex-col gap-12">
                        {/* {projectCardData.map((item, i) => (<DesignProjectCard key={i} cardNumber={item.cardNumber} />))} */}
                        <DesignProjectCard cardNumber={1} />
                        <DesignProjectCard cardNumber={2} />
                    </div>
                </div>

                <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

                <div className="mb-24">
                    <h2 className="text-4xl text-center text-primary-700 mb-6">Community and open source</h2>
                    <div className="flex flex-col gap-12">
                        {/* {projectCardData.map((item, i) => (<DesignProjectCard key={i} cardNumber={item.cardNumber} />))} */}
                        <DesignProjectCard cardNumber={3} />
                        <DesignProjectCard cardNumber={4} />
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}

export default Design;