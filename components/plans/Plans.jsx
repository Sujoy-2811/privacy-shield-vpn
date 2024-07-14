import Plan from "./Plan.jsx";

function Plans() {
  const list = [
    {
      img: "/assets/Free.png",
      description: "Free Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "free",
    },
    {
      img: "/assets/Standard.png",
      description: "Standard Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: 9,
    },
    {
      img: "/assets/Premium.png",
      description: "Premium Plan",
      list: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: 12,
    },
  ];
  return (
    <section className=" w-full flex flex-col justify-center  space-y-12 ">
      <div className="flex flex-col item-center justify-center space-y-4">
        <div className="flex flex-col space-y-3">
          <h2 className="text-center text-2xl lg:text-4xl font-bold">
            Choose Your Plan
          </h2>
          <p className="w-[36ch] text-center m-auto">
            Let&apos;s choose the package that is best for you and explore it
            happily and cheerfully.
          </p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 ">
        {list.map((item) => (
          <Plan
            key={item.description}
            description={item.description}
            img={item.img}
            price={item.price}
            list={item.list}
          />
        ))}
      </div>
    </section>
  );
}

export default Plans;
