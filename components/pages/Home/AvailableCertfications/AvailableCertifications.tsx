import Layout from "@/components/global/Layout/Layout";
import { certifications } from "@/lib/data/leiData";
import AvailableCertificationsCard from "../components/AvailableCerticationsCard/AvailableCertificationsCard";
import LeftBgVector from '@/assets/svg/left-bg-vector-image.svg';
import RightBgVector from '@/assets/svg/right-bg-vector-images.svg';


const AvailableCertifications = () => {
  return (
    <>
      <div className="relative flex px-8 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16 bg-[#373656] gap-8 md:gap-16 lg:gap-48">
        <Layout>
          {/* Background Images Container */}
          <div className="absolute inset-0 flex flex-row ">
            {/* Left Image */}
            <div  className="absolute top-0 left-0 w-1/2 h-full bg-no-repeat bg-contain bg-left"
                 style={{ backgroundImage: `url(${LeftBgVector.src})` }}></div>

            {/* Right Image */}
            <div className="absolute top-0 right-0 w-1/2 h-full  bg-no-repeat bg-contain bg-right" style={{ backgroundImage: `url(${RightBgVector.src})` }}></div>
          </div>

          {/* <h1>dsufgysdfyugsuygf</h1> */}
          {/* Certifications Cards */}
          <div className="relative z-10 flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            {certifications.map(({ key, name, status }) => (
              <AvailableCertificationsCard
                key={key}
                name={name}
                status={status}
              />
            ))}
          </div>
        </Layout>
      </div>

    </>
  );
};

export default AvailableCertifications;
