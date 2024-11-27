"use client"
import { footerData, helpfulLinks, linksServices, socialLinks } from "@/lib/data/leiData";
import Layout from "../Layout/Layout";
import "./footer.scss"
import FooterLinkGroup from "../FooterLinkGroup/FooterLinkGroup";
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Footer = () => {

    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchValue) {
            router.push(`/search/${encodeURIComponent(searchValue)}`);
        }
    };
    return (
        <>
            <div className="footer-top__wrapper">
                <Layout>
                    <div className="justify-center flex md:justify-between">
                        <div className="allLinks__wrapper">
                            <FooterLinkGroup linksArray={linksServices} title={"Our Services"} />
                            <FooterLinkGroup linksArray={helpfulLinks} title={"Helpful links"} />
                        </div>
                        <div className="hidden md:block self-end mr-16 mb-16 ">
                            <SearchBar
                                placeholder="Search LEIs by entity name / LEI number"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onClick={handleSearch}
                            />
                        </div>
                    </div>
                </Layout >
            </div >
            <div className="footer-bottom__wrapper">
                <Layout>
                    <div className="allLinks__wrapper">
                        <div className="footerData__wrapper">
                            {
                                footerData.map(({ id, content }) => (
                                    <div key={id} className="footerData">{content}</div>
                                ))
                            }
                        </div>
                        <div className="socialLinks__wrapper">
                            {socialLinks.map(({ id, icon: Icon }) => (
                                <div
                                    key={id}
                                    className="socialIcons"
                                >
                                    <Icon />
                                </div>
                            ))}
                        </div>
                    </div>
                </Layout >
            </div>
        </>
    );
};

export default Footer;

