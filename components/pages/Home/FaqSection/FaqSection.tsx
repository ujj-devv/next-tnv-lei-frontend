"use client"
import Layout from "@/components/global/Layout/Layout";
import Accordion from "@/components/ui/Accordian/Accordian";
import { ShadButtonType } from "@/components/ui/Button/button.enums";
import ShadButton from "@/components/ui/Button/ShadButton";
import { useGetFaqsQuery } from "@/store/api/faq/faq";
import { useRouter } from "next/navigation";

;

const FAQSection = () => {
    const router = useRouter();
    const { data: faqs } = useGetFaqsQuery()

    console.log('faqs', faqs)

    const handleViewMoreClick = () => {
        router.push("/faq");
    };

    return (
        <Layout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-16">
                {/* Left Column: FAQ Title */}
                <div className="">
                    {" "}
                    <h2 className="font-bold text-[64px] text-center md:text-left text-[#BED2E3]">
                        Frequently asked questions
                    </h2>
                </div>

                {/* Right Column: Accordion & Button */}
                <div className="flex flex-col gap-12">
                    <Accordion accordionData={
                        faqs?.data?.map((item) => ({
                            id: item.id,
                            question: item.question,
                            answer: item.answer,
                        })) || []
                    } />
                    <ShadButton
                        buttonText={"VIEW MORE"}
                        type={ShadButtonType.PRIMARY}
                        onClick={handleViewMoreClick}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default FAQSection;
