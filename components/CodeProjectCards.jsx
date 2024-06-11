import Button from "./Button";
import { useInView } from 'react-intersection-observer';
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from "react";


function RepoDetails(props) {
    return (
        <div className={`${props.className} p-8 bg-primary-100`}>
            <h4 className="text-xl text-blue-500 font-bold pb-2 mb-4">
                <a href={props.repoURL} target="_blank" className="flex items-center underline underline-offset-4">
                    <img width="36px" className="inline stroke-blue-500" src="/images/github-blue.svg"></img>{props.repoTitle}
                </a>
            </h4>
            <p className="mb-4">{ReactHtmlParser(props.repoDescription)}</p>
            <p style={{ fontFamily: "'Courier Prime', monospace" }} className="inline-block text-primary-700 bg-gray-200 rounded p-2 mb-4">{props.repoTags}</p>
            {props.repoButtons.map((item) => (
                <a key={item} href={item.buttonLink} target="_blank"><Button type="primary">{item.buttonText}</Button></a>)
            )}

        </div>
    )
}


function CodeProjectCards(props) {
    const [ref1, inView1] = useInView({
        // triggerOnce: true,
        rootMargin: '0px 0px',
        threshold: 0.2,
    })

    const [ref2, inView2] = useInView({
        // triggerOnce: true,
        rootMargin: '0px 0px',
        threshold: 0.2,
    })

    const [inView1Delayed, setInView1Delayed] = useState(false);
    const [inView2Delayed, setInView2Delayed] = useState(false);

    useEffect(() => {
        let timeOut1;
        if (inView1 == true) {
            timeOut1 = setTimeout(() => {
                setInView1Delayed(true);
            }, 3000);
        }
        else {
            return () => {
                clearTimeout(timeOut1)
                setInView1Delayed(false);
            }
        }
    }, [inView1])

    useEffect(() => {
        let timeOut2;
        if (inView2 == true) {
            timeOut2 = setTimeout(() => {
                setInView2Delayed(true);
            }, 3000);
        }
        else {
            return () => {
                clearTimeout(timeOut2)
                setInView2Delayed(false);
            }
        }
    }, [inView2])

    return (
        <>
            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12 flex flex-col-reverse md:flex-row">
                <RepoDetails
                    className="basis-1/2"
                    repoTitle="listen"
                    repoURL="https://github.com/vivek-nexus/listen"
                    repoDescription="A web app that speaks words, sentences or even long articles — in a music player like interface"
                    repoTags='{text-to-speech} {PWA} {next.js}'
                    repoButtons={
                        [{ "buttonText": "Open in a new tab ↗", "buttonLink": "https://vivek-nexus.github.io/listen/app" }]
                    }
                />
                <div ref={ref1} className="basis-1/2">
                    <div className={`h-[680px] ${inView1Delayed ? `hidden mx-auto text-center animate__animated animate__bounceOut` : `block`}`}>
                        <div className="flex flex-col items-center">
                            <img className="w-24 ml-6" src="/images/loader.svg" />
                            <p>Loading live web app..</p>
                        </div>
                    </div>
                    <iframe className={`${inView1Delayed ? `block animate__animated animate__bounceIn` : `hidden`} `} src="https://vivek-nexus.github.io/listen/app" width="100%" height="680px" />
                </div>
            </div >


            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12">
                <div>
                    <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/XtJR7ox_WH4?si=04FphiCuZw5yvj5j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <RepoDetails
                    repoTitle="google-meet-slack-integration"
                    repoURL="https://github.com/vivek-nexus/google-meet-slack-integration"
                    repoDescription="Real-time Google Meet status on Slack, just like Slack huddles. <b>300+ users</b> world wide and growing 🚀"
                    repoTags='{chrome-extension} {slack-app} {express.js}'
                    repoButtons={
                        [{ "buttonText": "Get from Chrome store ↗", "buttonLink": "https://chrome.google.com/webstore/detail/kddjlbegfaiogihndmglihcgommbjmkc" }]
                    }
                />
            </div >

            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12">
                <div className="basis-1/2">
                    <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/dCxEe3uwRU8?si=Cq4DZm209bYvY-Mt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <RepoDetails
                    className="basis-1/2"
                    repoTitle="slack-on-keys"
                    repoURL="https://github.com/vivek-nexus/slack-on-keys"
                    repoDescription="⚡ Control your Slack from any app window with keyboard shortcuts ⚡ Set up custom keyboard shortcuts for various Slack actions"
                    repoTags='{electron.js} {cross-platform-desktop-app} {slack-app}'
                    repoButtons={
                        [{ "buttonText": "Download desktop app ↗", "buttonLink": "https://github.com/vivek-nexus/slack-on-keys#slack-on-keys" }]
                    }
                />
            </div >

            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12">
                <div className="basis-1/2">
                    <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/ARL6HbkakX4?si=-S5rnvLyOhmZ6gH9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <RepoDetails
                    className="basis-1/2"
                    repoTitle="transcriptonic"
                    repoURL="https://github.com/vivek-nexus/transcriptonic"
                    repoDescription="Simple Google Meet transcripts. Private and open source. Growing at ~5 downloads per day."
                    repoTags='{chrome-extension} {vanilla-js}'
                    repoButtons={
                        [{ "buttonText": "Get from Chrome store ↗", "buttonLink": "https://chromewebstore.google.com/detail/ciepnfnceimjehngolkijpnbappkkiag" }]
                    }
                />
            </div >


            {/* <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-6">
                <div ref={ref2} className="basis-1/2">
                    <div className={`h-[480px] ${inView2Delayed ? `hidden mx-auto text-center animate__animated animate__bounceOut` : `block`}`}>
                        <div className="flex flex-col items-center">
                            <img className="w-24 ml-6" src="/images/loader.svg" />
                            <p>Loading live site..</p>
                        </div>
                    </div>
                    <iframe className={`${inView2Delayed ? `block animate__animated animate__bounceIn` : `hidden`} `} src="https://vivek-nexus.github.io/project-pratima/icons" width="100%" height="480px" />
                </div>
                <RepoDetails
                    className="basis-1/2"
                    repoTitle="project-pratima"
                    repoURL="https://github.com/vivek-nexus/project-pratima"
                    repoDescription="Official website of Project Pratima, showcasing payment icons and usage documentation"
                    repoTags='{next.js} {framer motion} {tailwind CSS}'
                    repoButtons={
                        [{ "buttonText": "Open in a new tab ↗", "buttonLink": "https://paymentscouncil.in/project-pratima/" }]
                    }
                />
            </div > */}


        </>
    )
}

export default CodeProjectCards;