import Header from '../components/header'
import HeroSection from "../components/hero-section"
import VisionSection from "../components/vision-section"
import CollectionsSection from "../components/collections-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VisionSection />
      <CollectionsSection />
    </main>
  )
}