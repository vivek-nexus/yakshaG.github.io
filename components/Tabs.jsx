
function Tab(props) {
    return (
        <div
            className={`px-2 mx-2 font-bold cursor-pointer ${(props.number == props.activeTab) && ``}`}
            onClick={() => { props.setActiveTab(props.number) }}
        >

            {props.number == 1 ? `Design` : `Everything else`}
            <div className={`mt-4 h-1 rounded-t-full transition-colors duration-300  ${(props.number == props.activeTab) ? `bg-primary-700` : `bg-transparent`}`}></div>
        </div >)
}




function Tabs(props) {

    return (
        <div className="pt-4 mb-4 flex items-end justify-center rounded-b-lg border-b border-gray-300 sticky top-[80px] bg-white backdrop-blur-sm z-20 shadow-md">
            <Tab
                number={1}
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <Tab
                number={2}
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </div>
    )
}

export default Tabs;