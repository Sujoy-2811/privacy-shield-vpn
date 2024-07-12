import Image from "next/image";

function Info() {
  const listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ];
  return (
    <div className="w-full flex justify-around">
      {listUser.map((item) => (
        <div className="flex items-center space-x-4" key={item.name}>
          <div className="bg-red-700 rounded-full p-2">
            <Image
              src={item.icon}
              width={24}
              height={24}
              alt={item.name}
              style={{ height: "24px", width: "24px" }}
            />
          </div>
          <div className="flex flex-col text-lg">
            <span className="font-bold">{item.number}+</span>
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
