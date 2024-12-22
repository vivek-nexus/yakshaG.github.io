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
            <p style={{ fontFamily: "'Courier Prime', monospace" }} className="inline-block font-bold text-secondary-300 bg-gray-200 rounded p-2 mb-4">{props.repoTags}</p>
            {props.repoButtons.map((item) => (
                <a key={item} href={item.buttonLink} target="_blank"><Button type="primary">{item.buttonText}</Button></a>)
            )}

        </div>
    )
}


function CodeProjectCards(props) {
    const [ref, inView] = useInView({
        // triggerOnce: true,
        rootMargin: '0px 0px',
        threshold: 0.2,
    })

    const [inViewDelayed, setInViewDelayed] = useState(false);

    useEffect(() => {
        let timeOut1;
        if (inView == true) {
            timeOut1 = setTimeout(() => {
                setInViewDelayed(true);
            }, 3000);
        }
        else {
            return () => {
                clearTimeout(timeOut1)
                setInViewDelayed(false);
            }
        }
    }, [inView])

    return (
        <>
            <div ref={ref} className={`${inView ? "animate__animated animate__fadeIn animate__slow" : ""} rounded-xl shadow-designProjectCard overflow-clip mb-12 flex flex-col-reverse md:flex-row`}>
                <RepoDetails
                    className="basis-1/2"
                    repoTitle="listen"
                    repoURL="https://github.com/vivek-nexus/listen"
                    repoDescription="A world-class reading companion that speaks words, sentences or even long articles — in a music player like interface. <b>Integrated on production by an <a href='https://www.youtube.com/watch?v=PCONlyrCrw4' target='_blank' style='color: #3B82F6; font-weight:bold;'>Italian news website.</a></b>"
                    repoTags='{text-to-speech} {PWA} {next.js} {Web APIs}'
                    repoButtons={
                        [{ "buttonText": "Open in a new tab ↗", "buttonLink": "https://vivek-nexus.github.io/listen/app" }]
                    }
                />
                <div ref={ref} className="basis-1/2">
                    <div className={`h-[680px] ${inViewDelayed ? `hidden mx-auto text-center animate__animated animate__fadeOut` : `block`}`}>
                        <div className="flex flex-col items-center">
                            <img className="w-24 ml-6" src="/images/loader.svg" />
                            <p>Loading live web app..</p>
                        </div>
                    </div>
                    <iframe className={`${inViewDelayed ? `block animate__animated animate__fadeIn` : `hidden`} `} src="https://vivek-nexus.github.io/listen/app" width="100%" height="680px" />
                </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12">
                <div className="basis-1/2">
                    <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/ARL6HbkakX4?si=-S5rnvLyOhmZ6gH9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <RepoDetails
                    className="basis-1/2"
                    repoTitle="transcriptonic"
                    repoURL="https://github.com/vivek-nexus/transcriptonic"
                    repoDescription="Simple Google Meet transcripts. Private and open source. <b>1100+ users</b> and growing!"
                    repoTags='{chrome-extension} {vanilla-js}'
                    repoButtons={
                        [{ "buttonText": "Get from Chrome store ↗", "buttonLink": "https://chromewebstore.google.com/detail/ciepnfnceimjehngolkijpnbappkkiag" }]
                    }
                />
            </div >

            <div className="overflow-hidden rounded-xl shadow-designProjectCard mb-12">
                <div>
                    <iframe width="100%" className="aspect-video" src="https://www.youtube.com/embed/XtJR7ox_WH4?si=04FphiCuZw5yvj5j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <RepoDetails
                    repoTitle="google-meet-slack-integration"
                    repoURL="https://github.com/vivek-nexus/google-meet-slack-integration"
                    repoDescription="Real-time Google Meet status on Slack, just like Slack huddles."
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


        </>
    )
}

export default CodeProjectCards;