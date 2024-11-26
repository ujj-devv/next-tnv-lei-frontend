import AboutUs from '@/components/pages/Home/AboutUs/AboutUs'
import AvailableCertifications from '@/components/pages/Home/AvailableCertfications/AvailableCertifications'
import HeroSection from '@/components/pages/Home/HeroSection/HeroSection'
import LEIBenefitsOverview from '@/components/pages/Home/LeiBenefitsOverview/LeiBenefitsOverview'
import ServiceOverview from '@/components/pages/Home/ServiceOverview/ServiceOverview'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection/>
      <ServiceOverview/>
      <LEIBenefitsOverview/>
      <AboutUs/>
      <AvailableCertifications/>
    </>
  )
}

export default page
