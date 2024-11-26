import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  customClass?: string; 
}

const Layout = ({ children, customClass }: LayoutProps) => {
  return (
    <div className={`max-w-full md:max-w-[1790px] mx-auto my-0 ${customClass}`}>
      {children}
    </div>
  );
};

export default Layout;
