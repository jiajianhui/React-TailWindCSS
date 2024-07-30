import React from 'react'
import Header from '../widges/Header'
import Hero from '../widges/Hero'
import Solution from '../widges/Solution'
import HowItWorks from '../widges/HowItWorks'
import Clients from '../widges/Clients'
import Contact from '../widges/Contact'
import Footer from '../widges/Footer'

function Index() {
  return (
    <div className='container mx-auto p-4'>
        <Header></Header>
       
        <main>
            <section className='mt-20'>
             <Hero />
            </section>

            <section className='mt-20'>
                <Solution />
            </section>
        
            <section className='mt-20'>
                <HowItWorks />
            </section>
            
            <section className='mt-20 md:w-3/5 mx-auto'>
                <Clients />
            </section>

            <section className='mt-20'>
                <Contact />
            </section>
        
        </main>

        <Footer />
    </div>
  )
}

export default Index