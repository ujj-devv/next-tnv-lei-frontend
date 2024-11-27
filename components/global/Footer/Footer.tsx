import { footerData, helpfulLinks, linksServices, socialLinks } from "@/lib/data/leiData";
import Layout from "../Layout/Layout";
import "./footer.scss"
import FooterLinkGroup from "../FooterLinkGroup/FooterLinkGroup";


const Footer = () => {
    return (
        <>
            <div className="footer-top__wrapper">
                <Layout>
                    <div className="allLinks__wrapper">
                        <FooterLinkGroup linksArray={linksServices} title={"Our Services"} />
                        <FooterLinkGroup linksArray={helpfulLinks} title={"Helpful links"} />
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

