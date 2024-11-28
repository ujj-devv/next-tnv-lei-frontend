import LargeHeader from "@/components/global/LargeHeader/LargeHeader";
import Layout from "@/components/global/Layout/Layout";
import Subheader from "@/components/global/SubHeader/SubHeader";
import MapImage from "@/assets/svg/MapImage";
import { useState } from "react";
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        console.log('searchValue is', searchValue)
        if (searchValue) {
            router.push(`/search/${encodeURIComponent(searchValue)}`);
        }
    };

    return (
        <div className="bg-gradient-to-r from-custom-green1 via-custom-green2 to-custom-green">
            <Layout>
                <div className="flex flex-col md:flex-row justify-evenly py-32">
                    <div className="flex flex-col gap-8 justify-center mx-16">

                        <LargeHeader
                            text="Leading the Way in LEI Services for Global Corporates"
                            className="text-white"
                        />
                        <Subheader text="Ensuring compliance, transparency, and global access with fast and secure LEI issuance." />
                        <SearchBar
                            placeholder="Search LEIs by entity name / LEI number"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onClick={handleSearch}
                        />
                    </div>
                    <div className="hidden md:block">
                        <MapImage />
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default HeroSection;
