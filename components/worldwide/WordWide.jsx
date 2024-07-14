import Image from "next/image";

function WordWide() {
  return (
    <section className=" w-full flex flex-col justify-center  space-y-12 text-center">
      <div className="flex flex-col space-y-3 items-center">
        <h2 className="text-2xl  lg:text-4xl lg:w-[18ch] text-center bold">
          Huge Global Network of Fast VPN
        </h2>
        <p>
          See Privacy Shield VPN everywhere to make it easier for you when you
          move locations.
        </p>
      </div>
      <div>
        <Image
          src={"/assets/HugeGlobal.svg"}
          alt="world"
          width={1500}
          height={1500}
        />
      </div>
    </section>
  );
}

export default WordWide;
