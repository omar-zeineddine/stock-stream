import React from "react";

type HeadingProps = {
  title?: string;
  subtitle?: string;
};

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <section>
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-xl md:text-3xl font-bold mb-2 text-gray-600">
          {title}
        </h1>
        <h3 className="text-lg mb-2 text-gray-600 ">{subtitle}</h3>
        <div className="text-center mb-10">
          <span className="inline-block w-1 h-1 rounded-full bg-gray-800 mr-1"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-gray-800 mr-1"></span>
          <span className="inline-block w-40 h-1 rounded-full bg-gray-800"></span>
          <span className="inline-block w-3 h-1 rounded-full bg-gray-800 ml-1"></span>
          <span className="inline-block w-1 h-1 rounded-full bg-gray-800 ml-1"></span>
        </div>
      </div>
    </section>
  );
};

export default Heading;
