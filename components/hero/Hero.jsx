import Image from "next/image";

function Hero({ children, img, alt, isImgleft }) {
  const imgOrder = isImgleft ? "lg:order-[1]" : "lg:order-[2]";
  const textOrder = !isImgleft ? "lg:order-[]" : "lg:order-[2]";
  return (
    <div className="flex flex-col  justify-between lg:flex-row w-full gap-4">
      <div className={`grow lg:w-1/2 order-[2] `}>{children}</div>
      <div className={`grow lg:w-1/2 ${imgOrder}`}>
        <Image
          src={img}
          alt={alt}
          width={600}
          height={383}
          className=" w-4/5 h-auto lg:w-full min-w-[300px] fill m-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
