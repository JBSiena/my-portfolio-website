import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'
import { Testimonials } from './sections/Testimonials'

function App() {
  return (
    <div className="text-white/90">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
