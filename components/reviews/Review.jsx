import Image from "next/image";

function Review({ img, name, place, star, para }) {
  return (
    <div className="flex flex-col space-y-8 border border-solid p-4">
      <div className="flex justify-between ">
        <div className="flex space-x-2">
          <Image
            src={img}
            alt="user"
            width={45}
            height={45}
            style={{ width: "auto", height: "auto" }}
          />
          <div className="flex flex-col space-y-1">
            <p>{name}</p>
            <p>{place}</p>
          </div>
        </div>
        <p>{star} ⭐</p>
      </div>
      <p className="w-[34ch]">{para}</p>
    </div>
  );
}

export default Review;
