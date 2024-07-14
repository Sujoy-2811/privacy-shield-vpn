import ButtonPrimary from "../button/ButtonPrimary.jsx";
import Image from "next/image.js";

const HeroText = ({ title, text, bulletpt, isLeft = true, button }) => {
  return (
    <div
      className={`flex flex-col  items-start lg:space-y-4 p-2 ${
        !isLeft && "lg:items-end"
      }`}
    >
      <div className="flex flex-col  justify-center text-base lg:items-start  space-y-4 ">
        {" "}
        <h1 className="font-bold text-2xl lg:text-4xl w-[17ch] ">{title}</h1>
        <p className="lg:w-[40ch]">{text}</p>
        {bulletpt && (
          <ul>
            {bulletpt.map((item) => (
              <li key={item} className="flex gap-1 ">
                <Image
                  src="/assets/Icon/checklist.svg"
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
        {button && <ButtonPrimary>{button}</ButtonPrimary>}
      </div>
    </div>
  );
};

export default HeroText;
