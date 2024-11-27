
"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Faq from '@/components/pages/Faq/Faq'
import ComingSoon from '@/components/global/ComingSoon/CominSoon'
import Contact from '@/components/pages/Contact/Contact'
import Cdf from '@/components/pages/Cdf/Cdf'

const Page = () => {
    const { navLink } = useParams()
    console.log('params', navLink)


    const renderComponent = () => {
        switch (navLink) {
            case 'faq': return <Faq />
            case 'cdf-downloads': return <Cdf />
            case 'contact': return <Contact />
            default: return <ComingSoon />
        }
    }
    return (
        <>
            {renderComponent()}
        </>
    )
}

export default Page
