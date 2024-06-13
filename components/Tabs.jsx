import { useState } from "react";


function Tabs({ type, count }) {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="py-2 mb-4 flex justify-center items-center rounded-b-lg sticky top-[80px] bg-white/70 backdrop-blur-md z-20">
                {[...Array(count)].map((item, i) =>
                    <Tab
                        type={type}
                        number={i + 1}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                )}
            </div>
            <div key={activeTab} className="mb-12">
                <img className="mx-auto w-auto max-h-[60vh] animate__animated animate__zoomIn rounded-lg shadow-designProjectCard hover:grayscale duration-500" src={`/images/${type}/${activeTab}.jpg`} />
            </div>
        </>
    )
}

export default Tabs;




function Tab({ type, number, activeTab, setActiveTab }) {
    return (
        <div
            className={`px-0.5 font-bold cursor-pointer rounded-md`}
            onClick={() => { setActiveTab(number) }}
        >
            <div
                className={`p-1 mr-2 rounded-md transition-colors delay-100 duration-500 shadow-designProjectCard w-10 h-10 border-[3px] ${(number == activeTab) ? `border-primary-700` : `border-primary-50`}`}
                style={{
                    backgroundImage: `url(${`/images/${type}/${number}.jpg`})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
            </div>
        </div >)
}
