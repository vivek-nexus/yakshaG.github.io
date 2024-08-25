import contentCardData from "../constants/content-cards";
import { useInView } from 'react-intersection-observer';


function ContentCard(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })

    return (
        <>
            <a href={contentCardData[props.cardNumber - 1].link.linkURL} target="_blank" referrerPolicy="no-referrer" className="h-full">
                <div ref={ref} className={`flex flex-col justify-between ${props.bgColour == "primary" ? `bg-primary-100 hover:bg-primary-200/70` : `bg-secondary-100 hover:bg-secondary-200/70`} p-8 rounded-lg shadow hover:shadow-lg border-2 border-transparent transition duration-500 h-full ${inView && `animate__animated animate__zoomIn`} `}>
                    <div className="mb-8">
                        <p className="!text-4xl text-secondary-300 material-icons-round">{contentCardData[props.cardNumber - 1].cardIcon}</p>
                        <p className="font-bold">{contentCardData[props.cardNumber - 1].cardTitle}</p>
                    </div>
                    <p><a href={contentCardData[props.cardNumber - 1].link.linkURL} target="_blank" className="text-blue-500 font-bold">{contentCardData[props.cardNumber - 1].link.linkText} ↗</a></p>
                </div>
            </a>
        </>
    )

}

export default ContentCard;