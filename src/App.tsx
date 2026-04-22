import Nav from './components/Nav'
import Hero from './components/Hero'
import Offer from './components/Offer'
import WhatYouGet from './components/WhatYouGet'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ApplyForm from './components/ApplyForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Offer />
        <WhatYouGet />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ApplyForm />
      </main>
      <Footer />
    </>
  )
}
