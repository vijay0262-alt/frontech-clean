import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ServicesSection from '@/components/home/ServicesSection'
import HowItWorks from '@/components/home/HowItWorks'
import ServiceInfo from "@/components/home/ServiceInfo"
import WhyUs from '@/components/home/WhyUs'
import PricingSection from '@/components/home/PricingSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import FaqSection from '@/components/home/FaqSection'
import CtaSection from '@/components/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <ServiceInfo />
      <div className="section-divider" />
      <WhyUs />
      <div className="section-divider" />
      <PricingSection />
      <div className="section-divider" />
      <ReviewsSection />
      <div className="section-divider" />
      <FaqSection />
      <div className="section-divider" />
      <CtaSection />
    </>
  )
}
