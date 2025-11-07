import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ServicesPreview, WhyChooseUs, WorkShowcase, CtaSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <ServicesPreview />
        <WhyChooseUs />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
