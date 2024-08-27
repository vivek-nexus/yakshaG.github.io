import Head from 'next/head'
import CharacterCard from "../components/CharacterCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Button from '../components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — Vivek</title>
        <meta name="description" content="I am a product designer because..." />
        <link rel="icon" href="/images/face-white-bg.png" />
      </Head>
      <NavBar />
      <div className="container bg-mobileHero sm:bg-desktopHero pt-8 px-4 md:px-0 animate__animated animate__fadeIn animate__slow">
        <div className="mb-24 p-4 md:px-0 grid grid-cols-3 gap-12 md:gap-24">
          <div className="col-span-4 sm:col-span-1 animate__animated animate__bounceInDown">
            <img src="/images/face-hero.svg" className="max-h-[30vmax]" alt="line art avatar" />
          </div>
          <div className="col-span-4 sm:col-span-2 md:pt-4 flex flex-col justify-center animate__animated animate__bounceInUp"
          >
            <h3 className={`font-bold pb-2 text-4xl text-primary-700 mb-2`} >
              I'm a product designer
            </h3>
            <p className={`text-2xl text-gray-500 mb-6`}>
              Because I blend craft, business and tech
            </p>

            <Link href="/design">
              <div>
                <Button type="primary">{"Take a look ->"}</Button>
              </div>
            </Link>
          </div>
        </div>
        <div className="animate__animated animate__delay-1s animate__bounceInUp">
          <h4 className="font-semibold text-2xl sm:text-center text-primary-700 mb-4">I'm more than a designer!</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <CharacterCard cardNumber={2} withButton />
            <CharacterCard cardNumber={3} withButton />
          </div>
        </div>

        <div className="mb-24 animate__animated animate__delay-1s animate__bounceInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <CharacterCard cardNumber={4} withButton />
            <CharacterCard cardNumber={5} withButton />
            <CharacterCard cardNumber={6} withButton />
            <CharacterCard cardNumber={7} />
            <CharacterCard cardNumber={8} />
            <CharacterCard cardNumber={9} />
          </div>
        </div>

        <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

        <div className="mb-24" id="contact">
          <h2 className="text-4xl text-center text-primary-700 mb-6">About me</h2>
          <p className="text-center">I work at <a className="underline underline-offset-4" href="https://setu.co" target="_blank">Setu</a>, off Bengaluru in India.</p>
          <p className="text-center">Setu is a fintech API infrastructure company, now part of Pine Labs.</p>
        </div>

        <div className="mx-auto mb-6 p-2 bg-primary-700 w-2 rounded"></div>

        <div className="mb-24" id="contact">
          <h2 className="text-4xl text-center text-primary-700 mb-6">What say?</h2>
          <div className="flex gap-4 justify-center text-center mb-4">
            <a href="mailto:vivek@vivek.nexus">
              <img src="/images/email.svg" alt="email" width={48}></img>
              <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/vivek-nexus/" target="_blank">
              <img className="mx-auto" src="/images/linkedin.svg" alt="linkedin" width={48}></img>
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/vivek-nexus" target="_blank">
              <img src="/images/github.svg" alt="github" width={48}></img>
              <p>Github</p>
            </a>
          </div>
        </div>
      </div >
      <Footer />
    </>

  )
}
