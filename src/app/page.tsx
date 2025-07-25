import Header from '../components/header'
import HeroSection from "../components/hero-section"
import VisionSection from "../components/vision-section"
import CollectionsSection from "../components/collections-section"
import NewsSection from "../components/news-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VisionSection />
      <CollectionsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}