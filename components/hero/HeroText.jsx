import ButtonPrimary from "../button/ButtonPrimary.jsx";

const HeroText = ({ title, text, bulletpt, isLeft = true, button }) => {
  return (
    <div
      className={`flex flex-col  items-start space-y-4 ${
        !isLeft && "items-end"
      }`}
    >
      <div className="flex flex-col  justify-center text-base items-start space-y-4 ">
        {" "}
        <h1 className="font-bold text-4xl w-[17ch] ">{title}</h1>
        <p className="w-[40ch]">{text}</p>
        {bulletpt && (
          <ul>
            {bulletpt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {button && <ButtonPrimary>{button}</ButtonPrimary>}
      </div>
    </div>
  );
};

export default HeroText;
