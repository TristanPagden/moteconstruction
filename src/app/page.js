
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Jobs from "@/components/Jobs"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <img src='/1.jpg'></img>
      <About/>
      <Jobs/>
    </>
    )
}
