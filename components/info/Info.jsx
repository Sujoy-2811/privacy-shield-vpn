import Image from "next/image";
import Icon from "../Icon";

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
          <Icon src={item.icon} name={item.name} />
          <div className="flex flex-col lg:text-lg text-sm">
            <span className="font-bold">{item.number}+</span>
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
