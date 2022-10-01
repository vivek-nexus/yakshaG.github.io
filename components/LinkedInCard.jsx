import linkedInPostData from "../constants/linkedin-posts";
import { useInView } from 'react-intersection-observer';


function LinkedInCard(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })

    return (
        <iframe ref={ref} src={linkedInPostData[props.number - 1].url} className={`w-full h-[${props.height}] shadow-2xl rounded-xl overflow-clip border border-gray-300 ${inView && `animate__animated animate__bounceIn`}`} />
    )
}

export default LinkedInCard;