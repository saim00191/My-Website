
import Link from "next/link"
import Hero from "../app/hero/page"
import About from "../app/about/page"
import Skills from "../app/skills/page"
import Services from "../app/services/page"
import Contact from "../app/contact/page"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <Skills />
      <Contact/>

    </div>
  )
}