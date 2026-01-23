import { HeroSection } from '../components/landing/HeroSection'
import { PowerSection } from '../components/landing/PowerSection'
import { BoostSection } from '../components/landing/BoostSection'
import { FeaturesSection } from '../components/landing/FeaturesSection'
import { OfferSection } from '../components/landing/OfferSection'
import { AllianceSection } from '../components/landing/AllianceSection'
import { ComparisonSection } from '../components/landing/ComparisonSection'
import { Footer } from '../components/layout/Footer'

export function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PowerSection />
      <BoostSection />
      <FeaturesSection />
      <OfferSection />
      <AllianceSection />
      <ComparisonSection />
      <Footer />
    </div>
  )
}





