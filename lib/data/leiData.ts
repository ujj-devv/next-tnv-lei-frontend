import LeiDownloadImage from "@/assets/svg/LeiDownloadImage";
import ServicesImage from "@/assets/svg/ServicesImage";

export const services = [
    {
      key: "1",
      name: "Create New LEI(s) with LEI International",
      description:
        "Count on LEI International Pvt Ltd for secure, fast, and digital new LEI services at great rates.",
      action: "Create",
      image: ServicesImage,
    },
    {
      key: "2",
      name: "Renew Your LEI(s) with LEI International",
      description:
        "Transfer your LEI(s) to LEI International Pvt Ltd easily from another LOU without any hassle.",
      action: "Renew",
      image: LeiDownloadImage,
    },
    {
      key: "3",
      name: "Transfer LEI(s) to LEI International Pvt Ltd",
      description:
        "Keep your LEI(s) updated with LEI International Pvt Ltd and enjoy smooth renewals at fair prices.",
      action: "Transfer",
      image: ServicesImage,
    },
  ];
  
  export const draftServices = [
    {
      key: "1",
      name: "Challenge LEI Data with LEI International",
      description:
        "LEI International Pvt Ltd provides simple and fast digital LEI Challenge services for your convenience.",
      action: "Challenge",
      image: ServicesImage,
    },
    {
      key: "2",
      name: "LEI International Pvt Ltd provides simple and fast digital LEI Challenge services for your convenience.",
      description:
        "Download your LEI documents instantly with LEI International Pvt Ltd, ensuring quick and easy access.",
      action: "Download",
      image: LeiDownloadImage,
    },
    {
      key: "3",
      name: "Modify or Change Your LEI(s)",
      description:
        "Easily update your LEI details with LEI International Pvt Ltd's fast digital services.",
      action: "Modify",
      image: ServicesImage,
    },
  ];

export const leiApplicationGuide = [
    {name:"Register Your Account", id:"1", description:"Create your user account and log in after receiving confirmation."},
    {name:"Apply for Your LEI", id:"2", description:"Click 'Apply' and complete the LEI application form provided."},
    {name:"Receive Your LEI Code", id:"3", description:"Our experts will review your info and assign your LEI quickly."}
]

export const leiBenefits = [
    {name:"Global Identity", description:"Obtain a unique identifier for seamless global recognition and credibility."},
    {name:"Transparency & Trust", description:"Clearly display your business structure, building trust with global partners."},
    {name:"Regulatory Compliance", description:"Meet international legal and financial standards with ease through an LEI."},
    {name:"Simplified Transactions", description:"Streamline cross-border operations and financial dealings with verified global identity."}
]


export const aboutUs = [
    {name:"Global LEI Services", description:"Providing trusted LEI (Legal Entity Identifier) services to companies across 20+ countries."},
    {name:"Accredited Issuer", description:"Certified to issue and manage LEIs, ensuring regulatory compliance and transparency."},
    {name:"Seamless Application Process", description:"Simple, fast, and efficient process for obtaining and renewing LEIs."},
    {name:"Customer-Centric Approach", description:"Dedicated support to guide clients through each step of the LEI process."}
]


export const certifications = [
    { name: "GDPR", status: "complaint", key: "1" },
    // {name:"AICPA", status:"complaint", key:"2"},
    // {name:"HIPAA", status:"complaint", key:"3"},
    // {name:"CCPA", status:"complaint", key:"4"},
    { name: "ISO 27001", status: "pending", key: "5" },
  ];
  