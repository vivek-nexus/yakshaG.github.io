import Button from "./Button";
import Pill from "./Pill";
import { useInView } from 'react-intersection-observer';
import projectCardData from "../constants/project-cards";
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from "react";


function DesignProjectCard(props) {
    const [isClient, setIsClient] = useState(false)

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px",
    })

    const temp = projectCardData[props.cardNumber - 1]

    // to prevent hydration error
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        isClient
            ? <div ref={ref}>
                <style jsx>{`
                .card-${props.cardNumber}{
                    background-repeat: no-repeat;
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 60%, rgba(255, 255, 255, 0.2)100%),url("/images/${temp.projectImage}");
                    background-size: contain;
                    background-position: bottom;
                    

                    @media only screen and (min-width: 840px) {
                        background: radial-gradient(120% 240% at 5% 10%, #FFFFFF 0%, #FFFFFF 30%, rgba(255, 255, 255, 0) 100%),url("/images/${temp.projectImage}");
                        background-size: cover;
                        background-position: right;
                    }
                }`}
                </style>
                <div className={`${inView ? "animate__animated animate__fadeIn animate__slow" : ""} card-${props.cardNumber} grid grid-cols-2 p-8 md:p-12 rounded-lg shadow-innerShadow md:aspect-video`}>
                    <div className={`col-span-2 md:col-span-1 flex flex-col h-full`}>
                        <div className="flex-grow">
                            <h4 className="text-xl md:text-2xl font-bold text-primary-700 mb-6">
                                {temp.projectTitle}
                            </h4>
                            <div className="mb-6 flex gap-2 flex-wrap hide-scrollbar">
                                {temp.tags.map((item, i) => (<Pill key={i} accent="text-secondary-300" bg="bg-secondary-50">{item}</Pill>))}
                            </div>
                            <p className="mb-6">{ReactHtmlParser(temp.projectDescription)}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {temp.buttons.map((item, i) => (<div className="shrink-0 mb-1" key={i}><a href={item.buttonLink} target="_blank"><Button type={i == 0 ? `primary` : `secondary`}>{ReactHtmlParser(item.buttonText)}</Button></a></div>))}
                        </div>
                    </div>
                </div>
            </div>
            : <div></div>
    )
}

export default DesignProjectCard;

