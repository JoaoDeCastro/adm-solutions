import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Reviews from '@/components/sections/Reviews';
import Certification from '@/components/sections/Certification';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Certification />
      <Contact />
      {/* Other sections will be added here */}
    </Layout>
  );
}
