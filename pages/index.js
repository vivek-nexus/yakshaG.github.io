import Head from 'next/head'
import CharacterCard from "../components/CharacterCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — Vivek</title>
        <meta name="description" content="I am a product designer because..." />
        <link rel="icon" href="/images/face-white-bg.png" />
      </Head>
      <NavBar />
      <div className="container pt-16 px-4 md:px-0">
        <div className="mb-4">
          <CharacterCard cardNumber={1} heroCard withButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <CharacterCard cardNumber={2} withButton />
          <CharacterCard cardNumber={3} withButton />
        </div>

        <div className="mb-24">
          <h4 className="text-2xl text-center text-primary-700 mb-4 animate__animated animate__delay-1s animate__bounceInUp">There's more!</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CharacterCard cardNumber={4} withButton />
            <CharacterCard cardNumber={5} withButton />
            <CharacterCard cardNumber={6} />
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
            <a href="mailto:in.vivek.g@gmail.com">
              <img src="/images/email.svg" alt="email" width={48}></img>
              <p>Email</p>
            </a>
            <a href="https://www.linkedin.com/in/vivek-g-india" target="_blank">
              <img className="mx-auto" src="/images/linkedin.svg" alt="linkedin" width={48}></img>
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/yakshaG" target="_blank">
              <img src="/images/github.svg" alt="github" width={48}></img>
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
