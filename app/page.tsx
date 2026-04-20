import Hero from './components/Hero';
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
import WhyChooseUs from './components/WhyChooseUs'
import Lab from './components/Lab'
// import FAQ from './components/FAQ'
import ContactMap from './components/ContactMap'


export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <WhyChooseUs />
        <Lab />
        {/* <FAQ /> */}
        <ContactMap />
    </>
  );
}