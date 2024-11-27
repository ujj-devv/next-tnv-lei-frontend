import LargeHeader from "@/components/global/LargeHeader/LargeHeader";
import Layout from "@/components/global/Layout/Layout";
import { leiApplicationGuide } from "@/lib/data/leiData";
import ApplyingCard from "../components/ApplyingCard/ApplyingCard";

const LEIApplicationGuide = () => {
  return (
    <div className="bg-[#32736A] px-8 md:px-32 py-16">
      <Layout>
        <div className="text-center">
          <h4 className="text-white text-xl font-medium mb-4">How it works</h4>
          <LargeHeader
            text="Applying for LEI is easy and fast"
            className="text-white"
          />
          <div className="flex flex-col gap-12 md:flex-row mt-16 md:justify-between">
            {leiApplicationGuide.map(({ id, name, description }) => (
              <ApplyingCard
                key={id}
                id={id}
                name={name}
                description={description}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default LEIApplicationGuide;
