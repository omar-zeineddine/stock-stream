import React from "react";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <section className={`dark:bg-gray-900 dark:border-gray-700 ${className}`}>
      <div className="max-w-screen-xl px-4 py-3 mx-auto space-y-2 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center mx-5">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-gray-400 underline"
            >
              Analysis
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-gray-400 underline"
            >
              News
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-gray-400 underline"
            >
              About
            </a>
          </div>
        </nav>
        <p className="mt-4 text-base leading-6 text-center text-gray-400">
          © {new Date().getFullYear()} Stock Stream, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
