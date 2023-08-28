import React from "react";
import HeadingSection from "../components/HeadingSection";

const AboutPage: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <HeadingSection
        title="About Stock News"
        subtitle="Latest stock news headlines from around the web."
      />
      <section className="p-6 bg-white rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-semibold mb-3">About Stock Stream</h2>
        <p className="text-lg mb-4">
          Welcome to our Stock Ticker Tracking App! We are dedicated to
          providing you with real-time updates on stock prices, trends, and the
          latest news to empower your investment decisions.
        </p>
        <p className="text-lg mb-4">
          Our app sources data from reliable financial sources and presents it
          in an easy-to-understand format. Stay informed about your favorite
          stocks and make strategic choices for your portfolio.
        </p>
        <p className="text-lg mb-4">
          Whether you are a seasoned investor or just starting, our app is
          designed to meet your needs. Monitor stock performances, set
          personalized alerts, and explore comprehensive market insights.
        </p>
        <p className="text-lg">
          Thank you for choosing Stock Stream for your stock tracking needs.
          We&apos;re excited to be part of your financial journey.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
