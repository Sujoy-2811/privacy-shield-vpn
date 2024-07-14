import Image from "next/image";

function Banner() {
  const list = [
    { img: "/assets/Icon/amazon.png", name: "Amazon" },
    { img: "/assets/Icon/netflix.png", name: "Netflix" },
    { img: "/assets/Icon/reddit.png", name: "Reddit" },
    { img: "/assets/Icon/discord.png", name: "Discord" },
    { img: "/assets/Icon/spotify.png", name: "Spotify" },
  ];
  return (
    <section className="w-full">
      <div className="flex justify-around flex-wrap items-center m-auto">
        {list.map((item) => (
          <Image
            src={item.img}
            key={item.name}
            width={165}
            height={55}
            alt={item.name}
            style={{ width: "auto", height: "auto" }}
          />
        ))}
      </div>
    </section>
  );
}

export default Banner;
