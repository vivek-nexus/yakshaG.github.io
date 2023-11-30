import Link from "next/link";

function NavBar() {
    return (
        <div className="bg-primary-50/70 backdrop-blur-md p-4 shadow-md sticky top-0 z-20 md:px-0 animate__animated animate__fadeIn">
            <div className="container flex gap-4 items-center">
                <div className="basis-auto cursor-pointer">
                    <Link href="/">
                        <img src="/images/face.svg" width={"48px"} alt="logo" />
                    </Link>
                </div>
                <div className="grow flex">
                    <div className="basis-auto text-lg font-semibold hover:decoration-primary-700 hover:text-primary-700 transition ease-in-out delay-800 underline underline-offset-8 decoration-transparent "><Link href="/">Vivek G</Link></div>
                </div>
                <div className="basis-auto font-semibold hover:decoration-primary-700 hover:text-primary-700 transition ease-in-out delay-800 underline underline-offset-8 decoration-transparent"><a href="/Resume_VivekG.pdf" target="_blank">Resume</a></div>
                <div className="basis-auto font-semibold hover:decoration-primary-700 hover:text-primary-700 transition ease-in-out delay-800 underline underline-offset-8 decoration-transparent"><Link href="/#contact">Contact</Link></div>
            </div>
        </div >
    )
}

export default NavBar;