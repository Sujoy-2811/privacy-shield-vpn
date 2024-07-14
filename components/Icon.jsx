import Image from "next/image";

function Icon({ src, color, name }) {
  return (
    <div className={`${color ? color : "bg-red-700"} rounded-full p-2 `}>
      <Image
        src={src}
        width={24}
        height={24}
        alt={name}
        style={{ height: "24px", width: "24px" }}
      />
    </div>
  );
}

export default Icon;
