import Image from "next/image";

import HeroText from "@/components/Hero/HeroText";

import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="">
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
    </main>
  );
}
