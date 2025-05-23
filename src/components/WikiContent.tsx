
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface WikiContentProps {
  children: React.ReactNode;
}

const WikiContent = ({ children }: WikiContentProps) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div className="flex-grow p-4 bg-gray-50 max-w-5xl mx-auto w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default WikiContent;
