"use client"

import LargeHeader from "@/components/global/LargeHeader/LargeHeader";
import Layout from "@/components/global/Layout/Layout";
import { useState } from "react";
import ServicesCard from "../components/ServicesCard/ServicesCard";
import ServicesImage from "@/assets/svg/ServicesImage";
import LeiDownloadImage from "@/assets/svg/LeiDownloadImage"
import { draftServices, services } from "@/lib/data/leiData";

const ServiceOverview = () => {
  const [hoveredServiceKey, setHoveredServiceKey] = useState<string>("");
  const [hoveredDraftServiceKey, setHoveredDraftServiceKey] =
    useState<string>("");

  return (
    <div className="px-8 md:px-32 pt-16">
      <Layout>
        <div className="text-center mb-16">
          <LargeHeader text="What we offer" className="text-[#32736A]" />
        </div>

        {/* Section for 'services' with hover effect */}
        <div className="flex gap-32 mb-16">
          <div>
            {services.map(({ key, name, description, action }) => (
              <div key={key} onMouseEnter={() => setHoveredServiceKey(key)}>
                <ServicesCard
                  name={name}
                  description={description}
                  action={action}
                />
              </div>
            ))}
          </div>

          <div className="p-0 justify-center hidden md:block">
            {/* Display the image of the currently hovered 'service', or a default image if none */}
            {hoveredServiceKey !== "" ? (
              services
                .find((service) => service.key === hoveredServiceKey)
                ?.image()
            ) : (
              <ServicesImage />
            )}
          </div>
        </div>

        {/* Section for 'draftServices' with hover effect */}
        <div className="flex gap-32 mb-16">
          <div className="p-0 justify-center hidden md:block">
            {/* Display the image of the currently hovered 'draftService', or a default image if none */}
            {hoveredDraftServiceKey !== "" ? (
              draftServices
                .find((draft) => draft.key === hoveredDraftServiceKey)
                ?.image()
            ) : (
              <LeiDownloadImage />
            )}
          </div>

          <div>
            {draftServices.map(({ key, name, description, action }) => (
              <div
                key={key}
                onMouseEnter={() => setHoveredDraftServiceKey(key)}
              >
                <ServicesCard
                  name={name}
                  description={description}
                  action={action}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServiceOverview;
