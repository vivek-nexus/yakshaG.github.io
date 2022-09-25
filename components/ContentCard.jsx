import contentCardData from "../constants/content-cards";

function ContentCard(props) {
    return (
        <div className="flex flex-col justify-between bg-primary-50 p-8 rounded-lg shadow-designProjectCard animate__animated animate__bounceIn">
            <div className="mb-3">
                <p className="text-4xl text-primary-700 material-symbols-outlined">{contentCardData[props.cardNumber - 1].cardIcon}</p>
                <p className="font-bold">{contentCardData[props.cardNumber - 1].cardTitle}</p>
            </div>
            <p><a href={contentCardData[props.cardNumber - 1].link.linkURL} target="_blank" className="text-blue-500 font-bold">{contentCardData[props.cardNumber - 1].link.linkText} ↗</a></p>
        </div>
    )

}

export default ContentCard;