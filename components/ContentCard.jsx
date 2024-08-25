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
                <div
                    ref={ref}
                    className={`flex flex-col justify-between p-8 rounded-lg shadow hover:shadow-lg transition duration-500 h-full border-2 border-primary-100 bg-primary-50 ${inView && `animate__animated animate__zoomIn`} `}
                // style={{ background: "radial-gradient(100% 100% at 0% 0%, #fde6e2 40%, #b2dfdb 100%" }}
                >
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