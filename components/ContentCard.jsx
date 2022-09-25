import contentCardData from "../constants/content-cards";
import { useInView } from 'react-intersection-observer';


function ContentCard(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })

    return (
        <div ref={ref} className={`flex flex-col justify-between bg-primary-50 p-8 rounded-lg shadow-designProjectCard hover:shadow-2xl border-2 border-transparent hover:border-2 hover:border-gray-300 transition duration-500 ${inView && `animate__animated animate__zoomIn`} `}>
            <div className="mb-3">
                <p className="text-4xl text-primary-700 material-symbols-outlined">{contentCardData[props.cardNumber - 1].cardIcon}</p>
                <p className="font-bold">{contentCardData[props.cardNumber - 1].cardTitle}</p>
            </div>
            <p><a href={contentCardData[props.cardNumber - 1].link.linkURL} target="_blank" className="text-blue-500 font-bold">{contentCardData[props.cardNumber - 1].link.linkText} ↗</a></p>
        </div>
    )

}

export default ContentCard;