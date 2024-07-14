import Image from "next/image";
import ButtonOutline from "../button/ButtonOutline";

function Plan({
  img = "/assets/Standard.png",
  description = "Standard Plan",
  list,
  price = "free",
}) {
  return (
    <div className=" border border-solid lg:p-16 p-12 pb-8 rounded-2xl flex flex-col justify-center items-center space-y-8 ">
      <Image
        src={img}
        width={200}
        height={200}
        alt={description}
        style={{ height: "auto", width: "140px" }}
      />
      <p>{description}</p>
      {list && (
        <ul className="flex flex-col items-center grow">
          {list.map((item) => (
            <li className="m-2 flex gap-1" key={item}>
              <Image
                src="/assets/Icon/jam_check.svg"
                width={20}
                height={20}
                alt="check"
                style={{ width: "20px", height: "20px" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <p>{price === "free" ? price : "$" + `${price} / month`}</p>
      <ButtonOutline>Select</ButtonOutline>
    </div>
  );
}

export default Plan;
