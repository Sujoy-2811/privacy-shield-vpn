import Image from "next/image";

import HeroText from "@/components/hero/HeroText.jsx";

import Hero from "@/components/hero/Hero.jsx";
import Info from "@/components/info/Info.jsx";
import Plans from "@/components/plans/Plans.jsx";
import WordWide from "@/components/worldwide/WordWide.jsx";
import Banner from "@/components/banner/Banner.jsx";
import Reviews from "@/components/reviews/Reviews.jsx";
import Subscribe from "@/components/Subscribe.jsx";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className=" flex flex-col lg:space-y-24 space-y-16">
      {/* section 1 */}
      <section>
        <Hero
          img="/assets/Illustration1.png"
          alt="VPN Illustrasi"
          isImgleft={false}
        >
          <HeroText
            title="Want anything to be easy with Privacy Shield VPN."
            text="Provide a network for all your needs with ease and fun using Privacy Shield VPN
          discover interesting features from us."
            button="Get Started"
          />
        </Hero>
      </section>
      {/* basic infi banner */}
      <Info />
      {/* section 2 */}
      <section>
        <Hero
          img="/assets/Illustration2.png"
          alt="VPN Illustrasi"
          isImgleft={true}
        >
          <HeroText
            title="We Provide Many Features You Can Use"
            text="You can explore the features that we provide with fun and have their own functions each feature."
            bulletpt={[
              "Powerfull online protection.",
              "Internet without borders.",
              "Supercharged VPN",
              "No specific time limits.",
            ]}
            isLeft={false}
          />
        </Hero>
      </section>

      {/* section 3 */}
      <Plans />
      {/* seection world */}
      <WordWide />
      {/* seection banner */}
      <Banner />
      {/* seection reviews */}
      <Reviews />
      {/* seection  subscribe  */}
      <Subscribe />
      {/* Footer */}
      <Footer />
    </main>
  );
}
