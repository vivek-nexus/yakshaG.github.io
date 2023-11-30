import { useState } from "react";

function Tab(props) {
    return (
        <div
            className={`px-0.5 font-bold cursor-pointer rounded-md`}
            onClick={() => { props.setActiveTab(props.number) }}
        >
            <div className={`p-1 rounded-lg transition-colors delay-100 duration-500 ${(props.number == props.activeTab) ? `bg-primary-700` : `bg-transparent`}`}>
                <img className="rounded-md" src={`/images/art${props.number}.jpg`} width="36px" />
            </div>
        </div >)
}




function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="py-2 mb-4 flex justify-center items-center rounded-b-lg sticky top-[80px] bg-white/70 backdrop-blur-md z-20">
                <Tab
                    number={1}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Tab
                    number={2}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Tab
                    number={3}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Tab
                    number={4}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Tab
                    number={5}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <Tab
                    number={6}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
            <div key={activeTab} className="mb-12 mx-auto w-full md:w-1/2">
                <img className="animate__animated animate__zoomIn rounded-lg shadow-designProjectCard hover:grayscale duration-500" src={`/images/art${activeTab}.jpg`} />
            </div>
        </>
    )
}

export default Tabs;