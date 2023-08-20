import Image from "next/image";
import HeadingSection from "./components/HeadingSection";

export default function Home() {
  return (
    <main>
      <HeadingSection
        title="Stock Analysis"
        subtitle="analyze performance of stocks over any time period"
      />
    </main>
  );
}
