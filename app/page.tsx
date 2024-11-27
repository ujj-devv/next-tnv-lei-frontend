"use client"
import AboutUs from '@/components/pages/Home/AboutUs/AboutUs'
import AvailableCertifications from '@/components/pages/Home/AvailableCertfications/AvailableCertifications'
import FAQSection from '@/components/pages/Home/FaqSection/FaqSection'
import HeroSection from '@/components/pages/Home/HeroSection/HeroSection'
import LEIApplicationGuide from '@/components/pages/Home/LeiApplicationGuide/LeiApplicationGuide'
import LEIBenefitsOverview from '@/components/pages/Home/LeiBenefitsOverview/LeiBenefitsOverview'
import PricingSection from '@/components/pages/Home/PricingSection/PricingSection'
import ServiceOverview from '@/components/pages/Home/ServiceOverview/ServiceOverview'
import store from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return (
    <Provider store={store}>
      <HeroSection />
      <ServiceOverview />
      <LEIBenefitsOverview />
      <LEIApplicationGuide/>
      <AboutUs />
      <AvailableCertifications />
      <PricingSection/>
      <FAQSection />
    </Provider>
  )
}

export default page
