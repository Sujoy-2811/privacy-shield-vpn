import Image from "next/image";
import React from "react";

function Banner() {
  const list = [
    { img: "/assets/Icon/amazon.png", name: "Amazon" },
    { img: "/assets/Icon/netflix.png", name: "Netflix" },
    { img: "/assets/Icon/reddit.png", name: "Reddit" },
    { img: "/assets/Icon/discord.png", name: "Discord" },
    { img: "/assets/Icon/spotify.png", name: "Spotify" },
  ];
  return (
    <section>
      <div className="flex justify-around ">
        {list.map((item) => (
          <Image src={item.img} key={item.name} width={165} height={55} />
        ))}
      </div>
    </section>
  );
}

export default Banner;
