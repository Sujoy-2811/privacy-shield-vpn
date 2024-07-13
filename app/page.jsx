import Image from "next/image";

import HeroText from "@/components/hero/HeroText";

import Hero from "@/components/hero/Hero";
import Info from "@/components/Info";
import Plans from "@/components/plans/Plans";
import WordWide from "@/components/worldwide/WordWide";
import Banner from "@/components/banner/Banner";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <main className=" flex flex-col space-y-24">
      {/* section 1 */}
      <section>
        <Hero
          img="/assets/Illustration1.png"
          alt="VPN Illustrasi"
          isImgleft={false}
        >
          <HeroText
            title="Want anything to be easy with LaslesVPN."
            text="Provide a network for all your needs with ease and fun using LaslesVPN
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
    </main>
  );
}
