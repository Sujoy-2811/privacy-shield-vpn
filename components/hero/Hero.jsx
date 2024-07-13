import Image from "next/image";

function Hero({ children, img, alt, isImgleft }) {
  const imgOrder = isImgleft ? "order-[1]" : "order-[2]";
  const textOrder = !isImgleft ? "order-[]" : "order-[2]";
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row w-full">
      <div className={`grow w-1/2 order-[2] `}>{children}</div>
      <div className={`grow w-1/2 ${imgOrder}`}>
        <Image src={img} alt={alt} width={600} height={383} />
      </div>
    </div>
  );
}

export default Hero;
