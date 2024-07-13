import Review from "./Review.jsx";

function Reviews() {
  const list = [
    {
      img: "/assets/people-1.png",
      name: "Viezh Robert",
      place: "Warsaw. Poland",
      star: "4.5",
      para: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems.    LaslesVPN always the best",
    },
    {
      img: "/assets/people-2.png",
      name: "Yessica Christy",
      place: "Shanxi. China",
      star: "4.5",
      para: "l like it because I like to travel far and still can connect with high speed.",
    },
    {
      img: "/assets/people-3.png",
      name: "Kim Young Jou",
      place: "Seoul. South Korea",
      star: "4.5",
      para: "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center  space-y-12">
      <div className="flex flex-col items-center space-y-4 text-center ">
        <h2 className="text-4xl w-[30ch] ">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="w-[48ch]">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="flex justify-between">
        {" "}
        {list.map((item) => (
          <Review
            key={item.name}
            // img={item.img}
            // name={item.name}
            // place={item.place}
            // star={item.star}
            // para={item.para}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
