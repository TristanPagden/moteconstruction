
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Jobs from "@/components/Jobs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <img src='/1.jpg' alt='1'></img>
      <About/>
      <Jobs/>
      <Contact/>
      <Footer/>
    </>
    )
}
