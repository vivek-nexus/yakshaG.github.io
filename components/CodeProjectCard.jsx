import Button from "./Button";
import { useInView } from 'react-intersection-observer';

function RepoDetails() {
    return (
        <div className="p-8 bg-primary-100">
            <h4 className="text-xl text-blue-500 font-bold border-b-2 border-white pb-2 mb-4">
                <a href="https://github.com/yakshaG/google-meet-slack-integration" target="_blank">
                    <img width="36px" className="inline stroke-blue-500" src="/images/github-blue.svg"></img>google-meet-slack-integration
                </a>
            </h4>
            <p className="mb-4">Real-time Google Meet status on Slack, just like Slack huddles</p>
            <p className="inline-block text-primary-700 font-bold bg-gray-200 rounded p-2 mb-4">["chrome-extension", "slack-app", "express-js"]</p>
            <Button type="secondary">Chrome store ↗</Button>
        </div>
    )
}



function CodeProjectCards(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })

    return (
        <>
            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12">
                <div>
                    <img className="" src="/images/demo.gif"></img>
                </div>
                <RepoDetails />
            </div >

            <div className="overflow-hidden rounded-xl shadow-designProjectCard flex flex-col-reverse md:flex-row">
                {/* <div className="basis-1/2"> */}
                <RepoDetails />
                {/* </div> */}
                <div ref={ref} className={`basis-1/2 ${inView && `animate__animated animate__delay-3s animate__headShake`} `}>
                    <iframe src="https://yakshag.github.io/listen/app" width="100%" height="480px" />
                </div>

            </div >
        </>
    )
}

export default CodeProjectCards;