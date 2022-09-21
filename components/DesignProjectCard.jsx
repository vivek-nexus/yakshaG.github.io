import Button from "./Button";
import Pill from "./Pill";
import { useInView } from 'react-intersection-observer';
import projectCardData from "../constants/project-cards";

function LeftCard(props) {
    return (
        <div
            className={`rounded-lg shadow-designProjectCard 
            ${props.className}  
            ${props.desktop ? (props.inView ? `animate__animated animate__fadeInLeft` : ``) : (props.inView ? `animate__animated animate__fadeInUp` : ``)} `}
        >
            <img src={`/images/${props.projectImage}`} className="rounded-lg"></img>
            <h5 className="text-lg font-bold text-center rounded-b-lg py-4 px-8 md:px-6 -mt-8 bg-primary-100/70 backdrop-blur-sm" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px -4px 4px" }}>{props.projectTitle}</h5>
        </div>)
}

function Pin1(props) {
    return (
        <div
            className={`md:absolute ml-12 -my-4 z-10 md:top-1/3 md:left-1/2 md:-m-4 w-2 md:w-8 py-4 md:py-1 bg-primary-200 rounded-full shadow-md 
            ${props.className}
            ${props.desktop ? (props.inView ? `animate__animated animate__rotateIn` : ``) : (props.inView ? `animate__animated animate__fadeInUp` : ``)}`}
        >
        </div>)
}

function Pin2(props) {
    return (
        <div
            className={`md:absolute ml-auto mr-12 -my-4 z-10 md:top-2/3 md:left-1/2 md:-m-4 w-2 md:w-8 py-4 md:py-1 bg-primary-200 rounded-full shadow-md
            ${props.className} 
            ${props.desktop ? (props.inView ? `animate__animated animate__rotateIn` : ``) : (props.inView ? `animate__animated animate__fadeInUp` : ``)}`}
        >
        </div>)
}

function RightCard(props) {
    return (
        <div
            className={`bg-white rounded-lg shadow-designProjectCard p-8 md:p-12 border border-gray-200 
            ${props.className} 
            ${props.desktop ? (props.inView ? `animate__animated animate__fadeInRight` : ``) : (props.inView ? `animate__animated animate__fadeInUp` : ``)}`}
        >
            <p className="mb-4">{props.projectDescription}</p>
            <div className="mb-6">
                {props.tags.map((item, i) => (<Pill key={i} accent="text-primary-700" bg="bg-primary-50">{item}</Pill>))}
            </div>
            {props.buttons.map((item, i) => (<a key={i} href={item.buttonLink} target="_blank"><Button type="secondary">{item.buttonText}</Button></a>))}

        </div>)
}


function DesignProjectCard(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })

    return (
        <div ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 relative">
                <LeftCard
                    inView={inView}
                    projectImage={projectCardData[props.cardNumber - 1].projectImage}
                    projectTitle={projectCardData[props.cardNumber - 1].projectTitle}
                    desktop
                    className="hidden md:block"
                />
                <LeftCard
                    inView={inView}
                    projectImage={projectCardData[props.cardNumber - 1].projectImage}
                    projectTitle={projectCardData[props.cardNumber - 1].projectTitle}
                    mobile
                    className="block md:hidden"
                />

                <Pin1 inView={inView} desktop className="hidden md:block" />
                <Pin1 inView={inView} mobile className="block md:hidden" />
                <Pin2 inView={inView} desktop className="hidden md:block" />
                <Pin2 inView={inView} mobile className="block md:hidden" />

                <RightCard
                    inView={inView}
                    projectDescription={projectCardData[props.cardNumber - 1].projectDescription}
                    tags={projectCardData[props.cardNumber - 1].tags}
                    buttons={projectCardData[props.cardNumber - 1].buttons}
                    desktop
                    className="hidden md:block"
                />
                <RightCard
                    inView={inView}
                    projectDescription={projectCardData[props.cardNumber - 1].projectDescription}
                    tags={projectCardData[props.cardNumber - 1].tags}
                    buttons={projectCardData[props.cardNumber - 1].buttons}
                    mobile
                    className="block md:hidden"
                />
            </div>
        </div>
    )
}

export default DesignProjectCard;